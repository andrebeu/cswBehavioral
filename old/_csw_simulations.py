import os
import pandas as pd
import numpy as np

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

