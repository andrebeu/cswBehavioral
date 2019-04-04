from collections import deque
from numpy import random
import re

print('incsw2')

clean1 = lambda string: re.sub('’',"\\'", string)
clean2 = lambda string: re.sub("[‘”“]",'\\"', string)
clean = lambda string: clean1(clean2(string))

def parse_QA(story_blocks):
	# edge_list
	edge_list = []
	state_sentence_dict = dict()
	current_wnext = dict()
	current_rnext = dict()

	current_state = 'BEGIN'
	for block in story_blocks:
		block = deque(block.split('\n'))
		current_sentence = block.popleft()
		state_sentence_dict[current_state] = current_sentence
		while len(block):
			line1 = ns_type = block.popleft()
			line2 = block.popleft()
			ns_pr, ns_key, ns_sentence = line2.split('\t')
			if ns_type == 'Truth':
				edge_list.append([current_state,ns_key])
				next_sentence = ns_sentence
				current_rnext[current_state] = ns_sentence
				current_state = ns_key
			else:
				D = {'type':ns_type.split('_')[0],'sentence':ns_sentence}
				if current_state in current_wnext:
					current_wnext[current_state].append(D)
				else:
					current_wnext[current_state] = []
					current_wnext[current_state].append(D)

	return edge_list,state_sentence_dict,current_wnext,current_rnext


def story_snippet(trial_id,state_count, sentence):
	code_snippet = """
			var t__%s = {
			type: 'instructions',
			pages: ['%s']
			} """ % (trial_id,clean(sentence))
	return code_snippet

def question_snippet(trial_id,current_state,current_wnext,current_rnext):

  question = "What happens next?"
  
  false_next = current_wnext[current_state] # list of dicts
  random.shuffle(false_next)
  # response sentences
  false_next_s = ('F',false_next[0]['sentence'])
  true_next_s = ('T',current_rnext[current_state])
  responses = [true_next_s,false_next_s]
  random.shuffle(responses)
  resp_l,resp_r = responses
  
  # include info on name
  qname = "q__%s__%s_%s__%s" % (trial_id,
  															resp_l[0], resp_r[0],
  															false_next[0]['type'])
  code_snippet = """
          var %s = {
          type: 'html-slider-response',
          stimulus: '<p> %s <p>',
          labels: ['%s', '%s']
          } """ % (qname, question,
                   clean(resp_l[1]), clean(resp_r[1]))

  return qname, code_snippet
