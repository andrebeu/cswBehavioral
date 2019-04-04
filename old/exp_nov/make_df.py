import os
from os.path import join as opj
import pandas as pd
import numpy as np
from collections import Counter

""" TODO
count edges based on story sentence not question
"""

sid = str(5)

root_path = "/Users/abeukers/wd/coffeworld_exp/csw_k"
timeline_fpath = opj(root_path,"stim&timeline","timeline-%s.txt"%sid)
data_fpath = opj(root_path,"timeline_data","DATACSW-%s.csv"%sid)
save_df_fpath = opj(root_path,'dataframes','df-%s.csv'%sid)


## initialize dataframe 

def make_timeline_df(timeline_fpath):
  with open(timeline_fpath) as f:
    timeline = f.read().split(',')[:-1]

  # read timeline
  state_dicts = [] # list of dicts
  f = lambda x: x.split('_')
  story_pass = -1
  for _st in map(f,timeline):
    state_dict = {}
    state_dict['state_id'] = _st[1]
    if _st[0] == 'q':
      state_dict['s_or_q'] = 'q'
      state_dict['edge'] = _st[2]
      state_dict['altedge'] = _st[3]
      state_dict['objective_pr'] = float(_st[4])
      state_dict['qtype'] = _st[5]
      # left or right correct response
      if _st[6] == '10':
        state_dict['slider_true_right'] = True
      elif _st[6] == '01':
        state_dict['slider_true_right'] = False
    if _st[0] == 's':
      state_dict['s_or_q'] = 's'
      state_dict['state'] = _st[2]
      if _st[2] == 'BEGIN': story_pass += 1
    state_dict['story_pass'] = story_pass
    state_dicts.append(state_dict)

  # assemble dataframe
  timeline_df = pd.DataFrame(
    state_dicts,columns=['story_pass','s_or_q', 'state', 'qtype',
      'edge','altedge','slider_true_right','objective_pr']
  )
  return timeline_df



# timeline data
timeline_df = make_timeline_df(timeline_fpath)
# slider data
slider_df = pd.DataFrame.from_csv(data_fpath,index_col=3)[['trial_type','response']]
# put together
df = slider_df.merge(timeline_df, left_index=True, right_index=True)


# ## compute experienced probabilities

ecount = Counter({e:0 for e in set(df.edge)})

for i in range(len(df)):
  
  e = df.iloc[i]['edge']
  ae = df.iloc[i]['altedge']
  df.set_value(i,'edge_count',ecount[e])
  df.set_value(i,'altedge_count',ecount[ae])

  # calculate normalized experienced probability   
  if ecount[e]+ecount[ae]==0:
    experienced_edge = 0
    experienced_altedge = 0
  else:
    experienced_edge = ecount[e] / (ecount[e]+ecount[ae])
    experienced_altedge = ecount[ae] / (ecount[e]+ecount[ae])
    
  df.set_value(i,'ex_pr_edge',experienced_edge*100)
  df.set_value(i,'ex_pr_altedge',experienced_altedge*100)
    
  # edge count at every given trial
  ecount[e] += 1


# ## correct slider position

for i in range(len(df)):
  if pd.isnull(df.iloc[i]['slider_true_right']):
    continue
  elif df.iloc[i]['slider_true_right']:
    resp_obj = df.iloc[i]['objective_pr']
    resp_ex_pr_edge = df.iloc[i]['ex_pr_edge']
    resp_ex_pr_altedge = df.iloc[i]['ex_pr_altedge']
  else: # left response is correct
    resp_obj = 100 - df.iloc[i]['objective_pr']
    resp_ex_pr_edge = 100 - df.iloc[i]['ex_pr_edge']
    resp_ex_pr_altedge = 100 - df.iloc[i]['ex_pr_altedge']
    
  df.set_value(i,'resp_objective',resp_obj)
  df.set_value(i,'resp_ex_pr_edge',resp_ex_pr_edge)
  df.set_value(i,'resp_ex_pr_altedge',resp_ex_pr_altedge)


# save dataframe

df.to_csv(save_df_fpath)

