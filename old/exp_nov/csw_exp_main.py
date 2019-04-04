import csw_exp_funs as c
from collections import deque
from numpy import random
import sys, os
from os.path import join as opj
import re
from importlib import reload
reload(c)

""" TODO
scale up for handling multi subjects
subject id and file count
"""

sid = "SQ"
subj_dir = opj("data",sid)
path2qafile = opj(subj_dir,"schema1127_QA_100_1.txt")
output_dir = subj_dir

with open(path2qafile) as file:
  qa_file = file.read() 

code_body = ""
timeline = ""
prob_question = 0.6
num_accomodation_stories = 10
qa_full = qa_file.split('\n\n\n')[:-1]

tindex = -1
scount = 0
prQ = 0
for qa_one in qa_full:
  
  # begin asking questions
  if scount == num_accomodation_stories:
    prQ = prob_question
    tindex += 1
    code_body += """
              var questions_begin_%s = {
                type: 'instructions',
                pages: [' ** you will now begin to be probed with questions mid story ** ']
                } """ % tindex
    timeline += "questions_begin_%s," % tindex

  # load relevant info
  info = qa_one.split('\n\n')[0].split('\n')
  rf_str, ep_str = info[0], info[1]
  story_blocks = qa_one.split('\n\n')[1:-1]
  story_end = qa_one.split('\n\n')[-1]
  
  # parse QA: get edge list, and dicts
  edge_list, state_sentence_dict, current_wnext, \
    current_rnext = c.parse_QA(story_blocks)

   # story sentence
  for edge in edge_list:

    tindex += 1
    _id, story_snip = c.story_snippet(
      tindex,edge,state_sentence_dict)
    code_body += story_snip
    timeline += '%s,'% _id
    print(_id)
    
    # ask question
    if random.uniform(0,1) < prQ:
      tindex += 1
      _id,question_snip = c.question_snippet(tindex,
        edge,current_wnext,current_rnext)
      code_body += question_snip
      timeline += '%s,' % _id

  # handling last state
  tindex += 1
  _id, story_snip = c.story_snippet(
  	tindex,['END','NA'],state_sentence_dict)
  code_body += story_snip
  timeline += '%s,'% _id

  # empty page 
  tindex += 1
  code_body += """
            var ITI_%s = {
              type: 'instructions',
              pages: [' ** press space bar for the next story ** ']
              } """ % tindex
  timeline += "ITI_%s," % tindex

  # story count
  scount += 1

  

  
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
    timeline: [intro1,intro2,intro3,intro4,intro5,%s],
    on_finish: function() {
      jsPsych.data.displayData();
      var data_string;
      data_string = jsPsych.data.get().csv()
      saveTextToFile(data_string, 'sliderdata-sid_%s.csv')
    },
    default_iti: 250
  });

</script>
""" % (timeline,sid)

final_script = start + code_body + end


file = open(opj(output_dir,"csw_exp-%s.html" %sid),'w')
file.write(final_script)
file.close()  

file2 = open(opj(output_dir,"timeline-%s.txt" %sid),'w')
file2.write(timeline)
file2.close()


      