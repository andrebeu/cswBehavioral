// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 2300
var MIN_STORY_ITI = 600

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
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_3 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_3_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_5 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_5_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_9 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_10 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_10_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_12 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_12_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_16 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_16_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_17 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_17_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_19 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_19_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_24 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_24_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_26 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_26_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_31 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_31_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_32 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_32_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_33 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_33_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_38 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_38_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_40 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_40_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_42 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_42_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_44 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_44_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_45 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_45_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_47 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_47_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_50 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_50_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_52 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_52_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_54 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_54_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_57 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_57_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_59 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_59_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_61 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_61_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_66 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_66_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_67 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_67_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_68 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_68_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_69 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_69_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_72 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_72_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_73 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_73_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_74_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_75 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_75_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_76 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_76_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_78_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_80_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_82_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_85 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_85_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_87_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_89 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_89_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_90 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_90_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_92 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_92_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_93 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_93_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_94 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_94_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_95 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_95_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_96 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_96_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_97_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_99 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_99_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_100 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_100_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_101 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_101_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_102 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_102_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_103 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_103_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_105 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_105_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_106 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_106_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_107 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_107_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_108 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_108_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_109 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_109_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_110 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_110_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_111 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_111_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_112 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_112_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_113 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_113_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_115_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_117 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_117_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_118 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_118_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_119 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_119_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_120 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_120_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_121 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_121_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice knew the red drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_122_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice knew the red drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_124 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_124_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_125 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_125_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_126 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_126_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_127 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_127_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_128 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_128_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_129 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_129_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_130 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_130_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_131 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_131_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_132 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_132_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_133 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_133_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_135 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_135_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_136 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_136_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_137 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_137_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_138 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_138_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_139 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_139_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_140 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_140_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_141 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_141_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_142 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_142_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_143 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_143_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_145 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_145_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_146 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_146_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_147 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_147_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_148 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_148_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_150 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_150_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_151 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_151_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_152_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_154 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_154_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_155 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_155_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_156 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_156_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_157 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_157_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_158 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_158_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_159 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_159_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_160 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_160_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_162 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_162_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_163 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_163_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_164 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_164_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_166_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_167 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_167_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_168 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_168_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_170 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_170_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_171 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_171_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_172 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_172_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_173 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_173_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_175 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_175_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_176 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_176_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_177 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_177_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_178 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_178_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_179 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_179_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_180 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_180_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_182 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had stuffed crows in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_182_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had stuffed crows in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_183 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_183_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_184 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_184_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_185 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_185_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_186 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_186_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_187 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_187_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_188 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_188_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_189 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_189_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_190 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_190_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_191 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_191_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_192 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_192_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_194 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_194_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_195 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_195_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_196 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_196_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_197 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_197_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_198 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_198_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_199 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_199_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_200 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_200_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_201 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_201_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_202 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_202_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_203 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_203_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_204 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_204_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_205 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_205_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_206 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_206_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_208 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_208_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_209 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_209_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_210 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_210_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_212 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_212_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_213 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_213_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_214 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_214_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_215 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_215_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_216 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_216_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_218 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_218_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_220 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_220_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_221 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_221_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_222 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_222_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_223 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_223_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_224 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_224_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_226 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_226_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_227 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_227_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_228 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_228_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_229 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_229_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_230 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_230_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_231 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_231_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_232 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_232_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_233 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_233_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_234 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_234_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_235 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_235_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_236 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_236_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_237 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_237_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_239 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_239_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_240 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_240_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_241 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_241_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_243 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_243_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_245 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_245_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_247 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_247_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_248 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_248_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_249 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_249_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_250 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_250_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_251 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_251_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_252 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_252_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_253 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_253_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_254 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_254_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_255 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_255_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_256 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_256_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_257 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_257_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_259 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_259_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_260 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_260_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_262 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_262_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_264 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_264_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had stuffed crows in the basement", "Bill knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_265_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had stuffed crows in the basement", "Bill knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_266 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_266_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_267 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_267_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_269 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_269_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_270 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_270_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_271_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_273 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_273_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_274 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_274_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_275 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_275_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_276 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_276_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_278 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_278_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_279 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_279_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_280 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_280_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_281 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_281_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_282 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_282_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_283 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_283_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_284 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_284_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_285 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_285_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_286 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_286_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_287 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_287_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_288 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_288_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_290 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_290_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_291 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_291_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_292 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_292_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_293 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_293_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_294 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_294_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_295 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_295_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_296 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_296_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_297 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_297_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_298 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_298_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_299 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_299_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_300 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_300_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_302_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_303 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_303_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_304 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_304_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard a bad pickup line", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_305 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_305_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_306 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_306_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_307 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_307_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_308 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_308_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_309 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_309_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_310 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_310_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_311 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_311_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_312 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_312_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_313 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_313_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_315 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_315_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_316 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_316_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_318 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_318_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_319 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_319_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_320 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_320_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_321 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_321_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_322 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_322_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_323 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "Bill just took his apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_323_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "Bill just took his apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_325 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_325_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_326 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_326_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_327 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_327_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_328 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_328_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_330 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_330_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_332 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_332_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_333 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_333_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_334 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_334_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_336 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_336_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her apple crumble and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_337 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_337_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_338 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_338_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_339 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_339_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_340 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_340_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_341 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_341_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_343 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_343_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_344 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_344_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_345 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_345_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_346 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_346_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_348_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_349 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_349_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_351 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_351_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_353 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_353_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_354 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_354_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_355 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_355_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_356 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_356_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_357 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_357_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_359 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_359_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_360 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_360_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_361 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_361_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_362 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_362_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_363 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_363_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_364 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_364_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_365 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_365_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_366 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_366_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_367 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_367_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_369 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_369_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_370 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_370_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_371 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_371_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_372 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_372_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_373 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_373_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_374 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_374_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_375 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_375_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_376 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_376_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_377 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_377_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_378 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_378_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_379 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_379_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_380 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_380_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_381 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_381_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_382 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_382_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_383 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_383_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_384_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_386 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_386_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_388 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_388_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_390 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_390_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_392 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_392_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_394 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_394_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_395 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_395_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_396 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_396_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_397 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_397_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_399 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_399_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_400 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_400_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_402 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_402_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_404 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_404_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_405 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_405_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_406 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_406_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_407 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_407_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_408 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_408_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_409 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_409_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_411 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_411_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_412 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_412_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_414 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_414_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_415 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_415_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_416 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_416_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_417 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_417_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_418 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_418_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_419 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_419_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_420 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_420_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_421 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_421_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_422 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_422_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_423 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_423_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_424 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_424_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_425 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_425_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_426 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_426_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_428 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_428_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_430 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_430_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_431 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_431_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_432 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_432_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_433 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_433_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_434 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_434_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_436 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_436_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_437 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_437_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_438 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_438_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_439 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_439_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_440 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_440_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_441 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_441_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_442 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_442_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_443 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_443_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_444 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_444_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_445 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_445_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_446 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_446_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_447 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_447_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_448 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_448_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_449 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_449_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_450 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_450_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_451 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_451_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_452 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_452_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_453 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_453_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_454 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_454_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_456 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_456_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_458 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_458_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_459 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had skeletons in the basement", "Alice knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_459_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had skeletons in the basement", "Alice knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_460 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_460_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_461 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_461_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_462 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_462_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_463 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_463_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_464 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_464_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_465 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_465_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_467_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_468 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_468_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_469 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_469_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_470 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_470_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_471 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_471_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_472 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_472_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_474 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_474_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_475 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_475_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_476 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_476_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_477 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_477_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_478 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_478_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_479 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_479_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_480 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_480_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_481 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_481_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_482 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_482_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_483 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_483_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_484 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_484_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_485 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_485_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_486 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_486_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_487 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_487_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_488 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_488_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_489 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_489_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_490 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_490_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_492 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_492_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_493 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_493_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_494_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_495 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_495_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_497 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_497_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_498 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_498_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_499 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_499_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_500 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_500_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_501 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_501_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_502 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_502_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_503 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_503_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_505 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_505_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_506 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_506_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_507 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_507_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_508 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_508_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_509 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_509_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_511 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_511_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_513 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_513_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_514 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_514_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_515 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_515_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_516 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_516_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_517 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_517_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_519 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_519_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_520 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_520_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_521 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_521_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_522 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had stuffed crows in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_522_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had stuffed crows in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_523 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_523_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_524 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_524_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_525 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_525_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_527 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_527_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_528 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_528_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_529 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_529_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by throwing banana peels at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_530 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_530_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_531 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_531_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_532 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_532_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_534 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_534_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_535 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_535_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_536 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_536_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_537 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_537_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_538 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_538_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_540 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_540_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_541 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_541_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_542 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_542_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_543 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_543_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_544 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_544_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_545 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_545_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_547 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_547_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_549 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_549_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_550 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_550_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_551 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_551_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_552 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_552_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_553 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_553_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_555 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_555_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_556 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_556_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_557 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_557_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_558 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_558_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_559 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_559_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_560_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_561 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_561_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_562 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_562_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_563 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_563_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_564 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_564_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_565 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_565_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_566_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_567 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_567_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_568 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_568_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_569 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_569_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_570 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_570_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_571 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_571_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_572 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_572_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_573 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_573_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_575_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_576 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_576_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_577 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_577_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_578 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_578_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_579 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_579_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_580 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_580_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_581 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_581_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_582 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_582_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_583 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_583_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_584 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_584_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_586 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_586_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_588 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_588_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_589 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_589_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_590 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_590_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_591 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_591_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_592 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_592_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_593 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_593_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_594 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_594_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_595 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_595_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_597 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_597_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_598 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_598_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_600 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_600_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_601 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_601_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_602 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_602_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_604 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_604_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_605 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_605_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_606 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_606_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_607 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_607_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_608 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_608_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_611 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_611_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_612 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_612_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_613 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_613_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_614 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_614_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_616 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_616_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_617 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_617_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_618 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_618_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_619 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_619_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_620 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_620_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_621 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_621_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_622 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_622_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_624 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_624_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_626 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_626_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_627 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_627_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_628 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_628_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_629 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_629_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_631 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_631_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_633 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_633_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_635 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_635_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_636 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_636_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_639 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_639_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_640 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_640_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_642 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_642_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_643 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_643_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_644 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_644_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_645 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_645_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_646 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_646_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_647 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_647_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_648 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_648_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_649 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_649_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_650 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_650_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_651 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_651_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_652 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_652_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_653 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_653_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_654 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_654_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_655 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_655_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_656 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_656_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_658 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_658_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard someone yelling math equations", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_659 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_659_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_660 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_660_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_661 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_661_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_662 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_662_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_663 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_663_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_664 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_664_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The barista had to intervene by dumping a bucket of water at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_666 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_666_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_667 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_667_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_668 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_668_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_669 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_669_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_670 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_670_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_671 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_671_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_672 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_672_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_673 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_673_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_674 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_674_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_675 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_675_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_677 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_677_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_678 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_678_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_679 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_679_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_680 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had stuffed crows in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_680_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had stuffed crows in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_682_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_683 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_683_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_684 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_684_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_685 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_685_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_686 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_686_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_687 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_687_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_688 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_688_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_689 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_689_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_690 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_690_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_691 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_691_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_693 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_693_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_694 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_694_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_695 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_695_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_696 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_696_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_697 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_697_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_698 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_698_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_699 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_699_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_700 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_700_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to spectate Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_701 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_701_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_702 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_702_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the empty pitcher", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_703 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_703_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_704 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_704_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_705 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had skeletons in the basement", "Alice knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_705_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had skeletons in the basement", "Alice knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_707 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_707_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_708 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_708_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_709 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_709_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Alice noticed a man with a face tattoo <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting tunes from the 80s", "That’s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_710 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_710_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_711 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_711_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_712 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_712_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_713 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_713_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_714 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_714_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_715 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_715_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_717 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_717_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_718 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_718_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_719 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_719_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_720 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_720_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_721 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_721_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_722 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_722_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_724 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_724_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_725 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_725_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_726 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_726_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_727 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_727_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_728 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_728_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_731 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_731_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_733 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_733_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_735 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a guitar solo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_735_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a guitar solo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_736 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_736_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_737 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_737_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_738 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_738_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_739 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_739_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_740 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_740_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_741 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_741_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_742 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_742_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_744 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_744_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had stuffed crows in the basement", "Alice knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_745 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_745_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_746 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_746_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_747 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_747_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_749 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_749_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_751 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_751_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the circle dance <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_752 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_752_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_753 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_753_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_754 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_754_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_755 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_755_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_756 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the red drink was terrible here", "Alice was told they had stuffed crows in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_756_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Alice walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Alice knew the red drink was terrible here", "Alice was told they had stuffed crows in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_757 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_757_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_758 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_758_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_759 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_759_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_760 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_760_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Alice overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_761 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_761_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_762 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_762_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she yelled in seven languages", "This caused Alice to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_763 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_763_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_764 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The barista had to intervene by throwing banana peels at Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_764_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The barista had to intervene by throwing banana peels at Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_765 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_765_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var q_766 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_766_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["Alice just took her blueberry pie and left", "On her way out, Alice took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_767 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_767_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_768 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_768_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_769 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_769_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_770 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_770_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_771 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_771_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_772 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_772_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["Suddenly, the radio began broadcasting really bad music", "That’s when the band began playing a symphony"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_773 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_773_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_774 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_774_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_775 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_775_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_776 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_776_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_778 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_778_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_779 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_779_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_780 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_780_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_781 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_781_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_782 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_782_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_784 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_784_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_786 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_786_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_787 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_787_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_788 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_788_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_789 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_789_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_790 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_790_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_792 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_792_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_793 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_793_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_794 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_794_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_795 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_795_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_796 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_796_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_799 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_799_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_801 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_801_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_802 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_802_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_803 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_803_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_804 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_804_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_805 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_805_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_806 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_806_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_808 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_808_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_810 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_810_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_812 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_812_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_813 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_813_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_814 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_814_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_815 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_815_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_817 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_817_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_818 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_818_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_819 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_819_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_820 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_820_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var s_821 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_821_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_822 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_822_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_823 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_823_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_824 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_824_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_826 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_826_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_827 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_827_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_828 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_828_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_829 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_829_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Alice walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_830 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_830_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_831 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_831_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_832 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_832_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_834 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_834_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 
	var s_835 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_835_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-deep",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_836 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_836_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_837 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_837_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_838 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_838_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_839 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_839_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_840 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_840_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_842 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_842_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_843 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_843_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_844 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_844_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_845 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_845_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_846 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_846_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_847 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_847_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the circle dance",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_849 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_849_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the empty pitcher",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_850 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_850_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_851 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_851_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice knew the green drink was terrible here", "Alice was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_852 = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_852_ = {
		type: "html-keyboard-response",
		stimulus: "Alice knew the green drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_853 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_853_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice knew the green drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "After ordering,  Alice noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_854 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_854_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Alice noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_855 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_855_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_856 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_856_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the samba", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_857 = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_857_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Alice to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_858 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_858_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Alice to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Alice", "The police came rushing in to join along Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_859 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_859_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_860 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_860_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "On her way out, Alice took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_862 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_862_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_863_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_864 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_864_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_865 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_865_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_866 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_866_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_867 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_867_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard someone yelling math equations <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_869 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_869_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_870 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_870_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_871 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_871_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_873_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_874 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_874_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_875 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_875_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_876 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_876_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_877 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_877_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a pirate with no sword", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_878 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_878_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_879 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_879_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting really bad music"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_880 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_880_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_881 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_881_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Alice was so revolted she hid under the bar", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_882 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_882_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_883 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_883_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_884 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_884_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_885 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_885_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_886 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_886_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_887 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_887_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_888 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_888_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the red drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_889 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_889_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_890 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_890_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a pirate with no sword", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_891 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_891_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_892 = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_892_ = {
		type: "html-keyboard-response",
		stimulus: "<p> After ordering,  Bill noticed a pirate with no sword <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NOTICE",
						"true_tonode": "RADIO",
						"false_tonode": "BAND",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_893 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_893_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_894 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_894_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he hid under the bar", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_895 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_895_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_896 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_896_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Alice", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_898 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_898_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_899 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_899_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_900 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_900_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_901 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had stuffed crows in the basement", "Bill knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_901_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had stuffed crows in the basement", "Bill knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_902 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_902_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had stuffed crows in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_903 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_903_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had stuffed crows in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_904 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_904_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_905 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_905_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_906 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_906_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_907 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_907_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_908 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_908_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_909 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_909_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_910 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_910_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the empty pitcher", "Bill just took his apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_911 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_911_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his apple crumble and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_912 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_912_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_913 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had stuffed crows in the basement", "Bill knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_913_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had stuffed crows in the basement", "Bill knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_914 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_914_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_915 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_915_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a man with a face tattoo"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_916 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_916_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a man with a face tattoo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_917 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_917_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting really bad music",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_918 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the circle dance"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_918_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting really bad music <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "This caused Alice to dance the circle dance"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_919 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_919_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_920 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_920_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_921 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_921_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to spectate Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_922 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_922_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to spectate Bill <br><br><br> what happens next? <p>",
		labels: ["On his way out, Bill took the salt shaker", "Bill just took his apple crumble and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_923 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_923_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_924 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_924_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_925 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_925_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_926 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_926_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_927 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_927_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Bill noticed a man with a face tattoo", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_928 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_928_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_929 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_929_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a guitar solo", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_930 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_930_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_931 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_931_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["Bill was so revolted he yelled in seven languages", "This caused Bill to dance the samba"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_932 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_932_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_933 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_933_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Bill", "The police came rushing in to spectate Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_934 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_934_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_935 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the empty pitcher"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_935_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the empty pitcher"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_936 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_936_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_937 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_937_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning Bill walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_938 = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the red drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_938_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One fine morning Bill walked into the deep ocean cafe <br><br><br> what happens next? <p>",
		labels: ["Bill was told they had skeletons in the basement", "Bill knew the red drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TERRIBLE",
						"false_tonode": "TOLD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_939 = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_939_ = {
		type: "html-keyboard-response",
		stimulus: "Bill knew the red drink was terrible here",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TERRIBLE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_940 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_940_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill knew the red drink was terrible here <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Bill overheard someone yelling math equations", "After ordering,  Bill noticed a pirate with no sword"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TERRIBLE",
						"true_tonode": "NOTICE",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_941 = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_941_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering,  Bill noticed a pirate with no sword",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NOTICE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var s_942 = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_942_ = {
		type: "html-keyboard-response",
		stimulus: "Suddenly, the radio began broadcasting tunes from the 80s",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_943 = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_943_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Suddenly, the radio began broadcasting tunes from the 80s <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the samba", "Bill was so revolted he yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "RADIO",
						"true_tonode": "DANCE",
						"false_tonode": "REVOLT",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_944 = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_944_ = {
		type: "html-keyboard-response",
		stimulus: "This caused Bill to dance the samba",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "DANCE",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_945 = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to join along Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_945_ = {
		type: "html-keyboard-response",
		stimulus: "<p> This caused Bill to dance the samba <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by dumping a bucket of water at Bill", "The police came rushing in to join along Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DANCE",
						"true_tonode": "COPS",
						"false_tonode": "BARISTA",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_946 = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_946_ = {
		type: "html-keyboard-response",
		stimulus: "The police came rushing in to join along Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "COPS",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 
	var q_947 = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_947_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The police came rushing in to join along Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his apple crumble and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "COPS",
						"true_tonode": "TAKEOBJ",
						"false_tonode": "FOODLEAVE",
						"true_rfc":"subject-Bill_location-deep",
						"false_rfc":"subject-Bill_location-deep" }
			} 
	var s_948 = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_948_ = {
		type: "html-keyboard-response",
		stimulus: "On his way out, Bill took the salt shaker",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TAKEOBJ",
						"rfc": "subject-Bill_location-deep",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_949 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_949_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Bill walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_950 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_950_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Bill walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Bill knew the green drink was terrible here", "Bill was told they had skeletons in the basement"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_951 = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_951_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_952 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard a bad pickup line"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_952_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["While sitting down, Alice overheard a bad pickup line", "While sitting down, Bill overheard a bad pickup line"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "HEARD",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_953 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_953_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Bill overheard a bad pickup line",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_954 = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_954_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While sitting down, Bill overheard a bad pickup line <br><br><br> what happens next? <p>",
		labels: ["That’s when the band began playing a symphony", "Suddenly, the radio began broadcasting tunes from the 80s"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "HEARD",
						"true_tonode": "BAND",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_955 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_955_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a symphony",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_956 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_956_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a symphony <br><br><br> what happens next? <p>",
		labels: ["This caused Bill to dance the circle dance", "Bill was so revolted he hid under the bar"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_957 = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_957_ = {
		type: "html-keyboard-response",
		stimulus: "Bill was so revolted he hid under the bar",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_958 = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_958_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Bill was so revolted he hid under the bar <br><br><br> what happens next? <p>",
		labels: ["The police came rushing in to join along Bill", "The barista had to intervene by dumping a bucket of water at Bill"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_959 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_959_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by dumping a bucket of water at Bill",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 
	var q_960 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_960_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by dumping a bucket of water at Bill <br><br><br> what happens next? <p>",
		labels: ["Bill just took his blueberry pie and left", "On his way out, Bill took the salt shaker"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Bill_location-jungle",
						"false_rfc":"subject-Bill_location-jungle" }
			} 
	var s_961 = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_961_ = {
		type: "html-keyboard-response",
		stimulus: "Bill just took his blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Bill_location-jungle",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "instruction"}
	} 

	var s_962 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_962_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening Alice walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_963 = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had skeletons in the basement", "Alice knew the green drink was terrible here"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_963_ = {
		type: "html-keyboard-response",
		stimulus: "<p> One strange evening Alice walked into the jungle brew house  <br><br><br> what happens next? <p>",
		labels: ["Alice was told they had skeletons in the basement", "Alice knew the green drink was terrible here"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "TOLD",
						"false_tonode": "TERRIBLE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_964 = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_964_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was told they had skeletons in the basement",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_965 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_965_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was told they had skeletons in the basement <br><br><br> what happens next? <p>",
		labels: ["After ordering,  Alice noticed a man with a face tattoo", "While sitting down, Alice overheard someone yelling math equations"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "HEARD",
						"false_tonode": "NOTICE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_966 = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_966_ = {
		type: "html-keyboard-response",
		stimulus: "While sitting down, Alice overheard someone yelling math equations",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "HEARD",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var s_967 = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_967_ = {
		type: "html-keyboard-response",
		stimulus: "That’s when the band began playing a guitar solo",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BAND",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_968 = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she yelled in seven languages"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_968_ = {
		type: "html-keyboard-response",
		stimulus: "<p> That’s when the band began playing a guitar solo <br><br><br> what happens next? <p>",
		labels: ["This caused Alice to dance the circle dance", "Alice was so revolted she yelled in seven languages"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BAND",
						"true_tonode": "REVOLT",
						"false_tonode": "DANCE",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_969 = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_969_ = {
		type: "html-keyboard-response",
		stimulus: "Alice was so revolted she yelled in seven languages",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "REVOLT",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_970 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_970_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alice was so revolted she yelled in seven languages <br><br><br> what happens next? <p>",
		labels: ["The barista had to intervene by throwing banana peels at Alice", "The police came rushing in to spectate Alice"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "REVOLT",
						"true_tonode": "BARISTA",
						"false_tonode": "COPS",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_971 = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_971_ = {
		type: "html-keyboard-response",
		stimulus: "The barista had to intervene by throwing banana peels at Alice",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BARISTA",
						"rfc": "subject-Alice_location-jungle",
						"type": "story" }
	} 
	var q_972 = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_972_ = {
		type: "html-keyboard-response",
		stimulus: "<p> The barista had to intervene by throwing banana peels at Alice <br><br><br> what happens next? <p>",
		labels: ["On her way out, Alice took the salt shaker", "Alice just took her blueberry pie and left"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTA",
						"true_tonode": "FOODLEAVE",
						"false_tonode": "TAKEOBJ",
						"true_rfc":"subject-Alice_location-jungle",
						"false_rfc":"subject-Alice_location-jungle" }
			} 
	var s_973 = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_973_ = {
		type: "html-keyboard-response",
		stimulus: "Alice just took her blueberry pie and left",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "FOODLEAVE",
						"rfc": "subject-Alice_location-jungle",
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
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,s_3,s_3_,s_4,s_4_,s_5,s_5_,s_6,s_6_,s_7,s_7_,betweenstory_1,s_8,s_8_,s_9,s_9_,s_10,s_10_,s_11,s_11_,s_12,s_12_,s_13,s_13_,s_14,s_14_,betweenstory_2,s_15,s_15_,s_16,s_16_,s_17,s_17_,s_18,s_18_,s_19,s_19_,s_20,s_20_,s_21,s_21_,betweenstory_3,s_22,s_22_,s_23,s_23_,s_24,s_24_,s_25,s_25_,s_26,s_26_,s_27,s_27_,s_28,s_28_,betweenstory_4,s_29,s_29_,s_30,s_30_,s_31,s_31_,s_32,s_32_,s_33,s_33_,s_34,s_34_,s_35,s_35_,betweenstory_5,s_36,s_36_,s_37,s_37_,s_38,s_38_,s_39,s_39_,s_40,s_40_,s_41,s_41_,s_42,s_42_,betweenstory_6,s_43,s_43_,s_44,s_44_,s_45,s_45_,s_46,s_46_,s_47,s_47_,s_48,s_48_,s_49,s_49_,betweenstory_7,s_50,s_50_,s_51,s_51_,s_52,s_52_,s_53,s_53_,s_54,s_54_,s_55,s_55_,s_56,s_56_,betweenstory_8,s_57,s_57_,s_58,s_58_,s_59,s_59_,s_60,s_60_,s_61,s_61_,s_62,s_62_,s_63,s_63_,betweenstory_9,s_64,s_64_,s_65,s_65_,s_66,s_66_,s_67,s_67_,s_68,s_68_,s_69,s_69_,s_70,s_70_,betweenstory_10,s_71,s_71_,q_72,q_72_,s_73,s_73_,q_74,q_74_,s_75,s_75_,q_76,q_76_,s_77,s_77_,q_78,q_78_,s_79,s_79_,q_80,q_80_,s_81,s_81_,q_82,q_82_,s_83,s_83_,betweenstory_11,s_84,s_84_,q_85,q_85_,s_86,s_86_,q_87,q_87_,s_88,s_88_,s_89,s_89_,q_90,q_90_,s_91,s_91_,q_92,q_92_,s_93,s_93_,q_94,q_94_,s_95,s_95_,betweenstory_12,s_96,s_96_,q_97,q_97_,s_98,s_98_,q_99,q_99_,s_100,s_100_,q_101,q_101_,s_102,s_102_,q_103,q_103_,s_104,s_104_,q_105,q_105_,s_106,s_106_,q_107,q_107_,s_108,s_108_,betweenstory_13,s_109,s_109_,q_110,q_110_,s_111,s_111_,q_112,q_112_,s_113,s_113_,s_114,s_114_,q_115,q_115_,s_116,s_116_,q_117,q_117_,s_118,s_118_,q_119,q_119_,s_120,s_120_,betweenstory_14,s_121,s_121_,q_122,q_122_,s_123,s_123_,q_124,q_124_,s_125,s_125_,q_126,q_126_,s_127,s_127_,q_128,q_128_,s_129,s_129_,q_130,q_130_,s_131,s_131_,q_132,q_132_,s_133,s_133_,betweenstory_15,s_134,s_134_,s_135,s_135_,q_136,q_136_,s_137,s_137_,s_138,s_138_,q_139,q_139_,s_140,s_140_,q_141,q_141_,s_142,s_142_,q_143,q_143_,s_144,s_144_,betweenstory_16,s_145,s_145_,q_146,q_146_,s_147,s_147_,q_148,q_148_,s_149,s_149_,q_150,q_150_,s_151,s_151_,q_152,q_152_,s_153,s_153_,q_154,q_154_,s_155,s_155_,q_156,q_156_,s_157,s_157_,betweenstory_17,s_158,s_158_,s_159,s_159_,q_160,q_160_,s_161,s_161_,q_162,q_162_,s_163,s_163_,q_164,q_164_,s_165,s_165_,q_166,q_166_,s_167,s_167_,q_168,q_168_,s_169,s_169_,betweenstory_18,s_170,s_170_,s_171,s_171_,q_172,q_172_,s_173,s_173_,s_174,s_174_,q_175,q_175_,s_176,s_176_,q_177,q_177_,s_178,s_178_,q_179,q_179_,s_180,s_180_,betweenstory_19,s_181,s_181_,q_182,q_182_,s_183,s_183_,q_184,q_184_,s_185,s_185_,q_186,q_186_,s_187,s_187_,q_188,q_188_,s_189,s_189_,q_190,q_190_,s_191,s_191_,q_192,q_192_,s_193,s_193_,betweenstory_20,s_194,s_194_,s_195,s_195_,s_196,s_196_,s_197,s_197_,s_198,s_198_,s_199,s_199_,s_200,s_200_,betweenstory_21,s_201,s_201_,s_202,s_202_,s_203,s_203_,s_204,s_204_,s_205,s_205_,s_206,s_206_,s_207,s_207_,betweenstory_22,s_208,s_208_,s_209,s_209_,s_210,s_210_,s_211,s_211_,s_212,s_212_,s_213,s_213_,s_214,s_214_,betweenstory_23,s_215,s_215_,s_216,s_216_,s_217,s_217_,s_218,s_218_,s_219,s_219_,s_220,s_220_,s_221,s_221_,betweenstory_24,s_222,s_222_,s_223,s_223_,s_224,s_224_,s_225,s_225_,s_226,s_226_,s_227,s_227_,s_228,s_228_,betweenstory_25,s_229,s_229_,s_230,s_230_,s_231,s_231_,s_232,s_232_,s_233,s_233_,s_234,s_234_,s_235,s_235_,betweenstory_26,s_236,s_236_,s_237,s_237_,s_238,s_238_,s_239,s_239_,s_240,s_240_,s_241,s_241_,s_242,s_242_,betweenstory_27,s_243,s_243_,s_244,s_244_,s_245,s_245_,s_246,s_246_,s_247,s_247_,s_248,s_248_,s_249,s_249_,betweenstory_28,s_250,s_250_,s_251,s_251_,s_252,s_252_,s_253,s_253_,s_254,s_254_,s_255,s_255_,s_256,s_256_,betweenstory_29,s_257,s_257_,s_258,s_258_,s_259,s_259_,s_260,s_260_,s_261,s_261_,s_262,s_262_,s_263,s_263_,betweenstory_30,s_264,s_264_,q_265,q_265_,s_266,s_266_,q_267,q_267_,s_268,s_268_,q_269,q_269_,s_270,s_270_,q_271,q_271_,s_272,s_272_,q_273,q_273_,s_274,s_274_,q_275,q_275_,s_276,s_276_,betweenstory_31,s_277,s_277_,s_278,s_278_,q_279,q_279_,s_280,s_280_,q_281,q_281_,s_282,s_282_,q_283,q_283_,s_284,s_284_,q_285,q_285_,s_286,s_286_,q_287,q_287_,s_288,s_288_,betweenstory_32,s_289,s_289_,s_290,s_290_,q_291,q_291_,s_292,s_292_,q_293,q_293_,s_294,s_294_,q_295,q_295_,s_296,s_296_,q_297,q_297_,s_298,s_298_,q_299,q_299_,s_300,s_300_,betweenstory_33,s_301,s_301_,q_302,q_302_,s_303,s_303_,q_304,q_304_,s_305,s_305_,q_306,q_306_,s_307,s_307_,q_308,q_308_,s_309,s_309_,q_310,q_310_,s_311,s_311_,q_312,q_312_,s_313,s_313_,betweenstory_34,s_314,s_314_,s_315,s_315_,q_316,q_316_,s_317,s_317_,s_318,s_318_,q_319,q_319_,s_320,s_320_,q_321,q_321_,s_322,s_322_,q_323,q_323_,s_324,s_324_,betweenstory_35,s_325,s_325_,q_326,q_326_,s_327,s_327_,q_328,q_328_,s_329,s_329_,q_330,q_330_,s_331,s_331_,q_332,q_332_,s_333,s_333_,q_334,q_334_,s_335,s_335_,q_336,q_336_,s_337,s_337_,betweenstory_36,s_338,s_338_,q_339,q_339_,s_340,s_340_,q_341,q_341_,s_342,s_342_,s_343,s_343_,q_344,q_344_,s_345,s_345_,q_346,q_346_,s_347,s_347_,q_348,q_348_,s_349,s_349_,betweenstory_37,s_350,s_350_,q_351,q_351_,s_352,s_352_,q_353,q_353_,s_354,s_354_,q_355,q_355_,s_356,s_356_,q_357,q_357_,s_358,s_358_,q_359,q_359_,s_360,s_360_,q_361,q_361_,s_362,s_362_,betweenstory_38,s_363,s_363_,q_364,q_364_,s_365,s_365_,q_366,q_366_,s_367,s_367_,s_368,s_368_,q_369,q_369_,s_370,s_370_,q_371,q_371_,s_372,s_372_,q_373,q_373_,s_374,s_374_,betweenstory_39,s_375,s_375_,q_376,q_376_,s_377,s_377_,q_378,q_378_,s_379,s_379_,q_380,q_380_,s_381,s_381_,q_382,q_382_,s_383,s_383_,q_384,q_384_,s_385,s_385_,q_386,q_386_,s_387,s_387_,betweenstory_40,s_388,s_388_,s_389,s_389_,s_390,s_390_,s_391,s_391_,s_392,s_392_,s_393,s_393_,s_394,s_394_,betweenstory_41,s_395,s_395_,s_396,s_396_,s_397,s_397_,s_398,s_398_,s_399,s_399_,s_400,s_400_,s_401,s_401_,betweenstory_42,s_402,s_402_,s_403,s_403_,s_404,s_404_,s_405,s_405_,s_406,s_406_,s_407,s_407_,s_408,s_408_,betweenstory_43,s_409,s_409_,s_410,s_410_,s_411,s_411_,s_412,s_412_,s_413,s_413_,s_414,s_414_,s_415,s_415_,betweenstory_44,s_416,s_416_,s_417,s_417_,s_418,s_418_,s_419,s_419_,s_420,s_420_,s_421,s_421_,s_422,s_422_,betweenstory_45,s_423,s_423_,s_424,s_424_,s_425,s_425_,s_426,s_426_,s_427,s_427_,s_428,s_428_,s_429,s_429_,betweenstory_46,s_430,s_430_,s_431,s_431_,s_432,s_432_,s_433,s_433_,s_434,s_434_,s_435,s_435_,s_436,s_436_,betweenstory_47,s_437,s_437_,s_438,s_438_,s_439,s_439_,s_440,s_440_,s_441,s_441_,s_442,s_442_,s_443,s_443_,betweenstory_48,s_444,s_444_,s_445,s_445_,s_446,s_446_,s_447,s_447_,s_448,s_448_,s_449,s_449_,s_450,s_450_,betweenstory_49,s_451,s_451_,s_452,s_452_,s_453,s_453_,s_454,s_454_,s_455,s_455_,s_456,s_456_,s_457,s_457_,betweenstory_50,s_458,s_458_,q_459,q_459_,s_460,s_460_,q_461,q_461_,s_462,s_462_,q_463,q_463_,s_464,s_464_,q_465,q_465_,s_466,s_466_,q_467,q_467_,s_468,s_468_,q_469,q_469_,s_470,s_470_,betweenstory_51,s_471,s_471_,q_472,q_472_,s_473,s_473_,q_474,q_474_,s_475,s_475_,q_476,q_476_,s_477,s_477_,q_478,q_478_,s_479,s_479_,q_480,q_480_,s_481,s_481_,q_482,q_482_,s_483,s_483_,betweenstory_52,s_484,s_484_,q_485,q_485_,s_486,s_486_,q_487,q_487_,s_488,s_488_,s_489,s_489_,q_490,q_490_,s_491,s_491_,q_492,q_492_,s_493,s_493_,q_494,q_494_,s_495,s_495_,betweenstory_53,s_496,s_496_,q_497,q_497_,s_498,s_498_,q_499,q_499_,s_500,s_500_,q_501,q_501_,s_502,s_502_,q_503,q_503_,s_504,s_504_,q_505,q_505_,s_506,s_506_,q_507,q_507_,s_508,s_508_,betweenstory_54,s_509,s_509_,s_510,s_510_,q_511,q_511_,s_512,s_512_,q_513,q_513_,s_514,s_514_,q_515,q_515_,s_516,s_516_,q_517,q_517_,s_518,s_518_,q_519,q_519_,s_520,s_520_,betweenstory_55,s_521,s_521_,q_522,q_522_,s_523,s_523_,q_524,q_524_,s_525,s_525_,s_526,s_526_,q_527,q_527_,s_528,s_528_,q_529,q_529_,s_530,s_530_,q_531,q_531_,s_532,s_532_,betweenstory_56,s_533,s_533_,q_534,q_534_,s_535,s_535_,q_536,q_536_,s_537,s_537_,q_538,q_538_,s_539,s_539_,q_540,q_540_,s_541,s_541_,q_542,q_542_,s_543,s_543_,q_544,q_544_,s_545,s_545_,betweenstory_57,s_546,s_546_,q_547,q_547_,s_548,s_548_,q_549,q_549_,s_550,s_550_,q_551,q_551_,s_552,s_552_,q_553,q_553_,s_554,s_554_,q_555,q_555_,s_556,s_556_,q_557,q_557_,s_558,s_558_,betweenstory_58,s_559,s_559_,q_560,q_560_,s_561,s_561_,q_562,q_562_,s_563,s_563_,q_564,q_564_,s_565,s_565_,q_566,q_566_,s_567,s_567_,q_568,q_568_,s_569,s_569_,q_570,q_570_,s_571,s_571_,betweenstory_59,s_572,s_572_,q_573,q_573_,s_574,s_574_,q_575,q_575_,s_576,s_576_,q_577,q_577_,s_578,s_578_,q_579,q_579_,s_580,s_580_,q_581,q_581_,s_582,s_582_,q_583,q_583_,s_584,s_584_,betweenstory_60,s_585,s_585_,s_586,s_586_,s_587,s_587_,s_588,s_588_,s_589,s_589_,s_590,s_590_,s_591,s_591_,betweenstory_61,s_592,s_592_,s_593,s_593_,s_594,s_594_,s_595,s_595_,s_596,s_596_,s_597,s_597_,s_598,s_598_,betweenstory_62,s_599,s_599_,s_600,s_600_,s_601,s_601_,s_602,s_602_,s_603,s_603_,s_604,s_604_,s_605,s_605_,betweenstory_63,s_606,s_606_,s_607,s_607_,s_608,s_608_,s_609,s_609_,s_610,s_610_,s_611,s_611_,s_612,s_612_,betweenstory_64,s_613,s_613_,s_614,s_614_,s_615,s_615_,s_616,s_616_,s_617,s_617_,s_618,s_618_,s_619,s_619_,betweenstory_65,s_620,s_620_,s_621,s_621_,s_622,s_622_,s_623,s_623_,s_624,s_624_,s_625,s_625_,s_626,s_626_,betweenstory_66,s_627,s_627_,s_628,s_628_,s_629,s_629_,s_630,s_630_,s_631,s_631_,s_632,s_632_,s_633,s_633_,betweenstory_67,s_634,s_634_,s_635,s_635_,s_636,s_636_,s_637,s_637_,s_638,s_638_,s_639,s_639_,s_640,s_640_,betweenstory_68,s_641,s_641_,s_642,s_642_,s_643,s_643_,s_644,s_644_,s_645,s_645_,s_646,s_646_,s_647,s_647_,betweenstory_69,s_648,s_648_,s_649,s_649_,s_650,s_650_,s_651,s_651_,s_652,s_652_,s_653,s_653_,s_654,s_654_,betweenstory_70,s_655,s_655_,q_656,q_656_,s_657,s_657_,q_658,q_658_,s_659,s_659_,q_660,q_660_,s_661,s_661_,q_662,q_662_,s_663,s_663_,q_664,q_664_,s_665,s_665_,q_666,q_666_,s_667,s_667_,betweenstory_71,s_668,s_668_,s_669,s_669_,q_670,q_670_,s_671,s_671_,s_672,s_672_,q_673,q_673_,s_674,s_674_,q_675,q_675_,s_676,s_676_,q_677,q_677_,s_678,s_678_,betweenstory_72,s_679,s_679_,q_680,q_680_,s_681,s_681_,q_682,q_682_,s_683,s_683_,q_684,q_684_,s_685,s_685_,q_686,q_686_,s_687,s_687_,q_688,q_688_,s_689,s_689_,q_690,q_690_,s_691,s_691_,betweenstory_73,s_692,s_692_,q_693,q_693_,s_694,s_694_,q_695,q_695_,s_696,s_696_,s_697,s_697_,q_698,q_698_,s_699,s_699_,q_700,q_700_,s_701,s_701_,q_702,q_702_,s_703,s_703_,betweenstory_74,s_704,s_704_,q_705,q_705_,s_706,s_706_,q_707,q_707_,s_708,s_708_,q_709,q_709_,s_710,s_710_,q_711,q_711_,s_712,s_712_,q_713,q_713_,s_714,s_714_,q_715,q_715_,s_716,s_716_,betweenstory_75,s_717,s_717_,q_718,q_718_,s_719,s_719_,q_720,q_720_,s_721,s_721_,q_722,q_722_,s_723,s_723_,q_724,q_724_,s_725,s_725_,q_726,q_726_,s_727,s_727_,q_728,q_728_,s_729,s_729_,betweenstory_76,s_730,s_730_,q_731,q_731_,s_732,s_732_,q_733,q_733_,s_734,s_734_,q_735,q_735_,s_736,s_736_,q_737,q_737_,s_738,s_738_,q_739,q_739_,s_740,s_740_,q_741,q_741_,s_742,s_742_,betweenstory_77,s_743,s_743_,q_744,q_744_,s_745,s_745_,q_746,q_746_,s_747,s_747_,s_748,s_748_,q_749,q_749_,s_750,s_750_,q_751,q_751_,s_752,s_752_,q_753,q_753_,s_754,s_754_,betweenstory_78,s_755,s_755_,q_756,q_756_,s_757,s_757_,q_758,q_758_,s_759,s_759_,q_760,q_760_,s_761,s_761_,q_762,q_762_,s_763,s_763_,q_764,q_764_,s_765,s_765_,q_766,q_766_,s_767,s_767_,betweenstory_79,s_768,s_768_,s_769,s_769_,q_770,q_770_,s_771,s_771_,q_772,q_772_,s_773,s_773_,q_774,q_774_,s_775,s_775_,q_776,q_776_,s_777,s_777_,q_778,q_778_,s_779,s_779_,betweenstory_80,s_780,s_780_,s_781,s_781_,s_782,s_782_,s_783,s_783_,s_784,s_784_,s_785,s_785_,s_786,s_786_,betweenstory_81,s_787,s_787_,s_788,s_788_,s_789,s_789_,s_790,s_790_,s_791,s_791_,s_792,s_792_,s_793,s_793_,betweenstory_82,s_794,s_794_,s_795,s_795_,s_796,s_796_,s_797,s_797_,s_798,s_798_,s_799,s_799_,s_800,s_800_,betweenstory_83,s_801,s_801_,s_802,s_802_,s_803,s_803_,s_804,s_804_,s_805,s_805_,s_806,s_806_,s_807,s_807_,betweenstory_84,s_808,s_808_,s_809,s_809_,s_810,s_810_,s_811,s_811_,s_812,s_812_,s_813,s_813_,s_814,s_814_,betweenstory_85,s_815,s_815_,s_816,s_816_,s_817,s_817_,s_818,s_818_,s_819,s_819_,s_820,s_820_,s_821,s_821_,betweenstory_86,s_822,s_822_,s_823,s_823_,s_824,s_824_,s_825,s_825_,s_826,s_826_,s_827,s_827_,s_828,s_828_,betweenstory_87,s_829,s_829_,s_830,s_830_,s_831,s_831_,s_832,s_832_,s_833,s_833_,s_834,s_834_,s_835,s_835_,betweenstory_88,s_836,s_836_,s_837,s_837_,s_838,s_838_,s_839,s_839_,s_840,s_840_,s_841,s_841_,s_842,s_842_,betweenstory_89,s_843,s_843_,s_844,s_844_,s_845,s_845_,s_846,s_846_,s_847,s_847_,s_848,s_848_,s_849,s_849_,betweenstory_90,s_850,s_850_,q_851,q_851_,s_852,s_852_,q_853,q_853_,s_854,s_854_,s_855,s_855_,q_856,q_856_,s_857,s_857_,q_858,q_858_,s_859,s_859_,q_860,q_860_,s_861,s_861_,betweenstory_91,s_862,s_862_,q_863,q_863_,s_864,s_864_,q_865,q_865_,s_866,s_866_,q_867,q_867_,s_868,s_868_,q_869,q_869_,s_870,s_870_,q_871,q_871_,s_872,s_872_,q_873,q_873_,s_874,s_874_,betweenstory_92,s_875,s_875_,s_876,s_876_,q_877,q_877_,s_878,s_878_,q_879,q_879_,s_880,s_880_,q_881,q_881_,s_882,s_882_,q_883,q_883_,s_884,s_884_,q_885,q_885_,s_886,s_886_,betweenstory_93,s_887,s_887_,q_888,q_888_,s_889,s_889_,q_890,q_890_,s_891,s_891_,q_892,q_892_,s_893,s_893_,q_894,q_894_,s_895,s_895_,q_896,q_896_,s_897,s_897_,q_898,q_898_,s_899,s_899_,betweenstory_94,s_900,s_900_,q_901,q_901_,s_902,s_902_,q_903,q_903_,s_904,s_904_,s_905,s_905_,q_906,q_906_,s_907,s_907_,q_908,q_908_,s_909,s_909_,q_910,q_910_,s_911,s_911_,betweenstory_95,s_912,s_912_,q_913,q_913_,s_914,s_914_,q_915,q_915_,s_916,s_916_,s_917,s_917_,q_918,q_918_,s_919,s_919_,q_920,q_920_,s_921,s_921_,q_922,q_922_,s_923,s_923_,betweenstory_96,s_924,s_924_,q_925,q_925_,s_926,s_926_,q_927,q_927_,s_928,s_928_,q_929,q_929_,s_930,s_930_,q_931,q_931_,s_932,s_932_,q_933,q_933_,s_934,s_934_,q_935,q_935_,s_936,s_936_,betweenstory_97,s_937,s_937_,q_938,q_938_,s_939,s_939_,q_940,q_940_,s_941,s_941_,s_942,s_942_,q_943,q_943_,s_944,s_944_,q_945,q_945_,s_946,s_946_,q_947,q_947_,s_948,s_948_,betweenstory_98,s_949,s_949_,q_950,q_950_,s_951,s_951_,q_952,q_952_,s_953,s_953_,q_954,q_954_,s_955,s_955_,q_956,q_956_,s_957,s_957_,q_958,q_958_,s_959,s_959_,q_960,q_960_,s_961,s_961_,betweenstory_99,s_962,s_962_,q_963,q_963_,s_964,s_964_,q_965,q_965_,s_966,s_966_,s_967,s_967_,q_968,q_968_,s_969,s_969_,q_970,q_970_,s_971,s_971_,q_972,q_972_,s_973,s_973_,betweenstory_100,comments],
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