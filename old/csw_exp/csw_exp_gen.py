import sys
import csw_exp_gen_funs as csw
from numpy import random
import re

print('\n\n\n -- generated experiment:\n')

pr_q = PROBABILITY_QUESTION_ASK = 0.7

# path2qafile = "/Users/abeukers/Documents/github/narrative_git/story/poetry_fight_2_2/poetry_fight_QA_2_2.txt"
# path2qafile = "/Users/abeukers/Documents/github/narrative_git/story/fight_10_1/fight_QA_10_1.txt"
path2qafile = "/Users/abeukers/Documents/github/narrative_git/story/fight_poetry_4_4/fight_poetry_QA_4_4.txt"
path2qlibfile = "/Users/abeukers/wd/coffeworld_exp/csw_exp/qlib2.txt"


# these states have no questions for them
problem_states = ['Turn_to_barista','X_stare','X_shove',
                 'Love_juice','Hate_coffee']

problem_states.extend(['Order_drink','Too_expensive',
                       'Subject_declines','Subject_performs',
                       'Order_dessert'])


## -- assembling code --

def fill_roles(string):
    print('FILLING',string)
    for r in role_filler_dict.keys():
        entity = role_filler_dict[r]
        r_regex = "\[%s\..{0,20}?\]" % r
        found = re.findall(r_regex,string)
        if found:
            role, prop = found[0][1:-1].split('.')
            print('entity',entity,'role',role,'prop',prop)
            filler = entity_property_dict[entity][prop]
            filler = re.sub('[ ]','',filler)
            string = re.sub(r_regex,filler,string)
    return string


def story_snippet(state_number, edge):
    state_sentence = state_sentence_dict[edge[0]]
    code_snippet = """
        var trial%s = {
        type: 'instructions',
        pages: ['%s']
        } """ % (state_number,state_sentence)
    return code_snippet


# eqr - { Edge : [question: [right, [wrong1,wrong2] ] ] }
with open(path2qlibfile) as file:
    qlib_f = file.read()

eqr_dict = csw.make_eqr(qlib_f)


def question_snippet(state_number,edge):
    if edge[0] in problem_states:
        print(edge, 'has no questions')
        return None
    
    # questions possible for current edge
    # [[q1,[right,[wrong1,wrong2]]],...,[q2[r,[w1,w2]]]]
    ## START HERE ## 

    questions_responses = eqr_dict[edge]
    
    # take a random question and responses
    random.shuffle(questions_responses)
    question = questions_responses[0][0]
    right_resp = questions_responses[0][1][0]
    _wrong_resp = questions_responses[0][1][1]
    random.shuffle(_wrong_resp)
    wrong_resp = _wrong_resp[0]

    # number of questions available
    num_q = len(questions_responses) 
    print("there are %i questions for %s"%(num_q, str(edge)))
    
    filled_question = fill_roles(question)
    filled_responses = [fill_roles(right_resp), 
                        fill_roles(wrong_resp)]

    random.shuffle(filled_responses)
    resp_l, resp_r = filled_responses
    
    code_snippet = """
        var question%s = {
        type: 'html-slider-response',
        stimulus: '<p> %s <p>',
        labels: ['%s', '%s']
        } """ % (state_number, filled_question,
                 resp_l, resp_r)
    
    return code_snippet


# main loop 
state_number = 0
code_body = ""
timeline = ""


# QA file 
with open(path2qafile) as file:
    qa_file = file.read() 


## -- main loop
qa_full = qa_file.split('\n\n\n')[:-1]
for qa_one in qa_full:
    print('\nSTORY\n')
    # qa_one = qa_full[0]

    # breaks up qa file 
    info = qa_one.split('\n\n')[0].split('\n')
    rf_str, ep_str = info[0], info[1]
    # story
    story = qa_one.split('\n\n')[1:-1]

    # loads datastructures
    role_filler_dict, entity_property_dict, state_sentence_dict, \
        edge_list, altedge_dict = csw.main(story,rf_str,ep_str) 

    # loop through edges of instantiated graph
    for edge in edge_list:
        state_number += 1

        # story 
        code_body += story_snippet(state_number, edge)
        timeline += 'trial%i, '%state_number

        # question
        if random.uniform(0,1) > pr_q:
            q = question_snippet(state_number,edge)
            print(q)
            if q != None:
                code_body += q
                timeline += 'question%i, '% state_number

        


## finalizing and writing

start = """
<!DOCTYPE html>
<html><head>
    <script src="jspsych-master/jspsych.js"></script>
    <link rel="stylesheet" href="jspsych-master/css/jspsych.css"></link>

    <script src = "jspsych-master/plugins/jspsych-instructions.js"></script>
    <script src = "jspsych-master/plugins/jspsych-html-slider-response.js"></script>

    <style> img { width: 300px; } </style> 
    </head><body></body>

<script>
""" 

end = """

  jsPsych.init({
    timeline: [%s],
    on_finish: function() {
      jsPsych.data.displayData();
    },
    default_iti: 250
  });

</script>
""" % timeline

final_script = start + code_body + end


file = open("CSW_qgen.html",'w')
file.write(final_script)
file.close()

