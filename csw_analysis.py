import sqlite3 as sql
import pandas as pd
import json
from datetime import datetime
import numpy as np
# flag that controls old versions of csw experiment that use 'QorS'
OLD = False 

## psiturk SQL database 

def get_sql_df(exp_dir):
  ## PATH TO .DB FILE
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
    
    # remove unneded rows 
    sql_df = sql_df[sql_df['mode'] != 'debug'] # debug rows
    sql_df = sql_df[pd.notnull(sql_df['datastring'])] # rows with no datastring 
    print(len(sql_df),'subjects')
  # sql_df = process_sql_df(sql_df)
  return sql_df



def process_sql_df(sql_df):
  ## calculate time taken in seconds to complete hit
  dtformat = '%Y-%m-%d %H:%M:%S.%f'
  # convert string to datetime
  conv_row_str2dt = lambda row: datetime.strptime(row,dtformat)
  sql_df['beginhit'] = sql_df['beginhit'].apply(conv_row_str2dt)
  sql_df['endhit'] = sql_df['endhit'].apply(conv_row_str2dt)
  # time taken in minutes
  sql_df['hitduration'] = sql_df['endhit'] - sql_df['beginhit'] 
  conv_row_dt2sec = lambda row: np.round(row.total_seconds()/60,2)
  sql_df['hitduration'] = sql_df['hitduration'].apply(conv_row_dt2sec)
  return sql_df


## subject dataframe 

def make_subj_df_dep(psiturk_dstr,old=OLD):
  """ takes a psiturkdstr (i.e. sql_df['datastring'].iloc[0]) 
      returns a dataframe with relevant data from a subject
  """
  # initialize
  subj_df = pd.DataFrame([t['trialdata'] for t in json.loads(psiturk_dstr)['data']]) 
  subj_df.columns = [col.lower() for col in subj_df.columns]
  subj_df = subj_df[7:] # get rid of instructions at begining
  # include type column
  subj_df.loc[~subj_df['state'].isnull(),'QorS'] = 'story'
  subj_df.loc[~subj_df['type'].isnull(),'QorS'] = 'story'
  subj_df.loc[~subj_df['qtype'].isnull(),'QorS'] = 'question'
  # response bool
  subj_df['response_right'] = subj_df['key_press'] == 39.0 
  subj_df['true_on_right'] = (subj_df['true_on_right'] == "True")
  subj_df['correct_response'] = (subj_df['true_on_right'] == subj_df['response_right'])

  # full columns
  # print(subj_df.columns)
  # select columns
  if old:
    subj_df = subj_df[['QorS','state','qtype','fromnode','true_tonode',
                         'false_tonode','response_right','true_on_right',
                         'correct_response','rfc']]
  else:
    subj_df = subj_df[['type','state','qtype','fromnode','true_tonode',
                         'false_tonode','response_right','true_on_right',
                         'correct_response','rfc','true_rfc','false_rfc']]
  return subj_df


## augment dataframe with more information


def assign_edges_old(subj_df,conditioned=False):
  """ assign edge traversed """
  prev_state = "END"
  for idx,row in subj_df.iterrows():
    if row['QorS'] == 'story':
      if conditioned:
        edge = "%s-%s_%s"% (prev_state,row['state'],row['rfc'])
      else:
        edge = "%s-%s"% (prev_state,row['state'])
      subj_df.set_value(idx,'edge',edge)
      prev_state = row['state']

 
