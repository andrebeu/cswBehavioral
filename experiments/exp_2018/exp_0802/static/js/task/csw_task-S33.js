// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 2200
var MIN_STORY_ITI = 800

var intro_instructions = {
  type: 'instructions',
  pages: [
  'Thank you for helping make science happen. (Use the right and left arrow keys to read on).',
  'Please read the following instructions carefully.',
  'This task involves reading stories and answering questions about the stories.',
  'You will read 100 stories, presented one sentence at a time.',
  'Eventually you will start seeing questions that ask you to predict what happens next in the story.',
  'We will give you two alternative answers: select your answer with the left or right arrow key.',
  'To ensure you are paying attention, we have included a few CATCH TRIALS. If you fail these catch trials, the hit will terminate.',
  'On the other hand, if you learn the regularities in the stories, we will pay you a bonus.',
  'Enjoy!'
  ],
  data: {"type":"instruction"},
  key_forward: 'rightarrow',
  key_backward: 'leftarrow',
  allow_backward: true 
  }

var intro_instructions2 = {
  type: 'instructions',
  pages: [
  'From now on, you cannot return to the previous sentence. Press SPACEBAR.',
  'You will read stories one sentence at a time. Press SPACEBAR to read next sentence.',
  'When a question comes up, use the RIGHT AND LEFT ARROW KEYS to respond.',
  'Note there is a minimum reading time for each sentence and question.',
  ' ** ~ PRESS SPACEBAR TO BEGIN THE EXPERIMENT ~ **'
  ],
  data: {"type":"instruction"},
  key_forward: 'spacebar',
  allow_backward: false 
}

