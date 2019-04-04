import csw2 as c
from collections import deque
from numpy import random
import re
from importlib import reload
reload(c)

path2qafile = "/Users/abeukers/Documents/github/narrative_git/story/fight_ken_10_1/fight_ken_QA_10_1.txt"
with open(path2qafile) as file:
  qa_file = file.read() 


code_body = ""
timeline = ""
prQ = 0.8
qa_full = qa_file.split('\n\n\n')[:-1]

state_count = -1
for qa_one in qa_full:
  
  info = qa_one.split('\n\n')[0].split('\n')
  rf_str, ep_str = info[0], info[1]
  story_blocks = qa_one.split('\n\n')[1:-1]
  story_end = qa_one.split('\n\n')[-1]

  edge_list,state_sentence_dict, current_wnext, \
    current_rnext = c.parse_QA(story_blocks)

  for edge in edge_list:
    state_count += 1
    trial_id = "%i__%s__%s" %(state_count,*edge)
    current_state = edge[0]
    
    sentence = state_sentence_dict[current_state]

    story_snip = c.story_snippet(trial_id,state_count, sentence)
    code_body += story_snip
    timeline += 't__%s,'% trial_id

    if random.uniform(0,1) < prQ:
      state_count += 1
      trial_id = "%i__%s__%s" %(state_count,*edge)
      qname,question_snip = c.question_snippet(trial_id,
        current_state,current_wnext,current_rnext)
      print(qname)
      code_body += question_snip
      timeline += '%s,' % qname

  

  
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
      saveTextToFile(data_string, 'DATACSW.csv')
    },
    default_iti: 250
  });

</script>
""" % timeline

final_script = start + code_body + end


file = open("csw2.html",'w')
file.write(final_script)
file.close()  



      