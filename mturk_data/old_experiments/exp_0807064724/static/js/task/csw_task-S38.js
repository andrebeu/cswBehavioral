// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 2500
var MIN_STORY_ITI = 500

var intro_instructions = {
  type: 'instructions',
  pages: [
  'Use the left- and right-arrow keys to navigate these instructions.',
  'Please read the following instructions carefully.',
  'We are interested in how people learn (probabilistic) regularities.',
  'This task involves reading stories and answering questions about the stories.',
  'Your goal is to learn the regularities in the stories<br>and answer as many question correctly as you can.',
  'Do not worry if you notice yourself getting a few answers wrong. We expect that to happen.',
  'The questions will ask you to predict what happens next in the story.<br>And just like in real life, nobody can predict everything.',
  'To ensure you are paying attention,<br> we included a few questions where the answer should be obvious.',
  'If you do pay attention, and learn some regularities, <br>we will pay you an extra bonus of up to $5.',
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
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_5 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_5_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_9 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_16 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_16_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_24 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_24_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_32 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_32_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_33 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_40 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_40_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_42_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
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
	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_44 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_44_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
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
	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_46 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_46_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_48 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_48_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_50 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_50_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_52 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_52_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_57_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_59 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_59_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_60 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_60_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_61 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_61_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_62 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_62_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_67 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_67_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
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
	var s_68 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_68_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_69 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_69_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_71 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_71_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_74_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_78 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_78_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_80_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_82 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_82_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_83 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_83_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_85_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_87_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_89 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_89_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_90 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_90_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_92 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_92_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_93 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_93_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_94 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_94_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_95 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_95_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_97_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_99_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_100 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_100_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_101 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_101_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_102 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_102_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_103 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_103_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_105 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_105_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_106 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_106_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_107 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_107_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_108 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_108_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_109 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_109_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_110 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_110_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_111 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_111_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_112 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_112_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_113_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_115 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_115_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_117 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_117_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_118 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_118_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_119 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_119_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_120 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_120_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_121 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_121_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_122 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_122_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_124 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_124_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_125_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_126 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_126_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_127 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_127_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_128 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_128_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_129 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_129_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_130 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_130_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_131 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_131_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_133 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_133_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_135 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_135_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_136 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_136_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_137 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_137_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_138 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_138_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_139 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_139_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_140_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_141 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_141_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_142 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_142_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_143 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_143_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_145 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_145_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_146 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_146_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_147 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_147_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_148 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_148_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_150 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_150_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_151 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_151_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_152_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_154 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_154_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_155 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_155_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_156 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_156_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
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
	var s_157 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_157_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_158 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_158_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_159 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_159_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_160 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_160_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_162 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_162_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_163 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_163_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_164 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_164_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_166 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_166_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_167 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_167_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_168 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_168_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_170 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_170_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_171 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_171_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_173_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_175 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_175_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_176 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_176_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_177 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_177_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_178 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_178_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_179 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_179_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_180 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_180_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_182 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_182_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_183 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_183_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_184 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_184_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_185 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_185_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_186 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_186_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_187 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_187_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_188 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_188_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_189 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_189_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_191 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_191_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
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
	var s_192 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_192_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_194_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_195 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_195_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_196_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_197 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_197_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_198 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_198_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_199 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_199_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_200 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_200_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_201 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_201_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_202 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_202_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_203 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_203_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_204 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_204_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
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
	var s_205 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_205_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_206 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_206_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_208 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_208_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_209 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_209_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_210 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_210_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_212 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_212_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_213 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_213_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_214 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_214_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_216 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_216_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_218 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_218_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_220_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_221 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_221_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_222 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_222_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_223 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_223_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_224 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_224_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_226 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_226_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_227 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_227_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_228 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_228_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_229 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_229_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_230 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_230_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_231 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_231_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_232 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_232_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_233 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_233_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_235 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_235_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_236 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_236_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_237 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_237_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_239 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_239_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_240 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_240_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_241 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_241_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_242 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_242_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_243 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_243_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_244 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_244_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_245 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_245_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_247 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_247_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_249 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_249_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_250 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_250_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_251 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_251_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_252 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_252_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_253 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_253_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_254 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_254_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_255 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_255_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_256 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_256_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_257 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_257_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_259 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_259_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_260 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_260_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_262 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_262_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_264 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_264_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_265 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_265_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_266 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_266_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_267 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_267_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_268 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_268_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_269 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_269_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_270 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_270_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_271 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_271_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_273 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_273_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_274 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_274_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_275 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_275_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_276_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_278_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_280 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_280_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_281 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_281_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_282 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_282_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_283 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_283_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_284 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_284_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_285 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_285_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_286_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
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
	var s_287 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_287_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_288 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_288_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_290 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_290_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_291 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_291_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_292 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_292_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_293 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_293_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_294 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_294_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_295 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_295_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_296 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_296_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_297 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_297_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_298 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_298_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_299 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_299_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_300_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_302_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_303 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_303_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_304 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_304_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_305 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_305_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_306 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_306_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_307 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_307_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_308 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_308_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_309 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_309_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_310 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_310_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_311 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_311_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_312 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_312_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_313 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_313_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_315 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_315_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_316 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_316_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_318 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_318_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_319 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_319_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_321 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_321_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_322 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_322_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_323 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_323_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_325 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_325_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_326 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_326_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_327 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_327_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_328 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_328_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_330 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_330_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_332 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_332_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
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
	var s_333 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_333_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_334 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_334_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_336 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_336_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_337 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_337_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_338 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_338_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_339 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_339_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_340 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_340_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_341 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_341_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_343 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_343_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_344 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_344_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_345 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_345_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_346 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_346_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_348 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_348_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_349 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_349_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_351 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_351_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_353 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_353_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_354 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_354_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_355 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_355_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_356 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_356_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_357 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_357_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_359 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_359_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_360 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_360_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_361 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_361_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_362 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_362_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_363 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_363_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_364 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_364_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_365 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_365_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_366 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_366_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_367 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_367_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_369 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_369_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_370 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_370_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_371 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_371_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_372 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_372_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_373 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_374 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_374_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_375 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_375_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
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
	var s_376 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_376_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_377 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_377_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
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
	var s_378 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_378_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_379 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_379_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_380 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_380_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_381 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_381_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_382 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_382_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_383 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_383_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_384_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_386 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_386_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_388 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_388_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
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
	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_390 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_390_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_392 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_392_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_394 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_394_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_395 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_395_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_396 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_396_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_397 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_397_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_399 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_399_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_400 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_400_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_402_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_404_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_405 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_405_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_406 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_406_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_407 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_407_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_408 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_408_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_409 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_409_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_412 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_412_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_413 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_413_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_414 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_414_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_415 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_415_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_416 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_416_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_417 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_417_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_418 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_418_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_419 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_419_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_420 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_420_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_421 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_421_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_422 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_422_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_423 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_423_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_424 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_424_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_425 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_425_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_426 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_426_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_428 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_428_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_430 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_430_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_431 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_431_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_432 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_432_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_433 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_433_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_434 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_434_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_436_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_438 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_438_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_439 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_439_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_440 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_440_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_441 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_441_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_442 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_442_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_443 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_443_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_444 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_444_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_445 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_445_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_446 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_446_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_447 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_447_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_448 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_448_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_449 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_449_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_450 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_450_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_451 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_451_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_452 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_452_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_453 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_453_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_454 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_454_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_456 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_456_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
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
	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_458 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_458_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_459 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_459_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_460 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_460_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_461 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_461_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_462 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_462_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_463 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_463_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_464 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_464_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_465 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_465_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_467 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_467_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_468 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_468_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_469 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_469_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
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
	var s_470 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_470_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_471 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_471_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_472 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_472_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_473 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_473_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_474 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_474_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_475 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_475_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_476 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_476_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_477 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_477_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_478 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_478_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_479 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_479_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_480 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_480_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_481 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_481_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_482 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_482_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_483 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_483_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_484 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_484_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_485 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_485_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_486 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_486_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_487 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_487_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_488 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_488_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_489 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_489_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_490 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_490_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_492 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_492_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_494 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_494_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_495 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_495_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_497 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_497_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_498 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_498_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_499 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_499_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_500 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_500_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_501 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_501_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_502 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_502_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_503 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_503_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_505 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_505_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
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
	var s_506 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_506_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_507 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_507_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_508 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_508_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_509_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_511 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_511_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_513 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_513_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_514 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_514_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_515 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_515_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_517 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_517_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_518 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_518_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_519 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_519_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_520 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_520_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_521 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_521_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_522 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_522_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_523 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_523_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_524 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_524_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_525 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_525_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_527 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_527_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "SWELL",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_528 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_528_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_529 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_529_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_530 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_530_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_531 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_531_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_532 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_532_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_534 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_534_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_535 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_535_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_536 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_536_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_537 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_537_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_538 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_538_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_540 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_540_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_541 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_541_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_542 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_542_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_543 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_543_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_544 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_544_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_545 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_545_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_547_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_549 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_549_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_550 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_550_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_551 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_551_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_552 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_552_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_553 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_553_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_554 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_554_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_555 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_555_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_556 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_556_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_557 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_557_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_558 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_558_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_559 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_559_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_560 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_560_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_561 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_561_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_562 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_562_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_563 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_563_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_564 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_564_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
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
	var s_565 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_565_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_566_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_567 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_567_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_568 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_568_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_569 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_569_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_570 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_570_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_571 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_571_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_572 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_572_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_573 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_573_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_575 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_575_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_576 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_576_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_577 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_577_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_578 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_578_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_579 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_579_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_580 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_580_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_581 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_581_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_582_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_583 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_583_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_584 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_584_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_586 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_586_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_588 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_588_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_589 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_589_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_590 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_590_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_591 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_591_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_592 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_592_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_593 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_593_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_594 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_594_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_595 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_595_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_597 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_597_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_598 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_598_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_599 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_599_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
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
	var s_600 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_600_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_601 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_601_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_602 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_602_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_604 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_604_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_605 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_605_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_606 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_606_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_607 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_607_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_608 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_608_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_610 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_610_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_611 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_611_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_612 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_612_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_613 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_613_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_614_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_616 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_616_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_617 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_617_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_618 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_618_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_619 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_619_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_620 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_620_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_621 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_621_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
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
	var s_622 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_622_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_624 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_624_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_626 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_626_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_627 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_627_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_628 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_628_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_629 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_629_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_631 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_631_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_633 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_633_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_635 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_635_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_636 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_636_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_639 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_639_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_640 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_640_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_642 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_642_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_643 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_643_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_644 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_644_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_645 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_645_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_646 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_646_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_647 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_647_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_648 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_648_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_649 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_649_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_650 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_650_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_651 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_651_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_652 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_652_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_653 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_653_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_654 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_654_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_655 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_655_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
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
	var s_656 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_656_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_658 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_658_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_659 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_659_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_660 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_660_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_661 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_661_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_662 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_662_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_663 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_663_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_664 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_664_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_666 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_666_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_667 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_667_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_668 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_668_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_669 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_669_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_670 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_670_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_671 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_671_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_672 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_672_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_673 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_673_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_674 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_674_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_675 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_675_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_677 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_677_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
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
	var s_678 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_678_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_679 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_679_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_680 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_680_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_682 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_682_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_683 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_683_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_684 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_684_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_685 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_685_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_687 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_687_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_688 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_688_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_689 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_689_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_690 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_690_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_691 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_691_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_693 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_693_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_694 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_694_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_695 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_695_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_696 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_696_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_697 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_697_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_698 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_698_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_699 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_699_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_700 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_700_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_701 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_701_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_702 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_702_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_703 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_703_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_704 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_704_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_705 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_705_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_706 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_706_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_707 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_707_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_708 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_708_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_709 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_709_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_711 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_711_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_712 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_712_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_713 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_713_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_714 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_714_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_715 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_715_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_717 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_717_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_718 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_718_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_720 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_720_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_721 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_721_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_722 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_722_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_724 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_724_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_725 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_725_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_726 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_726_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_727 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_727_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_728 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_728_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_729 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_729_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_731 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_731_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_733 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_733_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_735 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_735_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_736 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_736_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_737 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_737_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_739 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_739_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_740 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_740_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_741 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_741_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_742 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_742_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_744 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_744_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_745 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_745_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_746 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_746_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_747 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_747_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_748 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_748_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
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
	var s_749 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_749_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_751 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_751_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_753 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_753_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_754 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_754_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_755 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_755_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_756 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_756_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_757 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_757_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_758 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_758_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_759 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_759_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement."],
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
	var s_760 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_760_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_761 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_761_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_762 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_762_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_763 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_763_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_764 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_764_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_765 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_765_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_766 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_766_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_767 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_767_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_768 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_768_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_769 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_769_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_770 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_770_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_771 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_771_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_772 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_772_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_773 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_773_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
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
	var s_774 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_774_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_776 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_776_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_778 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_778_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_779 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_779_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_780 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_780_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_781 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_781_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_782 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_782_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_784 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_784_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_785 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_785_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is all we could ever know!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_786 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_786_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_787 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_787_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_788 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_788_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_789 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_789_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_790 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_790_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_792 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_792_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_793 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_793_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_794 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_794_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_795 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_795_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_796 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_796_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_799 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_799_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_800 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_800_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_801 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_801_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_802 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_802_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_803 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_803_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_804 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_804_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_805 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_805_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_806 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_806_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_808_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_810 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_810_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_812 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_812_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_813 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_813_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_814 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_814_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_815 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_815_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_817 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_817_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_818 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_818_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_819 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_819_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_820 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_820_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_821 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_821_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_822 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_822_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_823 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_823_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_824 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_824_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_826 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_826_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_827 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_827_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_828 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_828_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_829 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_829_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_830 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_830_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_831 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_831_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_832 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_832_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_834 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_834_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_835 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_835_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
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
	var s_836 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_836_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_837 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_837_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_838 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_838_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_839 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_839_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_840 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_840_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_842 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_842_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_843 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_843_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_844 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_844_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_845 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_845_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_846 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_846_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_847 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_847_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_849 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_849_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_850 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_850_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_851 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_851_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_852 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_852_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_854 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_854_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_855 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_855_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_856 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_856_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_857 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_857_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_858 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_858_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_859 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_859_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_860 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_860_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_862 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_862_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_863_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_864 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_864_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_865 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_865_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_866 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_866_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_867 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_867_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_869 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_869_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_870 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_870_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_871 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_871_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_873 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_873_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_874 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_874_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_875 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_875_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_876 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_876_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_878 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_878_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_879 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_879_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_880 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_880_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_881 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_881_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_882 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_882_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
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
	var s_883 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_883_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_884 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_884_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_885 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_885_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_886 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_886_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_887 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_887_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_888 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_888_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_889 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_889_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_890 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_890_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_891 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_891_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_892 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_892_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_893 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_893_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_894 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_894_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_895 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_895_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_896 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_896_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_898 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_898_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_899 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_899_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_900 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_900_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_901 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_901_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_902 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_902_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_903 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_903_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_904 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_904_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_905 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_905_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_906 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_906_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_907 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_907_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_908 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_908_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_909 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_909_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_910 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_910_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
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
	var s_911 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_911_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_912 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_912_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_913 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_913_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_914 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_914_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_915 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_915_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_916 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_916_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_917 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_917_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_918 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_918_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_919 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_919_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_920 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_920_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_921 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_921_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_922 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_922_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_923 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_923_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_924 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_924_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_925 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_925_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_926 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_926_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.", "Bill <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_927 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_927_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_928 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_928_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_929 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_929_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_930 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_930_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_931 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_931_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_932 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_932_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_933 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_933_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_934 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_934_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_935 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_935_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_936 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_936_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_937 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_937_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement."],
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
	var s_938 = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_938_ = {
		type: "html-keyboard-response",
		stimulus: "Alice <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_939 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_939_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_940 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_940_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Alice <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_941 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_941_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_942 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_942_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_943 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_943_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_944 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_944_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_945 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_945_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_946 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_946_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_947 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_947_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_948 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_948_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_949 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_949_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_950 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_950_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_951 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_951_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_952 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_952_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_953 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_953_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_954 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_954_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_955 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_955_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_956 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_956_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_957 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_957_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_958 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_958_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_959 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_959_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.", "Bill <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "SWELL",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_960 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_960_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_961 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_961_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_962 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_962_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_963 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_963_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_964 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_964_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_965 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_965_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_966 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_966_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_967 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_967_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_968 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_968_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_969 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_969_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
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
	var s_970 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_970_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_971 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_971_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_972 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_972_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_973 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_973_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_974 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_974_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_975 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_975_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_976 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_976_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_977 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_977_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_978 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_978_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_979 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_979_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_980 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_980_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_981 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_981_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_982 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_982_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Alice <b>realized</b> <br>'Maybe in the library!'", "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'"],
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
	var s_983 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_983_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_984 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_984_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_985 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_985_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_986 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_986_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_987 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_987_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_988 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_988_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_989 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_989_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_990 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_990_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_991 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_991_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_992 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_992_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_993 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_993_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'muddy water' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
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
	var s_994 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_994_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'muddy water' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_995 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_995_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_996 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_996_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_997 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_997_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_998 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_998_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_999 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_999_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1000 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1000_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1001 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1001_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1002 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1002_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1003 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1003_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1004 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1004_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1005 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1005_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1006 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1006_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1007 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1007_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'"],
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
	var s_1008 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1008_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1009 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1009_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1010 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1010_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1011 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1011_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1012 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1012_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1013 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1013_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1014 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1014_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1015 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1015_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill <b>knew!</b> <br> the 'silk potion' was swell here.", "A friend had <b>told</b> Bill <br> they had 'skeletons' in the basement."],
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
	var s_1016 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1016_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1017 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1017_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "AFTER",
						"false_tonode": "SAW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1018 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1018_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1019 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1019_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1020 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1020_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1021 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1021_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1022 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1022_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1023 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1023_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That was when they saw Bill <b>transport</b>. <br>"],
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
	var s_1024 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1024_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1025 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1025_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1026 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1026_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1027 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1027_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'muddy water' was swell here."],
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
	var s_1028 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1028_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1029 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1029_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1030 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1030_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1031 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1031_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1032 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1032_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:", "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1033 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1033_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1034 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1034_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1035 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1035_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1036 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1036_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
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
	var s_1037 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1037_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1038 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1038_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1039 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1039_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1040 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1040_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1041 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1041_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SWELL",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1042 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1042_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1043 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1043_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
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
	var s_1044 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1044_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1045 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1045_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:", "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1046 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1046_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1047 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1047_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1048 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1048_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1049 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1049_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1050 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1050_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1051 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1051_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1052 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1052_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1053 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1053_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1054 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1054_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1055 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1055_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1056 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1056_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1057 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1057_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1058 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1058_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1059 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1059_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That was when they saw Alice <b>transport</b>. <br>"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1060 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1060_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1061 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1061_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1062 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1062_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1063 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1063_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Bill <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1064 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1064_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'", "AFTER ORDERING, Bill <b>realized</b> <br>'Maybe in the library!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1065 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1065_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1066 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1066_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SAW",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1067 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1067_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the panda's top hat did flatten.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1068 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1068_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1069 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1069_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1070 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1070_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1071 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1071_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Bill <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1072 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1072_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1073 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1073_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Bill walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1074 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1074_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1075 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1075_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1076 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1076_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_1077 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1077_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1078 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1078_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1079 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1079_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be a self beyond the dreamed self.'", "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1080 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1080_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1081 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1081_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Bill <b>transport</b>. <br>", "That must have been when Bill <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1082 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1082_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1083 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1083_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1084 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1084_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Bill walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1085 = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1085_ = {
		type: "html-keyboard-response",
		stimulus: "Bill <b>knew!</b> <br> the 'silk potion' was swell here.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SWELL",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1086 = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1086_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER ORDERING, Bill <b>realized</b> <br>'Old Reilly stole that stallion!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1087 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1087_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1088 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1088_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:", "A memory then came to Bill's mind<br>It was <b>his shaman-guru</b> yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1089 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1089_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled <b>his own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1090 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1090_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SELFSAY",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1091 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1091_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1092 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1092_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill <b>transcended</b>.", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1093 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1093_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1094 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1094_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1095 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1095_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1096 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1096_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.", "Alice <b>knew!</b> <br> the 'silk potion' was swell here."],
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
	var s_1097 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1097_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1098 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1098_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'Einstein drinking coffee?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1099 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1099_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1100 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1100_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1101 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1101_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1102 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1102_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1103_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice <b>transcended</b>.", "That must have been when Bill <b>transcended</b>."],
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
	var s_1104 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1104_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice <b>transcended</b>.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1105 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1105_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1106 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1106_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening <br> Alice walked into the <b>brew house</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1107 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1107_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'skeletons' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1108_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1109 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1109_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'The mirrors are labyrinths?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1110 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1110_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'", "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SAW",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1111 = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1111_ = {
		type: "html-keyboard-response",
		stimulus: "And suddenly, the <b>radio began</b> <br>'the bitter boogie ...'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1112 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1112_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SELFSAY",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1113 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1113_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SELFSAY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1114 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1114_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>self-personal-metastory</b> <br>is that which is never Real and True!'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1115 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1115_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1116 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1116_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1117 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1117_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning <br> Alice walked into the <b>drinks shop</b>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1118 = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1118_ = {
		type: "html-keyboard-response",
		stimulus: "A friend had <b>told</b> Alice <br> they had 'a dance party' in the basement.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1119 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1119_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'", "It was then that Bill <b>saw</b> <br> 'The mirrors are labyrinths?'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "SAW",
						"false_tonode": "SAW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1120 = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1120_ = {
		type: "html-keyboard-response",
		stimulus: "It was then that Alice <b>saw</b> <br> 'Einstein drinking coffee?'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SAW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1121 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1121_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.", "And suddenly, the <b>radio began</b> <br>'the established science of unicorns ...'"],
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
	var s_1122 = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1122_ = {
		type: "html-keyboard-response",
		stimulus: "It took a long time, <br>but <b>eventually</b> the walls became geometric shapes.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1123 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1123_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:", "Alice, there and then, recalled <b>her own saying</b><br>in a low and soothing voice:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SELFSAY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1124 = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1124_ = {
		type: "html-keyboard-response",
		stimulus: "A memory then came to Alice's mind<br>It was <b>her shaman-guru</b> yelling:",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1125_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'", "'Our <b>self-personal-metastory</b> <br>is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1126 = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1126_ = {
		type: "html-keyboard-response",
		stimulus: "'Our <b>dream-narrative</b> couldn't possibly <br>be introspectively our own.'",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1127 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1127_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That was when they saw Alice <b>transport</b>. <br>", "That must have been when Alice <b>transcended</b>."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1128 = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1128_ = {
		type: "html-keyboard-response",
		stimulus: "That was when they saw Alice <b>transport</b>. <br>",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1129 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1129_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 


// CODE BODY END


var comments = {
  type: 'survey-text',
  questions: [{prompt: "Thanks for participating! We appreciate any feedback.", 
                rows: 15, columns: 100}],
  }

jsPsych.init({
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,s_3,s_3_,s_4,s_4_,s_5,s_5_,s_6,s_6_,s_7,s_7_,s_8,s_8_,betweenstory_1,s_9,s_9_,s_10,s_10_,s_11,s_11_,s_12,s_12_,s_13,s_13_,s_14,s_14_,s_15,s_15_,s_16,s_16_,betweenstory_2,s_17,s_17_,s_18,s_18_,s_19,s_19_,s_20,s_20_,s_21,s_21_,s_22,s_22_,s_23,s_23_,s_24,s_24_,betweenstory_3,s_25,s_25_,s_26,s_26_,s_27,s_27_,s_28,s_28_,s_29,s_29_,s_30,s_30_,s_31,s_31_,s_32,s_32_,betweenstory_4,s_33,s_33_,s_34,s_34_,s_35,s_35_,s_36,s_36_,s_37,s_37_,s_38,s_38_,s_39,s_39_,s_40,s_40_,betweenstory_5,s_41,s_41_,q_42,q_42_,s_43,s_43_,q_44,q_44_,s_45,s_45_,q_46,q_46_,s_47,s_47_,q_48,q_48_,s_49,s_49_,q_50,q_50_,s_51,s_51_,q_52,q_52_,s_53,s_53_,s_54,s_54_,betweenstory_6,s_55,s_55_,s_56,s_56_,q_57,q_57_,s_58,s_58_,s_59,s_59_,q_60,q_60_,s_61,s_61_,q_62,q_62_,s_63,s_63_,s_64,s_64_,s_65,s_65_,betweenstory_7,s_66,s_66_,q_67,q_67_,s_68,s_68_,q_69,q_69_,s_70,s_70_,q_71,q_71_,s_72,s_72_,s_73,s_73_,q_74,q_74_,s_75,s_75_,s_76,s_76_,s_77,s_77_,betweenstory_8,s_78,s_78_,s_79,s_79_,q_80,q_80_,s_81,s_81_,s_82,s_82_,q_83,q_83_,s_84,s_84_,q_85,q_85_,s_86,s_86_,q_87,q_87_,s_88,s_88_,s_89,s_89_,betweenstory_9,s_90,s_90_,s_91,s_91_,q_92,q_92_,s_93,s_93_,s_94,s_94_,q_95,q_95_,s_96,s_96_,q_97,q_97_,s_98,s_98_,q_99,q_99_,s_100,s_100_,s_101,s_101_,betweenstory_10,s_102,s_102_,s_103,s_103_,s_104,s_104_,q_105,q_105_,s_106,s_106_,s_107,s_107_,s_108,s_108_,q_109,q_109_,s_110,s_110_,s_111,s_111_,betweenstory_11,s_112,s_112_,q_113,q_113_,s_114,s_114_,s_115,s_115_,s_116,s_116_,q_117,q_117_,s_118,s_118_,s_119,s_119_,q_120,q_120_,s_121,s_121_,s_122,s_122_,betweenstory_12,s_123,s_123_,s_124,s_124_,q_125,q_125_,s_126,s_126_,q_127,q_127_,s_128,s_128_,s_129,s_129_,s_130,s_130_,q_131,q_131_,s_132,s_132_,s_133,s_133_,betweenstory_13,s_134,s_134_,s_135,s_135_,s_136,s_136_,q_137,q_137_,s_138,s_138_,s_139,s_139_,q_140,q_140_,s_141,s_141_,s_142,s_142_,s_143,s_143_,betweenstory_14,s_144,s_144_,s_145,s_145_,q_146,q_146_,s_147,s_147_,q_148,q_148_,s_149,s_149_,s_150,s_150_,s_151,s_151_,q_152,q_152_,s_153,s_153_,s_154,s_154_,betweenstory_15,s_155,s_155_,q_156,q_156_,s_157,s_157_,s_158,s_158_,q_159,q_159_,s_160,s_160_,s_161,s_161_,s_162,s_162_,q_163,q_163_,s_164,s_164_,s_165,s_165_,betweenstory_16,s_166,s_166_,s_167,s_167_,q_168,q_168_,s_169,s_169_,s_170,s_170_,q_171,q_171_,s_172,s_172_,q_173,q_173_,s_174,s_174_,s_175,s_175_,s_176,s_176_,betweenstory_17,s_177,s_177_,q_178,q_178_,s_179,s_179_,q_180,q_180_,s_181,s_181_,q_182,q_182_,s_183,s_183_,s_184,s_184_,q_185,q_185_,s_186,s_186_,q_187,q_187_,s_188,s_188_,s_189,s_189_,betweenstory_18,s_190,s_190_,q_191,q_191_,s_192,s_192_,s_193,s_193_,q_194,q_194_,s_195,s_195_,q_196,q_196_,s_197,s_197_,q_198,q_198_,s_199,s_199_,q_200,q_200_,s_201,s_201_,s_202,s_202_,betweenstory_19,s_203,s_203_,q_204,q_204_,s_205,s_205_,q_206,q_206_,s_207,s_207_,s_208,s_208_,s_209,s_209_,q_210,q_210_,s_211,s_211_,q_212,q_212_,s_213,s_213_,s_214,s_214_,betweenstory_20,s_215,s_215_,s_216,s_216_,s_217,s_217_,s_218,s_218_,s_219,s_219_,q_220,q_220_,s_221,s_221_,q_222,q_222_,s_223,s_223_,s_224,s_224_,betweenstory_21,s_225,s_225_,q_226,q_226_,s_227,s_227_,s_228,s_228_,q_229,q_229_,s_230,s_230_,q_231,q_231_,s_232,s_232_,q_233,q_233_,s_234,s_234_,q_235,q_235_,s_236,s_236_,s_237,s_237_,betweenstory_22,s_238,s_238_,s_239,s_239_,q_240,q_240_,s_241,s_241_,q_242,q_242_,s_243,s_243_,q_244,q_244_,s_245,s_245_,s_246,s_246_,s_247,s_247_,s_248,s_248_,betweenstory_23,s_249,s_249_,s_250,s_250_,q_251,q_251_,s_252,s_252_,q_253,q_253_,s_254,s_254_,q_255,q_255_,s_256,s_256_,s_257,s_257_,s_258,s_258_,s_259,s_259_,betweenstory_24,s_260,s_260_,s_261,s_261_,q_262,q_262_,s_263,s_263_,q_264,q_264_,s_265,s_265_,q_266,q_266_,s_267,s_267_,q_268,q_268_,s_269,s_269_,s_270,s_270_,s_271,s_271_,betweenstory_25,s_272,s_272_,s_273,s_273_,q_274,q_274_,s_275,s_275_,q_276,q_276_,s_277,s_277_,q_278,q_278_,s_279,s_279_,q_280,q_280_,s_281,s_281_,q_282,q_282_,s_283,s_283_,s_284,s_284_,betweenstory_26,s_285,s_285_,q_286,q_286_,s_287,s_287_,q_288,q_288_,s_289,s_289_,s_290,s_290_,q_291,q_291_,s_292,s_292_,q_293,q_293_,s_294,s_294_,q_295,q_295_,s_296,s_296_,s_297,s_297_,betweenstory_27,s_298,s_298_,s_299,s_299_,q_300,q_300_,s_301,s_301_,q_302,q_302_,s_303,s_303_,s_304,s_304_,q_305,q_305_,s_306,s_306_,s_307,s_307_,s_308,s_308_,betweenstory_28,s_309,s_309_,s_310,s_310_,q_311,q_311_,s_312,s_312_,q_313,q_313_,s_314,s_314_,s_315,s_315_,q_316,q_316_,s_317,s_317_,s_318,s_318_,s_319,s_319_,betweenstory_29,s_320,s_320_,s_321,s_321_,q_322,q_322_,s_323,s_323_,s_324,s_324_,q_325,q_325_,s_326,s_326_,q_327,q_327_,s_328,s_328_,s_329,s_329_,s_330,s_330_,betweenstory_30,s_331,s_331_,q_332,q_332_,s_333,s_333_,s_334,s_334_,s_335,s_335_,s_336,s_336_,s_337,s_337_,q_338,q_338_,s_339,s_339_,s_340,s_340_,betweenstory_31,s_341,s_341_,s_342,s_342_,q_343,q_343_,s_344,s_344_,s_345,s_345_,q_346,q_346_,s_347,s_347_,s_348,s_348_,q_349,q_349_,s_350,s_350_,s_351,s_351_,betweenstory_32,s_352,s_352_,s_353,s_353_,s_354,s_354_,s_355,s_355_,q_356,q_356_,s_357,s_357_,s_358,s_358_,q_359,q_359_,s_360,s_360_,s_361,s_361_,betweenstory_33,s_362,s_362_,s_363,s_363_,s_364,s_364_,q_365,q_365_,s_366,s_366_,q_367,q_367_,s_368,s_368_,q_369,q_369_,s_370,s_370_,q_371,q_371_,s_372,s_372_,s_373,s_373_,betweenstory_34,s_374,s_374_,q_375,q_375_,s_376,s_376_,q_377,q_377_,s_378,s_378_,s_379,s_379_,q_380,q_380_,s_381,s_381_,q_382,q_382_,s_383,s_383_,q_384,q_384_,s_385,s_385_,s_386,s_386_,betweenstory_35,s_387,s_387_,q_388,q_388_,s_389,s_389_,q_390,q_390_,s_391,s_391_,q_392,q_392_,s_393,s_393_,q_394,q_394_,s_395,s_395_,q_396,q_396_,s_397,s_397_,s_398,s_398_,s_399,s_399_,betweenstory_36,s_400,s_400_,s_401,s_401_,q_402,q_402_,s_403,s_403_,q_404,q_404_,s_405,s_405_,s_406,s_406_,s_407,s_407_,s_408,s_408_,s_409,s_409_,betweenstory_37,s_410,s_410_,s_411,s_411_,s_412,s_412_,q_413,q_413_,s_414,s_414_,s_415,s_415_,q_416,q_416_,s_417,s_417_,s_418,s_418_,s_419,s_419_,betweenstory_38,s_420,s_420_,s_421,s_421_,q_422,q_422_,s_423,s_423_,q_424,q_424_,s_425,s_425_,q_426,q_426_,s_427,s_427_,q_428,q_428_,s_429,s_429_,s_430,s_430_,s_431,s_431_,betweenstory_39,s_432,s_432_,q_433,q_433_,s_434,s_434_,s_435,s_435_,q_436,q_436_,s_437,s_437_,q_438,q_438_,s_439,s_439_,s_440,s_440_,q_441,q_441_,s_442,s_442_,s_443,s_443_,betweenstory_40,s_444,s_444_,s_445,s_445_,q_446,q_446_,s_447,s_447_,s_448,s_448_,s_449,s_449_,q_450,q_450_,s_451,s_451_,q_452,q_452_,s_453,s_453_,s_454,s_454_,betweenstory_41,s_455,s_455_,q_456,q_456_,s_457,s_457_,q_458,q_458_,s_459,s_459_,q_460,q_460_,s_461,s_461_,q_462,q_462_,s_463,s_463_,q_464,q_464_,s_465,s_465_,s_466,s_466_,s_467,s_467_,betweenstory_42,s_468,s_468_,q_469,q_469_,s_470,s_470_,q_471,q_471_,s_472,s_472_,q_473,q_473_,s_474,s_474_,s_475,s_475_,q_476,q_476_,s_477,s_477_,s_478,s_478_,s_479,s_479_,betweenstory_43,s_480,s_480_,q_481,q_481_,s_482,s_482_,q_483,q_483_,s_484,s_484_,q_485,q_485_,s_486,s_486_,q_487,q_487_,s_488,s_488_,q_489,q_489_,s_490,s_490_,s_491,s_491_,s_492,s_492_,betweenstory_44,s_493,s_493_,s_494,s_494_,q_495,q_495_,s_496,s_496_,q_497,q_497_,s_498,s_498_,s_499,s_499_,s_500,s_500_,q_501,q_501_,s_502,s_502_,s_503,s_503_,betweenstory_45,s_504,s_504_,q_505,q_505_,s_506,s_506_,s_507,s_507_,s_508,s_508_,q_509,q_509_,s_510,s_510_,q_511,q_511_,s_512,s_512_,q_513,q_513_,s_514,s_514_,s_515,s_515_,betweenstory_46,s_516,s_516_,s_517,s_517_,q_518,q_518_,s_519,s_519_,s_520,s_520_,q_521,q_521_,s_522,s_522_,s_523,s_523_,s_524,s_524_,s_525,s_525_,betweenstory_47,s_526,s_526_,q_527,q_527_,s_528,s_528_,s_529,s_529_,q_530,q_530_,s_531,s_531_,q_532,q_532_,s_533,s_533_,s_534,s_534_,q_535,q_535_,s_536,s_536_,s_537,s_537_,betweenstory_48,s_538,s_538_,s_539,s_539_,q_540,q_540_,s_541,s_541_,s_542,s_542_,q_543,q_543_,s_544,s_544_,q_545,q_545_,s_546,s_546_,q_547,q_547_,s_548,s_548_,s_549,s_549_,betweenstory_49,s_550,s_550_,s_551,s_551_,q_552,q_552_,s_553,s_553_,q_554,q_554_,s_555,s_555_,s_556,s_556_,q_557,q_557_,s_558,s_558_,s_559,s_559_,s_560,s_560_,betweenstory_50,s_561,s_561_,q_562,q_562_,s_563,s_563_,q_564,q_564_,s_565,s_565_,q_566,q_566_,s_567,s_567_,s_568,s_568_,q_569,q_569_,s_570,s_570_,q_571,q_571_,s_572,s_572_,s_573,s_573_,betweenstory_51,s_574,s_574_,s_575,s_575_,q_576,q_576_,s_577,s_577_,q_578,q_578_,s_579,s_579_,q_580,q_580_,s_581,s_581_,q_582,q_582_,s_583,s_583_,s_584,s_584_,s_585,s_585_,betweenstory_52,s_586,s_586_,s_587,s_587_,q_588,q_588_,s_589,s_589_,q_590,q_590_,s_591,s_591_,q_592,q_592_,s_593,s_593_,q_594,q_594_,s_595,s_595_,s_596,s_596_,s_597,s_597_,betweenstory_53,s_598,s_598_,q_599,q_599_,s_600,s_600_,q_601,q_601_,s_602,s_602_,s_603,s_603_,s_604,s_604_,q_605,q_605_,s_606,s_606_,s_607,s_607_,s_608,s_608_,betweenstory_54,s_609,s_609_,q_610,q_610_,s_611,s_611_,s_612,s_612_,s_613,s_613_,q_614,q_614_,s_615,s_615_,s_616,s_616_,q_617,q_617_,s_618,s_618_,s_619,s_619_,betweenstory_55,s_620,s_620_,q_621,q_621_,s_622,s_622_,s_623,s_623_,q_624,q_624_,s_625,s_625_,s_626,s_626_,q_627,q_627_,s_628,s_628_,q_629,q_629_,s_630,s_630_,s_631,s_631_,betweenstory_56,s_632,s_632_,q_633,q_633_,s_634,s_634_,s_635,s_635_,q_636,q_636_,s_637,s_637_,s_638,s_638_,q_639,q_639_,s_640,s_640_,s_641,s_641_,s_642,s_642_,betweenstory_57,s_643,s_643_,s_644,s_644_,q_645,q_645_,s_646,s_646_,s_647,s_647_,s_648,s_648_,q_649,q_649_,s_650,s_650_,q_651,q_651_,s_652,s_652_,s_653,s_653_,betweenstory_58,s_654,s_654_,q_655,q_655_,s_656,s_656_,s_657,s_657_,q_658,q_658_,s_659,s_659_,s_660,s_660_,s_661,s_661_,q_662,q_662_,s_663,s_663_,s_664,s_664_,betweenstory_59,s_665,s_665_,s_666,s_666_,q_667,q_667_,s_668,s_668_,s_669,s_669_,s_670,s_670_,q_671,q_671_,s_672,s_672_,q_673,q_673_,s_674,s_674_,s_675,s_675_,betweenstory_60,s_676,s_676_,q_677,q_677_,s_678,s_678_,s_679,s_679_,q_680,q_680_,s_681,s_681_,s_682,s_682_,q_683,q_683_,s_684,s_684_,q_685,q_685_,s_686,s_686_,s_687,s_687_,betweenstory_61,s_688,s_688_,s_689,s_689_,q_690,q_690_,s_691,s_691_,s_692,s_692_,q_693,q_693_,s_694,s_694_,s_695,s_695_,q_696,q_696_,s_697,s_697_,s_698,s_698_,betweenstory_62,s_699,s_699_,s_700,s_700_,q_701,q_701_,s_702,s_702_,q_703,q_703_,s_704,s_704_,s_705,s_705_,q_706,q_706_,s_707,s_707_,q_708,q_708_,s_709,s_709_,s_710,s_710_,betweenstory_63,s_711,s_711_,s_712,s_712_,q_713,q_713_,s_714,s_714_,q_715,q_715_,s_716,s_716_,s_717,s_717_,q_718,q_718_,s_719,s_719_,q_720,q_720_,s_721,s_721_,s_722,s_722_,betweenstory_64,s_723,s_723_,q_724,q_724_,s_725,s_725_,s_726,s_726_,q_727,q_727_,s_728,s_728_,q_729,q_729_,s_730,s_730_,q_731,q_731_,s_732,s_732_,s_733,s_733_,s_734,s_734_,betweenstory_65,s_735,s_735_,s_736,s_736_,q_737,q_737_,s_738,s_738_,q_739,q_739_,s_740,s_740_,s_741,s_741_,q_742,q_742_,s_743,s_743_,q_744,q_744_,s_745,s_745_,s_746,s_746_,betweenstory_66,s_747,s_747_,q_748,q_748_,s_749,s_749_,s_750,s_750_,s_751,s_751_,s_752,s_752_,q_753,q_753_,s_754,s_754_,q_755,q_755_,s_756,s_756_,s_757,s_757_,betweenstory_67,s_758,s_758_,q_759,q_759_,s_760,s_760_,q_761,q_761_,s_762,s_762_,s_763,s_763_,s_764,s_764_,q_765,q_765_,s_766,s_766_,q_767,q_767_,s_768,s_768_,s_769,s_769_,betweenstory_68,s_770,s_770_,s_771,s_771_,s_772,s_772_,q_773,q_773_,s_774,s_774_,s_775,s_775_,q_776,q_776_,s_777,s_777_,s_778,s_778_,s_779,s_779_,betweenstory_69,s_780,s_780_,s_781,s_781_,s_782,s_782_,s_783,s_783_,s_784,s_784_,q_785,q_785_,s_786,s_786_,s_787,s_787_,s_788,s_788_,betweenstory_70,s_789,s_789_,s_790,s_790_,s_791,s_791_,s_792,s_792_,q_793,q_793_,s_794,s_794_,s_795,s_795_,s_796,s_796_,s_797,s_797_,betweenstory_71,s_798,s_798_,s_799,s_799_,q_800,q_800_,s_801,s_801_,q_802,q_802_,s_803,s_803_,q_804,q_804_,s_805,s_805_,q_806,q_806_,s_807,s_807_,q_808,q_808_,s_809,s_809_,s_810,s_810_,betweenstory_72,s_811,s_811_,q_812,q_812_,s_813,s_813_,q_814,q_814_,s_815,s_815_,s_816,s_816_,q_817,q_817_,s_818,s_818_,q_819,q_819_,s_820,s_820_,s_821,s_821_,s_822,s_822_,betweenstory_73,s_823,s_823_,q_824,q_824_,s_825,s_825_,q_826,q_826_,s_827,s_827_,s_828,s_828_,q_829,q_829_,s_830,s_830_,s_831,s_831_,s_832,s_832_,s_833,s_833_,betweenstory_74,s_834,s_834_,q_835,q_835_,s_836,s_836_,q_837,q_837_,s_838,s_838_,q_839,q_839_,s_840,s_840_,s_841,s_841_,s_842,s_842_,q_843,q_843_,s_844,s_844_,s_845,s_845_,betweenstory_75,s_846,s_846_,s_847,s_847_,s_848,s_848_,q_849,q_849_,s_850,s_850_,s_851,s_851_,q_852,q_852_,s_853,s_853_,q_854,q_854_,s_855,s_855_,s_856,s_856_,betweenstory_76,s_857,s_857_,s_858,s_858_,q_859,q_859_,s_860,s_860_,s_861,s_861_,s_862,s_862_,q_863,q_863_,s_864,s_864_,q_865,q_865_,s_866,s_866_,s_867,s_867_,betweenstory_77,s_868,s_868_,q_869,q_869_,s_870,s_870_,q_871,q_871_,s_872,s_872_,s_873,s_873_,q_874,q_874_,s_875,s_875_,q_876,q_876_,s_877,s_877_,s_878,s_878_,s_879,s_879_,betweenstory_78,s_880,s_880_,s_881,s_881_,q_882,q_882_,s_883,s_883_,q_884,q_884_,s_885,s_885_,q_886,q_886_,s_887,s_887_,q_888,q_888_,s_889,s_889_,s_890,s_890_,s_891,s_891_,betweenstory_79,s_892,s_892_,s_893,s_893_,s_894,s_894_,q_895,q_895_,s_896,s_896_,s_897,s_897_,q_898,q_898_,s_899,s_899_,q_900,q_900_,s_901,s_901_,s_902,s_902_,betweenstory_80,s_903,s_903_,s_904,s_904_,s_905,s_905_,s_906,s_906_,s_907,s_907_,q_908,q_908_,s_909,s_909_,q_910,q_910_,s_911,s_911_,s_912,s_912_,betweenstory_81,s_913,s_913_,q_914,q_914_,s_915,s_915_,q_916,q_916_,s_917,s_917_,s_918,s_918_,q_919,q_919_,s_920,s_920_,s_921,s_921_,q_922,q_922_,s_923,s_923_,s_924,s_924_,betweenstory_82,s_925,s_925_,q_926,q_926_,s_927,s_927_,s_928,s_928_,s_929,s_929_,q_930,q_930_,s_931,s_931_,s_932,s_932_,q_933,q_933_,s_934,s_934_,s_935,s_935_,betweenstory_83,s_936,s_936_,q_937,q_937_,s_938,s_938_,q_939,q_939_,s_940,s_940_,q_941,q_941_,s_942,s_942_,q_943,q_943_,s_944,s_944_,s_945,s_945_,q_946,q_946_,s_947,s_947_,s_948,s_948_,betweenstory_84,s_949,s_949_,s_950,s_950_,q_951,q_951_,s_952,s_952_,s_953,s_953_,s_954,s_954_,s_955,s_955_,s_956,s_956_,s_957,s_957_,betweenstory_85,s_958,s_958_,q_959,q_959_,s_960,s_960_,s_961,s_961_,q_962,q_962_,s_963,s_963_,s_964,s_964_,s_965,s_965_,s_966,s_966_,s_967,s_967_,betweenstory_86,s_968,s_968_,q_969,q_969_,s_970,s_970_,q_971,q_971_,s_972,s_972_,s_973,s_973_,s_974,s_974_,q_975,q_975_,s_976,s_976_,q_977,q_977_,s_978,s_978_,s_979,s_979_,betweenstory_87,s_980,s_980_,s_981,s_981_,q_982,q_982_,s_983,s_983_,q_984,q_984_,s_985,s_985_,q_986,q_986_,s_987,s_987_,q_988,q_988_,s_989,s_989_,s_990,s_990_,s_991,s_991_,betweenstory_88,s_992,s_992_,q_993,q_993_,s_994,s_994_,s_995,s_995_,q_996,q_996_,s_997,s_997_,s_998,s_998_,s_999,s_999_,q_1000,q_1000_,s_1001,s_1001_,s_1002,s_1002_,betweenstory_89,s_1003,s_1003_,s_1004,s_1004_,q_1005,q_1005_,s_1006,s_1006_,q_1007,q_1007_,s_1008,s_1008_,s_1009,s_1009_,q_1010,q_1010_,s_1011,s_1011_,s_1012,s_1012_,s_1013,s_1013_,betweenstory_90,s_1014,s_1014_,q_1015,q_1015_,s_1016,s_1016_,q_1017,q_1017_,s_1018,s_1018_,s_1019,s_1019_,s_1020,s_1020_,q_1021,q_1021_,s_1022,s_1022_,q_1023,q_1023_,s_1024,s_1024_,s_1025,s_1025_,betweenstory_91,s_1026,s_1026_,q_1027,q_1027_,s_1028,s_1028_,s_1029,s_1029_,q_1030,q_1030_,s_1031,s_1031_,q_1032,q_1032_,s_1033,s_1033_,q_1034,q_1034_,s_1035,s_1035_,q_1036,q_1036_,s_1037,s_1037_,s_1038,s_1038_,betweenstory_92,s_1039,s_1039_,s_1040,s_1040_,q_1041,q_1041_,s_1042,s_1042_,q_1043,q_1043_,s_1044,s_1044_,q_1045,q_1045_,s_1046,s_1046_,s_1047,s_1047_,s_1048,s_1048_,s_1049,s_1049_,betweenstory_93,s_1050,s_1050_,s_1051,s_1051_,q_1052,q_1052_,s_1053,s_1053_,q_1054,q_1054_,s_1055,s_1055_,q_1056,q_1056_,s_1057,s_1057_,s_1058,s_1058_,q_1059,q_1059_,s_1060,s_1060_,s_1061,s_1061_,betweenstory_94,s_1062,s_1062_,s_1063,s_1063_,q_1064,q_1064_,s_1065,s_1065_,q_1066,q_1066_,s_1067,s_1067_,q_1068,q_1068_,s_1069,s_1069_,s_1070,s_1070_,s_1071,s_1071_,s_1072,s_1072_,betweenstory_95,s_1073,s_1073_,s_1074,s_1074_,s_1075,s_1075_,q_1076,q_1076_,s_1077,s_1077_,s_1078,s_1078_,q_1079,q_1079_,s_1080,s_1080_,q_1081,q_1081_,s_1082,s_1082_,s_1083,s_1083_,betweenstory_96,s_1084,s_1084_,s_1085,s_1085_,s_1086,s_1086_,s_1087,s_1087_,q_1088,q_1088_,s_1089,s_1089_,q_1090,q_1090_,s_1091,s_1091_,q_1092,q_1092_,s_1093,s_1093_,s_1094,s_1094_,betweenstory_97,s_1095,s_1095_,q_1096,q_1096_,s_1097,s_1097_,q_1098,q_1098_,s_1099,s_1099_,s_1100,s_1100_,s_1101,s_1101_,s_1102,s_1102_,q_1103,q_1103_,s_1104,s_1104_,s_1105,s_1105_,betweenstory_98,s_1106,s_1106_,s_1107,s_1107_,q_1108,q_1108_,s_1109,s_1109_,q_1110,q_1110_,s_1111,s_1111_,q_1112,q_1112_,s_1113,s_1113_,s_1114,s_1114_,s_1115,s_1115_,s_1116,s_1116_,betweenstory_99,s_1117,s_1117_,s_1118,s_1118_,q_1119,q_1119_,s_1120,s_1120_,q_1121,q_1121_,s_1122,s_1122_,q_1123,q_1123_,s_1124,s_1124_,q_1125,q_1125_,s_1126,s_1126_,q_1127,q_1127_,s_1128,s_1128_,s_1129,s_1129_,betweenstory_100,comments],
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