import re
import sys, os
from os.path import join as opj
from glob import glob as glob
from collections import deque
from numpy import random
import csw_funs as c

"""
generates a psiturk experiment file: csw_task-${}.js
and an info file, which contains the timeline information
"""

""" TODO
use the following to record data about each trial

var trial = {
  type: 'image-keyboard-response',
  stimulus: 'imgA.jpg',
  data: { image_type: 'A' }
}

"""

#sid input
sid = sys.argv[1]
path2qafile = sys.argv[2]

# params
prob_question = 0.6
num_accomodation_stories = 1

# QA file
with open(path2qafile) as file:
  qa_file = file.read() 
qa_full = qa_file.split('\n\n\n')[:-1]

# write all info needed about experiment instance for later analysis 
expinfo_file = open("experiment_info-%s.txt"%,'w')

# loop vars
code_body = ""
timeline = ""
state_index = -1
story_count = -1
prQ = 0

# loop through blocks in QA file 
# each block is a story instance
for qa_one in qa_full:
  
  # begin asking questions after few stories
  story_count += 1
  if story_count == num_accomodation_stories:
    prQ = prob_question
    state_index += 1
    code_body += \
    """
    var questions_begin_%s = {
      type: 'instructions',
      pages: [' ** you will now begin to be probed with questions mid story ** ']
    } \n""" % state_index
    timeline += "questions_begin_%s," % state_index

  # split QA block 
  story_blocks = qa_one.split('\n\n')[1:-1]
  story_end = qa_one.split('\n\n')[-1]
  
  # get edge list, and state sentence mapping
  edge_list, state_sentence_dict, \
    current_wnext, current_rnext = c.parse_QA(story_blocks)

  # story sentence
  for edge in edge_list:

    state_index += 1
    state_info, story_snip = c.story_snippet(
      state_index,edge,state_sentence_dict)
    code_body += story_snip
    timeline += 's_%i,'% state_index
    expinfo_file.write("%s\n"%(state_info))
    
    # ask question
    if random.uniform(0,1) < prQ:
      state_index += 1
      state_info,question_snip = c.question_snippet(state_index,
        edge,current_wnext,current_rnext)
      code_body += question_snip
      timeline += 'q_%i,' % state_index
      expinfo_file.write("%s\n"%state_info)

  # handling last state
  state_index += 1
  state_info, story_snip = c.story_snippet(
  	state_index,['END','NA'],state_sentence_dict)
  code_body += story_snip
  timeline += 's_%i,'% state_index
  expinfo_file.write("%s\n"%state_info)

  # empty page 
  state_index += 1
  code_body += \
  """\n
    var betweenstory_%s = {
      type: 'instructions',
      pages: [' ** press space bar for the next story ** ']
    } \n""" % state_index
  timeline += "\nbetweenstory_%s," % state_index
  


## finalizing and writing

start = """

// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var intro1 = {
	type: 'instructions',
	pages: ['** After reading this sentence, press spacebar. ** ']
	}
var intro2 = {
	type: 'instructions',
	pages: ['In this experiment you will read stories and answer questions.']
	} 
var intro3 = {
	type: 'instructions',
	pages: ['The stories will be presented a sentence at a time.']
	}
var intro4 = {
	type: 'instructions',
	pages: ['While reading, you will be periodically interrupted and asked to predict what happens next in the story.']
	} 
var intro5 = {
  type: 'instructions',
  pages: ['The questions will ask you to predict which one of two given options is more likely to happen next.']
  } 
var intro6 = {
  type: 'instructions',
  pages: ['When a question comes up, select an option with the right or left arrow keys on your keyboard.']
  } 
var intro7 = {
	type: 'instructions',
	pages: [' ** once ready, press spacebar to begin the first story ** ']
	} 
    
""" 

end = """
  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,%s],

  on_data_update: function(data) {
        psiturk.recordTrialData(data);
    },

  on_finish: function() {
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
});

""" % (timeline)

final_script = start + code_body + end

# writing to files 

task_script_file = open("csw_task-%s.js" % ,'w')
task_script_file.write(final_script)
task_script_file.close()  

expinfo_file.close()

      