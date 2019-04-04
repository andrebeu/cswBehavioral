import csw_ken as c
from collections import deque
from numpy import random
import sys, os
import re
from importlib import reload
reload(c)

""" TODO
include blank screen between stories
fix space on resposnes 
change name of output data file to sliderdata-sid_%.3f

"""

path2qafile = sys.argv[1]
sid = os.path.split(path2qafile)[-1].split('-')[-1].split('.')[0]
print(sid)

with open(path2qafile) as file:
  qa_file = file.read() 

code_body = ""
timeline = ""
prQ = 0.9
qa_full = qa_file.split('\n\n\n')[:-1]

scount = -1
for qa_one in qa_full:
  
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
    scount += 1
    _id, story_snip = c.story_snippet(
      scount,edge,state_sentence_dict)
    code_body += story_snip
    timeline += '%s,'% _id
    
    # ask question
    if random.uniform(0,1) < prQ:
      scount += 1
      _id,question_snip = c.question_snippet(scount,
        edge,current_wnext,current_rnext)
      code_body += question_snip
      timeline += '%s,' % _id

  # handling last state
  scount += 1
  _id, story_snip = c.story_snippet(
  	scount,['END','NA'],state_sentence_dict)
  code_body += story_snip
  timeline += '%s,'% _id

  

  
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
    timeline: [%s],
    on_finish: function() {
      jsPsych.data.displayData();
      var data_string;
      data_string = jsPsych.data.get().csv()
      saveTextToFile(data_string, 'DATACSW-%s.csv')
    },
    default_iti: 250
  });

</script>
""" % (timeline,sid)

final_script = start + code_body + end


file = open("csw_ken-%s.html" %sid,'w')
file.write(final_script)
file.close()  

file2 = open("timeline-%s.txt" %sid,'w')
file2.write(timeline)
file2.close()


      