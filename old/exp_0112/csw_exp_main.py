import csw_exp_funs as c
from collections import deque
from numpy import random
import sys, os
from os.path import join as opj
from glob import glob as glob
import re
from importlib import reload
reload(c)

""" TODO
only make js in this file
"""

# params
prob_question = 0.6
num_accomodation_stories = 1

# directories
subj_dir = sys.argv[1]
sid = os.path.split(subj_dir)[-1]
path2qafile = glob(opj(subj_dir,"schema*QA*.txt"))[0]
output_dir = subj_dir

# QA file
with open(path2qafile) as file:
  qa_file = file.read() 
qa_full = qa_file.split('\n\n\n')[:-1]

# write all info needed about experiment instance for later analysis 
expinfo_file = open(opj(output_dir,"experiment_info-%s.txt" %sid),'w')

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
	pages: ['** After reading, press spacebar. ** ']
	}
var intro2 = {
	type: 'instructions',
	pages: ['There are two parts to this experiment.']
	} 
var intro3 = {
	type: 'instructions',
	pages: ['First you will read a series of stories, a sentence at a time.']
	}
var intro4 = {
	type: 'instructions',
	pages: ['As you read, pay attention to the sequence of events, because eventually you will begin to be asked to predict what happens next in the story.']
	} 
var intro5 = {
	type: 'instructions',
	pages: [' ** once ready, press spacebar to begin the first story ** ']
	} 
    
""" 

end = """

function saveTextToFile(textstr, filename) {
    var blobToSave = new Blob([textstr], {
      type: 'text/plain'
    });
    var blobURL = "";
    if (typeof window.webkitURL !== 'undefined') {
      blobURL = window.webkitURL.createObjectURL(blobToSave);
    } else {
      blobURL = window.URL.createObjectURL(blobToSave);
    }

    var display_element = jsPsych.getDisplayElement();

    display_element.insertAdjacentHTML('beforeend','<a id="jspsych-download-as-text-link" style="display:none;" download="'+filename+'" href="'+blobURL+'">click to download</a>');
    document.getElementById('jspsych-download-as-text-link').click();
}
  
jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,%s],

  on_finish: function() {
    // jspsych save
    jsPsych.data.displayData();
    var data_string;
    data_string = jsPsych.data.get().csv()
    saveTextToFile(data_string, 'sliderdata-sid_S_1.csv')
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
  default_iti: 250
});

""" % (timeline,sid)

final_script = start + code_body + end


file = open(opj(output_dir,"csw_task-%s.js" %sid),'w')
file.write(final_script)
file.close()  

file2 = open(opj(output_dir,"experiment_timeline-%s.txt" %sid),'w')
file2.write(timeline)
file2.close()

expinfo_file.close()

      