// CODE BODY START


	var s_1 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_5 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_5_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
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
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
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
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_42_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_44 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_44_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_45 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_45_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_48 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_48_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_50 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_50_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_52 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_52_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_55 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_55_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_57_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_59 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_59_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_61_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_65 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_65_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_67 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_67_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_68 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_68_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_69 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_69_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_71 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_71_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_73 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_73_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_75 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_75_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_78 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_78_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_79 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_79_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_80 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_80_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_81 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_81_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_82 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_82_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_83 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_83_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_85_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_87_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_89 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_89_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_90 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_90_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_92 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_92_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_93 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_93_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_94 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_94_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_95 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_95_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_97_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_99_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_100 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_100_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_101 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_101_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_102 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_102_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_103 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_103_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_104 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_104_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_105 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_105_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_106_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_107 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_107_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_108_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_109 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_109_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_110 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_110_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_111_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
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
	var s_112 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_112_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_113_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_115 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_115_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_117 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_117_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_118 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_118_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_119 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_119_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_120 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_120_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_121 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_121_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_122_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_124 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_124_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_125_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_126 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_126_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_127 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_127_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_128 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_128_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_129 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_129_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_130 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_130_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_131 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_131_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_133 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_133_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_135 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_135_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_136 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_136_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_137 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_137_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_138 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_138_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_139 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_139_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_140 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_140_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_141 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_141_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_142 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_142_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_143 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_143_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_145 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_145_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_146 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_146_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_147 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_147_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_148 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_148_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_150 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_150_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_151 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_151_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_152_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_154 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_154_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_155 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_155_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_156 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_156_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_157 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_157_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_158 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_158_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_159 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_159_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_160 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_160_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_162 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_162_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_163 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_163_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_164 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_164_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_166 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_166_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_167 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_167_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
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
	var s_168 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_168_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_170 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_170_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_171 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_171_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_173_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_175 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_175_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_176 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_176_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_177 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_177_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_178 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_178_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_179 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_179_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_180 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_180_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_182 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_182_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_183 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_183_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_184 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_184_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_185 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_185_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_186 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_186_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_187 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_187_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_188 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_188_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_189 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_189_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_191 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_191_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
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
	var s_192 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_192_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_194 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_194_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_195 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_195_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_196 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_196_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_197 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_197_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_198 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_198_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_199 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_199_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_200 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_200_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_201 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_201_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_202 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_202_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_203 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_203_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_204 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_204_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_205 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_205_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_206 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_206_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_208 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_208_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_209 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_209_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_210 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_210_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_212 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_212_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_213 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_213_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_214 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_214_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
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
	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_216 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_216_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_218 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_218_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_220_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_221 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_221_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_222 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_222_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_223 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_223_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_224 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_224_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_226 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_226_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_227 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_227_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_228 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_228_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_229 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_229_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_230 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_230_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_231 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_231_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_232 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_232_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_233 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_233_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_235 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_235_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_236 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_236_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_237 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_237_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_239 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_239_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_240 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_240_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_241 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_241_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_243 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_243_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_245 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_245_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_247 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_247_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_249 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_249_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
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
	var s_250 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_250_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_251 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_251_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_252 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_252_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_253 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_253_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_254 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_254_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_255 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_255_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_256 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_256_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_257 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_257_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_259 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_259_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_260 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_260_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_261 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_261_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
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
	var s_262 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_262_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_264 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_264_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_265 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_265_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_266 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_266_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_267 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_267_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_269 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_269_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_270 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_270_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_271_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_273 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_273_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_274 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_274_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_275 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_275_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_276_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_278_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_280 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_280_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_281 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_281_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_282 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_282_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_283 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_283_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_284 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_284_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
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
	var s_285 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_285_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_286 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_286_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_287 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_287_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_288 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_288_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_290 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_290_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_291 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_291_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_292_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_293 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_293_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_294 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_294_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
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
	var s_295 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_295_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_296 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_296_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_297 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_297_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_298 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_298_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_299 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_299_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_300_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_302_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_303 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_303_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_304 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_304_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_305 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_305_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_306 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_306_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_307 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_307_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
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
	var s_308 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_308_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_309 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_309_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_310 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_310_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_311 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_311_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_312 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_312_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_313 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_313_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_315 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_315_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_316 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_316_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_318 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_318_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_319 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_319_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_321 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_321_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_322 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_322_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_323 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_323_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_325 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_325_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_326 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_326_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_327 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_327_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_328 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_328_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_330 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_330_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_332 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_332_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_333 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_333_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_334 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_334_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_336 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_336_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_337 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_337_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_338 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_338_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_339 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_339_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_340 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_340_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_341 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_341_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_343 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_343_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_344 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_344_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_345 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_345_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_346 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_346_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_348_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_349 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_349_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_351 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_351_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_353 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_353_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_354 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_354_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_355 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_355_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_356 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_356_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_357 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_357_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_359 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_359_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_360 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_360_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_361 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_361_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_362 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_362_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_363 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_363_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_364 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_364_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_365 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_365_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_366 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_366_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_367 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_367_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_369 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_369_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_370 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_370_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_371 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_371_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_372 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_372_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_373 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_374 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_374_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_375 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_375_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_376 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_376_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_377 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_377_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_378 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_378_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_379 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_379_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_380 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_380_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_381 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_381_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_382 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_382_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_383 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_383_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_384_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_386 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_386_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
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
	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_388 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_388_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_390 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_390_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_392 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_392_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_393 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_393_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_394 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_394_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_395 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_395_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_396 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_396_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
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
	var s_397 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_397_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_400 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_400_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_402 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_402_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_403 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_403_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_404 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_404_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_405 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_405_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_406 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_406_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_407 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_407_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
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
	var s_408 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_408_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_412_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_414 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_414_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_415 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_415_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_416 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_416_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_417 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_417_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
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
	var s_418 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_418_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_419 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_419_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_420 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_420_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_421 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_421_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_422 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_422_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_423 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_423_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_424 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_424_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_425 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_425_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_426 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_426_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_428 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_428_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_430 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_430_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_432 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_432_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_433 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_433_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_434 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_434_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_436 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_436_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_438 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_438_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_439 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_439_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_440 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_440_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_441 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_441_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_442 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_442_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_443 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_443_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_444 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_444_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_445 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_445_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_446 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_446_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_447 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_447_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_448 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_448_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_449 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_449_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_450 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_450_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_451 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_451_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_452 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_452_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_453 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_453_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_454 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_454_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_456 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_456_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_457 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_457_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_458 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_458_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_459 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_459_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_460 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_460_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_461 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_461_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_462 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_462_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_463 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_463_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_464 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_464_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_465 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_465_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_467 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_467_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_468 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_468_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_469 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_469_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_470 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_470_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_471 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_471_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_472 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_472_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
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
	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_474 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_474_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_475 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_475_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_476 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_476_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_477 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_477_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_478 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_478_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_479 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_479_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_480 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_480_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_481 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_481_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_482 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_482_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_483 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_483_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_484 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_484_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_485 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_485_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_486 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_486_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_487 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_487_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_488 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_488_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_489 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_489_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_490 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_490_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_492 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_492_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_494_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_495 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_495_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_496 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_496_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
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
	var s_497 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_497_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_498 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_498_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_499 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_499_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_500 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_500_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_501 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_501_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_502 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_502_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_503 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_503_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_504 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_504_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_505 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_505_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_506 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_506_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_507 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_507_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_508 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_508_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_509 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_509_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_511 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_511_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_513 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_513_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_514 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_514_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_515 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_515_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_517 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_517_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_519 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_519_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_520 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_520_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_521 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_521_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
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
	var s_522 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_522_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_523 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_523_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_524 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_524_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_525 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_525_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_527 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_527_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_528 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_528_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_529 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_529_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_530 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_530_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_531 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_531_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_532 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_532_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_534 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_534_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_535 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_535_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_536 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_536_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_537 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_537_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_538 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_538_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_540 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_540_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_541 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_541_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_542 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_542_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_543 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_543_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_544 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_544_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_545 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_545_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_547_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_549 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_549_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_550 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_550_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_551 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_551_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_552 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_552_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
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
	var s_553 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_553_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_555 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_555_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_556 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_556_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_557 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_557_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_558 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_558_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_559 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_559_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_560 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_560_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_561 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_561_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_562 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_562_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_563 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_563_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_564 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_564_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_565 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_565_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_566 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_566_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_567 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_567_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_568 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_568_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_569 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_569_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_570 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_570_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_571 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_571_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_572 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_572_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_573 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_573_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_574 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_574_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_575 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_575_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_576 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_576_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_577 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_577_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_578 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_578_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_579 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_579_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_580 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_580_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_581 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_581_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_582_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_583 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_583_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_584 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_584_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_586 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_586_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_588 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_588_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_589 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_589_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_590 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_590_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_591 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_591_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_592 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_592_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_593_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_594 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_594_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_595_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_597 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_597_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_598 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_598_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_600_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_601 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_601_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_602 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_602_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_604 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_604_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_605 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_605_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_606 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_606_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_607 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_607_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_608 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_608_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_611 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_611_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_612 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_612_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_613 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_613_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_614 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_614_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_616 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_616_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_617 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_617_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_618 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_618_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_619 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_619_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_620 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_620_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_621 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_621_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_622 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_622_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_623 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_623_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_624 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_624_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_626 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_626_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_627 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_627_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_628 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_628_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_629 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_629_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_631 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_631_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
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
	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_633 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_633_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
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
	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_635 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_635_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_636 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_636_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_639 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_639_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_640 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_640_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_642 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_642_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_643 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_643_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_644 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_644_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_645 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_645_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_646 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_646_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_647 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_647_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_648 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_648_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_649 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_649_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_650 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_650_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_651 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_651_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_652 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_652_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_653 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_653_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
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
	var s_654 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_654_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_655 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_655_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_656 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_656_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_658 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_658_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_659 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_659_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_660 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_660_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_661 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_661_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_662 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_662_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_663 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_663_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_664 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_664_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_666 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_666_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_667 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_667_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_668 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_668_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_669 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_669_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_670 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_670_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_671 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_671_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_672 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_672_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_673 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_673_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_674 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_674_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_675 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_675_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_677 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_677_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_678 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_678_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_679 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_679_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_680 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_680_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_682 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_682_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_683 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_683_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_684 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_684_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_685 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_685_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_687 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_687_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_688 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_688_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_689 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_689_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_690 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_690_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_691 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_691_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_693 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_693_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_694 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_694_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_695 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_695_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_696 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_696_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_697 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_697_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_698 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_698_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_699 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_699_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_700 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_700_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_701 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_701_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_702 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_702_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_703 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_703_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_704 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_704_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
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
	var s_705 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_705_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_707 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_707_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_708 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_708_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_709 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_709_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_711 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_711_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_712 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_712_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_713 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_713_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_714 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_714_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_715 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_715_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_717 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_717_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_718 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_718_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_720 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_720_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_721 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_721_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_722 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_722_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_724 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_724_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_725 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_725_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_726 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_726_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_727 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_727_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_728 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_728_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_731 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_731_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_732 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_732_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_733 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_733_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_734 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_734_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_735 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_735_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_736 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_736_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_737 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_737_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_739 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_739_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_740 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_740_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_741 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_741_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_742 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_742_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_744 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_744_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_745 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_745_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_746 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_746_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_747 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_747_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_749 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_749_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_750 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_750_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
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
	var s_751 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_751_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_753 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_753_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_754 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_754_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_755 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_755_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_756 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_756_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_757 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_757_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_758 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_758_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_759 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_759_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_760 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_760_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_761 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_761_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_762 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_762_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_763 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_763_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_764 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_764_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_765 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_765_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_766 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_766_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_767 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_767_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_768 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_768_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_769 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_769_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_770 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_770_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_771 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_771_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
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
	var s_772 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_772_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_773 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_773_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_774 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_774_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_776 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_776_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_778 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_778_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_779 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_779_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_780 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_780_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_781 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_781_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_782 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_782_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_784 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_784_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_786 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_786_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_787 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_787_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_788 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_788_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_789 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_789_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_790 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_790_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_791 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_791_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_792 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_792_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_793 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_793_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_794 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_794_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_795 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_795_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_796 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_796_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_797 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_797_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_799 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_799_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_801 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_801_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_802 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_802_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_803 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_803_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_804 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_804_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_805 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_805_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_806 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_806_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_808_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_810 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_810_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_812 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_812_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_813 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_813_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_814 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_814_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_815 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_815_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_817 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_817_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_818 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_818_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_819 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_819_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_820 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_820_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_821 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_821_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_823 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_823_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_824 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_824_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_826 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_826_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_827 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_827_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_828 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_828_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_829 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_829_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_830 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_830_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_831 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_831_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_832 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_832_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_834 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_834_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_835 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_835_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_836 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_836_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_837 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_837_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_838 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_838_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_839 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_839_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_840 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_840_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_842 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_842_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_843 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_843_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_844 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_844_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_845 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_845_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_846 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_846_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_847 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_847_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_849 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_849_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_850 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_850_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_851 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_851_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_852 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_852_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_854 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_854_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_855 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_855_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_857 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_857_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_858 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_858_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_859 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_859_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_860 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_860_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_862 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_862_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_863_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_864 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_864_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_865 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_865_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
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
	var s_866 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_866_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_869 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_869_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_870 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_870_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_871 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_871_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_873_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_874 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_874_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_875 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_875_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
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
	var s_876 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_876_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_878 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_878_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_879 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_879_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_880 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_880_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_881 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_881_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_882 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_882_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_883 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_883_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_884 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_884_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_885 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_885_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_886 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_886_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
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
	var s_887 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_887_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_888 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_888_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
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
	var s_889 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_889_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_890 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_890_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_891 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_891_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_892 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_892_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_893 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_893_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_894 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_894_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_895 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_895_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_896 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_896_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_898 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_898_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
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
	var s_899 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_899_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_900 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_900_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_901 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_901_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_902 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_902_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_903 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_903_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_904 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_904_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_905 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_905_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_906 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_906_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_907 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_907_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_908 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_908_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_909 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_909_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_910 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_910_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_911 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_911_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_912 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_912_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_913 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_913_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_914 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_914_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_915 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_915_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_916 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_916_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_917 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_917_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_918 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_918_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_919 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_919_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_920 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_920_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_921 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_921_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_922 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_922_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_923 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_923_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_924 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_924_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_925 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_925_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_926 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_926_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_927 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_927_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_928 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_928_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_929 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_929_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_930 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_930_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_931 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_931_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_932 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_932_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_933 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_933_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_934 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_934_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_935 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_935_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_936 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_936_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_937 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_937_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_938 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_938_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_939 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_939_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_940 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_940_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_941 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_941_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_942 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_942_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_943 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_943_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_944 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_944_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_945 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_945_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_946 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_946_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_947 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_947_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_948 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_948_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_949 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_949_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_950 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_950_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_951 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_951_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_952 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_952_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_953 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_953_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_954 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_954_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_955 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_955_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_956 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_956_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_957 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_957_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_958 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_958_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_959 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_959_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_960 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_960_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_961 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_961_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_962 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_962_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_963 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_963_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_964 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_964_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_965 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_965_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_966 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_966_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_967 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_967_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_968 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_968_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_969 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_969_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_970 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_970_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_971 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_971_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
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
	var s_972 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_972_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_973 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_973_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_974 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_974_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_975 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_975_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_976 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_976_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_977 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_977_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_978 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_978_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_979 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_979_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_980 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_980_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_981 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_981_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_982 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_982_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_983 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_983_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_984 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_984_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_985 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_985_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_986 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_986_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_987 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_987_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_988 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_988_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_989 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_989_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_990 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_990_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_991 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_991_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_992 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_992_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_993 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_993_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_994 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_994_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_995 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_995_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_996 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_996_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_997 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_997_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_998 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_998_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_999 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_999_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1000 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1000_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1001 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1001_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1002 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1002_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1003 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1003_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1004 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1004_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1005 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1005_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
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
	var s_1006 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1006_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1007 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1007_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1008 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1008_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1009 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1009_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1010 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1010_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1011 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1011_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1012 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1012_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1013 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1013_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1014 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1014_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1015 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1015_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1016 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1016_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1017 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1017_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1018 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1018_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1019 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1019_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1020 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1020_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1021 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1021_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1022 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1022_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1023 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1023_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1024 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1024_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1025 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1025_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1026 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1026_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1027 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1027_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1028 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1028_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1029 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1029_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1030 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1030_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1031 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1031_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1032 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1032_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1033 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1033_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1034 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1034_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1035 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1035_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1036 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1036_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1037 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1037_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1038 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1038_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1039 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1039_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1040 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1040_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1041 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1041_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1042 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1042_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1043 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1043_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1044 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1044_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1045 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1045_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1046 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1046_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1047 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1047_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1048 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1048_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1049 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1049_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1050 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1050_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1051 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1051_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1052 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1052_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
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
	var s_1053 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1053_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1054 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1054_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
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
	var s_1055 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1055_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1056 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1056_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1057 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1057_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1058 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1058_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1059 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1059_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1060 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1060_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1061 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1061_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1062 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1062_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1063 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1063_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1064 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1064_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1065 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1065_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
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
	var s_1066 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1066_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1067 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1067_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1068 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1068_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1069 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1069_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1070 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1070_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1071 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'matcha roots' was good here.", "It must have been that Alice knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1071_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'matcha roots' was good here.", "It must have been that Alice knew the 'matcha roots' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1072 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1072_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1073 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1073_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1074 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1074_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1075 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1075_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_1076 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1076_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1077 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1077_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1078 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1078_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1079 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1079_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1080 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1080_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1081 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1081_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1082 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1082_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1084 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1084_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1085 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1085_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1086 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1086_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1087 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1087_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1088 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1088_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1089 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1089_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_1090 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1090_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1091 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1091_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1092 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1092_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1093 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1093_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1094 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1094_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1095 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1095_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
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
	var s_1096 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1096_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1097 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1097_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1098 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1098_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1099 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1099_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1100 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1100_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1101 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1101_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1102 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1102_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1103_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1104 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1104_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1105 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1105_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1106 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1106_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1107 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1107_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_1108 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1108_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1109 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1109_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1110 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1110_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1111_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1112 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1112_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1113 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1113_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1114 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1114_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1115_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1116 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1116_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1117 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1117_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
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
	var s_1118 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1118_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1119 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1119_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1120 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1120_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1121 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1121_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1122_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "KNEW",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1123 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1123_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1124 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1124_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1125 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1125_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1126 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1126_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1127 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1127_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1128 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1128_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1129 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1129_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
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
	var s_1130 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1130_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1131 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1131_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 


