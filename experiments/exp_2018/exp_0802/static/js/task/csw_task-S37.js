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
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
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
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
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
						"rfc": "subject-Alice_location-brew",
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
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
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
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
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
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
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
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
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
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
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
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_42 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_42_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_43 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_43_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
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
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_45 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_45_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_47 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_47_ = {
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
	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_49 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_49_ = {
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
	var s_50 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_50_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_51 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_51_ = {
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
	var s_52 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_52_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_55 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_55_ = {
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
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_57_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_59_ = {
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
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_61_ = {
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
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_63 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_63_ = {
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
	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_65 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_65_ = {
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
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_67 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_67_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_68 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_68_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_69 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_69_ = {
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
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_71 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_71_ = {
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
	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_73 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_73_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_75 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_75_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_78_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_80 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_80_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_82 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_82_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_85_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_87 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_87_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_88 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_88_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_89 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_89_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
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
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_92 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_92_ = {
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
	var s_93 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_93_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_94 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_94_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_95 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_95_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_97 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_97_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_99_ = {
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
	var s_100 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_100_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_102 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_102_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'silk potion' was really quite swell here.", "A friend of a friend told Bill, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_103_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_105 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_105_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_106_ = {
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
	var s_107 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_107_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_108_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_109 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_109_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_110 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_110_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_111_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_112 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_112_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_113 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_113_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_115 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_115_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_117 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_117_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_118 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_118_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_119 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_119_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_120 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_120_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_121 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_121_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_122 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_122_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
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

	var s_124 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_124_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_125 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_125_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_126 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_126_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_127 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_127_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_128 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_128_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_129 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_129_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_130 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_130_ = {
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_133 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_133_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_135 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_135_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_136 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_136_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
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
	var s_137 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_137_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_138 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_138_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_139 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_139_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_140 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_140_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_141 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_141_ = {
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
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_143 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_143_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_145 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_145_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_146 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_146_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_147 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_147_ = {
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
	var s_148 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_148_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_150 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_150_ = {
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_152_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_154 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_154_ = {
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
	var s_155 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_155_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_156 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_156_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_157 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_157_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_159 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_159_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_160 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_160_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
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
	var s_164 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_164_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_165 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_165_ = {
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
	var s_166 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_166_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_167 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_167_ = {
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
	var s_168 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_168_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
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
	var s_171 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_171_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_173_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
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
	var q_176 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_176_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_177 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_177_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_178 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_178_ = {
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
	var s_179 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_179_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_180 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_180_ = {
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

	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_182 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_182_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_183 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_183_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_184 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_184_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_185 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_185_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_186 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_186_ = {
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
	var s_187 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_187_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_188 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_188_ = {
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
	var s_189 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_189_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
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

	var s_191 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_191_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_192 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_192_ = {
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
	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_194_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_195 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_195_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_196 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_196_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_197 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_197_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_198 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_198_ = {
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
	var s_199 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_199_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_200 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_200_ = {
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
	var s_201 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_201_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_203 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_203_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_204 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_204_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_205 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_205_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_206 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_206_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_208 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_208_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_209 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_209_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_210 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_210_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_212 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_212_ = {
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
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_213 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_213_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_216 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'mocha hopps' was good here.", "It must have been that Alice knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_216_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_218_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_220_ = {
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
	var s_221 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_221_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
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
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_224 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_224_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_226 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_226_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_227 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_227_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_228 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_228_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_229 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_229_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_230 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_230_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_231 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_231_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_232 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_232_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_233 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_233_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_235 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_235_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_236 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_236_ = {
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
	var s_237 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_237_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
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

	var s_239 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_239_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_240 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_240_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_241 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_241_ = {
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
	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_243 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_243_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_245 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_245_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_247 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_247_ = {
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
	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_249 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_249_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_250 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_250_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_251 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_251_ = {
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
	var s_252 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_252_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_253 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_253_ = {
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
	var s_254 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_254_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_255 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_255_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_256 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_256_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_257 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_257_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_259 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_259_ = {
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
	var s_260 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_260_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_262 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_262_ = {
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

	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_264 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_264_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_265_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_266 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_266_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
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
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_269 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_269_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_270 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_270_ = {
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
	var s_271 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_271_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_273 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_273_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_274 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_274_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_275 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_275_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_276_ = {
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
	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_278_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_280 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_280_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_281 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_281_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_282 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_282_ = {
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
	var s_283 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_283_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_285 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_285_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_286 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_286_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_287 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_287_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_288 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_288_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_290 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_290_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_291 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_291_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_292_ = {
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
	var s_293 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_293_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_294 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_294_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_295 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_295_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_296 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_296_ = {
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

	var s_297 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_297_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_298_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
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
	var s_299 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_299_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_300_ = {
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
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_302_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_303 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_303_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_304 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_304_ = {
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
	var s_305 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_305_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_306 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_306_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_307 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_307_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
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
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_309_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_310 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_310_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_311 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_311_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_312 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_312_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_313 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_313_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_315 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_315_ = {
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
	var s_316 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_316_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_317 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_317_ = {
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
	var s_318 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_318_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_321 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_321_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_322 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_322_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_323 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_323_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_325 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_325_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_326 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_326_ = {
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
	var s_327 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_327_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_328 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_328_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_332 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_332_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_333 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_333_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_334 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_334_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_336 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_336_ = {
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
	var s_337 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_337_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_338 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_338_ = {
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
	var s_339 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_339_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_341 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_341_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_342 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_342_ = {
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
	var s_343 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_343_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_344 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_344_ = {
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
	var s_345 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_345_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_346 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_346_ = {
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
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_348_ = {
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
	var s_349 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_349_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_351 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_351_ = {
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
	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_353 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_353_ = {
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

	var s_354 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_354_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_355 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_355_ = {
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
	var s_356 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_356_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_357 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_357_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_359 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_359_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_360 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_360_ = {
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
	var s_361 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_361_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_362 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_362_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
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
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_33 = {
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
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_365_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
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
	var s_366 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_366_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_367 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_367_ = {
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
	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_369 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_369_ = {
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
	var s_370 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_370_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
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
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
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

	var betweenstory_34 = {
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
	var q_376 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_376_ = {
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
	var s_377 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_377_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_378 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_378_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_379 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_379_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_380 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_380_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_381_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_382 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_382_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_383 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_383_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_384 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_384_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_388 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_388_ = {
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
	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_390 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_390_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_392 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_392_ = {
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
	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_394 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_394_ = {
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
	var s_395 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_395_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_396 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_396_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_397 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_397_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_399 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_399_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_400 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_400_ = {
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
	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_402_ = {
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
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_404_ = {
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
	var s_405 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_405_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_406 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_406_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_407 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_407_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_408 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_408_ = {
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
	var s_409 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_409_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
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

	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_412_ = {
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
	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_414 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_414_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_415 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_415_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_416 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_416_ = {
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
	var s_417 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_417_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_418 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_418_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_419 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_419_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_420 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_420_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
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
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_422 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_422_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_423 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_423_ = {
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
	var s_424 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_424_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_425 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_425_ = {
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
	var s_426 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_426_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_428 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_428_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_430_ = {
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
	var s_431 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_431_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_432_ = {
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
	var s_433 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_433_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_434 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_434_ = {
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

	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'matcha roots' was good here.", "It must have been that Alice knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_436_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_438 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_438_ = {
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
	var s_439 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_439_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_440 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_440_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_441 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_441_ = {
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
	var s_442 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_442_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_443 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_443_ = {
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
	var s_444 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_444_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_445 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_445_ = {
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
	var s_446 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_446_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_447 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_447_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_448 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_448_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_449 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_449_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_450 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_450_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
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
	var s_451 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_451_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_452 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_452_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_453 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_453_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_454 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_454_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_456 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_456_ = {
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
	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_458 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_458_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_459 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_459_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_460 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_460_ = {
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
	var s_461 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_461_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_462 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_462_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_463 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_463_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_464 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_464_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_465 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_465_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_466 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_466_ = {
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
	var s_467 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_467_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_468 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_468_ = {
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

	var s_469 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_469_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_470 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_470_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_471 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_471_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_472 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_472_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_474 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_474_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_475 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_475_ = {
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
	var s_476 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_476_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_477 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_477_ = {
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
	var s_478 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_478_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
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
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_480_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_481 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_481_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_482 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_482_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_483 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_483_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_484 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_484_ = {
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
	var s_485 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_485_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_486 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_486_ = {
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
	var s_487 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_487_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_488 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_488_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_489 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_489_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_490 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_490_ = {
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
	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'silk potion' was really quite swell here.", "A friend of a friend told Bill, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_494_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_495 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_495_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_497 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_497_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_498 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_498_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_499 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_499_ = {
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
	var s_500 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_500_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_501 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_501_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_502 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_502_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_503 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_503_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
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

	var s_505 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_505_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_506 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_506_ = {
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
	var s_507 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_507_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_508 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_508_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_509_ = {
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
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_511 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_511_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_513 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_513_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_514 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_514_ = {
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

	var s_515 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_515_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_517 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_517_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_519 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_519_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_520 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_520_ = {
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
	var s_521 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_521_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_522 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_522_ = {
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
	var s_523 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_523_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_524 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_524_ = {
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
	var s_525 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_525_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_527 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_527_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_528 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_528_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_529 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_529_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_530 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_530_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_531 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_531_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_532 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_532_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_533 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_533_ = {
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
	var s_534 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_534_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_535 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_535_ = {
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
	var s_536 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_536_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_538 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_538_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_540 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_540_ = {
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
	var s_541 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_541_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_542 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_542_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_543 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_543_ = {
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
	var s_544 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_544_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_545 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_545_ = {
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
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_547 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_547_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_549 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_549_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_550 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_550_ = {
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
	var s_551 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_551_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_552 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_552_ = {
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
	var s_553 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_553_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_555 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_555_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_556 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_556_ = {
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
	var s_557 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_557_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_558 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_558_ = {
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
	var s_559 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_559_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_561 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_561_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_562 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_562_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_563 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_563_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_564 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_564_ = {
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
	var s_565 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_565_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_566_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_567 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_567_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_568 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_568_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_569 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_569_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_570 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_570_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_571 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_571_ = {
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

	var s_572 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_572_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_573 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_573_ = {
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
	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_575 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_575_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_576 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_576_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_577 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_577_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_578 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_578_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_579 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_579_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_580 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_580_ = {
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
	var s_581 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_581_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_582 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_582_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_583 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_583_ = {
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

	var s_584 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_584_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_586 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_586_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_588 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_588_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_589 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_589_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_590 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_590_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is never to be taken lightly!'", "'Our dream-narrative couldn't possibly be never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_591_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_592 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_592_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_593_ = {
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
	var s_594 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_594_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_595 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_595_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_597 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_597_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_598 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_598_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
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
	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_600_ = {
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
	var s_601 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_601_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_602 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_602_ = {
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
	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_604 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_604_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
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
	var s_605 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_605_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_606 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_606_ = {
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
	var s_607 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_607_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_611 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_611_ = {
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
	var s_612 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_612_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_613 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_613_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_614_ = {
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
	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_616 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is that which is Real and True!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_616_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_617 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_617_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_618 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_618_ = {
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
	var s_619 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_619_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
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
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_55 = {
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
	var s_622 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_622_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_624 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_624_ = {
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
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_626 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_626_ = {
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
	var s_627 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_627_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_628 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_628_ = {
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
	var s_629 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_629_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_633 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Bill, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_633_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_635 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_635_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_636 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_636_ = {
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
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_639 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_639_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
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
	var s_640 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_640_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
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
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_643_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_644 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_644_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_645 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_645_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_646 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_646_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_647 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_647_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_648 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_648_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_649 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_649_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_650 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_650_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_651 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_651_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_652 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_652_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_653 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_653_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_654 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_654_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_655 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_655_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_656 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_656_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_658 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_658_ = {
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
	var s_659 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_659_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_660 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_660_ = {
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

	var s_661 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_661_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_662 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_662_ = {
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
	var s_663 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_663_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_664 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_664_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_666 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_666_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_667 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_667_ = {
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
	var s_668 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_668_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_669 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_669_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_670 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_670_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_671 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_671_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_672 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_672_ = {
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

	var s_673 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_673_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_674 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'matcha roots' was really quite swell here.", "A friend of a friend told Alice, the 'matcha roots' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_674_ = {
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
	var s_675 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_675_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_677 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_677_ = {
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
	var s_678 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_678_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_679 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_679_ = {
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
	var s_680 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_680_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_682_ = {
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
	var s_683 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_683_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_684 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_684_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_685 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_685_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_687 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_687_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_688 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_688_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_689 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_689_ = {
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
	var s_690 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_690_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_691 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_691_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_692 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_692_ = {
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
	var s_693 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_693_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_694 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_694_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_695 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_695_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_696 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_696_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
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
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_698_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_699 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_699_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_700 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_700_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_701 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our self-personal-metastory is that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_701_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_702 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_702_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_703 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_703_ = {
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
	var s_704 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_704_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_705 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_705_ = {
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

	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_707 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_707_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_708 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_708_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_709 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_709_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_711 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_711_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_712 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_712_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_713 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_713_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_714 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_714_ = {
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

	var s_715 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_715_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_717 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_717_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_718 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_718_ = {
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
	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_720 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_720_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_721 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_721_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_722 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_722_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_724 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_724_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_725 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'mocha hopps' was good here.", "It must have been that Bill knew the 'mocha hopps' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_725_ = {
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
	var s_726 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_726_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_727 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_727_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_728 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_728_ = {
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
	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_731 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_731_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_733 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_733_ = {
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
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_735 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_735_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_736 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_736_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_737 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_737_ = {
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
	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_739 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_739_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_740 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_740_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_741 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_741_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_742 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_742_ = {
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
	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_744 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_744_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_745 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_745_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
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
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_747 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_747_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_749 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_749_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_751 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_751_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_753 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_753_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_754 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_754_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_755 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_755_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our dream-narrative couldn't possibly be that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_756 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_756_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_757 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_757_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_758 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_758_ = {
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

	var s_759 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_759_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_760 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_760_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_761 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_761_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_762 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_762_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_763 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_763_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_764 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_764_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_765 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_765_ = {
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
	var s_766 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_766_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_767 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_767_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_768 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_768_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_769 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_769_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_770 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_770_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_771 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_771_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_772 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Bill knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Bill, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_772_ = {
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
	var s_773 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_773_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_774 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_774_ = {
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
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_776 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_776_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_777 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_777_ = {
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
	var s_778 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_778_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_779 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_779_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_780 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_780_ = {
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
	var s_781 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_781_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_782 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_782_ = {
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

	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_784 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'silk potion' was good here.", "It must have been that Bill knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_784_ = {
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
	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_786 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_786_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_787 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_787_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_788 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_788_ = {
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
	var s_789 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_789_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_790 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_790_ = {
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
	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_792 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_792_ = {
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
	var s_793 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_793_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_794 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_794_ = {
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

	var s_795 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_795_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_796 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_796_ = {
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
	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_799 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_799_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_801 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_801_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_802 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_802_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_803 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_803_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_804 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_804_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
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
		labels: ["BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_806_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_808_ = {
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
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_810 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_810_ = {
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
	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_812 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_812_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_813 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_813_ = {
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
	var s_814 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_814_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_815 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_815_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_817 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_817_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_818 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_818_ = {
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
	var s_819 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_819_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_820 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_820_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_821 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_821_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_822 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_822_ = {
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
	var s_823 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_823_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_824 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_824_ = {
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
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_826 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_826_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_827 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_827_ = {
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

	var s_828 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_828_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_829 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_829_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'mocha hopps' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_830 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!", "AFTER(!) ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_830_ = {
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
	var s_831 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_831_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_832 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_832_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
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
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_834 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_834_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be all we could ever know!'", "'Our self-personal-metastory is all we could ever know!'"],
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
	var s_835 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_835_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_836 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_836_ = {
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
	var s_837 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_837_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_838 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_838_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_839 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_839_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_840 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_840_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_842 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_842_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_843 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_843_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_844 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_844_ = {
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
	var s_845 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_845_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_846 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_846_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_847 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_847_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
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

	var s_849 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_849_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_850 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_850_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_851 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_851_ = {
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
	var s_852 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_852_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_854 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_854_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_855 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_855_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_856 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_856_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_857 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_857_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_858 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_858_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_859 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_859_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_860 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_860_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_862 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_862_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_863_ = {
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
	var s_864 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_864_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_865 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_865_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_866 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_866_ = {
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
	var s_867 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_867_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
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

	var s_869 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_869_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_870 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_870_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_871 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_871_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_873 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_873_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_874 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_874_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_875 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_875_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_876 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be that which is Real and True!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_876_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_878 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_878_ = {
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

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_881 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_881_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_882 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_882_ = {
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
	var s_883 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_883_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_884 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_884_ = {
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
	var s_885 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_885_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_887 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_887_ = {
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
	var s_888 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_888_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_890 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_890_ = {
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
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_891 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_891_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
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
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_893 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_893_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_894 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_894_ = {
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
	var s_895 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_895_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_896 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_896_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_898 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_898_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_899 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_899_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_900 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_900_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_901 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_901_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_902 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_902_ = {
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
	var s_903 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_903_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_904 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_904_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_905 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_905_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_906 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_906_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_907 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_907_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_908 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_908_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_909 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_909_ = {
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
	var s_910 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_910_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_911 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_911_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_912 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_912_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_913 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_913_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_914 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_914_ = {
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
	var s_915 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_915_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_916 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_916_ = {
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

	var s_917 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_917_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_918 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_918_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_919 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_919_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_920 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_920_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_921 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_921_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_922 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_922_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_923 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_923_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_924 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_924_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_925 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_925_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_926 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_926_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_927 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_927_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_928 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_928_ = {
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
	var s_929 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_929_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_930 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_930_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_931 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_931_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_932 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_932_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_933 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_933_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_934 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_934_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_935 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_935_ = {
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
	var s_936 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_936_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_937 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_937_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_938 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_938_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_939 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_939_ = {
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
	var s_940 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_940_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_941 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!", "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_941_ = {
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
	var s_942 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_942_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_943 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_943_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_944 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_944_ = {
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
	var s_945 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_945_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_946 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_946_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_947 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_947_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_948 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_948_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_949 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_949_ = {
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

	var s_950 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_950_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_951 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_951_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_952 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_952_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_953 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_953_ = {
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
	var s_954 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_954_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_955 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_955_ = {
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
	var s_956 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_956_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_957 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_957_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_958 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_958_ = {
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
	var s_959 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_959_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_960 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_960_ = {
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

	var s_961 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_961_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_962 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'matcha roots' was good here.", "It must have been that Alice knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_962_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'matcha roots' was good here.", "It must have been that Alice knew the 'matcha roots' was really quite swell here."],
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
	var s_963 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_963_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_964 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_964_ = {
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
	var s_965 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_965_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_966 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_966_ = {
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
	var s_967 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_967_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_968 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_968_ = {
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
	var s_969 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_969_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_970 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_970_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our self-personal-metastory is never to be taken lightly!'"],
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
	var s_971 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_971_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_972 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_972_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_973 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_973_ = {
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

	var s_974 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_974_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_975 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_975_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_976 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_976_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_977 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_977_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_978 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_978_ = {
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
	var s_979 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_979_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_980 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_980_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_981 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_981_ = {
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
	var s_982 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_982_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_983 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_983_ = {
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

	var s_984 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_984_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_985 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_985_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Bill, the 'matcha roots' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_986 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized there was a parrot waiting in line for the bathroom!", "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_986_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_987 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_987_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_988 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'", "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_988_ = {
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
	var s_989 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_989_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_990 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_990_ = {
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
	var s_991 = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_991_ = {
		type: "html-keyboard-response",
		stimulus: "Bill then remembered his shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_992 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_992_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_993 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_993_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_994 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_994_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_995 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_995_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_996 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'silk potion' was really quite swell here.", "A friend of a friend told Alice, the 'silk potion' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_996_ = {
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
	var s_997 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_997_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_998 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_998_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_999 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_999_ = {
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
	var s_1000 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1000_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1001 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice, there and then, recalled her mom (or dad) saying:", "Alice then remembered her shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1001_ = {
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
	var s_1002 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1002_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1003 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be never to be taken lightly!'", "'Our self-personal-metastory is never to be taken lightly!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1003_ = {
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
	var s_1004 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1004_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1005 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1005_ = {
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
	var s_1006 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1006_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1007 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1007_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1008 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1008_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1009 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1009_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1010 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1010_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1011 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1011_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1012 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1012_ = {
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
	var s_1013 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1013_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1014 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1014_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1015 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1015_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1016 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1016_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1017 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1017_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1018 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1018_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1019 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1019_ = {
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
	var s_1020 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1020_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1021 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1021_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1022 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1022_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_1023 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1023_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1024 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1024_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1025 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1025_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be all we could ever know!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1026 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1026_ = {
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
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1027 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1027_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1028 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1028_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1029 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1029_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1030 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'muddy water' was really quite swell here.", "A friend of a friend told Alice, the 'muddy water' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1030_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1031 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1031_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'muddy water' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1032 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1032_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
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
	var s_1033 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1033_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1034 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1034_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1035 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1035_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1036 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1036_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1037 = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1037_ = {
		type: "html-keyboard-response",
		stimulus: "Alice then remembered her shaman-guru frantically yelling:",
		labels: ["", ""],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1038 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our dream-narrative couldn't possibly be a serious thing to behold!'", "'Our self-personal-metastory is a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1038_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1039 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1039_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1040 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1040_ = {
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
	var s_1041 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1041_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1042 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1042_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1043 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1043_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1044 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["It must have been that Alice knew the 'mocha hopps' was really quite swell here.", "A friend of a friend told Alice, the 'mocha hopps' was good here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1044_ = {
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
	var s_1045 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1045_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1046 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1046_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1047 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1047_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1048 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1048_ = {
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
	var s_1049 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1049_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1050 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1050_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1051 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1051_ = {
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
	var s_1052 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1052_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1053 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1053_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1054 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1054_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1055 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1055_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'matcha roots' was good here.", "It must have been that Bill knew the 'matcha roots' was really quite swell here."],
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
	var s_1056 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1056_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'matcha roots' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1057 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!", "BEFORE(?) ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1057_ = {
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
	var s_1058 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1058_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1059 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1059_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1060 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1060_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1061 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1061_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1062 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Bill transcended.", "That must have been when Alice transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1062_ = {
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
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1063 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1063_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1064 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1064_ = {
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

	var s_1065 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1065_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1066 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1066_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'mocha hopps' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1067 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1067_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Bill realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1068 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1068_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "When suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1069 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1069_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1070 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1070_ = {
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
	var s_1071 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1071_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1072 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1072_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is that which is Real and True!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1073 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported. Where? When?", "That must have been when Bill transcended."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1073_ = {
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
	var s_1074 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1074_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1075 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1075_ = {
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

	var s_1076 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1076_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1077 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Alice, the 'silk potion' was good here.", "It must have been that Alice knew the 'silk potion' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1077_ = {
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
	var s_1078 = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1078_ = {
		type: "html-keyboard-response",
		stimulus: "A friend of a friend told Alice, the 'silk potion' was good here.",
		labels: ["", ""],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1079 = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1079_ = {
		type: "html-keyboard-response",
		stimulus: "BEFORE(?) ordering, Alice realized there was a parrot waiting in line for the bathroom!",
		labels: ["", ""],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1080 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1080_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Not unexpectedly, the television raged on: 'meantime, luke warm north pole winds blow in from ...'", "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1081 = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1081_ = {
		type: "html-keyboard-response",
		stimulus: "Not unexpectedly, the television raged on: 'no.. well, maybe.. i guess if only there were ...'",
		labels: ["", ""],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1082 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1082_ = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru frantically yelling:", "Alice, there and then, recalled her mom (or dad) saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TELE",
						"true_tonode": "PARENTS",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1083 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1083_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1084 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is a serious thing to behold!'", "'Our dream-narrative couldn't possibly be a serious thing to behold!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1084_ = {
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
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1085 = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1085_ = {
		type: "html-keyboard-response",
		stimulus: "'Our dream-narrative couldn't possibly be a serious thing to behold!'",
		labels: ["", ""],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1086 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1086_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Alice transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1087 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1087_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1088 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1088_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1089 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1089_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1090 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1090_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that Bob Dylan must have been right after all!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1091 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1091_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1092 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru frantically yelling:", "Bill, there and then, recalled his mom (or dad) saying:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1092_ = {
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
	var s_1093 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1093_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1094 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1094_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is never to be taken lightly!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1095 = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1095_ = {
		type: "html-keyboard-response",
		stimulus: "That must have been when Bill transcended.",
		labels: ["", ""],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1096 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1096_ = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1097 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1097_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked in to the drinks shop",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1098 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["A friend of a friend told Bill, the 'muddy water' was good here.", "It must have been that Bill knew the 'muddy water' was really quite swell here."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1098_ = {
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
	var s_1099 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1099_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Bill knew the 'muddy water' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1100 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!", "BEFORE(?) ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1100_ = {
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
	var s_1101 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1101_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Bill realized that the mirrors reflected the labyrinth of time!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1102 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1102_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill, there and then, recalled his mom (or dad) saying:", "Bill then remembered his shaman-guru frantically yelling:"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1103_ = {
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
	var s_1104 = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1104_ = {
		type: "html-keyboard-response",
		stimulus: "Bill, there and then, recalled his mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1105 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1105_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported. Where? When?", "That's when Bill was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1106_ = {
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
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1107 = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1107_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Bill was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1108 = {
		type: "html-keyboard-response",
		stimulus: "~ FIN ~",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1108_ = {
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

	var s_1109 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1109_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked in to the brew house",
		labels: ["", ""],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1110 = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1110_ = {
		type: "html-keyboard-response",
		stimulus: "It must have been that Alice knew the 'silk potion' was really quite swell here.",
		labels: ["", ""],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!", "BEFORE(?) ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1111_ = {
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
	var s_1112 = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1112_ = {
		type: "html-keyboard-response",
		stimulus: "AFTER(!) ordering, Alice realized all is well beyond the library's last book shelf!",
		labels: ["", ""],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Not unexpectedly, the television raged on: 'hey you! yes you! would you like to give us your money ...'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1113_ = {
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
	var s_1114 = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1114_ = {
		type: "html-keyboard-response",
		stimulus: "When suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'",
		labels: ["", ""],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1115 = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1115_ = {
		type: "html-keyboard-response",
		stimulus: "Alice, there and then, recalled her mom (or dad) saying:",
		labels: ["", ""],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1116 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our self-personal-metastory is all we could ever know!'", "'Our dream-narrative couldn't possibly be all we could ever know!'"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1116_ = {
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
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1117 = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1117_ = {
		type: "html-keyboard-response",
		stimulus: "'Our self-personal-metastory is all we could ever know!'",
		labels: ["", ""],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1118 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That must have been when Alice transcended.", "That's when Alice was transported. Where? When?"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1118_ = {
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
	var s_1119 = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1119_ = {
		type: "html-keyboard-response",
		stimulus: "That's when Alice was transported. Where? When?",
		labels: ["", ""],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
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
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,s_3,s_3_,s_4,s_4_,s_5,s_5_,s_6,s_6_,s_7,s_7_,s_8,s_8_,betweenstory_1,s_9,s_9_,s_10,s_10_,s_11,s_11_,s_12,s_12_,s_13,s_13_,s_14,s_14_,s_15,s_15_,s_16,s_16_,betweenstory_2,s_17,s_17_,s_18,s_18_,s_19,s_19_,s_20,s_20_,s_21,s_21_,s_22,s_22_,s_23,s_23_,s_24,s_24_,betweenstory_3,s_25,s_25_,s_26,s_26_,s_27,s_27_,s_28,s_28_,s_29,s_29_,s_30,s_30_,s_31,s_31_,s_32,s_32_,betweenstory_4,s_33,s_33_,s_34,s_34_,s_35,s_35_,s_36,s_36_,s_37,s_37_,s_38,s_38_,s_39,s_39_,s_40,s_40_,betweenstory_5,s_41,s_41_,s_42,s_42_,q_43,q_43_,s_44,s_44_,q_45,q_45_,s_46,s_46_,q_47,q_47_,s_48,s_48_,q_49,q_49_,s_50,s_50_,q_51,q_51_,s_52,s_52_,s_53,s_53_,betweenstory_6,s_54,s_54_,q_55,q_55_,s_56,s_56_,q_57,q_57_,s_58,s_58_,q_59,q_59_,s_60,s_60_,q_61,q_61_,s_62,s_62_,q_63,q_63_,s_64,s_64_,q_65,q_65_,s_66,s_66_,s_67,s_67_,betweenstory_7,s_68,s_68_,q_69,q_69_,s_70,s_70_,q_71,q_71_,s_72,s_72_,q_73,q_73_,s_74,s_74_,q_75,q_75_,s_76,s_76_,s_77,s_77_,q_78,q_78_,s_79,s_79_,s_80,s_80_,betweenstory_8,s_81,s_81_,s_82,s_82_,s_83,s_83_,s_84,s_84_,q_85,q_85_,s_86,s_86_,s_87,s_87_,q_88,q_88_,s_89,s_89_,s_90,s_90_,betweenstory_9,s_91,s_91_,q_92,q_92_,s_93,s_93_,q_94,q_94_,s_95,s_95_,s_96,s_96_,s_97,s_97_,s_98,s_98_,q_99,q_99_,s_100,s_100_,s_101,s_101_,betweenstory_10,s_102,s_102_,q_103,q_103_,s_104,s_104_,s_105,s_105_,q_106,q_106_,s_107,s_107_,q_108,q_108_,s_109,s_109_,s_110,s_110_,q_111,q_111_,s_112,s_112_,s_113,s_113_,betweenstory_11,s_114,s_114_,s_115,s_115_,s_116,s_116_,s_117,s_117_,s_118,s_118_,q_119,q_119_,s_120,s_120_,q_121,q_121_,s_122,s_122_,s_123,s_123_,betweenstory_12,s_124,s_124_,s_125,s_125_,q_126,q_126_,s_127,s_127_,q_128,q_128_,s_129,s_129_,q_130,q_130_,s_131,s_131_,s_132,s_132_,s_133,s_133_,s_134,s_134_,betweenstory_13,s_135,s_135_,q_136,q_136_,s_137,s_137_,q_138,q_138_,s_139,s_139_,s_140,s_140_,q_141,q_141_,s_142,s_142_,s_143,s_143_,s_144,s_144_,s_145,s_145_,betweenstory_14,s_146,s_146_,q_147,q_147_,s_148,s_148_,s_149,s_149_,q_150,q_150_,s_151,s_151_,q_152,q_152_,s_153,s_153_,q_154,q_154_,s_155,s_155_,q_156,q_156_,s_157,s_157_,s_158,s_158_,betweenstory_15,s_159,s_159_,s_160,s_160_,s_161,s_161_,q_162,q_162_,s_163,s_163_,s_164,s_164_,q_165,q_165_,s_166,s_166_,q_167,q_167_,s_168,s_168_,s_169,s_169_,betweenstory_16,s_170,s_170_,s_171,s_171_,s_172,s_172_,q_173,q_173_,s_174,s_174_,s_175,s_175_,q_176,q_176_,s_177,s_177_,q_178,q_178_,s_179,s_179_,s_180,s_180_,betweenstory_17,s_181,s_181_,s_182,s_182_,s_183,s_183_,s_184,s_184_,s_185,s_185_,q_186,q_186_,s_187,s_187_,q_188,q_188_,s_189,s_189_,s_190,s_190_,betweenstory_18,s_191,s_191_,q_192,q_192_,s_193,s_193_,q_194,q_194_,s_195,s_195_,s_196,s_196_,s_197,s_197_,q_198,q_198_,s_199,s_199_,q_200,q_200_,s_201,s_201_,s_202,s_202_,betweenstory_19,s_203,s_203_,q_204,q_204_,s_205,s_205_,q_206,q_206_,s_207,s_207_,s_208,s_208_,q_209,q_209_,s_210,s_210_,s_211,s_211_,q_212,q_212_,s_213,s_213_,s_214,s_214_,betweenstory_20,s_215,s_215_,q_216,q_216_,s_217,s_217_,q_218,q_218_,s_219,s_219_,q_220,q_220_,s_221,s_221_,q_222,q_222_,s_223,s_223_,s_224,s_224_,s_225,s_225_,s_226,s_226_,betweenstory_21,s_227,s_227_,q_228,q_228_,s_229,s_229_,q_230,q_230_,s_231,s_231_,q_232,q_232_,s_233,s_233_,s_234,s_234_,s_235,s_235_,q_236,q_236_,s_237,s_237_,s_238,s_238_,betweenstory_22,s_239,s_239_,s_240,s_240_,q_241,q_241_,s_242,s_242_,s_243,s_243_,s_244,s_244_,q_245,q_245_,s_246,s_246_,q_247,q_247_,s_248,s_248_,s_249,s_249_,betweenstory_23,s_250,s_250_,q_251,q_251_,s_252,s_252_,q_253,q_253_,s_254,s_254_,q_255,q_255_,s_256,s_256_,q_257,q_257_,s_258,s_258_,q_259,q_259_,s_260,s_260_,s_261,s_261_,s_262,s_262_,betweenstory_24,s_263,s_263_,s_264,s_264_,q_265,q_265_,s_266,s_266_,q_267,q_267_,s_268,s_268_,s_269,s_269_,q_270,q_270_,s_271,s_271_,s_272,s_272_,s_273,s_273_,betweenstory_25,s_274,s_274_,s_275,s_275_,q_276,q_276_,s_277,s_277_,q_278,q_278_,s_279,s_279_,s_280,s_280_,s_281,s_281_,q_282,q_282_,s_283,s_283_,s_284,s_284_,betweenstory_26,s_285,s_285_,s_286,s_286_,q_287,q_287_,s_288,s_288_,s_289,s_289_,q_290,q_290_,s_291,s_291_,q_292,q_292_,s_293,s_293_,q_294,q_294_,s_295,s_295_,s_296,s_296_,betweenstory_27,s_297,s_297_,q_298,q_298_,s_299,s_299_,q_300,q_300_,s_301,s_301_,q_302,q_302_,s_303,s_303_,q_304,q_304_,s_305,s_305_,s_306,s_306_,s_307,s_307_,s_308,s_308_,betweenstory_28,s_309,s_309_,s_310,s_310_,q_311,q_311_,s_312,s_312_,s_313,s_313_,s_314,s_314_,q_315,q_315_,s_316,s_316_,q_317,q_317_,s_318,s_318_,s_319,s_319_,betweenstory_29,s_320,s_320_,q_321,q_321_,s_322,s_322_,q_323,q_323_,s_324,s_324_,s_325,s_325_,q_326,q_326_,s_327,s_327_,s_328,s_328_,s_329,s_329_,s_330,s_330_,betweenstory_30,s_331,s_331_,s_332,s_332_,s_333,s_333_,s_334,s_334_,s_335,s_335_,q_336,q_336_,s_337,s_337_,q_338,q_338_,s_339,s_339_,s_340,s_340_,betweenstory_31,s_341,s_341_,q_342,q_342_,s_343,s_343_,q_344,q_344_,s_345,s_345_,q_346,q_346_,s_347,s_347_,q_348,q_348_,s_349,s_349_,s_350,s_350_,q_351,q_351_,s_352,s_352_,s_353,s_353_,betweenstory_32,s_354,s_354_,q_355,q_355_,s_356,s_356_,s_357,s_357_,s_358,s_358_,s_359,s_359_,q_360,q_360_,s_361,s_361_,s_362,s_362_,s_363,s_363_,betweenstory_33,s_364,s_364_,q_365,q_365_,s_366,s_366_,q_367,q_367_,s_368,s_368_,q_369,q_369_,s_370,s_370_,s_371,s_371_,s_372,s_372_,s_373,s_373_,s_374,s_374_,betweenstory_34,s_375,s_375_,q_376,q_376_,s_377,s_377_,s_378,s_378_,q_379,q_379_,s_380,s_380_,q_381,q_381_,s_382,s_382_,q_383,q_383_,s_384,s_384_,s_385,s_385_,s_386,s_386_,betweenstory_35,s_387,s_387_,q_388,q_388_,s_389,s_389_,s_390,s_390_,s_391,s_391_,q_392,q_392_,s_393,s_393_,q_394,q_394_,s_395,s_395_,s_396,s_396_,s_397,s_397_,betweenstory_36,s_398,s_398_,s_399,s_399_,q_400,q_400_,s_401,s_401_,q_402,q_402_,s_403,s_403_,q_404,q_404_,s_405,s_405_,q_406,q_406_,s_407,s_407_,q_408,q_408_,s_409,s_409_,s_410,s_410_,betweenstory_37,s_411,s_411_,q_412,q_412_,s_413,s_413_,s_414,s_414_,s_415,s_415_,q_416,q_416_,s_417,s_417_,q_418,q_418_,s_419,s_419_,s_420,s_420_,s_421,s_421_,betweenstory_38,s_422,s_422_,q_423,q_423_,s_424,s_424_,q_425,q_425_,s_426,s_426_,s_427,s_427_,q_428,q_428_,s_429,s_429_,q_430,q_430_,s_431,s_431_,q_432,q_432_,s_433,s_433_,s_434,s_434_,betweenstory_39,s_435,s_435_,q_436,q_436_,s_437,s_437_,q_438,q_438_,s_439,s_439_,s_440,s_440_,q_441,q_441_,s_442,s_442_,q_443,q_443_,s_444,s_444_,q_445,q_445_,s_446,s_446_,s_447,s_447_,betweenstory_40,s_448,s_448_,s_449,s_449_,q_450,q_450_,s_451,s_451_,s_452,s_452_,q_453,q_453_,s_454,s_454_,s_455,s_455_,q_456,q_456_,s_457,s_457_,s_458,s_458_,betweenstory_41,s_459,s_459_,q_460,q_460_,s_461,s_461_,s_462,s_462_,s_463,s_463_,s_464,s_464_,s_465,s_465_,q_466,q_466_,s_467,s_467_,s_468,s_468_,betweenstory_42,s_469,s_469_,s_470,s_470_,q_471,q_471_,s_472,s_472_,s_473,s_473_,s_474,s_474_,q_475,q_475_,s_476,s_476_,q_477,q_477_,s_478,s_478_,s_479,s_479_,betweenstory_43,s_480,s_480_,s_481,s_481_,q_482,q_482_,s_483,s_483_,q_484,q_484_,s_485,s_485_,q_486,q_486_,s_487,s_487_,q_488,q_488_,s_489,s_489_,q_490,q_490_,s_491,s_491_,s_492,s_492_,betweenstory_44,s_493,s_493_,q_494,q_494_,s_495,s_495_,s_496,s_496_,q_497,q_497_,s_498,s_498_,q_499,q_499_,s_500,s_500_,q_501,q_501_,s_502,s_502_,s_503,s_503_,s_504,s_504_,betweenstory_45,s_505,s_505_,q_506,q_506_,s_507,s_507_,s_508,s_508_,q_509,q_509_,s_510,s_510_,s_511,s_511_,s_512,s_512_,s_513,s_513_,s_514,s_514_,betweenstory_46,s_515,s_515_,s_516,s_516_,q_517,q_517_,s_518,s_518_,s_519,s_519_,q_520,q_520_,s_521,s_521_,q_522,q_522_,s_523,s_523_,q_524,q_524_,s_525,s_525_,s_526,s_526_,betweenstory_47,s_527,s_527_,s_528,s_528_,s_529,s_529_,s_530,s_530_,q_531,q_531_,s_532,s_532_,q_533,q_533_,s_534,s_534_,q_535,q_535_,s_536,s_536_,s_537,s_537_,betweenstory_48,s_538,s_538_,s_539,s_539_,q_540,q_540_,s_541,s_541_,s_542,s_542_,q_543,q_543_,s_544,s_544_,q_545,q_545_,s_546,s_546_,s_547,s_547_,s_548,s_548_,betweenstory_49,s_549,s_549_,q_550,q_550_,s_551,s_551_,q_552,q_552_,s_553,s_553_,s_554,s_554_,s_555,s_555_,q_556,q_556_,s_557,s_557_,q_558,q_558_,s_559,s_559_,s_560,s_560_,betweenstory_50,s_561,s_561_,s_562,s_562_,s_563,s_563_,q_564,q_564_,s_565,s_565_,q_566,q_566_,s_567,s_567_,s_568,s_568_,q_569,q_569_,s_570,s_570_,s_571,s_571_,betweenstory_51,s_572,s_572_,q_573,q_573_,s_574,s_574_,s_575,s_575_,q_576,q_576_,s_577,s_577_,q_578,q_578_,s_579,s_579_,q_580,q_580_,s_581,s_581_,s_582,s_582_,s_583,s_583_,betweenstory_52,s_584,s_584_,s_585,s_585_,q_586,q_586_,s_587,s_587_,s_588,s_588_,q_589,q_589_,s_590,s_590_,q_591,q_591_,s_592,s_592_,q_593,q_593_,s_594,s_594_,s_595,s_595_,betweenstory_53,s_596,s_596_,s_597,s_597_,q_598,q_598_,s_599,s_599_,q_600,q_600_,s_601,s_601_,q_602,q_602_,s_603,s_603_,q_604,q_604_,s_605,s_605_,q_606,q_606_,s_607,s_607_,s_608,s_608_,betweenstory_54,s_609,s_609_,s_610,s_610_,q_611,q_611_,s_612,s_612_,s_613,s_613_,q_614,q_614_,s_615,s_615_,q_616,q_616_,s_617,s_617_,q_618,q_618_,s_619,s_619_,s_620,s_620_,betweenstory_55,s_621,s_621_,s_622,s_622_,s_623,s_623_,q_624,q_624_,s_625,s_625_,q_626,q_626_,s_627,s_627_,q_628,q_628_,s_629,s_629_,s_630,s_630_,s_631,s_631_,betweenstory_56,s_632,s_632_,q_633,q_633_,s_634,s_634_,s_635,s_635_,q_636,q_636_,s_637,s_637_,s_638,s_638_,q_639,q_639_,s_640,s_640_,s_641,s_641_,s_642,s_642_,betweenstory_57,s_643,s_643_,s_644,s_644_,s_645,s_645_,q_646,q_646_,s_647,s_647_,s_648,s_648_,s_649,s_649_,s_650,s_650_,s_651,s_651_,betweenstory_58,s_652,s_652_,s_653,s_653_,s_654,s_654_,s_655,s_655_,s_656,s_656_,s_657,s_657_,q_658,q_658_,s_659,s_659_,s_660,s_660_,betweenstory_59,s_661,s_661_,q_662,q_662_,s_663,s_663_,q_664,q_664_,s_665,s_665_,s_666,s_666_,q_667,q_667_,s_668,s_668_,s_669,s_669_,q_670,q_670_,s_671,s_671_,s_672,s_672_,betweenstory_60,s_673,s_673_,q_674,q_674_,s_675,s_675_,s_676,s_676_,q_677,q_677_,s_678,s_678_,q_679,q_679_,s_680,s_680_,s_681,s_681_,q_682,q_682_,s_683,s_683_,s_684,s_684_,betweenstory_61,s_685,s_685_,s_686,s_686_,s_687,s_687_,s_688,s_688_,q_689,q_689_,s_690,s_690_,s_691,s_691_,q_692,q_692_,s_693,s_693_,s_694,s_694_,betweenstory_62,s_695,s_695_,s_696,s_696_,s_697,s_697_,q_698,q_698_,s_699,s_699_,s_700,s_700_,q_701,q_701_,s_702,s_702_,q_703,q_703_,s_704,s_704_,s_705,s_705_,betweenstory_63,s_706,s_706_,s_707,s_707_,s_708,s_708_,s_709,s_709_,s_710,s_710_,q_711,q_711_,s_712,s_712_,s_713,s_713_,s_714,s_714_,betweenstory_64,s_715,s_715_,s_716,s_716_,s_717,s_717_,q_718,q_718_,s_719,s_719_,s_720,s_720_,s_721,s_721_,s_722,s_722_,s_723,s_723_,betweenstory_65,s_724,s_724_,q_725,q_725_,s_726,s_726_,s_727,s_727_,q_728,q_728_,s_729,s_729_,s_730,s_730_,q_731,q_731_,s_732,s_732_,q_733,q_733_,s_734,s_734_,s_735,s_735_,betweenstory_66,s_736,s_736_,q_737,q_737_,s_738,s_738_,q_739,q_739_,s_740,s_740_,s_741,s_741_,q_742,q_742_,s_743,s_743_,s_744,s_744_,s_745,s_745_,s_746,s_746_,betweenstory_67,s_747,s_747_,s_748,s_748_,q_749,q_749_,s_750,s_750_,q_751,q_751_,s_752,s_752_,q_753,q_753_,s_754,s_754_,q_755,q_755_,s_756,s_756_,s_757,s_757_,s_758,s_758_,betweenstory_68,s_759,s_759_,s_760,s_760_,q_761,q_761_,s_762,s_762_,q_763,q_763_,s_764,s_764_,q_765,q_765_,s_766,s_766_,q_767,q_767_,s_768,s_768_,s_769,s_769_,s_770,s_770_,betweenstory_69,s_771,s_771_,q_772,q_772_,s_773,s_773_,q_774,q_774_,s_775,s_775_,s_776,s_776_,q_777,q_777_,s_778,s_778_,s_779,s_779_,q_780,q_780_,s_781,s_781_,s_782,s_782_,betweenstory_70,s_783,s_783_,q_784,q_784_,s_785,s_785_,s_786,s_786_,s_787,s_787_,q_788,q_788_,s_789,s_789_,q_790,q_790_,s_791,s_791_,q_792,q_792_,s_793,s_793_,s_794,s_794_,betweenstory_71,s_795,s_795_,q_796,q_796_,s_797,s_797_,s_798,s_798_,s_799,s_799_,s_800,s_800_,s_801,s_801_,s_802,s_802_,s_803,s_803_,betweenstory_72,s_804,s_804_,s_805,s_805_,q_806,q_806_,s_807,s_807_,q_808,q_808_,s_809,s_809_,q_810,q_810_,s_811,s_811_,s_812,s_812_,q_813,q_813_,s_814,s_814_,s_815,s_815_,betweenstory_73,s_816,s_816_,s_817,s_817_,q_818,q_818_,s_819,s_819_,q_820,q_820_,s_821,s_821_,q_822,q_822_,s_823,s_823_,q_824,q_824_,s_825,s_825_,s_826,s_826_,s_827,s_827_,betweenstory_74,s_828,s_828_,s_829,s_829_,q_830,q_830_,s_831,s_831_,s_832,s_832_,s_833,s_833_,q_834,q_834_,s_835,s_835_,q_836,q_836_,s_837,s_837_,s_838,s_838_,betweenstory_75,s_839,s_839_,s_840,s_840_,s_841,s_841_,q_842,q_842_,s_843,s_843_,q_844,q_844_,s_845,s_845_,s_846,s_846_,s_847,s_847_,s_848,s_848_,betweenstory_76,s_849,s_849_,s_850,s_850_,q_851,q_851_,s_852,s_852_,s_853,s_853_,s_854,s_854_,q_855,q_855_,s_856,s_856_,s_857,s_857_,s_858,s_858_,betweenstory_77,s_859,s_859_,s_860,s_860_,s_861,s_861_,s_862,s_862_,q_863,q_863_,s_864,s_864_,s_865,s_865_,q_866,q_866_,s_867,s_867_,s_868,s_868_,betweenstory_78,s_869,s_869_,s_870,s_870_,q_871,q_871_,s_872,s_872_,s_873,s_873_,q_874,q_874_,s_875,s_875_,q_876,q_876_,s_877,s_877_,q_878,q_878_,s_879,s_879_,s_880,s_880_,betweenstory_79,s_881,s_881_,q_882,q_882_,s_883,s_883_,q_884,q_884_,s_885,s_885_,s_886,s_886_,q_887,q_887_,s_888,s_888_,s_889,s_889_,q_890,q_890_,s_891,s_891_,s_892,s_892_,betweenstory_80,s_893,s_893_,q_894,q_894_,s_895,s_895_,q_896,q_896_,s_897,s_897_,q_898,q_898_,s_899,s_899_,s_900,s_900_,s_901,s_901_,q_902,q_902_,s_903,s_903_,s_904,s_904_,betweenstory_81,s_905,s_905_,s_906,s_906_,q_907,q_907_,s_908,s_908_,q_909,q_909_,s_910,s_910_,s_911,s_911_,q_912,q_912_,s_913,s_913_,q_914,q_914_,s_915,s_915_,s_916,s_916_,betweenstory_82,s_917,s_917_,s_918,s_918_,q_919,q_919_,s_920,s_920_,s_921,s_921_,s_922,s_922_,s_923,s_923_,s_924,s_924_,s_925,s_925_,betweenstory_83,s_926,s_926_,s_927,s_927_,q_928,q_928_,s_929,s_929_,q_930,q_930_,s_931,s_931_,s_932,s_932_,q_933,q_933_,s_934,s_934_,q_935,q_935_,s_936,s_936_,s_937,s_937_,betweenstory_84,s_938,s_938_,q_939,q_939_,s_940,s_940_,q_941,q_941_,s_942,s_942_,s_943,s_943_,q_944,q_944_,s_945,s_945_,q_946,q_946_,s_947,s_947_,s_948,s_948_,s_949,s_949_,betweenstory_85,s_950,s_950_,s_951,s_951_,s_952,s_952_,q_953,q_953_,s_954,s_954_,q_955,q_955_,s_956,s_956_,s_957,s_957_,q_958,q_958_,s_959,s_959_,s_960,s_960_,betweenstory_86,s_961,s_961_,q_962,q_962_,s_963,s_963_,q_964,q_964_,s_965,s_965_,q_966,q_966_,s_967,s_967_,q_968,q_968_,s_969,s_969_,q_970,q_970_,s_971,s_971_,s_972,s_972_,s_973,s_973_,betweenstory_87,s_974,s_974_,s_975,s_975_,s_976,s_976_,s_977,s_977_,q_978,q_978_,s_979,s_979_,s_980,s_980_,q_981,q_981_,s_982,s_982_,s_983,s_983_,betweenstory_88,s_984,s_984_,s_985,s_985_,q_986,q_986_,s_987,s_987_,q_988,q_988_,s_989,s_989_,q_990,q_990_,s_991,s_991_,s_992,s_992_,s_993,s_993_,s_994,s_994_,betweenstory_89,s_995,s_995_,q_996,q_996_,s_997,s_997_,s_998,s_998_,q_999,q_999_,s_1000,s_1000_,q_1001,q_1001_,s_1002,s_1002_,q_1003,q_1003_,s_1004,s_1004_,q_1005,q_1005_,s_1006,s_1006_,s_1007,s_1007_,betweenstory_90,s_1008,s_1008_,s_1009,s_1009_,s_1010,s_1010_,s_1011,s_1011_,q_1012,q_1012_,s_1013,s_1013_,q_1014,q_1014_,s_1015,s_1015_,s_1016,s_1016_,s_1017,s_1017_,betweenstory_91,s_1018,s_1018_,q_1019,q_1019_,s_1020,s_1020_,s_1021,s_1021_,q_1022,q_1022_,s_1023,s_1023_,s_1024,s_1024_,s_1025,s_1025_,q_1026,q_1026_,s_1027,s_1027_,s_1028,s_1028_,betweenstory_92,s_1029,s_1029_,q_1030,q_1030_,s_1031,s_1031_,q_1032,q_1032_,s_1033,s_1033_,q_1034,q_1034_,s_1035,s_1035_,q_1036,q_1036_,s_1037,s_1037_,q_1038,q_1038_,s_1039,s_1039_,q_1040,q_1040_,s_1041,s_1041_,s_1042,s_1042_,betweenstory_93,s_1043,s_1043_,q_1044,q_1044_,s_1045,s_1045_,s_1046,s_1046_,s_1047,s_1047_,q_1048,q_1048_,s_1049,s_1049_,s_1050,s_1050_,q_1051,q_1051_,s_1052,s_1052_,s_1053,s_1053_,betweenstory_94,s_1054,s_1054_,q_1055,q_1055_,s_1056,s_1056_,q_1057,q_1057_,s_1058,s_1058_,s_1059,s_1059_,s_1060,s_1060_,s_1061,s_1061_,q_1062,q_1062_,s_1063,s_1063_,s_1064,s_1064_,betweenstory_95,s_1065,s_1065_,s_1066,s_1066_,s_1067,s_1067_,q_1068,q_1068_,s_1069,s_1069_,q_1070,q_1070_,s_1071,s_1071_,s_1072,s_1072_,q_1073,q_1073_,s_1074,s_1074_,s_1075,s_1075_,betweenstory_96,s_1076,s_1076_,q_1077,q_1077_,s_1078,s_1078_,s_1079,s_1079_,q_1080,q_1080_,s_1081,s_1081_,q_1082,q_1082_,s_1083,s_1083_,q_1084,q_1084_,s_1085,s_1085_,s_1086,s_1086_,s_1087,s_1087_,betweenstory_97,s_1088,s_1088_,s_1089,s_1089_,s_1090,s_1090_,s_1091,s_1091_,q_1092,q_1092_,s_1093,s_1093_,s_1094,s_1094_,s_1095,s_1095_,s_1096,s_1096_,betweenstory_98,s_1097,s_1097_,q_1098,q_1098_,s_1099,s_1099_,q_1100,q_1100_,s_1101,s_1101_,s_1102,s_1102_,q_1103,q_1103_,s_1104,s_1104_,s_1105,s_1105_,q_1106,q_1106_,s_1107,s_1107_,s_1108,s_1108_,betweenstory_99,s_1109,s_1109_,s_1110,s_1110_,q_1111,q_1111_,s_1112,s_1112_,q_1113,q_1113_,s_1114,s_1114_,s_1115,s_1115_,q_1116,q_1116_,s_1117,s_1117_,q_1118,q_1118_,s_1119,s_1119_,s_1120,s_1120_,betweenstory_100,],
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