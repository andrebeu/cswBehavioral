import os
import re
import pandas as pd
import numpy as np

import sqlite3 as sql


""" parse QA file to """


## read and extract sql

def get_sql_df(exp_dir):
	with sql.connect(exp_dir+'/participants.db') as conn:
		# connection objecs represent the database
		# cursor objects point to rows in the database
		c = conn.cursor()

		# list tables in database
		c.execute("SELECT name FROM sqlite_master WHERE type='table'")
		tables_in_db = c.fetchall()
		table_name = tables_in_db[-1][0] # take most recent table
		print('table name:', table_name)

		# table header
		c.execute("PRAGMA table_info(%s)"%table_name)
		col_names = [i[1] for i in c.fetchall()]

		# select everything within table
		db_datastring = c.execute("""SELECT * FROM %s"""%table_name).fetchall()
		sql_df = pd.DataFrame(db_datastring,columns=col_names)
		print(len(sql_df),'subjects')
	return sql_df


## helpers to make data frame

clean1 = lambda s: re.sub("""[\"]""","",s)

def get_trial_info(jspsych_dstr):
	""" parses jspsych data string 
		returns state_info string and trial type"""
	j = jspsych_dstr
	state_info = clean1(j.split(',')[-5].split(':')[1])
	if state_info.split('_')[0] == 's':
		trial_type = "sentence"
	elif state_info.split('_')[0] == 'q':
		trial_type = "question"
	else:
		trial_type = "nan"
	return trial_type,state_info

def get_subj_resp(jspsych_dstr):
	""" returns true if subject pressed right """
	j = jspsych_dstr
	key_press = clean1(j.split(',')[6]).split(':')[-1]
	if int(key_press) == 39: resp_right = True
	elif int(key_press) == 37: resp_right = False
	else: 
		print(key_press)
		assert False
	return resp_right

def parse_state_info(state_info):
	""" parses a state info string """
	L = state_info.split('_')
	if len(L) == 3: # sentence
		state_idx,state_name = L[1:]
		return state_idx,state_name
	elif len(L) == 7: # question
		state_idx,edge,altedge = L[1:4]
		qtype = state_info.split('_')[-2]
		true_right = state_info.split('_')[-1] == '10'
		return state_idx,edge,altedge,qtype,true_right
	else:
		return None
	
def get_edges(subj_df):
	""" takes dataframe 
			returns list of edges of same len as input df"""
	edge_L = []
	pst = 'NA'
	for i in range(len(subj_df)):
		if subj_df.iloc[i]['question']:
			edge = subj_df.iloc[i-1]['state'] + subj_df.iloc[i+1]['state']
		else:
			st = subj_df.iloc[i]['state'] 
			edge = pst+st
			pst = st
		edge_L.append(edge)
	return edge_L


## make dataframe 


def make_subj_df(sql_dstr,condition_num):
	""" makes dataframe for a single subject 
			given sql datastring"""
	subj_df = pd.DataFrame()
	story_pass = 1
	state_idx = int(-1)
	trial_dstr_L = [trial_str for trial_str in sql_dstr.split('}}')]
	for jspsych_dstr in trial_dstr_L:
		
		trial_type,state_info = get_trial_info(jspsych_dstr)
		
		if trial_type == "sentence":
			state_idx += 1
			_, state_name = parse_state_info(state_info)
			
			subj_df.set_value(state_idx,'question',False)
			subj_df.set_value(state_idx,'state',state_name)
			subj_df.set_value(state_idx,'story_pass',story_pass)
			if state_name == "END": story_pass += 1
			
		elif trial_type == "question":
			state_idx += 1
			_,edge,altedge,qtype,true_right = parse_state_info(state_info)
			resp_right = get_subj_resp(jspsych_dstr)
			
			subj_df.set_value(state_idx,'question',True)
			subj_df.set_value(state_idx,'state',"q_"+edge)
			subj_df.set_value(state_idx,'story_pass',story_pass)
			subj_df.set_value(state_idx,'qtype',qtype)
			subj_df.set_value(state_idx,'edge',edge)
			subj_df.set_value(state_idx,'altedge',altedge)
			correct_resp = (true_right == resp_right)
			subj_df.set_value(state_idx,'correct_resp',correct_resp)
	subj_df['edge'] = get_edges(subj_df)
	return subj_df


## analysis


def get_edge_count_D(subj_df,q_state_idx):
	""" takes subj_df, state_idx for question
	returns dict with the count of each state"""
	# initialize dict with edge counts at 0
	edge_count_D = {k:0 for k in set(subj_df[subj_df['question']==False]['edge'])} 
	for state_idx,dfrow in list(subj_df.iterrows())[:q_state_idx]:
		if dfrow['question']:
			edge = dfrow['edge']
			altedge = dfrow['altedge']
		else:
			edge = dfrow['edge']
			if edge in edge_count_D:
				edge_count_D[edge] += 1 
			else:
				edge_count_D[edge] = 1
	return edge_count_D

def calc_edge_exp_pr(subj_df,q_state_idx):
	"""
	takes in a subj_df and state index for a given question 
	returns the experienced probability for edge and altedge of that question
	"""
	edge_count_D = get_edge_count_D(subj_df,q_state_idx)
	row = subj_df.iloc[q_state_idx]
	if not row['question']: assert False, "not a question state"
	edge = row['edge']
	altedge = row['altedge']
	edge_count = edge_count_D[edge]
	altedge_count = edge_count_D[altedge]
	b = edge_count + altedge_count
	if b == 0:
		exp_edge_pr = exp_altedge_pr = 0
	else:
		exp_edge_pr = edge_count / b
		exp_altedge_pr = altedge_count / b
		assert exp_edge_pr + exp_altedge_pr > .99





