// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 2500
var MIN_STORY_ITI = 800

var intro_instructions = {
  type: 'instructions',
  pages: [
  'Use the left- and right-arrow keys to navigate these instructions.',
  'Please read the following instructions carefully.',
  'We are interested in how people learn (probabilistic) regularities.',
  'This task involves reading stories and answering questions about the stories.',
  'Your goal is to answer as many question correctly as you can.',
  'Note that you will get many questions wrong. Do not worry! We expect that to happen.',
  'The questions will ask you to predict what happens next in the story.<br>And just like in real life, nobody can predict everything.',
  'That said, depending on how many questions you get right, <br>we will pay you an extra bonus of up to $4.',
  'Enjoy! (After this page, you cannot return to the previous page).'
  ],
  data: {"type":"instruction"},
  key_forward: 'rightarrow',
  key_backward: 'leftarrow',
  allow_backward: true 
  }

var intro_instructions2 = {
  type: 'instructions',
  pages: [
  'Press SPACEBAR.',
  'You will read stories one sentence at a time. Press SPACEBAR to read the next sentence.',
  'When a question comes up, use the RIGHT AND LEFT ARROW KEYS to respond.',
  ' ** ~ PRESS SPACEBAR TO BEGIN THE EXPERIMENT ~ **'
  ],
  data: {"type":"instruction"},
  key_forward: 'spacebar',
  allow_backward: false 
}