// CODE BODY END

jsPsych.init({
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,s_3,s_3_,s_4,s_4_,s_5,s_5_,s_6,s_6_,s_7,s_7_,s_8,s_8_,betweenstory_1,s_9,s_9_,s_10,s_10_,s_11,s_11_,s_12,s_12_,s_13,s_13_,s_14,s_14_,s_15,s_15_,s_16,s_16_,betweenstory_2,s_17,s_17_,s_18,s_18_,s_19,s_19_,s_20,s_20_,s_21,s_21_,s_22,s_22_,s_23,s_23_,s_24,s_24_,betweenstory_3,s_25,s_25_,s_26,s_26_,s_27,s_27_,s_28,s_28_,s_29,s_29_,s_30,s_30_,s_31,s_31_,s_32,s_32_,betweenstory_4,s_33,s_33_,s_34,s_34_,s_35,s_35_,s_36,s_36_,s_37,s_37_,s_38,s_38_,s_39,s_39_,s_40,s_40_,betweenstory_5,s_41,s_41_,q_42,q_42_,s_43,s_43_,s_44,s_44_,q_45,q_45_,s_46,s_46_,s_47,s_47_,q_48,q_48_,s_49,s_49_,q_50,q_50_,s_51,s_51_,s_52,s_52_,betweenstory_6,s_53,s_53_,s_54,s_54_,q_55,q_55_,s_56,s_56_,q_57,q_57_,s_58,s_58_,s_59,s_59_,s_60,s_60_,q_61,q_61_,s_62,s_62_,s_63,s_63_,betweenstory_7,s_64,s_64_,q_65,q_65_,s_66,s_66_,q_67,q_67_,s_68,s_68_,q_69,q_69_,s_70,s_70_,q_71,q_71_,s_72,s_72_,q_73,q_73_,s_74,s_74_,q_75,q_75_,s_76,s_76_,s_77,s_77_,betweenstory_8,s_78,s_78_,q_79,q_79_,s_80,s_80_,q_81,q_81_,s_82,s_82_,q_83,q_83_,s_84,s_84_,q_85,q_85_,s_86,s_86_,q_87,q_87_,s_88,s_88_,s_89,s_89_,s_90,s_90_,betweenstory_9,s_91,s_91_,s_92,s_92_,q_93,q_93_,s_94,s_94_,q_95,q_95_,s_96,s_96_,q_97,q_97_,s_98,s_98_,q_99,q_99_,s_100,s_100_,s_101,s_101_,s_102,s_102_,betweenstory_10,s_103,s_103_,q_104,q_104_,s_105,s_105_,q_106,q_106_,s_107,s_107_,q_108,q_108_,s_109,s_109_,s_110,s_110_,q_111,q_111_,s_112,s_112_,q_113,q_113_,s_114,s_114_,s_115,s_115_,betweenstory_11,s_116,s_116_,s_117,s_117_,q_118,q_118_,s_119,s_119_,q_120,q_120_,s_121,s_121_,q_122,q_122_,s_123,s_123_,s_124,s_124_,q_125,q_125_,s_126,s_126_,s_127,s_127_,betweenstory_12,s_128,s_128_,q_129,q_129_,s_130,s_130_,q_131,q_131_,s_132,s_132_,s_133,s_133_,s_134,s_134_,s_135,s_135_,s_136,s_136_,s_137,s_137_,betweenstory_13,s_138,s_138_,q_139,q_139_,s_140,s_140_,s_141,s_141_,s_142,s_142_,q_143,q_143_,s_144,s_144_,s_145,s_145_,s_146,s_146_,s_147,s_147_,betweenstory_14,s_148,s_148_,s_149,s_149_,s_150,s_150_,s_151,s_151_,q_152,q_152_,s_153,s_153_,s_154,s_154_,s_155,s_155_,s_156,s_156_,betweenstory_15,s_157,s_157_,q_158,q_158_,s_159,s_159_,q_160,q_160_,s_161,s_161_,q_162,q_162_,s_163,s_163_,q_164,q_164_,s_165,s_165_,s_166,s_166_,q_167,q_167_,s_168,s_168_,s_169,s_169_,betweenstory_16,s_170,s_170_,q_171,q_171_,s_172,s_172_,q_173,q_173_,s_174,s_174_,s_175,s_175_,q_176,q_176_,s_177,s_177_,s_178,s_178_,q_179,q_179_,s_180,s_180_,s_181,s_181_,betweenstory_17,s_182,s_182_,s_183,s_183_,q_184,q_184_,s_185,s_185_,q_186,q_186_,s_187,s_187_,s_188,s_188_,q_189,q_189_,s_190,s_190_,q_191,q_191_,s_192,s_192_,s_193,s_193_,betweenstory_18,s_194,s_194_,q_195,q_195_,s_196,s_196_,s_197,s_197_,q_198,q_198_,s_199,s_199_,q_200,q_200_,s_201,s_201_,q_202,q_202_,s_203,s_203_,q_204,q_204_,s_205,s_205_,s_206,s_206_,betweenstory_19,s_207,s_207_,s_208,s_208_,s_209,s_209_,s_210,s_210_,s_211,s_211_,q_212,q_212_,s_213,s_213_,q_214,q_214_,s_215,s_215_,s_216,s_216_,betweenstory_20,s_217,s_217_,s_218,s_218_,s_219,s_219_,q_220,q_220_,s_221,s_221_,q_222,q_222_,s_223,s_223_,q_224,q_224_,s_225,s_225_,q_226,q_226_,s_227,s_227_,s_228,s_228_,betweenstory_21,s_229,s_229_,s_230,s_230_,q_231,q_231_,s_232,s_232_,q_233,q_233_,s_234,s_234_,q_235,q_235_,s_236,s_236_,q_237,q_237_,s_238,s_238_,q_239,q_239_,s_240,s_240_,s_241,s_241_,betweenstory_22,s_242,s_242_,q_243,q_243_,s_244,s_244_,q_245,q_245_,s_246,s_246_,s_247,s_247_,s_248,s_248_,q_249,q_249_,s_250,s_250_,s_251,s_251_,s_252,s_252_,betweenstory_23,s_253,s_253_,q_254,q_254_,s_255,s_255_,q_256,q_256_,s_257,s_257_,s_258,s_258_,s_259,s_259_,s_260,s_260_,q_261,q_261_,s_262,s_262_,s_263,s_263_,betweenstory_24,s_264,s_264_,s_265,s_265_,s_266,s_266_,q_267,q_267_,s_268,s_268_,q_269,q_269_,s_270,s_270_,q_271,q_271_,s_272,s_272_,s_273,s_273_,s_274,s_274_,betweenstory_25,s_275,s_275_,q_276,q_276_,s_277,s_277_,q_278,q_278_,s_279,s_279_,s_280,s_280_,q_281,q_281_,s_282,s_282_,s_283,s_283_,q_284,q_284_,s_285,s_285_,s_286,s_286_,betweenstory_26,s_287,s_287_,q_288,q_288_,s_289,s_289_,s_290,s_290_,s_291,s_291_,q_292,q_292_,s_293,s_293_,q_294,q_294_,s_295,s_295_,q_296,q_296_,s_297,s_297_,s_298,s_298_,betweenstory_27,s_299,s_299_,q_300,q_300_,s_301,s_301_,q_302,q_302_,s_303,s_303_,q_304,q_304_,s_305,s_305_,s_306,s_306_,q_307,q_307_,s_308,s_308_,s_309,s_309_,s_310,s_310_,betweenstory_28,s_311,s_311_,s_312,s_312_,q_313,q_313_,s_314,s_314_,s_315,s_315_,q_316,q_316_,s_317,s_317_,q_318,q_318_,s_319,s_319_,s_320,s_320_,s_321,s_321_,betweenstory_29,s_322,s_322_,q_323,q_323_,s_324,s_324_,s_325,s_325_,s_326,s_326_,s_327,s_327_,q_328,q_328_,s_329,s_329_,s_330,s_330_,s_331,s_331_,betweenstory_30,s_332,s_332_,q_333,q_333_,s_334,s_334_,s_335,s_335_,s_336,s_336_,s_337,s_337_,q_338,q_338_,s_339,s_339_,q_340,q_340_,s_341,s_341_,s_342,s_342_,betweenstory_31,s_343,s_343_,s_344,s_344_,q_345,q_345_,s_346,s_346_,s_347,s_347_,q_348,q_348_,s_349,s_349_,s_350,s_350_,s_351,s_351_,s_352,s_352_,betweenstory_32,s_353,s_353_,q_354,q_354_,s_355,s_355_,s_356,s_356_,q_357,q_357_,s_358,s_358_,q_359,q_359_,s_360,s_360_,q_361,q_361_,s_362,s_362_,q_363,q_363_,s_364,s_364_,s_365,s_365_,betweenstory_33,s_366,s_366_,q_367,q_367_,s_368,s_368_,q_369,q_369_,s_370,s_370_,q_371,q_371_,s_372,s_372_,s_373,s_373_,s_374,s_374_,q_375,q_375_,s_376,s_376_,s_377,s_377_,betweenstory_34,s_378,s_378_,s_379,s_379_,q_380,q_380_,s_381,s_381_,s_382,s_382_,s_383,s_383_,q_384,q_384_,s_385,s_385_,q_386,q_386_,s_387,s_387_,s_388,s_388_,betweenstory_35,s_389,s_389_,q_390,q_390_,s_391,s_391_,s_392,s_392_,q_393,q_393_,s_394,s_394_,s_395,s_395_,q_396,q_396_,s_397,s_397_,s_398,s_398_,s_399,s_399_,betweenstory_36,s_400,s_400_,s_401,s_401_,s_402,s_402_,q_403,q_403_,s_404,s_404_,s_405,s_405_,s_406,s_406_,q_407,q_407_,s_408,s_408_,s_409,s_409_,betweenstory_37,s_410,s_410_,s_411,s_411_,q_412,q_412_,s_413,s_413_,s_414,s_414_,q_415,q_415_,s_416,s_416_,q_417,q_417_,s_418,s_418_,q_419,q_419_,s_420,s_420_,s_421,s_421_,betweenstory_38,s_422,s_422_,q_423,q_423_,s_424,s_424_,s_425,s_425_,q_426,q_426_,s_427,s_427_,s_428,s_428_,s_429,s_429_,s_430,s_430_,s_431,s_431_,betweenstory_39,s_432,s_432_,s_433,s_433_,q_434,q_434_,s_435,s_435_,s_436,s_436_,s_437,s_437_,s_438,s_438_,q_439,q_439_,s_440,s_440_,s_441,s_441_,betweenstory_40,s_442,s_442_,q_443,q_443_,s_444,s_444_,q_445,q_445_,s_446,s_446_,q_447,q_447_,s_448,s_448_,q_449,q_449_,s_450,s_450_,s_451,s_451_,s_452,s_452_,s_453,s_453_,betweenstory_41,s_454,s_454_,s_455,s_455_,s_456,s_456_,q_457,q_457_,s_458,s_458_,q_459,q_459_,s_460,s_460_,q_461,q_461_,s_462,s_462_,s_463,s_463_,s_464,s_464_,betweenstory_42,s_465,s_465_,s_466,s_466_,s_467,s_467_,q_468,q_468_,s_469,s_469_,q_470,q_470_,s_471,s_471_,q_472,q_472_,s_473,s_473_,s_474,s_474_,s_475,s_475_,betweenstory_43,s_476,s_476_,q_477,q_477_,s_478,s_478_,s_479,s_479_,s_480,s_480_,q_481,q_481_,s_482,s_482_,q_483,q_483_,s_484,s_484_,q_485,q_485_,s_486,s_486_,s_487,s_487_,betweenstory_44,s_488,s_488_,s_489,s_489_,q_490,q_490_,s_491,s_491_,q_492,q_492_,s_493,s_493_,q_494,q_494_,s_495,s_495_,q_496,q_496_,s_497,s_497_,s_498,s_498_,s_499,s_499_,betweenstory_45,s_500,s_500_,s_501,s_501_,q_502,q_502_,s_503,s_503_,q_504,q_504_,s_505,s_505_,s_506,s_506_,q_507,q_507_,s_508,s_508_,s_509,s_509_,s_510,s_510_,betweenstory_46,s_511,s_511_,s_512,s_512_,q_513,q_513_,s_514,s_514_,q_515,q_515_,s_516,s_516_,q_517,q_517_,s_518,s_518_,q_519,q_519_,s_520,s_520_,q_521,q_521_,s_522,s_522_,s_523,s_523_,betweenstory_47,s_524,s_524_,q_525,q_525_,s_526,s_526_,s_527,s_527_,q_528,q_528_,s_529,s_529_,s_530,s_530_,q_531,q_531_,s_532,s_532_,s_533,s_533_,s_534,s_534_,betweenstory_48,s_535,s_535_,s_536,s_536_,s_537,s_537_,q_538,q_538_,s_539,s_539_,s_540,s_540_,q_541,q_541_,s_542,s_542_,s_543,s_543_,s_544,s_544_,betweenstory_49,s_545,s_545_,s_546,s_546_,q_547,q_547_,s_548,s_548_,s_549,s_549_,s_550,s_550_,s_551,s_551_,q_552,q_552_,s_553,s_553_,s_554,s_554_,betweenstory_50,s_555,s_555_,s_556,s_556_,q_557,q_557_,s_558,s_558_,q_559,q_559_,s_560,s_560_,q_561,q_561_,s_562,s_562_,q_563,q_563_,s_564,s_564_,s_565,s_565_,s_566,s_566_,betweenstory_51,s_567,s_567_,q_568,q_568_,s_569,s_569_,q_570,q_570_,s_571,s_571_,q_572,q_572_,s_573,s_573_,q_574,q_574_,s_575,s_575_,s_576,s_576_,q_577,q_577_,s_578,s_578_,s_579,s_579_,betweenstory_52,s_580,s_580_,s_581,s_581_,q_582,q_582_,s_583,s_583_,q_584,q_584_,s_585,s_585_,q_586,q_586_,s_587,s_587_,q_588,q_588_,s_589,s_589_,s_590,s_590_,s_591,s_591_,betweenstory_53,s_592,s_592_,q_593,q_593_,s_594,s_594_,q_595,q_595_,s_596,s_596_,q_597,q_597_,s_598,s_598_,s_599,s_599_,q_600,q_600_,s_601,s_601_,q_602,q_602_,s_603,s_603_,s_604,s_604_,betweenstory_54,s_605,s_605_,s_606,s_606_,s_607,s_607_,q_608,q_608_,s_609,s_609_,s_610,s_610_,q_611,q_611_,s_612,s_612_,q_613,q_613_,s_614,s_614_,s_615,s_615_,betweenstory_55,s_616,s_616_,q_617,q_617_,s_618,s_618_,s_619,s_619_,s_620,s_620_,s_621,s_621_,s_622,s_622_,q_623,q_623_,s_624,s_624_,s_625,s_625_,betweenstory_56,s_626,s_626_,s_627,s_627_,s_628,s_628_,s_629,s_629_,s_630,s_630_,q_631,q_631_,s_632,s_632_,q_633,q_633_,s_634,s_634_,s_635,s_635_,betweenstory_57,s_636,s_636_,s_637,s_637_,s_638,s_638_,s_639,s_639_,q_640,q_640_,s_641,s_641_,s_642,s_642_,s_643,s_643_,s_644,s_644_,betweenstory_58,s_645,s_645_,q_646,q_646_,s_647,s_647_,q_648,q_648_,s_649,s_649_,q_650,q_650_,s_651,s_651_,s_652,s_652_,q_653,q_653_,s_654,s_654_,s_655,s_655_,s_656,s_656_,betweenstory_59,s_657,s_657_,s_658,s_658_,q_659,q_659_,s_660,s_660_,s_661,s_661_,q_662,q_662_,s_663,s_663_,q_664,q_664_,s_665,s_665_,q_666,q_666_,s_667,s_667_,s_668,s_668_,betweenstory_60,s_669,s_669_,s_670,s_670_,q_671,q_671_,s_672,s_672_,q_673,q_673_,s_674,s_674_,q_675,q_675_,s_676,s_676_,q_677,q_677_,s_678,s_678_,q_679,q_679_,s_680,s_680_,s_681,s_681_,betweenstory_61,s_682,s_682_,q_683,q_683_,s_684,s_684_,s_685,s_685_,s_686,s_686_,q_687,q_687_,s_688,s_688_,s_689,s_689_,q_690,q_690_,s_691,s_691_,s_692,s_692_,betweenstory_62,s_693,s_693_,q_694,q_694_,s_695,s_695_,q_696,q_696_,s_697,s_697_,q_698,q_698_,s_699,s_699_,q_700,q_700_,s_701,s_701_,q_702,q_702_,s_703,s_703_,q_704,q_704_,s_705,s_705_,s_706,s_706_,betweenstory_63,s_707,s_707_,q_708,q_708_,s_709,s_709_,s_710,s_710_,q_711,q_711_,s_712,s_712_,q_713,q_713_,s_714,s_714_,q_715,q_715_,s_716,s_716_,q_717,q_717_,s_718,s_718_,s_719,s_719_,betweenstory_64,s_720,s_720_,q_721,q_721_,s_722,s_722_,s_723,s_723_,s_724,s_724_,q_725,q_725_,s_726,s_726_,s_727,s_727_,q_728,q_728_,s_729,s_729_,s_730,s_730_,betweenstory_65,s_731,s_731_,q_732,q_732_,s_733,s_733_,q_734,q_734_,s_735,s_735_,q_736,q_736_,s_737,s_737_,s_738,s_738_,s_739,s_739_,q_740,q_740_,s_741,s_741_,s_742,s_742_,betweenstory_66,s_743,s_743_,s_744,s_744_,q_745,q_745_,s_746,s_746_,q_747,q_747_,s_748,s_748_,s_749,s_749_,q_750,q_750_,s_751,s_751_,s_752,s_752_,s_753,s_753_,betweenstory_67,s_754,s_754_,s_755,s_755_,s_756,s_756_,q_757,q_757_,s_758,s_758_,s_759,s_759_,q_760,q_760_,s_761,s_761_,q_762,q_762_,s_763,s_763_,s_764,s_764_,betweenstory_68,s_765,s_765_,q_766,q_766_,s_767,s_767_,s_768,s_768_,s_769,s_769_,s_770,s_770_,q_771,q_771_,s_772,s_772_,q_773,q_773_,s_774,s_774_,s_775,s_775_,betweenstory_69,s_776,s_776_,s_777,s_777_,q_778,q_778_,s_779,s_779_,s_780,s_780_,q_781,q_781_,s_782,s_782_,s_783,s_783_,q_784,q_784_,s_785,s_785_,s_786,s_786_,betweenstory_70,s_787,s_787_,s_788,s_788_,q_789,q_789_,s_790,s_790_,q_791,q_791_,s_792,s_792_,q_793,q_793_,s_794,s_794_,q_795,q_795_,s_796,s_796_,q_797,q_797_,s_798,s_798_,s_799,s_799_,betweenstory_71,s_800,s_800_,s_801,s_801_,q_802,q_802_,s_803,s_803_,q_804,q_804_,s_805,s_805_,q_806,q_806_,s_807,s_807_,q_808,q_808_,s_809,s_809_,q_810,q_810_,s_811,s_811_,s_812,s_812_,betweenstory_72,s_813,s_813_,s_814,s_814_,q_815,q_815_,s_816,s_816_,q_817,q_817_,s_818,s_818_,s_819,s_819_,s_820,s_820_,s_821,s_821_,s_822,s_822_,betweenstory_73,s_823,s_823_,q_824,q_824_,s_825,s_825_,s_826,s_826_,q_827,q_827_,s_828,s_828_,q_829,q_829_,s_830,s_830_,s_831,s_831_,q_832,q_832_,s_833,s_833_,s_834,s_834_,betweenstory_74,s_835,s_835_,s_836,s_836_,s_837,s_837_,s_838,s_838_,s_839,s_839_,q_840,q_840_,s_841,s_841_,q_842,q_842_,s_843,s_843_,s_844,s_844_,betweenstory_75,s_845,s_845_,q_846,q_846_,s_847,s_847_,s_848,s_848_,q_849,q_849_,s_850,s_850_,q_851,q_851_,s_852,s_852_,s_853,s_853_,q_854,q_854_,s_855,s_855_,s_856,s_856_,betweenstory_76,s_857,s_857_,s_858,s_858_,s_859,s_859_,q_860,q_860_,s_861,s_861_,s_862,s_862_,q_863,q_863_,s_864,s_864_,q_865,q_865_,s_866,s_866_,s_867,s_867_,betweenstory_77,s_868,s_868_,s_869,s_869_,q_870,q_870_,s_871,s_871_,s_872,s_872_,q_873,q_873_,s_874,s_874_,q_875,q_875_,s_876,s_876_,s_877,s_877_,s_878,s_878_,betweenstory_78,s_879,s_879_,s_880,s_880_,q_881,q_881_,s_882,s_882_,s_883,s_883_,q_884,q_884_,s_885,s_885_,q_886,q_886_,s_887,s_887_,q_888,q_888_,s_889,s_889_,s_890,s_890_,betweenstory_79,s_891,s_891_,q_892,q_892_,s_893,s_893_,s_894,s_894_,s_895,s_895_,q_896,q_896_,s_897,s_897_,q_898,q_898_,s_899,s_899_,s_900,s_900_,s_901,s_901_,betweenstory_80,s_902,s_902_,s_903,s_903_,q_904,q_904_,s_905,s_905_,s_906,s_906_,s_907,s_907_,s_908,s_908_,q_909,q_909_,s_910,s_910_,s_911,s_911_,betweenstory_81,s_912,s_912_,s_913,s_913_,s_914,s_914_,s_915,s_915_,q_916,q_916_,s_917,s_917_,q_918,q_918_,s_919,s_919_,s_920,s_920_,s_921,s_921_,betweenstory_82,s_922,s_922_,s_923,s_923_,s_924,s_924_,q_925,q_925_,s_926,s_926_,q_927,q_927_,s_928,s_928_,s_929,s_929_,s_930,s_930_,s_931,s_931_,betweenstory_83,s_932,s_932_,q_933,q_933_,s_934,s_934_,q_935,q_935_,s_936,s_936_,q_937,q_937_,s_938,s_938_,s_939,s_939_,s_940,s_940_,s_941,s_941_,s_942,s_942_,betweenstory_84,s_943,s_943_,q_944,q_944_,s_945,s_945_,q_946,q_946_,s_947,s_947_,q_948,q_948_,s_949,s_949_,s_950,s_950_,s_951,s_951_,s_952,s_952_,s_953,s_953_,betweenstory_85,s_954,s_954_,q_955,q_955_,s_956,s_956_,s_957,s_957_,s_958,s_958_,s_959,s_959_,q_960,q_960_,s_961,s_961_,s_962,s_962_,s_963,s_963_,betweenstory_86,s_964,s_964_,q_965,q_965_,s_966,s_966_,s_967,s_967_,q_968,q_968_,s_969,s_969_,s_970,s_970_,q_971,q_971_,s_972,s_972_,q_973,q_973_,s_974,s_974_,s_975,s_975_,betweenstory_87,s_976,s_976_,s_977,s_977_,q_978,q_978_,s_979,s_979_,s_980,s_980_,s_981,s_981_,s_982,s_982_,s_983,s_983_,s_984,s_984_,betweenstory_88,s_985,s_985_,q_986,q_986_,s_987,s_987_,q_988,q_988_,s_989,s_989_,q_990,q_990_,s_991,s_991_,q_992,q_992_,s_993,s_993_,q_994,q_994_,s_995,s_995_,s_996,s_996_,s_997,s_997_,betweenstory_89,s_998,s_998_,s_999,s_999_,q_1000,q_1000_,s_1001,s_1001_,q_1002,q_1002_,s_1003,s_1003_,s_1004,s_1004_,q_1005,q_1005_,s_1006,s_1006_,s_1007,s_1007_,s_1008,s_1008_,betweenstory_90,s_1009,s_1009_,s_1010,s_1010_,q_1011,q_1011_,s_1012,s_1012_,q_1013,q_1013_,s_1014,s_1014_,q_1015,q_1015_,s_1016,s_1016_,s_1017,s_1017_,q_1018,q_1018_,s_1019,s_1019_,s_1020,s_1020_,betweenstory_91,s_1021,s_1021_,s_1022,s_1022_,q_1023,q_1023_,s_1024,s_1024_,q_1025,q_1025_,s_1026,s_1026_,q_1027,q_1027_,s_1028,s_1028_,q_1029,q_1029_,s_1030,s_1030_,s_1031,s_1031_,s_1032,s_1032_,betweenstory_92,s_1033,s_1033_,q_1034,q_1034_,s_1035,s_1035_,q_1036,q_1036_,s_1037,s_1037_,s_1038,s_1038_,q_1039,q_1039_,s_1040,s_1040_,s_1041,s_1041_,s_1042,s_1042_,s_1043,s_1043_,betweenstory_93,s_1044,s_1044_,q_1045,q_1045_,s_1046,s_1046_,q_1047,q_1047_,s_1048,s_1048_,q_1049,q_1049_,s_1050,s_1050_,s_1051,s_1051_,q_1052,q_1052_,s_1053,s_1053_,q_1054,q_1054_,s_1055,s_1055_,s_1056,s_1056_,betweenstory_94,s_1057,s_1057_,q_1058,q_1058_,s_1059,s_1059_,q_1060,q_1060_,s_1061,s_1061_,s_1062,s_1062_,q_1063,q_1063_,s_1064,s_1064_,q_1065,q_1065_,s_1066,s_1066_,q_1067,q_1067_,s_1068,s_1068_,s_1069,s_1069_,betweenstory_95,s_1070,s_1070_,q_1071,q_1071_,s_1072,s_1072_,q_1073,q_1073_,s_1074,s_1074_,q_1075,q_1075_,s_1076,s_1076_,q_1077,q_1077_,s_1078,s_1078_,q_1079,q_1079_,s_1080,s_1080_,q_1081,q_1081_,s_1082,s_1082_,s_1083,s_1083_,betweenstory_96,s_1084,s_1084_,q_1085,q_1085_,s_1086,s_1086_,q_1087,q_1087_,s_1088,s_1088_,q_1089,q_1089_,s_1090,s_1090_,q_1091,q_1091_,s_1092,s_1092_,q_1093,q_1093_,s_1094,s_1094_,q_1095,q_1095_,s_1096,s_1096_,s_1097,s_1097_,betweenstory_97,s_1098,s_1098_,s_1099,s_1099_,q_1100,q_1100_,s_1101,s_1101_,s_1102,s_1102_,q_1103,q_1103_,s_1104,s_1104_,q_1105,q_1105_,s_1106,s_1106_,q_1107,q_1107_,s_1108,s_1108_,s_1109,s_1109_,betweenstory_98,s_1110,s_1110_,q_1111,q_1111_,s_1112,s_1112_,s_1113,s_1113_,s_1114,s_1114_,q_1115,q_1115_,s_1116,s_1116_,q_1117,q_1117_,s_1118,s_1118_,s_1119,s_1119_,s_1120,s_1120_,betweenstory_99,s_1121,s_1121_,q_1122,q_1122_,s_1123,s_1123_,s_1124,s_1124_,q_1125,q_1125_,s_1126,s_1126_,s_1127,s_1127_,s_1128,s_1128_,q_1129,q_1129_,s_1130,s_1130_,s_1131,s_1131_,betweenstory_100,],
  display_element: 'jspsych-target',
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