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
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_5 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_5_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_9 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
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
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
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
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
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
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
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
						"rfc": "subject-Alice_location-drinks",
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
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
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
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_42 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_42_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_44 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_44_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_46 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_46_ = {
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
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_48 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_48_ = {
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
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_50 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_50_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_56 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_56_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_57 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_57_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_58 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_58_ = {
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
	var s_59 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_59_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_60 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_60_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_61 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_61_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_67 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_67_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_68 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_68_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_69 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_69_ = {
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
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_72 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_72_ = {
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
	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_77 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_77_ = {
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
	var s_78 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_78_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_80_ = {
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
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_82_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_85 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_85_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_87_ = {
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
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_89 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_89_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_90 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_90_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_92 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_92_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_93 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_93_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_94 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_94_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_95 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_95_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_97_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
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
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_99 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_99_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_100 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_100_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_101 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_101_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_102 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_102_ = {
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
	var s_103 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_103_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_105 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_105_ = {
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
	var s_106 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_106_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_107 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_107_ = {
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

	var s_108 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_108_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_109 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_109_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_110 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_110_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_111 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_111_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_112 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_112_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_113 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_113_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_114 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_114_ = {
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
	var s_115 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_115_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
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

	var s_117 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_117_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_118 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_118_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_119 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_119_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_120 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_120_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_121 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_121_ = {
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
	var s_122 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_122_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_124 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_124_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_125 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_125_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_126 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_126_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_127 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_127_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_128 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_128_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_129 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_129_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_130 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_130_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_131 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_131_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_133 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_133_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_135 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_135_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_136 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_136_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_137 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_137_ = {
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
	var s_138 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_138_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_139 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_139_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_140_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_141 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_141_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_142 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_142_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_143 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_143_ = {
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
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_145 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_145_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_148 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_148_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_150 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_150_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_151 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_151_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_152 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_152_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_154 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_154_ = {
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
	var s_155 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_155_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_156 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_156_ = {
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
	var s_157 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_157_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_158 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_158_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_159 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_159_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_160 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_160_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_162 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_162_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_163 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_163_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_164 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_164_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
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
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_166_ = {
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
	var s_167 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_167_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_168 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_168_ = {
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

	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_170 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_170_ = {
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
	var s_171 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_171_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_173_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_175 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_175_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_176 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_176_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_177 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_177_ = {
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
	var s_178 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_178_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_179 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_179_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_180 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_180_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_182 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_182_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_183 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_183_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_184 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_184_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_185 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_185_ = {
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
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_186 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_186_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_187 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_187_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_188 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_188_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_191 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_191_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_192 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_192_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_194_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_195 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_195_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_196 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_196_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_197 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_197_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_198 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_198_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_199 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_199_ = {
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

	var s_200 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_200_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_201 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_201_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
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
	var s_202 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_202_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_203_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_204 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_204_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_205 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_205_ = {
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
	var s_206 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_206_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_207 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_207_ = {
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
	var s_208 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_208_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_209 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_209_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_210 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_210_ = {
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
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_212 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_212_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_213 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_213_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_214 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_214_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
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
	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_216 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_216_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_218_ = {
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
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_220 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_220_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_221 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_221_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_222 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_222_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_223 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_223_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_226 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_226_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_227 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_227_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_228 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_228_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_229 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_229_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_230 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_230_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_231 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_231_ = {
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
	var s_232 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_232_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_233 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_233_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_235 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'silk potion' was really quite swell here.", "A friend of a friend told Bill, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_235_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'silk potion' was really quite swell here.", "A friend of a friend told Bill, the 'silk potion' was good here."],
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
	var s_236 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_236_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_237 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_237_ = {
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
	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_239 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_239_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_240 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_240_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_241 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_241_ = {
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
	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_243 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_243_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_245 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_245_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_247 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_247_ = {
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

	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_249 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_249_ = {
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
	var s_250 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_250_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_251 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_251_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_252 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_252_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_253 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_253_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_254 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_254_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_255 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_255_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_256 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_256_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_257 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_257_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_259 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_259_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_260 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_260_ = {
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
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_262 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_262_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_264 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_264_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_265 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_265_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_266 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_266_ = {
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
	var s_267 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_267_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_269 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_269_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_270 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_270_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_271_ = {
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
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_273 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_273_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_274 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_274_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_275 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_275_ = {
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
	var s_276 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_276_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_278_ = {
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
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_280 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_280_ = {
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
	var s_281 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_281_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_282 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_282_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_283 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_283_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_284 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_284_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_285 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_285_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
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
	var s_286 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_286_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_287 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_287_ = {
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
	var s_288 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_288_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_290 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_290_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_291 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_291_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_292 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_292_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_293 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_293_ = {
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

	var s_294 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_294_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_295 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_295_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_296 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_296_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_297 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_297_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_298 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_298_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_299 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_299_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_300_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_302_ = {
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
	var s_303 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_303_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_304 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_304_ = {
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

	var s_305 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_305_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_306 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_306_ = {
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
	var s_307 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_307_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_308 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_308_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_309 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_309_ = {
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
	var s_310 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_310_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_311 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_311_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_312 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_312_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_313 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_313_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_314 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_314_ = {
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
	var s_315 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_315_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_316 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_316_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_318 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_318_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_319 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_319_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_321 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_321_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_322 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_322_ = {
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
	var s_323 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_323_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_324 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_324_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_325 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_325_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_326 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_326_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_327 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_327_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_328 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_328_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_330 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_330_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_332 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_332_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_333 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_333_ = {
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
	var s_334 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_334_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_335 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_335_ = {
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
	var s_336 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_336_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_337 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_337_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_338 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_338_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_339 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_339_ = {
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
	var s_340 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_340_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_341 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_341_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_343 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_343_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
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
	var s_344 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_344_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_345 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_345_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_346 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_346_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_348_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_349 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_349_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_353 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_353_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_354 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_354_ = {
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
	var s_355 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_355_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_356 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_356_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_357 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_357_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_359 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_359_ = {
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
	var s_360 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_360_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_361 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_361_ = {
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
	var s_362 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_362_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_363 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_363_ = {
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

	var s_364 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_364_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_365 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_365_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_366 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_366_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_367 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_367_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_369 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_369_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_370 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_370_ = {
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
	var s_371 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_371_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_372 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_372_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_373 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_374 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_374_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_375 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_375_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_376 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_376_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_377 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_377_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_378 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_378_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_379 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_379_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_380 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_380_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_381_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_382 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_382_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_383 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_383_ = {
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
	var s_384 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_384_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_386 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_386_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_387 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_387_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
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
	var s_388 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_388_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_390 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_390_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_392 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_392_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_394 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_394_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_395 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_395_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_396 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_396_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_397 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_397_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_399 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_399_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_400 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_400_ = {
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
	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_402_ = {
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
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_404_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_405 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_405_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_406 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_406_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_407 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_407_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_408 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_408_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_409 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_409_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_412_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_414 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_414_ = {
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
	var s_415 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_415_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_416 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_416_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_417 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_417_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_418 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_418_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_419 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_419_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_420 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_420_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_421 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_421_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_422 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_422_ = {
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
	var s_423 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_423_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_424 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_424_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_425 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_425_ = {
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
	var s_426 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_426_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_427 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_427_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_428 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_428_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_429 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_429_ = {
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
	var s_430 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_430_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_431 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_431_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_432 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_432_ = {
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

	var s_433 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_433_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_434 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_434_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
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
	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_436 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_436_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_438 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_438_ = {
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
	var s_439 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_439_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_440 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_440_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
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
	var s_441 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_441_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_442 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_442_ = {
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
	var s_443 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_443_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_444 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_444_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_445 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_445_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_446 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_446_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_447 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_447_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_448 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_448_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_449 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_449_ = {
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
	var s_450 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_450_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_451 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_451_ = {
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
	var s_452 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_452_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_453 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_453_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_456 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_456_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_458 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_458_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_459 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_459_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_460 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_460_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_461 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_461_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_462 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_462_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_463 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_463_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_464 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_464_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_465 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_465_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_467 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_467_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_468 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_468_ = {
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
	var s_469 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_469_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_470 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_470_ = {
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
	var s_471 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_471_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_472 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_472_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
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

	var s_474 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_474_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_475 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_475_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_476 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_476_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_477 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_477_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_478 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_478_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_479 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_479_ = {
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
	var s_480 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_480_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_481 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_481_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_482 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_482_ = {
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
	var s_483 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_483_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_484 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_484_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_485 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_485_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_486 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_486_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_487 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_487_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_488 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_488_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_489 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_489_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_490 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_490_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Alice then remembered her shaman-guru frantically yelling:"],
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
	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_492 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_492_ = {
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
	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_494_ = {
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
	var s_495 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_495_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
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

	var s_497 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_497_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_498 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_498_ = {
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
	var s_499 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_499_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_500 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_500_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_501 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_501_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_502 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_502_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_503 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_503_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "PARENTS",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_505 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_505_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_506 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_506_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_507 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_507_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_508 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_508_ = {
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

	var s_509 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_509_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_511 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_511_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_512 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_512_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_513 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_513_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_514 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_514_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_515 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_515_ = {
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
	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_517 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_517_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
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

	var s_519 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_519_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_520 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_520_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_521 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_521_ = {
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
	var s_522 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_522_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_523 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_523_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_524 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_524_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_525 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_525_ = {
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
	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_527 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_527_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_528 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_528_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_529 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_529_ = {
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
	var s_530 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_530_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_531 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_531_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_532 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_532_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_534 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_534_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_535 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_535_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_536 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_536_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_537 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_537_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_538 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_538_ = {
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
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_540 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_540_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_541 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_541_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_542 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_542_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_543 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_543_ = {
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
	var s_544 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_544_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_545 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_545_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_547_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_549 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_549_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
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
	var s_550 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_550_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_551 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_551_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_552 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_552_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_553 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_553_ = {
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
	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_555 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_555_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_556 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_556_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_557 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_557_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_558 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_558_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_559 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_559_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_560 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_560_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_561 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_561_ = {
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
	var s_562 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_562_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_563 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_563_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_564 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_564_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_565 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_565_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_566 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_566_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_567 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_567_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_568 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_568_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_569 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_569_ = {
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
	var s_570 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_570_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_571 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_571_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_572 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_572_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_573 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_573_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_575 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_575_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_576 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_576_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_577 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_577_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_578 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_578_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_579 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_579_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_580 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_580_ = {
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
	var s_581 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_581_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_582_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_583 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_583_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_584 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_584_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_586 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_586_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_587 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_587_ = {
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
	var s_588 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_588_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_589 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_589_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_590 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_590_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_591_ = {
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
	var s_592 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_592_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_593_ = {
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
	var s_594 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_594_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_595_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_598 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_598_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_600_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_601 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_601_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_602 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_602_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_604 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_604_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_605 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_605_ = {
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
	var s_606 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_606_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_607 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_607_ = {
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
	var s_608 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_608_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_611 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_611_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_612 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_612_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_613 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_613_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_614 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_614_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_615 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_615_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Bill then remembered his shaman-guru frantically yelling:"],
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
	var s_616 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_616_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_617 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_617_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_618 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_618_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_619 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_619_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_620 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_620_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_621 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_621_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_622 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_622_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
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
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_624 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_624_ = {
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
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_626 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_626_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_627 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_627_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_628 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_628_ = {
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
	var s_629 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_629_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_631 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_631_ = {
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
	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_633 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_633_ = {
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

	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_635 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_635_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_636 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_636_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_639 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_639_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_640 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_640_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_642 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_642_ = {
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
	var s_643 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_643_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
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
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_59 = {
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
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "KNEW",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_647 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_647_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_648 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_648_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_649 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_649_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_650 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_650_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_651 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_651_ = {
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
	var s_653 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_653_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_654 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_654_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_655 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_655_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_656 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_656_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_658 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_658_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_659 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_659_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_660 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_660_ = {
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
	var s_661 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_661_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_662 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_662_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_663 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_663_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_666 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_666_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_667 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_667_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_668 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_668_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_669 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_669_ = {
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
	var s_670 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_670_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_671 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_671_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_672 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_672_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_673 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_673_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
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
	var s_674 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_674_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_677 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'silk potion' was really quite swell here.", "A friend of a friend told Bill, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_677_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'silk potion' was really quite swell here.", "A friend of a friend told Bill, the 'silk potion' was good here."],
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
	var s_678 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_678_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_679 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_679_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_680 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_680_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_682_ = {
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
	var s_683 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_683_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_684 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_684_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_685 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_685_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_687 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_687_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_688 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_688_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_689 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_689_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_690 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_690_ = {
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
	var s_691 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_691_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_693 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_693_ = {
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
	var s_694 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_694_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_695 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_695_ = {
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
	var s_696 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_696_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_697 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_697_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_698 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_698_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_699 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_699_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_700 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_700_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_701 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_701_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_702 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_702_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_703 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_703_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_704 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_704_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_705 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_705_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_707 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_707_ = {
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

	var s_708 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_708_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_711 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_711_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_712 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_712_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_713 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_713_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_714 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_714_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_715 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_715_ = {
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
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_717 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_717_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_718 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_718_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_720 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_720_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_721 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_721_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_722 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_722_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_724 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_724_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_725 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_725_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_726 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_726_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_727 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_727_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_728 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_728_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
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

	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_731 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_731_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_733 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_733_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_735 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_735_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
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
	var s_736 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_736_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_737 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_737_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_739 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_739_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_740 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_740_ = {
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
	var s_741 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_741_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_742 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_742_ = {
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
	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_744 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_744_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_745 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_745_ = {
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
	var s_746 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_746_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_747 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_747_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
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
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_749 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_749_ = {
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
	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_751 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_751_ = {
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

	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_753 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_753_ = {
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
	var s_754 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_754_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_755 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_755_ = {
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
	var s_756 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_756_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_757 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_757_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_758 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_758_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_759 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_759_ = {
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
	var s_760 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_760_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_761 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_761_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_762 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_762_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_763 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_763_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_764 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_764_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_765 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_765_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_766 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_766_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_767 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_767_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_768 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_768_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_769 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_769_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_770 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_770_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_771 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_771_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_772 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_772_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_773 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_773_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_774 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_774_ = {
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
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_776 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_776_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_778 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_778_ = {
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
	var s_779 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_779_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_780 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_780_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_781 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_781_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_782 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_782_ = {
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
	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_784 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_784_ = {
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
	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_786 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_786_ = {
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
	var s_787 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_787_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_788 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_788_ = {
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
	var s_789 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_789_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_790 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_790_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_792 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_792_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
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
	var s_793 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_793_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_794 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_794_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_795 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_795_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_796 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_796_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_799 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_799_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_801 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_801_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_802 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_802_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_803 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_803_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_804 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_804_ = {
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
	var s_805 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_805_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_806 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_806_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_808_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_810 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_810_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_811 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_811_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_812 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_812_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_813 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_813_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_814 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_814_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_815 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_815_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_817 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_817_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_818 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_818_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_819 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_819_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_820 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_820_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_821 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_821_ = {
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
	var s_822 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_822_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_823 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_823_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_824 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_824_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_826 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_826_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_827 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_827_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_828 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_828_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_829 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_829_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_830 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_830_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_831 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_831_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_832 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_832_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_834 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_834_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_835 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_835_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_836 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_836_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_837 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_837_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_838 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_838_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_839 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_839_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_840 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_840_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_842 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_842_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_843 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_843_ = {
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
	var s_844 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_844_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_845 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_845_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_846 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_846_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_847 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_847_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_849 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_849_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_850 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_850_ = {
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
	var s_851 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_851_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_852 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_852_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_854 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_854_ = {
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
	var s_855 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_855_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_856 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_856_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_857 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_857_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_858 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_858_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_859 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_859_ = {
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
	var s_860 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_860_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_861 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_861_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_862 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_862_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_863_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_864 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_864_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_865 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_865_ = {
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
	var s_866 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_866_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_867 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_867_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_869 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_869_ = {
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
	var s_870 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_870_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_871 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_871_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_873_ = {
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
	var s_874 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_874_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_875 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_875_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_876 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_876_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_878 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_878_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_879 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_879_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_880 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_880_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_881 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_881_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_882 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_882_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_883 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_883_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
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
	var s_884 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_884_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_885 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_885_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_886 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_886_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_887 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_887_ = {
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
	var s_888 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_888_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_889 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_889_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_890 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_890_ = {
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
	var s_891 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_891_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_892 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_892_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_893 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_893_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_894 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'muddy water' was good here.", "It must have been that Alice knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_894_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_895 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_895_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_896 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_896_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_898 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_898_ = {
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
	var s_899 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_899_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_900 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_900_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_901 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_901_ = {
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
	var s_902 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_902_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_903 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_903_ = {
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
	var s_904 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_904_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_905 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_905_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_906 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_906_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_907 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_907_ = {
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
	var s_908 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_908_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_909 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_909_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_910 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_910_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_911 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_911_ = {
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
	var s_912 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_912_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_913 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_913_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_914 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_914_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_915 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_915_ = {
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
	var s_916 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_916_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_917 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_917_ = {
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

	var s_918 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_918_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_919 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_919_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_920 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_920_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_921 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_921_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_922 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_922_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_923 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_923_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_924 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_924_ = {
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
	var s_925 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_925_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_926 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_926_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_927 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_927_ = {
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
	var s_928 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_928_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_929 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_929_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_930 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_930_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_931 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_931_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_932 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_932_ = {
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
	var s_933 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_933_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_934 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_934_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_935 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_935_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_936 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_936_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_937 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_937_ = {
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
	var s_938 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_938_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_939 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_939_ = {
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
	var s_940 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_940_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_941 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_941_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_942 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_942_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_943 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_943_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_944 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_944_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_945 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_945_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_946 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_946_ = {
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
	var s_947 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_947_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_948 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_948_ = {
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
	var s_949 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_949_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_950 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_950_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_951 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_951_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_952 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_952_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_953 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_953_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_954 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_954_ = {
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
	var s_955 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_955_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_956 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_956_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_957 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_957_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_958 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_958_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_959 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_959_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_960 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_960_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_961 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_961_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_962 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_962_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_963 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_963_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_964 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_964_ = {
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

	var s_965 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_965_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_966 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'matcha roots' was good here.", "It must have been that Alice knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_966_ = {
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
	var s_967 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_967_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_968 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_968_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_969 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_969_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_970 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_970_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_971 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_971_ = {
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
	var s_972 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_972_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_973 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_973_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_974 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_974_ = {
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
	var s_975 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_975_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_976 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_976_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_977 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_977_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_978 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_978_ = {
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
	var s_979 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_979_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_980 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_980_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_981 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_981_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_982 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_982_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_983 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_983_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_984 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_984_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_985 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_985_ = {
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

	var s_986 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_986_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_987 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_987_ = {
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
	var s_988 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_988_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_989 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_989_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_990 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_990_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_991 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_991_ = {
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
	var s_992 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_992_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
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
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_994 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_994_ = {
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
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_996 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_996_ = {
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
	var s_997 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_997_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_998 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_998_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_999 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_999_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1000 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1000_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
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
	var s_1001 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1001_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1002 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1002_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1003 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1003_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1004 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1004_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1005 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1005_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1006 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1006_ = {
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
	var s_1007 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1007_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1008 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1008_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1009 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1009_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1010 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1010_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1011 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1011_ = {
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

	var s_1012 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1012_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1013 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1013_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1014 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1014_ = {
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
	var s_1015 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1015_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1016 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1016_ = {
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
	var s_1017 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1017_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1018 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1018_ = {
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
	var s_1019 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1019_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1020 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1020_ = {
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
	var s_1021 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1021_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1022 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1022_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1023 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1023_ = {
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

	var s_1024 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1024_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1025 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1025_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1026 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1026_ = {
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
	var s_1027 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1027_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1028 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1028_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1029 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1029_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1030 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1030_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1031 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1031_ = {
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
	var s_1032 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1032_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1033 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1033_ = {
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

	var s_1034 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1034_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1035 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1035_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1036 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1036_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1037 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1037_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1038 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1038_ = {
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
	var s_1039 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1039_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
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
	var q_1041 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1041_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1042 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1042_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1043 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1043_ = {
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
	var s_1044 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1044_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1045 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1045_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1046 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1046_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1047 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1047_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1048 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1048_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1049 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1049_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1050 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1050_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1051 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1051_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1052 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1052_ = {
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
	var s_1053 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1053_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1054 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1054_ = {
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
	var s_1055 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1055_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1057 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1057_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1058 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'silk potion' was really quite swell here.", "A friend of a friend told Bill, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1058_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'silk potion' was really quite swell here.", "A friend of a friend told Bill, the 'silk potion' was good here."],
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
	var s_1059 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1059_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1060 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1060_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_1061 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1061_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1062 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1062_ = {
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
	var s_1063 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1063_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1064 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1064_ = {
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
	var s_1065 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1065_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1066 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1066_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1067 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1067_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1068 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1068_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1069 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1069_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1070 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1070_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1071 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1071_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1072 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1072_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1073 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1073_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1074 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1074_ = {
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
	var s_1075 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1075_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1076 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1076_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1077 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1077_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1078 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1078_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1079 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1079_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1080 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1080_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1081 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1081_ = {
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
	var s_1082 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1082_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1083 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1083_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1084 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1084_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1085 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1085_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1086 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1086_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1087 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1087_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1088 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1088_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1089 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1089_ = {
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
	var s_1090 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1090_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1091 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1091_ = {
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

	var s_1092 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1092_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1093 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'muddy water' was really quite swell here.", "A friend of a friend told Bill, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1093_ = {
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
	var s_1094 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1094_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1095 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1095_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1096 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1096_ = {
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
	var s_1097 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1097_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1098 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1098_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1099 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1099_ = {
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
	var s_1100 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1100_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1101 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1101_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1102 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1102_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1103 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1103_ = {
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

	var s_1104 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1104_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1105 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1105_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1106_ = {
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
	var s_1107 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1107_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1108 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1108_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1109 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1109_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1110 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1110_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1111 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1111_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1112 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1112_ = {
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
	var s_1113 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1113_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1114 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1114_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 


// CODE BODY END

jsPsych.init({
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,s_3,s_3_,s_4,s_4_,s_5,s_5_,s_6,s_6_,s_7,s_7_,s_8,s_8_,betweenstory_1,s_9,s_9_,s_10,s_10_,s_11,s_11_,s_12,s_12_,s_13,s_13_,s_14,s_14_,s_15,s_15_,s_16,s_16_,betweenstory_2,s_17,s_17_,s_18,s_18_,s_19,s_19_,s_20,s_20_,s_21,s_21_,s_22,s_22_,s_23,s_23_,s_24,s_24_,betweenstory_3,s_25,s_25_,s_26,s_26_,s_27,s_27_,s_28,s_28_,s_29,s_29_,s_30,s_30_,s_31,s_31_,s_32,s_32_,betweenstory_4,s_33,s_33_,s_34,s_34_,s_35,s_35_,s_36,s_36_,s_37,s_37_,s_38,s_38_,s_39,s_39_,s_40,s_40_,betweenstory_5,s_41,s_41_,s_42,s_42_,s_43,s_43_,q_44,q_44_,s_45,s_45_,q_46,q_46_,s_47,s_47_,q_48,q_48_,s_49,s_49_,q_50,q_50_,s_51,s_51_,s_52,s_52_,betweenstory_6,s_53,s_53_,s_54,s_54_,s_55,s_55_,q_56,q_56_,s_57,s_57_,q_58,q_58_,s_59,s_59_,q_60,q_60_,s_61,s_61_,s_62,s_62_,s_63,s_63_,betweenstory_7,s_64,s_64_,s_65,s_65_,s_66,s_66_,q_67,q_67_,s_68,s_68_,q_69,q_69_,s_70,s_70_,s_71,s_71_,q_72,q_72_,s_73,s_73_,s_74,s_74_,betweenstory_8,s_75,s_75_,s_76,s_76_,q_77,q_77_,s_78,s_78_,s_79,s_79_,q_80,q_80_,s_81,s_81_,q_82,q_82_,s_83,s_83_,s_84,s_84_,s_85,s_85_,betweenstory_9,s_86,s_86_,q_87,q_87_,s_88,s_88_,s_89,s_89_,q_90,q_90_,s_91,s_91_,s_92,s_92_,s_93,s_93_,s_94,s_94_,s_95,s_95_,betweenstory_10,s_96,s_96_,q_97,q_97_,s_98,s_98_,s_99,s_99_,q_100,q_100_,s_101,s_101_,q_102,q_102_,s_103,s_103_,s_104,s_104_,q_105,q_105_,s_106,s_106_,s_107,s_107_,betweenstory_11,s_108,s_108_,s_109,s_109_,s_110,s_110_,s_111,s_111_,s_112,s_112_,s_113,s_113_,q_114,q_114_,s_115,s_115_,s_116,s_116_,betweenstory_12,s_117,s_117_,s_118,s_118_,s_119,s_119_,s_120,s_120_,q_121,q_121_,s_122,s_122_,s_123,s_123_,s_124,s_124_,s_125,s_125_,betweenstory_13,s_126,s_126_,s_127,s_127_,q_128,q_128_,s_129,s_129_,s_130,s_130_,s_131,s_131_,s_132,s_132_,q_133,q_133_,s_134,s_134_,s_135,s_135_,betweenstory_14,s_136,s_136_,q_137,q_137_,s_138,s_138_,s_139,s_139_,q_140,q_140_,s_141,s_141_,s_142,s_142_,q_143,q_143_,s_144,s_144_,q_145,q_145_,s_146,s_146_,s_147,s_147_,betweenstory_15,s_148,s_148_,s_149,s_149_,s_150,s_150_,q_151,q_151_,s_152,s_152_,s_153,s_153_,q_154,q_154_,s_155,s_155_,q_156,q_156_,s_157,s_157_,s_158,s_158_,betweenstory_16,s_159,s_159_,s_160,s_160_,s_161,s_161_,s_162,s_162_,s_163,s_163_,q_164,q_164_,s_165,s_165_,q_166,q_166_,s_167,s_167_,s_168,s_168_,betweenstory_17,s_169,s_169_,q_170,q_170_,s_171,s_171_,s_172,s_172_,q_173,q_173_,s_174,s_174_,s_175,s_175_,s_176,s_176_,q_177,q_177_,s_178,s_178_,s_179,s_179_,betweenstory_18,s_180,s_180_,s_181,s_181_,s_182,s_182_,q_183,q_183_,s_184,s_184_,q_185,q_185_,s_186,s_186_,s_187,s_187_,s_188,s_188_,s_189,s_189_,betweenstory_19,s_190,s_190_,s_191,s_191_,q_192,q_192_,s_193,s_193_,q_194,q_194_,s_195,s_195_,s_196,s_196_,s_197,s_197_,s_198,s_198_,s_199,s_199_,betweenstory_20,s_200,s_200_,q_201,q_201_,s_202,s_202_,q_203,q_203_,s_204,s_204_,q_205,q_205_,s_206,s_206_,q_207,q_207_,s_208,s_208_,s_209,s_209_,q_210,q_210_,s_211,s_211_,s_212,s_212_,betweenstory_21,s_213,s_213_,q_214,q_214_,s_215,s_215_,q_216,q_216_,s_217,s_217_,q_218,q_218_,s_219,s_219_,s_220,s_220_,q_221,q_221_,s_222,s_222_,s_223,s_223_,s_224,s_224_,betweenstory_22,s_225,s_225_,s_226,s_226_,s_227,s_227_,s_228,s_228_,s_229,s_229_,s_230,s_230_,q_231,q_231_,s_232,s_232_,s_233,s_233_,betweenstory_23,s_234,s_234_,q_235,q_235_,s_236,s_236_,q_237,q_237_,s_238,s_238_,q_239,q_239_,s_240,s_240_,q_241,q_241_,s_242,s_242_,q_243,q_243_,s_244,s_244_,q_245,q_245_,s_246,s_246_,s_247,s_247_,betweenstory_24,s_248,s_248_,q_249,q_249_,s_250,s_250_,s_251,s_251_,q_252,q_252_,s_253,s_253_,q_254,q_254_,s_255,s_255_,s_256,s_256_,s_257,s_257_,s_258,s_258_,betweenstory_25,s_259,s_259_,q_260,q_260_,s_261,s_261_,q_262,q_262_,s_263,s_263_,s_264,s_264_,s_265,s_265_,q_266,q_266_,s_267,s_267_,s_268,s_268_,s_269,s_269_,betweenstory_26,s_270,s_270_,q_271,q_271_,s_272,s_272_,q_273,q_273_,s_274,s_274_,q_275,q_275_,s_276,s_276_,s_277,s_277_,q_278,q_278_,s_279,s_279_,q_280,q_280_,s_281,s_281_,s_282,s_282_,betweenstory_27,s_283,s_283_,s_284,s_284_,q_285,q_285_,s_286,s_286_,q_287,q_287_,s_288,s_288_,s_289,s_289_,s_290,s_290_,q_291,q_291_,s_292,s_292_,s_293,s_293_,betweenstory_28,s_294,s_294_,s_295,s_295_,s_296,s_296_,q_297,q_297_,s_298,s_298_,s_299,s_299_,q_300,q_300_,s_301,s_301_,q_302,q_302_,s_303,s_303_,s_304,s_304_,betweenstory_29,s_305,s_305_,q_306,q_306_,s_307,s_307_,s_308,s_308_,q_309,q_309_,s_310,s_310_,s_311,s_311_,q_312,q_312_,s_313,s_313_,q_314,q_314_,s_315,s_315_,s_316,s_316_,betweenstory_30,s_317,s_317_,q_318,q_318_,s_319,s_319_,s_320,s_320_,s_321,s_321_,q_322,q_322_,s_323,s_323_,q_324,q_324_,s_325,s_325_,q_326,q_326_,s_327,s_327_,s_328,s_328_,betweenstory_31,s_329,s_329_,q_330,q_330_,s_331,s_331_,s_332,s_332_,q_333,q_333_,s_334,s_334_,q_335,q_335_,s_336,s_336_,q_337,q_337_,s_338,s_338_,q_339,q_339_,s_340,s_340_,s_341,s_341_,betweenstory_32,s_342,s_342_,q_343,q_343_,s_344,s_344_,s_345,s_345_,s_346,s_346_,s_347,s_347_,q_348,q_348_,s_349,s_349_,s_350,s_350_,s_351,s_351_,betweenstory_33,s_352,s_352_,s_353,s_353_,q_354,q_354_,s_355,s_355_,q_356,q_356_,s_357,s_357_,s_358,s_358_,q_359,q_359_,s_360,s_360_,q_361,q_361_,s_362,s_362_,s_363,s_363_,betweenstory_34,s_364,s_364_,q_365,q_365_,s_366,s_366_,q_367,q_367_,s_368,s_368_,s_369,s_369_,q_370,q_370_,s_371,s_371_,s_372,s_372_,s_373,s_373_,s_374,s_374_,betweenstory_35,s_375,s_375_,s_376,s_376_,q_377,q_377_,s_378,s_378_,s_379,s_379_,s_380,s_380_,q_381,q_381_,s_382,s_382_,q_383,q_383_,s_384,s_384_,s_385,s_385_,betweenstory_36,s_386,s_386_,q_387,q_387_,s_388,s_388_,s_389,s_389_,s_390,s_390_,s_391,s_391_,q_392,q_392_,s_393,s_393_,s_394,s_394_,s_395,s_395_,betweenstory_37,s_396,s_396_,q_397,q_397_,s_398,s_398_,s_399,s_399_,q_400,q_400_,s_401,s_401_,q_402,q_402_,s_403,s_403_,q_404,q_404_,s_405,s_405_,q_406,q_406_,s_407,s_407_,s_408,s_408_,betweenstory_38,s_409,s_409_,s_410,s_410_,s_411,s_411_,q_412,q_412_,s_413,s_413_,q_414,q_414_,s_415,s_415_,q_416,q_416_,s_417,s_417_,q_418,q_418_,s_419,s_419_,s_420,s_420_,betweenstory_39,s_421,s_421_,q_422,q_422_,s_423,s_423_,s_424,s_424_,q_425,q_425_,s_426,s_426_,q_427,q_427_,s_428,s_428_,q_429,q_429_,s_430,s_430_,s_431,s_431_,s_432,s_432_,betweenstory_40,s_433,s_433_,q_434,q_434_,s_435,s_435_,s_436,s_436_,s_437,s_437_,q_438,q_438_,s_439,s_439_,q_440,q_440_,s_441,s_441_,q_442,q_442_,s_443,s_443_,s_444,s_444_,betweenstory_41,s_445,s_445_,s_446,s_446_,s_447,s_447_,s_448,s_448_,q_449,q_449_,s_450,s_450_,q_451,q_451_,s_452,s_452_,s_453,s_453_,s_454,s_454_,betweenstory_42,s_455,s_455_,s_456,s_456_,s_457,s_457_,q_458,q_458_,s_459,s_459_,s_460,s_460_,s_461,s_461_,s_462,s_462_,s_463,s_463_,betweenstory_43,s_464,s_464_,s_465,s_465_,s_466,s_466_,s_467,s_467_,q_468,q_468_,s_469,s_469_,q_470,q_470_,s_471,s_471_,s_472,s_472_,s_473,s_473_,betweenstory_44,s_474,s_474_,s_475,s_475_,s_476,s_476_,q_477,q_477_,s_478,s_478_,q_479,q_479_,s_480,s_480_,s_481,s_481_,q_482,q_482_,s_483,s_483_,s_484,s_484_,betweenstory_45,s_485,s_485_,s_486,s_486_,s_487,s_487_,q_488,q_488_,s_489,s_489_,q_490,q_490_,s_491,s_491_,q_492,q_492_,s_493,s_493_,q_494,q_494_,s_495,s_495_,s_496,s_496_,betweenstory_46,s_497,s_497_,q_498,q_498_,s_499,s_499_,q_500,q_500_,s_501,s_501_,s_502,s_502_,q_503,q_503_,s_504,s_504_,s_505,s_505_,q_506,q_506_,s_507,s_507_,s_508,s_508_,betweenstory_47,s_509,s_509_,s_510,s_510_,s_511,s_511_,q_512,q_512_,s_513,s_513_,s_514,s_514_,q_515,q_515_,s_516,s_516_,s_517,s_517_,s_518,s_518_,betweenstory_48,s_519,s_519_,s_520,s_520_,q_521,q_521_,s_522,s_522_,q_523,q_523_,s_524,s_524_,q_525,q_525_,s_526,s_526_,q_527,q_527_,s_528,s_528_,q_529,q_529_,s_530,s_530_,s_531,s_531_,betweenstory_49,s_532,s_532_,s_533,s_533_,s_534,s_534_,s_535,s_535_,s_536,s_536_,s_537,s_537_,q_538,q_538_,s_539,s_539_,s_540,s_540_,betweenstory_50,s_541,s_541_,s_542,s_542_,q_543,q_543_,s_544,s_544_,s_545,s_545_,s_546,s_546_,q_547,q_547_,s_548,s_548_,q_549,q_549_,s_550,s_550_,s_551,s_551_,betweenstory_51,s_552,s_552_,q_553,q_553_,s_554,s_554_,q_555,q_555_,s_556,s_556_,q_557,q_557_,s_558,s_558_,s_559,s_559_,s_560,s_560_,q_561,q_561_,s_562,s_562_,s_563,s_563_,betweenstory_52,s_564,s_564_,q_565,q_565_,s_566,s_566_,q_567,q_567_,s_568,s_568_,q_569,q_569_,s_570,s_570_,s_571,s_571_,s_572,s_572_,s_573,s_573_,s_574,s_574_,betweenstory_53,s_575,s_575_,s_576,s_576_,s_577,s_577_,s_578,s_578_,s_579,s_579_,q_580,q_580_,s_581,s_581_,q_582,q_582_,s_583,s_583_,s_584,s_584_,betweenstory_54,s_585,s_585_,s_586,s_586_,q_587,q_587_,s_588,s_588_,q_589,q_589_,s_590,s_590_,q_591,q_591_,s_592,s_592_,q_593,q_593_,s_594,s_594_,q_595,q_595_,s_596,s_596_,s_597,s_597_,betweenstory_55,s_598,s_598_,s_599,s_599_,q_600,q_600_,s_601,s_601_,q_602,q_602_,s_603,s_603_,s_604,s_604_,q_605,q_605_,s_606,s_606_,q_607,q_607_,s_608,s_608_,s_609,s_609_,betweenstory_56,s_610,s_610_,s_611,s_611_,s_612,s_612_,q_613,q_613_,s_614,s_614_,q_615,q_615_,s_616,s_616_,q_617,q_617_,s_618,s_618_,s_619,s_619_,s_620,s_620_,betweenstory_57,s_621,s_621_,q_622,q_622_,s_623,s_623_,q_624,q_624_,s_625,s_625_,q_626,q_626_,s_627,s_627_,q_628,q_628_,s_629,s_629_,s_630,s_630_,q_631,q_631_,s_632,s_632_,s_633,s_633_,betweenstory_58,s_634,s_634_,s_635,s_635_,q_636,q_636_,s_637,s_637_,s_638,s_638_,s_639,s_639_,q_640,q_640_,s_641,s_641_,q_642,q_642_,s_643,s_643_,s_644,s_644_,betweenstory_59,s_645,s_645_,q_646,q_646_,s_647,s_647_,s_648,s_648_,q_649,q_649_,s_650,s_650_,q_651,q_651_,s_652,s_652_,s_653,s_653_,s_654,s_654_,s_655,s_655_,betweenstory_60,s_656,s_656_,s_657,s_657_,s_658,s_658_,s_659,s_659_,q_660,q_660_,s_661,s_661_,s_662,s_662_,s_663,s_663_,s_664,s_664_,betweenstory_61,s_665,s_665_,q_666,q_666_,s_667,s_667_,s_668,s_668_,q_669,q_669_,s_670,s_670_,s_671,s_671_,s_672,s_672_,q_673,q_673_,s_674,s_674_,s_675,s_675_,betweenstory_62,s_676,s_676_,q_677,q_677_,s_678,s_678_,s_679,s_679_,s_680,s_680_,s_681,s_681_,q_682,q_682_,s_683,s_683_,q_684,q_684_,s_685,s_685_,s_686,s_686_,betweenstory_63,s_687,s_687_,s_688,s_688_,s_689,s_689_,q_690,q_690_,s_691,s_691_,s_692,s_692_,q_693,q_693_,s_694,s_694_,q_695,q_695_,s_696,s_696_,s_697,s_697_,betweenstory_64,s_698,s_698_,q_699,q_699_,s_700,s_700_,s_701,s_701_,s_702,s_702_,s_703,s_703_,q_704,q_704_,s_705,s_705_,s_706,s_706_,s_707,s_707_,betweenstory_65,s_708,s_708_,s_709,s_709_,s_710,s_710_,s_711,s_711_,s_712,s_712_,q_713,q_713_,s_714,s_714_,q_715,q_715_,s_716,s_716_,s_717,s_717_,betweenstory_66,s_718,s_718_,s_719,s_719_,q_720,q_720_,s_721,s_721_,q_722,q_722_,s_723,s_723_,s_724,s_724_,q_725,q_725_,s_726,s_726_,q_727,q_727_,s_728,s_728_,s_729,s_729_,betweenstory_67,s_730,s_730_,s_731,s_731_,s_732,s_732_,s_733,s_733_,s_734,s_734_,q_735,q_735_,s_736,s_736_,s_737,s_737_,s_738,s_738_,betweenstory_68,s_739,s_739_,q_740,q_740_,s_741,s_741_,q_742,q_742_,s_743,s_743_,s_744,s_744_,q_745,q_745_,s_746,s_746_,q_747,q_747_,s_748,s_748_,q_749,q_749_,s_750,s_750_,s_751,s_751_,betweenstory_69,s_752,s_752_,q_753,q_753_,s_754,s_754_,q_755,q_755_,s_756,s_756_,q_757,q_757_,s_758,s_758_,q_759,q_759_,s_760,s_760_,q_761,q_761_,s_762,s_762_,q_763,q_763_,s_764,s_764_,s_765,s_765_,betweenstory_70,s_766,s_766_,s_767,s_767_,q_768,q_768_,s_769,s_769_,s_770,s_770_,s_771,s_771_,q_772,q_772_,s_773,s_773_,q_774,q_774_,s_775,s_775_,s_776,s_776_,betweenstory_71,s_777,s_777_,q_778,q_778_,s_779,s_779_,q_780,q_780_,s_781,s_781_,q_782,q_782_,s_783,s_783_,q_784,q_784_,s_785,s_785_,q_786,q_786_,s_787,s_787_,q_788,q_788_,s_789,s_789_,s_790,s_790_,betweenstory_72,s_791,s_791_,q_792,q_792_,s_793,s_793_,q_794,q_794_,s_795,s_795_,q_796,q_796_,s_797,s_797_,s_798,s_798_,q_799,q_799_,s_800,s_800_,s_801,s_801_,s_802,s_802_,betweenstory_73,s_803,s_803_,q_804,q_804_,s_805,s_805_,q_806,q_806_,s_807,s_807_,q_808,q_808_,s_809,s_809_,s_810,s_810_,q_811,q_811_,s_812,s_812_,s_813,s_813_,s_814,s_814_,betweenstory_74,s_815,s_815_,s_816,s_816_,q_817,q_817_,s_818,s_818_,q_819,q_819_,s_820,s_820_,q_821,q_821_,s_822,s_822_,q_823,q_823_,s_824,s_824_,s_825,s_825_,s_826,s_826_,betweenstory_75,s_827,s_827_,q_828,q_828_,s_829,s_829_,s_830,s_830_,q_831,q_831_,s_832,s_832_,s_833,s_833_,s_834,s_834_,s_835,s_835_,s_836,s_836_,betweenstory_76,s_837,s_837_,q_838,q_838_,s_839,s_839_,s_840,s_840_,s_841,s_841_,s_842,s_842_,q_843,q_843_,s_844,s_844_,q_845,q_845_,s_846,s_846_,s_847,s_847_,betweenstory_77,s_848,s_848_,s_849,s_849_,q_850,q_850_,s_851,s_851_,s_852,s_852_,s_853,s_853_,q_854,q_854_,s_855,s_855_,s_856,s_856_,s_857,s_857_,betweenstory_78,s_858,s_858_,q_859,q_859_,s_860,s_860_,q_861,q_861_,s_862,s_862_,q_863,q_863_,s_864,s_864_,q_865,q_865_,s_866,s_866_,q_867,q_867_,s_868,s_868_,q_869,q_869_,s_870,s_870_,s_871,s_871_,betweenstory_79,s_872,s_872_,q_873,q_873_,s_874,s_874_,s_875,s_875_,s_876,s_876_,s_877,s_877_,s_878,s_878_,s_879,s_879_,s_880,s_880_,betweenstory_80,s_881,s_881_,s_882,s_882_,q_883,q_883_,s_884,s_884_,q_885,q_885_,s_886,s_886_,q_887,q_887_,s_888,s_888_,s_889,s_889_,q_890,q_890_,s_891,s_891_,s_892,s_892_,betweenstory_81,s_893,s_893_,q_894,q_894_,s_895,s_895_,q_896,q_896_,s_897,s_897_,q_898,q_898_,s_899,s_899_,s_900,s_900_,q_901,q_901_,s_902,s_902_,q_903,q_903_,s_904,s_904_,s_905,s_905_,betweenstory_82,s_906,s_906_,q_907,q_907_,s_908,s_908_,q_909,q_909_,s_910,s_910_,q_911,q_911_,s_912,s_912_,s_913,s_913_,s_914,s_914_,q_915,q_915_,s_916,s_916_,s_917,s_917_,betweenstory_83,s_918,s_918_,s_919,s_919_,q_920,q_920_,s_921,s_921_,q_922,q_922_,s_923,s_923_,q_924,q_924_,s_925,s_925_,s_926,s_926_,q_927,q_927_,s_928,s_928_,s_929,s_929_,betweenstory_84,s_930,s_930_,s_931,s_931_,q_932,q_932_,s_933,s_933_,q_934,q_934_,s_935,s_935_,s_936,s_936_,q_937,q_937_,s_938,s_938_,q_939,q_939_,s_940,s_940_,s_941,s_941_,betweenstory_85,s_942,s_942_,s_943,s_943_,s_944,s_944_,s_945,s_945_,q_946,q_946_,s_947,s_947_,q_948,q_948_,s_949,s_949_,q_950,q_950_,s_951,s_951_,s_952,s_952_,betweenstory_86,s_953,s_953_,q_954,q_954_,s_955,s_955_,q_956,q_956_,s_957,s_957_,s_958,s_958_,s_959,s_959_,q_960,q_960_,s_961,s_961_,q_962,q_962_,s_963,s_963_,s_964,s_964_,betweenstory_87,s_965,s_965_,q_966,q_966_,s_967,s_967_,q_968,q_968_,s_969,s_969_,s_970,s_970_,q_971,q_971_,s_972,s_972_,s_973,s_973_,q_974,q_974_,s_975,s_975_,s_976,s_976_,betweenstory_88,s_977,s_977_,q_978,q_978_,s_979,s_979_,s_980,s_980_,s_981,s_981_,s_982,s_982_,s_983,s_983_,s_984,s_984_,s_985,s_985_,betweenstory_89,s_986,s_986_,q_987,q_987_,s_988,s_988_,q_989,q_989_,s_990,s_990_,q_991,q_991_,s_992,s_992_,s_993,s_993_,q_994,q_994_,s_995,s_995_,q_996,q_996_,s_997,s_997_,s_998,s_998_,betweenstory_90,s_999,s_999_,q_1000,q_1000_,s_1001,s_1001_,q_1002,q_1002_,s_1003,s_1003_,q_1004,q_1004_,s_1005,s_1005_,q_1006,q_1006_,s_1007,s_1007_,q_1008,q_1008_,s_1009,s_1009_,s_1010,s_1010_,s_1011,s_1011_,betweenstory_91,s_1012,s_1012_,s_1013,s_1013_,q_1014,q_1014_,s_1015,s_1015_,q_1016,q_1016_,s_1017,s_1017_,q_1018,q_1018_,s_1019,s_1019_,q_1020,q_1020_,s_1021,s_1021_,s_1022,s_1022_,s_1023,s_1023_,betweenstory_92,s_1024,s_1024_,s_1025,s_1025_,q_1026,q_1026_,s_1027,s_1027_,s_1028,s_1028_,s_1029,s_1029_,s_1030,s_1030_,q_1031,q_1031_,s_1032,s_1032_,s_1033,s_1033_,betweenstory_93,s_1034,s_1034_,s_1035,s_1035_,q_1036,q_1036_,s_1037,s_1037_,q_1038,q_1038_,s_1039,s_1039_,s_1040,s_1040_,q_1041,q_1041_,s_1042,s_1042_,q_1043,q_1043_,s_1044,s_1044_,s_1045,s_1045_,betweenstory_94,s_1046,s_1046_,s_1047,s_1047_,s_1048,s_1048_,q_1049,q_1049_,s_1050,s_1050_,s_1051,s_1051_,q_1052,q_1052_,s_1053,s_1053_,q_1054,q_1054_,s_1055,s_1055_,s_1056,s_1056_,betweenstory_95,s_1057,s_1057_,q_1058,q_1058_,s_1059,s_1059_,q_1060,q_1060_,s_1061,s_1061_,q_1062,q_1062_,s_1063,s_1063_,q_1064,q_1064_,s_1065,s_1065_,s_1066,s_1066_,s_1067,s_1067_,s_1068,s_1068_,betweenstory_96,s_1069,s_1069_,s_1070,s_1070_,q_1071,q_1071_,s_1072,s_1072_,s_1073,s_1073_,q_1074,q_1074_,s_1075,s_1075_,q_1076,q_1076_,s_1077,s_1077_,s_1078,s_1078_,s_1079,s_1079_,betweenstory_97,s_1080,s_1080_,q_1081,q_1081_,s_1082,s_1082_,s_1083,s_1083_,q_1084,q_1084_,s_1085,s_1085_,s_1086,s_1086_,q_1087,q_1087_,s_1088,s_1088_,q_1089,q_1089_,s_1090,s_1090_,s_1091,s_1091_,betweenstory_98,s_1092,s_1092_,q_1093,q_1093_,s_1094,s_1094_,s_1095,s_1095_,q_1096,q_1096_,s_1097,s_1097_,s_1098,s_1098_,q_1099,q_1099_,s_1100,s_1100_,q_1101,q_1101_,s_1102,s_1102_,s_1103,s_1103_,betweenstory_99,s_1104,s_1104_,s_1105,s_1105_,q_1106,q_1106_,s_1107,s_1107_,s_1108,s_1108_,s_1109,s_1109_,q_1110,q_1110_,s_1111,s_1111_,q_1112,q_1112_,s_1113,s_1113_,s_1114,s_1114_,betweenstory_100,],
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