// CODE BODY START


	var s_1 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_5 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_5_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_9 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_16 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_16_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_24 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_24_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_32 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_32_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_33 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_40 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_40_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_42 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_42_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_44 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_44_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_50 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_50_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_52 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_52_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_57 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_57_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_59 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_59_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_61_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_64 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_64_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_67 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_67_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_68_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_69 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_69_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_78_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_80 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_80_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_81 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_81_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_82 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_82_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_85 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_85_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_86 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_86_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_87 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_87_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_89 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_89_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_90 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Bill</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_90_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Bill</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_92 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_92_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_93 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_93_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_94 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_94_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_95 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_95_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_97 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_97_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_98 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_98_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_99 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_99_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_100 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_100_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_101 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_101_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_102 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_102_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_103 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_103_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_105 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_105_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_106 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_106_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_107 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_107_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_108 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_108_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_109 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_109_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_110 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_110_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_111 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_111_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_112 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_112_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_113 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_113_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_115_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_117 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_117_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_118 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_118_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_119 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_119_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_120 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_120_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_121 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_121_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_122 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_122_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_123 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_123_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_124 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_124_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_125_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_126 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_126_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_127 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_127_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_128 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_128_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_129 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_129_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_130 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_130_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_131 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_131_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_133 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_133_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_135 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_135_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_136 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_136_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_137 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_137_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_138 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_138_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_139 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_139_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_140 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_140_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_141 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_141_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_142 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_142_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_143 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_143_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_145 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_145_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_146 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_146_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_147 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_147_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_148 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_148_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_150 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_150_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_151 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_151_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_152_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_154 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_154_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_155 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_155_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_156 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_156_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_157 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_157_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_158 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_158_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_159 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_159_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_160 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_160_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_162 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_162_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_163 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_163_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_164 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_164_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_166_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_167 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_167_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_168 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_168_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_170 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_170_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_171 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_171_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_173 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_173_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_175 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_175_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_176 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_176_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_177 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_177_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_178 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_178_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_179 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_179_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_180 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_180_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_182 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_182_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_183 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_183_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_184 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_184_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_185 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_185_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_186 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_186_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_187 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_187_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_188 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_188_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_189 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_189_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_191 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_191_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_192 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_192_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_194_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_195 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_195_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_196_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_197 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_197_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_198 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_198_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_199 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_199_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_200 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_200_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_201 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_201_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_202 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_202_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_203_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_204 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_204_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_205 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_205_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_206 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_206_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_208 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_208_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_209 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_209_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_210 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_210_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_212 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_212_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_213 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_213_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_214 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_214_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_216 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_216_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_218_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_220 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_220_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_221 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_221_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_222 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_222_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_223 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_223_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_224 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_224_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_226 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_226_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_227 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_227_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_228 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_228_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_229 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_229_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_230 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_230_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_231 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_231_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_232 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_232_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_233 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_233_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_235 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_235_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_236 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_236_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_237 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_237_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_239 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_239_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_240 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_240_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_241 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_241_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_243 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_243_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_245 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_245_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_247 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_247_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_249 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_249_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_250 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_250_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_251 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_251_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_252 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_252_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_253 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_253_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_254 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_254_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_255 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_255_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_256 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_256_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_257 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_257_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_259 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_259_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_260 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_260_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_262 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_262_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_264 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_264_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_265_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_266 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_266_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_267 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_267_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_269 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_269_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_270 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_270_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_271 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_271_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_273 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_273_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_274 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_274_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_275 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_275_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_276 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_276_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_278 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_278_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_280 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_280_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_281 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_281_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_282 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_282_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_283 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_283_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_284 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_284_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_285 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_285_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_286 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_286_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_287 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_287_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_288 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_288_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_290 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_290_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_291 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_291_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_292_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_293 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_293_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_294 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_294_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_295 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_295_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_296 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_296_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_297 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_297_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_298_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_299 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_299_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_300_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_302_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_303 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_303_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_304 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_304_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_305 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_305_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_306 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_306_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_307 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_307_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_308 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_308_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_309 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_309_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_310 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_310_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_311 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_311_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_312 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_312_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_313 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_313_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_315 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_315_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_316 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_316_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_318 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_318_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_319 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_319_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_321 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_321_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_322 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_322_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_323 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_323_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_325 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_325_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_326 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_326_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_327 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_327_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_328 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_328_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_329 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_329_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_330 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_330_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_332 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_332_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_333 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_333_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_334 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_334_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_336 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_336_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_337 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_337_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_338 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_338_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_339 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_339_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_340 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_340_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_341 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_341_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_343 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_343_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_344 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_344_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_345 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_345_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_346 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_346_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_348 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_348_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_349 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_349_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_351 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_351_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_353 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_353_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_354 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_354_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_355 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_355_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_356 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_356_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_357 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_357_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_359 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_359_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_360 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_360_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_361 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_361_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_362 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_362_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_363 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_363_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_364 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_364_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_365 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_365_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_366 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_366_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_367 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_367_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_369 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_369_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_370 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_370_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_371 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_371_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_372 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_372_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_373 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_374 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_374_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_375 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_375_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_376 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_376_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_377 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_377_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_378 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_378_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_379 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_379_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_380 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_380_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_381 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_381_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_382 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_382_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_383 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_383_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_384_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_386 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_386_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_388 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_388_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_390 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_390_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_392 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_392_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_394 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_394_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_395 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_395_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_396 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_396_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_397 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_397_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_399 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_399_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_400 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_400_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_402 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_402_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_404 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_404_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_405 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_405_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_406 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_406_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_407 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_407_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_408 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_408_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_409 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_409_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_412_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_414 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_414_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_415 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_415_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_416 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_416_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_417 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_417_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_418 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_418_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_419 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_419_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_420 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_420_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_421 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_421_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_422 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_422_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_423 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_423_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_424 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_424_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_425 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_425_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_426 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_426_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_428 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_428_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_430 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_430_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_431 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_431_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_432 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_432_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_433 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_433_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_434 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_434_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_436 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_436_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_438 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_438_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_439 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_439_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_440 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_440_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_441 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That must have been <br>when <b>Bill</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_441_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That must have been <br>when <b>Bill</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_442 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_442_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_443 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_443_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_444 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_444_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_445 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_445_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_446 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_446_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_447 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_447_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_448 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_448_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_449 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_449_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_450 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_450_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_451 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_451_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_452 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_452_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_453 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_453_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_454 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_454_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_456 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_456_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_458 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_458_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_459 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_459_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_460 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_460_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_461 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_461_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_462 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_462_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_463 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_463_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_464 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_464_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_465 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_465_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_467 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_467_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_468 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_468_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_469 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_469_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_470 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_470_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_471 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_471_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_472 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_472_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_474 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_474_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_475 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_475_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_476 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_476_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_477 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_477_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_478 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_478_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_479 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_479_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_480 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_480_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_481 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_481_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_482 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_482_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_483 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_483_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_484 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_484_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_485 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_485_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_486 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_486_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_487 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_487_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_488 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_488_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_489 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_489_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_490 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_490_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_492 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_492_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_494_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_495 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_495_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_497 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_497_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_498 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_498_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_499 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_499_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_500 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_500_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_501 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_501_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_502 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_502_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_503 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_503_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_505 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_505_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_506 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_506_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_507 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_507_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_508 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_508_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_509 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_509_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_511 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_511_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_513 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_513_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_514 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_514_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_515 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_515_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_517 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_517_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_519 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_519_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_520 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_520_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_521 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_521_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_522 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_522_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_523 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_523_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_524 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_524_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_525 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_525_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_527 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_527_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_528 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_528_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_529 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_529_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_530 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_530_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_531 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_531_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_532 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_532_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_534 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_534_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_535 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_535_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_536 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_536_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_537 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_537_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_538 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_538_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_540 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_540_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_541 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_541_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_542 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_542_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_543 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_543_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_544 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_544_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_545 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_545_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_547 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_547_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_549 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_549_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_550 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_550_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_551 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_551_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_552 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_552_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_553 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_553_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_555 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_555_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_556 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_556_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_557 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_557_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_558 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_558_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_559 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_559_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_560_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_561 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_561_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_562 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_562_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_563 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_563_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_564 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_564_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_565 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_565_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_566 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_566_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_567 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_567_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_568 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_568_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_569 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_569_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_570 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_570_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_571 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_571_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_572 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_572_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_573 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_573_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_575_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_576 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_576_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_577 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_577_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_578 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_578_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_579 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_579_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_580 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_580_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_581 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_581_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_582 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_582_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_583 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_583_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_584 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_584_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_586 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_586_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_588 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_588_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_589 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_589_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_590 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_590_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_591 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_591_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_592 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_592_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_593 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_593_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_594 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_594_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_595_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_597 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_597_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_598 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_598_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_600_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_601 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_601_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_602 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_602_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_604 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_604_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_605 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_605_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_606 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_606_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_607 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_607_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_608 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_608_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_611 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_611_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_612 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_612_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_613 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_613_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_614_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_616 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_616_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_617 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_617_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_618 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_618_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_619 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_619_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_620 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_620_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_621 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_621_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_622 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_622_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_624 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_624_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_625 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_625_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_626 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_626_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_627 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_627_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_628 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_628_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_629 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_629_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_631 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_631_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_633 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_633_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_635 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_635_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_636 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_636_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_639 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_639_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_640 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_640_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_642 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_642_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_643 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_643_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_644 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_644_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_645 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_645_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_646 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_646_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_647 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_647_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_648 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_648_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_649 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_649_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_650 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_650_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_651 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_651_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_652 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_652_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_653 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_653_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_654 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_654_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_655 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_655_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_656 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_656_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_658 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_658_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_659 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_659_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_660 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_660_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_661 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_661_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_662 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_662_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_663 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_663_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_664 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_664_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_666 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_666_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_667 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_667_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_668 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_668_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_669 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_669_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_670 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_670_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_671 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_671_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_672 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_672_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_673 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_673_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_674 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_674_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_675 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_675_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_677 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_677_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_678 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_678_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_679 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_679_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_680 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_680_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_682_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_683 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_683_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_684 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_684_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_685 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_685_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_687 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_687_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_688 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_688_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_689 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_689_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_690 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_690_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_691 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_691_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_693 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_693_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_694 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_694_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_695 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_695_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_696 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_696_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_697 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_697_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_698 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_698_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_699 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_699_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_700 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_700_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_701 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_701_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_702 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_702_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_703 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_703_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_704 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_704_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_705 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_705_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_707 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That must have been <br>when <b>Bill</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_707_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That must have been <br>when <b>Bill</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_708 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_708_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_709 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_709_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_711 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_711_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_712 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_712_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_713 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_713_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_714 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_714_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_715 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_715_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_717 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_717_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Alice</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_718 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_718_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_720 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_720_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_721 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_721_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_722 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_722_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_724 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_724_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_725 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_725_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_726 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_726_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_727 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_727_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_728 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_728_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_731 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_731_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'", "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_733 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_733_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_735 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_735_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_736 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_736_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_737 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_737_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_739 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_739_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Alice</b> <b>realized</b> <br>'The cat is not what it seems!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_740 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_740_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_741 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_741_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_742 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_742_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_744 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_744_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_745 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_745_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_746 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_746_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_747 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_747_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_749 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_749_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_751 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_751_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'", "<b>Eventually</b> it happened, <br> it all became unclear."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_753 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_753_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_754 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_754_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_755 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_755_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_756 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_756_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_757 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_757_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_758 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_758_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_759 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_759_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_760 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_760_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_761 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_761_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_762 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_762_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_763 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_763_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_764 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_764_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_765 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_765_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_766 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_766_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Alice</b> <b>transcended</b>.", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_767 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_767_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_768 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_768_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_769 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_769_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.", "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_770 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_770_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_771 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_771_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'", "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_772 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_772_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_773 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_773_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_774 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_774_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_776 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_776_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_778 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_778_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_779 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_779_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_780 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_780_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_781 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_781_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'", "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_782 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_782_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_784 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_784_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_786 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_786_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_787 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_787_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_788 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_788_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_789 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_789_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_790 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_790_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.", "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_792 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_792_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_793 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_793_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_794 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_794_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_795 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_795_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_796 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_796_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_799 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_799_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'silk potion'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_801 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_801_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_802 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_802_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the walls became geometric shapes.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_803 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_803_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_804 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_804_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_805 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_805_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_806 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_806_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_808 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_808_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Alice</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_809 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_809_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_810 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_810_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Alice</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_812 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_812_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_813 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_813_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:", "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_814 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_814_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_815 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_815_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_817 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_817_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_818 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_818_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_819 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_819_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_820 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_820_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_821 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_821_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_822 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_822_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_823 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_823_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_824 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_824_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_826 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_826_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'that the mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_827 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_827_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'", "<b>Eventually</b> it happened, <br> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_828 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_828_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_829 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_829_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_830 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_830_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_831 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_831_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_832 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_832_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Alice</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Alice</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_834 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_834_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Alice</b> <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_835 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_835_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_836 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_836_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Alice</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_837 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_837_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Alice</b> recalled <b>her self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_838 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_838_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_839 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_839_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Alice</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_840 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_840_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_842 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_842_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'a real life zombie?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_843 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_843_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> the panda's top hat did flatten.", "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_844 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_844_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_845 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_845_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "MEMORY",
						"false_tonode": "RECALL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_846 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_846_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_847 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_847_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_849 = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_849_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been <br>when <b>Bill</b> <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_850 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_850_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_851 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_851_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_852 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_852_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_854 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_854_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_855 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_855_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_856 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_856_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_857 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_857_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That was when they saw <br><b>Alice</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_858 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_858_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_859 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_859_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_860 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_860_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_862 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_862_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the <b>radio</b> began <br>'and receive at your finger tip ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_863 = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_863_ = {
		type: "html-keyboard-response",
		stimulus: "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "MEMORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_864 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_864_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'", "'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "MEMORY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_865 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_865_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_866 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_866_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been <br>when <b>Bill</b> <b>transcended</b>.", "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_867 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_867_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_869 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_869_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> <b>knew!</b> the 'silk potion'<br> was quite swell here.", "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_870 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_870_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_871 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_871_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_873_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_874 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_874_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_875 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_875_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_876 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_876_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> <b>Bill</b> walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_878 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_878_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_879 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_879_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering, <b>Bill</b> <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_880 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_880_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Eventually</b> it happened, <br> it all became unclear.", "Suddenly, the <b>radio</b> began <br>'rain then sun then rain then sun ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_881 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_881_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_882 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_882_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:", "which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_883 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_883_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_884 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_884_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_885 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_885_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_886 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_886_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_887 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_887_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>skeletons in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_888 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_888_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_889 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_889_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_890 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_890_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_891 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_891_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a transparent identity.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_892 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_892_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_893 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_893_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> <b>Bill</b> walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_894 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_894_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.", "<b>Bill</b> <b>knew!</b> the 'muddy water'<br> was quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_895 = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_895_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Bill</b> was <b>told</b> they had<br>a dance party in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_896 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_896_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, <b>Bill</b> <b>realized</b> <br>'The cat is not what it seems!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "<b>Eventually</b> it happened, <br> it all became unclear.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_898 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_898_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["which brought memories of <b>Bill</b>'s <br><b>shaman-guru</b> yelling:", "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "RECALL",
						"false_tonode": "MEMORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_899 = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_899_ = {
		type: "html-keyboard-response",
		stimulus: "and <b>Bill</b> recalled <b>his self</b><br>saying in a low voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RECALL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_900 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_900_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is the middle and the end of reality!'", "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RECALL",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_901 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_901_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>introspective-dream-narrative</b> <br>couldn't be a dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_902 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Bill</b> <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_902_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>", "That must have been <br>when <b>Bill</b> <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_903 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_903_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw <br><b>Bill</b> <b>evaporate</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 


// CODE BODY END


var comments = {
  type: 'survey-text',
  questions: [{prompt: "Thanks for participating! We appreciate any feedback.", 
                rows: 15, columns: 100}],
  }

jsPsych.init({
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,s_3,s_3_,s_4,s_4_,s_5,s_5_,s_6,s_6_,s_7,s_7_,betweenstory_1,s_8,s_8_,s_9,s_9_,s_10,s_10_,s_11,s_11_,s_12,s_12_,s_13,s_13_,s_14,s_14_,betweenstory_2,s_15,s_15_,s_16,s_16_,s_17,s_17_,s_18,s_18_,s_19,s_19_,s_20,s_20_,s_21,s_21_,betweenstory_3,s_22,s_22_,s_23,s_23_,s_24,s_24_,s_25,s_25_,s_26,s_26_,s_27,s_27_,s_28,s_28_,betweenstory_4,s_29,s_29_,s_30,s_30_,s_31,s_31_,s_32,s_32_,s_33,s_33_,s_34,s_34_,s_35,s_35_,betweenstory_5,s_36,s_36_,s_37,s_37_,s_38,s_38_,s_39,s_39_,s_40,s_40_,s_41,s_41_,s_42,s_42_,betweenstory_6,s_43,s_43_,s_44,s_44_,s_45,s_45_,s_46,s_46_,s_47,s_47_,s_48,s_48_,s_49,s_49_,betweenstory_7,s_50,s_50_,s_51,s_51_,s_52,s_52_,s_53,s_53_,s_54,s_54_,s_55,s_55_,s_56,s_56_,betweenstory_8,s_57,s_57_,s_58,s_58_,s_59,s_59_,s_60,s_60_,q_61,q_61_,s_62,s_62_,s_63,s_63_,q_64,q_64_,s_65,s_65_,betweenstory_9,s_66,s_66_,s_67,s_67_,q_68,q_68_,s_69,s_69_,s_70,s_70_,s_71,s_71_,s_72,s_72_,s_73,s_73_,betweenstory_10,s_74,s_74_,s_75,s_75_,s_76,s_76_,s_77,s_77_,q_78,q_78_,s_79,s_79_,s_80,s_80_,q_81,q_81_,s_82,s_82_,betweenstory_11,s_83,s_83_,s_84,s_84_,s_85,s_85_,q_86,q_86_,s_87,s_87_,s_88,s_88_,s_89,s_89_,q_90,q_90_,s_91,s_91_,betweenstory_12,s_92,s_92_,s_93,s_93_,s_94,s_94_,s_95,s_95_,s_96,s_96_,s_97,s_97_,q_98,q_98_,s_99,s_99_,betweenstory_13,s_100,s_100_,s_101,s_101_,q_102,q_102_,s_103,s_103_,s_104,s_104_,q_105,q_105_,s_106,s_106_,s_107,s_107_,s_108,s_108_,betweenstory_14,s_109,s_109_,q_110,q_110_,s_111,s_111_,q_112,q_112_,s_113,s_113_,s_114,s_114_,q_115,q_115_,s_116,s_116_,s_117,s_117_,q_118,q_118_,s_119,s_119_,betweenstory_15,s_120,s_120_,s_121,s_121_,s_122,s_122_,q_123,q_123_,s_124,s_124_,q_125,q_125_,s_126,s_126_,q_127,q_127_,s_128,s_128_,s_129,s_129_,betweenstory_16,s_130,s_130_,s_131,s_131_,s_132,s_132_,q_133,q_133_,s_134,s_134_,q_135,q_135_,s_136,s_136_,q_137,q_137_,s_138,s_138_,s_139,s_139_,betweenstory_17,s_140,s_140_,q_141,q_141_,s_142,s_142_,q_143,q_143_,s_144,s_144_,q_145,q_145_,s_146,s_146_,q_147,q_147_,s_148,s_148_,s_149,s_149_,s_150,s_150_,betweenstory_18,s_151,s_151_,q_152,q_152_,s_153,s_153_,s_154,s_154_,q_155,q_155_,s_156,s_156_,s_157,s_157_,q_158,q_158_,s_159,s_159_,q_160,q_160_,s_161,s_161_,betweenstory_19,s_162,s_162_,s_163,s_163_,q_164,q_164_,s_165,s_165_,q_166,q_166_,s_167,s_167_,q_168,q_168_,s_169,s_169_,s_170,s_170_,s_171,s_171_,betweenstory_20,s_172,s_172_,s_173,s_173_,s_174,s_174_,s_175,s_175_,s_176,s_176_,s_177,s_177_,s_178,s_178_,betweenstory_21,s_179,s_179_,s_180,s_180_,s_181,s_181_,s_182,s_182_,q_183,q_183_,s_184,s_184_,q_185,q_185_,s_186,s_186_,q_187,q_187_,s_188,s_188_,betweenstory_22,s_189,s_189_,s_190,s_190_,q_191,q_191_,s_192,s_192_,s_193,s_193_,q_194,q_194_,s_195,s_195_,q_196,q_196_,s_197,s_197_,s_198,s_198_,betweenstory_23,s_199,s_199_,s_200,s_200_,s_201,s_201_,s_202,s_202_,q_203,q_203_,s_204,s_204_,s_205,s_205_,q_206,q_206_,s_207,s_207_,betweenstory_24,s_208,s_208_,q_209,q_209_,s_210,s_210_,s_211,s_211_,s_212,s_212_,q_213,q_213_,s_214,s_214_,s_215,s_215_,s_216,s_216_,betweenstory_25,s_217,s_217_,q_218,q_218_,s_219,s_219_,s_220,s_220_,s_221,s_221_,s_222,s_222_,s_223,s_223_,q_224,q_224_,s_225,s_225_,betweenstory_26,s_226,s_226_,q_227,q_227_,s_228,s_228_,s_229,s_229_,s_230,s_230_,s_231,s_231_,s_232,s_232_,s_233,s_233_,betweenstory_27,s_234,s_234_,s_235,s_235_,q_236,q_236_,s_237,s_237_,s_238,s_238_,s_239,s_239_,s_240,s_240_,s_241,s_241_,betweenstory_28,s_242,s_242_,s_243,s_243_,s_244,s_244_,q_245,q_245_,s_246,s_246_,q_247,q_247_,s_248,s_248_,s_249,s_249_,s_250,s_250_,betweenstory_29,s_251,s_251_,q_252,q_252_,s_253,s_253_,q_254,q_254_,s_255,s_255_,s_256,s_256_,s_257,s_257_,s_258,s_258_,s_259,s_259_,betweenstory_30,s_260,s_260_,s_261,s_261_,s_262,s_262_,s_263,s_263_,s_264,s_264_,q_265,q_265_,s_266,s_266_,s_267,s_267_,betweenstory_31,s_268,s_268_,s_269,s_269_,q_270,q_270_,s_271,s_271_,s_272,s_272_,s_273,s_273_,s_274,s_274_,q_275,q_275_,s_276,s_276_,betweenstory_32,s_277,s_277_,s_278,s_278_,s_279,s_279_,s_280,s_280_,q_281,q_281_,s_282,s_282_,q_283,q_283_,s_284,s_284_,q_285,q_285_,s_286,s_286_,betweenstory_33,s_287,s_287_,s_288,s_288_,s_289,s_289_,q_290,q_290_,s_291,s_291_,q_292,q_292_,s_293,s_293_,s_294,s_294_,s_295,s_295_,betweenstory_34,s_296,s_296_,s_297,s_297_,q_298,q_298_,s_299,s_299_,q_300,q_300_,s_301,s_301_,q_302,q_302_,s_303,s_303_,s_304,s_304_,q_305,q_305_,s_306,s_306_,betweenstory_35,s_307,s_307_,s_308,s_308_,s_309,s_309_,s_310,s_310_,s_311,s_311_,s_312,s_312_,s_313,s_313_,betweenstory_36,s_314,s_314_,s_315,s_315_,q_316,q_316_,s_317,s_317_,s_318,s_318_,s_319,s_319_,s_320,s_320_,s_321,s_321_,betweenstory_37,s_322,s_322_,q_323,q_323_,s_324,s_324_,s_325,s_325_,s_326,s_326_,q_327,q_327_,s_328,s_328_,q_329,q_329_,s_330,s_330_,s_331,s_331_,betweenstory_38,s_332,s_332_,s_333,s_333_,s_334,s_334_,s_335,s_335_,q_336,q_336_,s_337,s_337_,s_338,s_338_,s_339,s_339_,betweenstory_39,s_340,s_340_,q_341,q_341_,s_342,s_342_,s_343,s_343_,s_344,s_344_,q_345,q_345_,s_346,s_346_,s_347,s_347_,s_348,s_348_,betweenstory_40,s_349,s_349_,s_350,s_350_,q_351,q_351_,s_352,s_352_,q_353,q_353_,s_354,s_354_,q_355,q_355_,s_356,s_356_,s_357,s_357_,s_358,s_358_,betweenstory_41,s_359,s_359_,q_360,q_360_,s_361,s_361_,q_362,q_362_,s_363,s_363_,s_364,s_364_,s_365,s_365_,s_366,s_366_,s_367,s_367_,betweenstory_42,s_368,s_368_,q_369,q_369_,s_370,s_370_,q_371,q_371_,s_372,s_372_,s_373,s_373_,q_374,q_374_,s_375,s_375_,q_376,q_376_,s_377,s_377_,s_378,s_378_,betweenstory_43,s_379,s_379_,s_380,s_380_,s_381,s_381_,s_382,s_382_,s_383,s_383_,q_384,q_384_,s_385,s_385_,q_386,q_386_,s_387,s_387_,betweenstory_44,s_388,s_388_,s_389,s_389_,s_390,s_390_,s_391,s_391_,s_392,s_392_,s_393,s_393_,q_394,q_394_,s_395,s_395_,betweenstory_45,s_396,s_396_,q_397,q_397_,s_398,s_398_,q_399,q_399_,s_400,s_400_,s_401,s_401_,s_402,s_402_,s_403,s_403_,s_404,s_404_,betweenstory_46,s_405,s_405_,s_406,s_406_,s_407,s_407_,s_408,s_408_,q_409,q_409_,s_410,s_410_,s_411,s_411_,q_412,q_412_,s_413,s_413_,betweenstory_47,s_414,s_414_,q_415,q_415_,s_416,s_416_,s_417,s_417_,s_418,s_418_,q_419,q_419_,s_420,s_420_,q_421,q_421_,s_422,s_422_,q_423,q_423_,s_424,s_424_,betweenstory_48,s_425,s_425_,q_426,q_426_,s_427,s_427_,s_428,s_428_,s_429,s_429_,s_430,s_430_,q_431,q_431_,s_432,s_432_,q_433,q_433_,s_434,s_434_,betweenstory_49,s_435,s_435_,s_436,s_436_,s_437,s_437_,s_438,s_438_,s_439,s_439_,s_440,s_440_,q_441,q_441_,s_442,s_442_,betweenstory_50,s_443,s_443_,q_444,q_444_,s_445,s_445_,s_446,s_446_,s_447,s_447_,q_448,q_448_,s_449,s_449_,s_450,s_450_,s_451,s_451_,betweenstory_51,s_452,s_452_,s_453,s_453_,s_454,s_454_,s_455,s_455_,s_456,s_456_,s_457,s_457_,s_458,s_458_,betweenstory_52,s_459,s_459_,q_460,q_460_,s_461,s_461_,q_462,q_462_,s_463,s_463_,q_464,q_464_,s_465,s_465_,s_466,s_466_,s_467,s_467_,s_468,s_468_,betweenstory_53,s_469,s_469_,s_470,s_470_,q_471,q_471_,s_472,s_472_,s_473,s_473_,s_474,s_474_,q_475,q_475_,s_476,s_476_,s_477,s_477_,betweenstory_54,s_478,s_478_,s_479,s_479_,s_480,s_480_,s_481,s_481_,q_482,q_482_,s_483,s_483_,q_484,q_484_,s_485,s_485_,s_486,s_486_,betweenstory_55,s_487,s_487_,s_488,s_488_,q_489,q_489_,s_490,s_490_,s_491,s_491_,q_492,q_492_,s_493,s_493_,q_494,q_494_,s_495,s_495_,s_496,s_496_,betweenstory_56,s_497,s_497_,s_498,s_498_,s_499,s_499_,s_500,s_500_,s_501,s_501_,s_502,s_502_,s_503,s_503_,betweenstory_57,s_504,s_504_,s_505,s_505_,s_506,s_506_,s_507,s_507_,q_508,q_508_,s_509,s_509_,s_510,s_510_,s_511,s_511_,betweenstory_58,s_512,s_512_,s_513,s_513_,s_514,s_514_,q_515,q_515_,s_516,s_516_,s_517,s_517_,s_518,s_518_,q_519,q_519_,s_520,s_520_,betweenstory_59,s_521,s_521_,q_522,q_522_,s_523,s_523_,s_524,s_524_,q_525,q_525_,s_526,s_526_,s_527,s_527_,s_528,s_528_,s_529,s_529_,betweenstory_60,s_530,s_530_,q_531,q_531_,s_532,s_532_,s_533,s_533_,s_534,s_534_,s_535,s_535_,s_536,s_536_,s_537,s_537_,betweenstory_61,s_538,s_538_,s_539,s_539_,q_540,q_540_,s_541,s_541_,s_542,s_542_,s_543,s_543_,q_544,q_544_,s_545,s_545_,s_546,s_546_,betweenstory_62,s_547,s_547_,s_548,s_548_,s_549,s_549_,q_550,q_550_,s_551,s_551_,s_552,s_552_,s_553,s_553_,s_554,s_554_,betweenstory_63,s_555,s_555_,q_556,q_556_,s_557,s_557_,q_558,q_558_,s_559,s_559_,q_560,q_560_,s_561,s_561_,q_562,q_562_,s_563,s_563_,q_564,q_564_,s_565,s_565_,s_566,s_566_,betweenstory_64,s_567,s_567_,q_568,q_568_,s_569,s_569_,s_570,s_570_,q_571,q_571_,s_572,s_572_,s_573,s_573_,s_574,s_574_,q_575,q_575_,s_576,s_576_,betweenstory_65,s_577,s_577_,q_578,q_578_,s_579,s_579_,s_580,s_580_,s_581,s_581_,s_582,s_582_,s_583,s_583_,s_584,s_584_,betweenstory_66,s_585,s_585_,s_586,s_586_,s_587,s_587_,s_588,s_588_,s_589,s_589_,q_590,q_590_,s_591,s_591_,q_592,q_592_,s_593,s_593_,betweenstory_67,s_594,s_594_,q_595,q_595_,s_596,s_596_,s_597,s_597_,s_598,s_598_,s_599,s_599_,q_600,q_600_,s_601,s_601_,s_602,s_602_,betweenstory_68,s_603,s_603_,s_604,s_604_,q_605,q_605_,s_606,s_606_,s_607,s_607_,s_608,s_608_,s_609,s_609_,s_610,s_610_,betweenstory_69,s_611,s_611_,q_612,q_612_,s_613,s_613_,q_614,q_614_,s_615,s_615_,s_616,s_616_,s_617,s_617_,s_618,s_618_,q_619,q_619_,s_620,s_620_,betweenstory_70,s_621,s_621_,s_622,s_622_,s_623,s_623_,s_624,s_624_,q_625,q_625_,s_626,s_626_,s_627,s_627_,s_628,s_628_,betweenstory_71,s_629,s_629_,s_630,s_630_,s_631,s_631_,s_632,s_632_,s_633,s_633_,s_634,s_634_,q_635,q_635_,s_636,s_636_,betweenstory_72,s_637,s_637_,s_638,s_638_,q_639,q_639_,s_640,s_640_,s_641,s_641_,s_642,s_642_,q_643,q_643_,s_644,s_644_,q_645,q_645_,s_646,s_646_,betweenstory_73,s_647,s_647_,q_648,q_648_,s_649,s_649_,q_650,q_650_,s_651,s_651_,s_652,s_652_,q_653,q_653_,s_654,s_654_,q_655,q_655_,s_656,s_656_,s_657,s_657_,betweenstory_74,s_658,s_658_,s_659,s_659_,s_660,s_660_,s_661,s_661_,q_662,q_662_,s_663,s_663_,q_664,q_664_,s_665,s_665_,q_666,q_666_,s_667,s_667_,betweenstory_75,s_668,s_668_,q_669,q_669_,s_670,s_670_,s_671,s_671_,q_672,q_672_,s_673,s_673_,s_674,s_674_,s_675,s_675_,s_676,s_676_,betweenstory_76,s_677,s_677_,q_678,q_678_,s_679,s_679_,q_680,q_680_,s_681,s_681_,q_682,q_682_,s_683,s_683_,s_684,s_684_,q_685,q_685_,s_686,s_686_,s_687,s_687_,betweenstory_77,s_688,s_688_,q_689,q_689_,s_690,s_690_,q_691,q_691_,s_692,s_692_,s_693,s_693_,q_694,q_694_,s_695,s_695_,s_696,s_696_,q_697,q_697_,s_698,s_698_,betweenstory_78,s_699,s_699_,q_700,q_700_,s_701,s_701_,s_702,s_702_,q_703,q_703_,s_704,s_704_,s_705,s_705_,s_706,s_706_,q_707,q_707_,s_708,s_708_,betweenstory_79,s_709,s_709_,s_710,s_710_,q_711,q_711_,s_712,s_712_,s_713,s_713_,q_714,q_714_,s_715,s_715_,s_716,s_716_,q_717,q_717_,s_718,s_718_,betweenstory_80,s_719,s_719_,s_720,s_720_,q_721,q_721_,s_722,s_722_,s_723,s_723_,q_724,q_724_,s_725,s_725_,q_726,q_726_,s_727,s_727_,s_728,s_728_,betweenstory_81,s_729,s_729_,s_730,s_730_,q_731,q_731_,s_732,s_732_,s_733,s_733_,s_734,s_734_,s_735,s_735_,s_736,s_736_,betweenstory_82,s_737,s_737_,s_738,s_738_,q_739,q_739_,s_740,s_740_,s_741,s_741_,q_742,q_742_,s_743,s_743_,s_744,s_744_,s_745,s_745_,betweenstory_83,s_746,s_746_,q_747,q_747_,s_748,s_748_,q_749,q_749_,s_750,s_750_,q_751,q_751_,s_752,s_752_,s_753,s_753_,q_754,q_754_,s_755,s_755_,s_756,s_756_,betweenstory_84,s_757,s_757_,q_758,q_758_,s_759,s_759_,s_760,s_760_,q_761,q_761_,s_762,s_762_,s_763,s_763_,q_764,q_764_,s_765,s_765_,q_766,q_766_,s_767,s_767_,betweenstory_85,s_768,s_768_,q_769,q_769_,s_770,s_770_,q_771,q_771_,s_772,s_772_,q_773,q_773_,s_774,s_774_,s_775,s_775_,s_776,s_776_,s_777,s_777_,betweenstory_86,s_778,s_778_,q_779,q_779_,s_780,s_780_,q_781,q_781_,s_782,s_782_,s_783,s_783_,q_784,q_784_,s_785,s_785_,s_786,s_786_,q_787,q_787_,s_788,s_788_,betweenstory_87,s_789,s_789_,q_790,q_790_,s_791,s_791_,s_792,s_792_,s_793,s_793_,s_794,s_794_,q_795,q_795_,s_796,s_796_,s_797,s_797_,betweenstory_88,s_798,s_798_,q_799,q_799_,s_800,s_800_,s_801,s_801_,q_802,q_802_,s_803,s_803_,s_804,s_804_,q_805,q_805_,s_806,s_806_,s_807,s_807_,betweenstory_89,s_808,s_808_,q_809,q_809_,s_810,s_810_,s_811,s_811_,s_812,s_812_,q_813,q_813_,s_814,s_814_,s_815,s_815_,s_816,s_816_,betweenstory_90,s_817,s_817_,s_818,s_818_,s_819,s_819_,s_820,s_820_,s_821,s_821_,s_822,s_822_,s_823,s_823_,betweenstory_91,s_824,s_824_,s_825,s_825_,s_826,s_826_,q_827,q_827_,s_828,s_828_,s_829,s_829_,s_830,s_830_,s_831,s_831_,betweenstory_92,s_832,s_832_,s_833,s_833_,s_834,s_834_,s_835,s_835_,q_836,q_836_,s_837,s_837_,s_838,s_838_,s_839,s_839_,betweenstory_93,s_840,s_840_,s_841,s_841_,s_842,s_842_,q_843,q_843_,s_844,s_844_,q_845,q_845_,s_846,s_846_,q_847,q_847_,s_848,s_848_,s_849,s_849_,betweenstory_94,s_850,s_850_,q_851,q_851_,s_852,s_852_,s_853,s_853_,s_854,s_854_,s_855,s_855_,s_856,s_856_,q_857,q_857_,s_858,s_858_,betweenstory_95,s_859,s_859_,s_860,s_860_,s_861,s_861_,s_862,s_862_,s_863,s_863_,q_864,q_864_,s_865,s_865_,q_866,q_866_,s_867,s_867_,betweenstory_96,s_868,s_868_,q_869,q_869_,s_870,s_870_,s_871,s_871_,s_872,s_872_,q_873,q_873_,s_874,s_874_,s_875,s_875_,s_876,s_876_,betweenstory_97,s_877,s_877_,s_878,s_878_,s_879,s_879_,q_880,q_880_,s_881,s_881_,q_882,q_882_,s_883,s_883_,s_884,s_884_,s_885,s_885_,betweenstory_98,s_886,s_886_,s_887,s_887_,s_888,s_888_,s_889,s_889_,s_890,s_890_,s_891,s_891_,s_892,s_892_,betweenstory_99,s_893,s_893_,q_894,q_894_,s_895,s_895_,s_896,s_896_,s_897,s_897_,q_898,q_898_,s_899,s_899_,q_900,q_900_,s_901,s_901_,q_902,q_902_,s_903,s_903_,betweenstory_100,comments],
  display_element: 'jspsych-target',
  show_progress_bar: true,
  on_data_update: function(data) {
      psiturk.recordTrialData(data);
  },

  on_finish: function(){
    // psiturk save
    psiturk.saveData({
      success: function(){ 
        psiturk.computeBonus(
          'compute_bonus', 
          function(){psiturk.completeHIT()}
        ); 
      }
    })
  }
})