def assign_expr_old(subj_df,conditioned=False):
  """ experienced probabilities 
  maintained bc broken bakwards compatibility """
  assign_edges_old(subj_df,conditioned=False)
  assert 'edge' in subj_df, 'please run assign_edges(subj_df) first' 
  # initialize dict with count of number of times each edge has been traversed
  edge_set = set(subj_df[~pd.isnull(subj_df['edge'])]['edge'])
  edgecount_D = {edge:0 for edge in edge_set}
  for idx,row in subj_df.iterrows():
    if row['QorS'] == 'story':
      # increase count edge 
      edgecount_D[row['edge']]+=1
      pass
    if row['QorS'] == 'question':
      # filler questions
      if row['qtype'] == 'fillerQ':
        subj_df.set_value(idx,'expr_true_edge',1)
        subj_df.set_value(idx,'expr_false_edge',0)
        continue
      # get edge counts
      true_edge = "%s-%s"%(row['fromnode'],row['true_tonode'])
      false_edge = "%s-%s"%(row['fromnode'],row['false_tonode'])
      # if edge never occured 
      try: true_edge_count = edgecount_D[true_edge]
      except: true_edge_count = 0
      try: false_edge_count = edgecount_D[false_edge]
      except: false_edge_count = 0 
      denom = true_edge_count + false_edge_count
      if denom == 0: 
        subj_df.set_value(idx,'expr_true_edge',.5)
        subj_df.set_value(idx,'expr_false_edge',.5)
      # calculate experienced probabilities
      else:
        true_edge_pr = true_edge_count / denom
        false_edge_pr = false_edge_count / denom
        # record data
        subj_df.set_value(idx,'expr_true_edge',true_edge_pr)
        subj_df.set_value(idx,'expr_false_edge',false_edge_pr)



def assign_edges(subj_df,conditioned=False):
  """ assign edge traversed """
  prev_state = "END"
  for idx,row in subj_df.iterrows():
    if row['type'] == 'story':
      if conditioned:
        edge = "%s-%s_%s"% (prev_state,row['state'],row['rfc'])
      else:
        edge = "%s-%s"% (prev_state,row['state'])
      subj_df.set_value(idx,'edge',edge)
      prev_state = row['state']


def assign_expr(subj_df,conditioned=False):
  """ experienced probabilities """
  assign_edges(subj_df,conditioned=conditioned)
  assert 'edge' in subj_df, 'please run assign_edges(subj_df) first' 
  # initialize dict with count of number of times each edge has been traversed
  edge_set = set(subj_df[~pd.isnull(subj_df['edge'])]['edge'])
  edgecount_D = {edge:0 for edge in edge_set}
  for idx,row in subj_df.iterrows():
    if row['type'] == 'story':
      # increase count edge 
      edgecount_D[row['edge']]+=1
      pass
    if row['type'] == 'question':
      # filler questions
      if row['qtype'] == 'fillerQ':
        subj_df.set_value(idx,'expr_true_edge',1)
        subj_df.set_value(idx,'expr_false_edge',0)
        continue
      # get edge counts
      if conditioned:
        true_edge = "%s-%s_%s"%(row['fromnode'],row['true_tonode'],row['true_rfc'])
        false_edge = "%s-%s_%s"%(row['fromnode'],row['false_tonode'],row['false_rfc'])
      else:
        true_edge = "%s-%s"%(row['fromnode'],row['true_tonode'])
        false_edge = "%s-%s"%(row['fromnode'],row['false_tonode'])
      # if edge never occured 
      try: true_edge_count = edgecount_D[true_edge]
      except: true_edge_count = 0
      try: false_edge_count = edgecount_D[false_edge]
      except: false_edge_count = 0 
      denom = true_edge_count + false_edge_count
      if denom == 0: 
        subj_df.set_value(idx,'expr_true_edge',.5)
        subj_df.set_value(idx,'expr_false_edge',.5)
      # calculate experienced probabilities
      else:
        true_edge_pr = true_edge_count / denom
        false_edge_pr = false_edge_count / denom
        # record data
        subj_df.set_value(idx,'expr_true_edge',true_edge_pr)
        subj_df.set_value(idx,'expr_false_edge',false_edge_pr)




#  maybe unneeded
def calc_exp_pr(subj_df):
  edge_set = set(subj_df['true_edge']).union(set(subj_df['false_edge']))
  edge_count_D = {k:0 for k in edge_set}
  experienced_pr_true_edge = []
  experienced_pr_false_edge = []
  for idx,row in subj_df.iterrows():
    # update edge count
    true_edge = row['true_edge']
    false_edge = row['false_edge']
    true_edge_count = edge_count_D[true_edge]
    false_edge_count = edge_count_D[false_edge]
    edge_count_D[true_edge] += 1
    # experienced probabilities
    denominator = (true_edge_count + false_edge_count)
    if denominator == 0: 
      experienced_pr_true_edge.append(0)
      experienced_pr_false_edge.append(0)
    else: 
      experienced_pr_true_edge.append(true_edge_count / denominator)
      experienced_pr_false_edge.append(false_edge_count / denominator)
  return experienced_pr_true_edge,experienced_pr_false_edge

























