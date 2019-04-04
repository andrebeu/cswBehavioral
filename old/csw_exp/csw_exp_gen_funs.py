from collections import deque
from numpy import random
import re
import sys


# ## eqr - { Edge : [question: [right, [wrong1,wrong2] ] ] }

def make_eqr(qlib_f):
    
    clean_key = lambda string: re.sub(" ","",string)

    E = dict()
    for line in qlib_f.split('\n'):
        if line[0] == "#": continue
        if line[0] == "@":
            from_state,to_states = line[1:].split(' -2- ')
            edges = []
            # each edge gets a key in dict
            for to_state in to_states.split(','):
                e = (clean_key(from_state),clean_key(to_state))
                edges.append(e)
                E[e] = list()

        elif line[0] == "Q":
            question = line
            for e in edges:
                # within each edge is a dict 
                # from question to ["right",[wrong]]
                qr_list = [question,["",[]]]
                E[e].append(qr_list)

        elif line[0] == "R":
            correct2state, resp = line[2:].split(':')
            for e in edges:
                if e[1] == correct2state:
                    E[e][-1][1][0] = resp
                else:
                    E[e][-1][1][1].append(resp)

        elif line == "N/A":
            continue
    
    edge_q_r_dict = E
    return edge_q_r_dict

## -- used for binding -- ## 

# ## dict with instantiated entities (role, filler)

def make_role_filler_dict(rf_str):

    D = dict()
    role_filler = re.sub('[{}\"\'\s]','',rf_str)
    role_filler = role_filler.split(',')

    for rf in role_filler:
        rf = rf.split(':')
        r,f = rf[0],rf[1] 
        D[r] = f

    role_filler_dict = D
    return role_filler_dict

          
# ## dict with all entities and their properties (entity, property_dict)

def make_ep_dict(ep_str):
    D = dict()
    
    clean_key = lambda string: re.sub("[ \":{}]","",string)
    clean_value = lambda string: re.sub("[\":{]","",string)
    
    entity_list = re.findall("\"[\w]{1,10}\": {", ep_str)
    for e_str in entity_list:
        entity_name = clean_key(e_str)
        D[entity_name] = dict()
        
        # find string with properties of given entity
        _regex = "\"%s\": {.{5,600}?}"%entity_name
        prop_type_value_str = re.findall(_regex, ep_str)[0].split(": {")[1]
        
        prop_type = re.findall("""\"\w{2,20}?\":""", prop_type_value_str)
        prop_value = re.findall(": \".{0,200}?\"", prop_type_value_str)
        
        if len(prop_value) == len(prop_type):
            for t,v in zip(prop_type,prop_value):
                prop_type = clean_key(t)
                prop_value = clean_value(v)
                D[entity_name][prop_type] = prop_value[1:]
        else:
            print('-- NB problem with assembling properties of:', entity_name)
        
    entity_property_dict = D
    return entity_property_dict

## -- get info about state transitions and sentence -- ##

# ## edge_list - [current_state, next_state]
# ## altedge_dict - {current_state: [alt_next1, alt_next2]
# ## state_sentence_dict - 


def parse_states(story): 

    edge_list = []
    altedge_dict = dict()
    state_sentence_dict = dict()

    current_state, next_state = "BEGIN", ''
    for block in story:
        lines = deque(block.split('\n'))
         
        state_sentence_dict[current_state] = lines.popleft()
        while len(lines):
            if current_state == 'END': break
            line1 = lines.popleft()
            line2 = lines.popleft().split('\t')
            next_state = line2[1]
            pr = float(line2[0])
            if line1 == 'Truth':
                edge_list.append((current_state,next_state))
            elif pr != 0:
                if current_state in altedge_dict:
                    altedge_dict[current_state].append(next_state)
                else:
                    altedge_dict[current_state] = [next_state]
        current_state = next_state
    
    return state_sentence_dict, edge_list, altedge_dict


# # -- question/story script generators -- 



## load datastructures

def main(story,rf_str,ep_str):

	print('assembling ds')

	# assemble data sructures
	role_filler_dict = make_role_filler_dict(rf_str)
	entity_property_dict = make_ep_dict(ep_str)
	state_sentence_dict, edge_list, altedge_dict = parse_states(story)

	return role_filler_dict, entity_property_dict, \
					state_sentence_dict, edge_list, altedge_dict
