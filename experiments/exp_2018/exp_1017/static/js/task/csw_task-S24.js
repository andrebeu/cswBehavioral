// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var MIN_QUESTION_ITI = 1500
var MIN_STORY_ITI = 500

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
		stimulus: "One strange evening, Alan walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Alan walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alan_location-jungle",
						"type": "story" }
	} 
	var s_2 = {
		type: "html-keyboard-response",
		stimulus: "Today, Alan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_2_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Alan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Alan_location-jungle",
						"type": "story" }
	} 
	var q_3 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Alan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Alan noticed the barista’s new mustache.", "Before ordering cake, Alan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_3_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Alan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Alan noticed the barista’s new mustache.", "Before ordering cake, Alan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Alan_location-jungle",
						"false_rfc":"subject-Alan_location-jungle" }
			} 
	var s_4 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Alan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_4_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Alan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Alan_location-jungle",
						"type": "story" }
	} 
	var q_5 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Alan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Alan stole a salt shaker and left.", "Alan then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_5_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Alan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Alan stole a salt shaker and left.", "Alan then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Alan_location-jungle",
						"false_rfc":"subject-Alan_location-jungle" }
			} 
	var s_6 = {
		type: "html-keyboard-response",
		stimulus: "Alan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_6_ = {
		type: "html-keyboard-response",
		stimulus: "Alan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Alan_location-jungle",
						"type": "story" }
	} 
	var s_7 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_7_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_8 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Douglas walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_8_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Douglas walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Douglas_location-jungle",
						"type": "story" }
	} 
	var s_9 = {
		type: "html-keyboard-response",
		stimulus: "Douglas was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_9_ = {
		type: "html-keyboard-response",
		stimulus: "Douglas was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Douglas_location-jungle",
						"type": "story" }
	} 
	var q_10 = {
		type: "html-keyboard-response",
		stimulus: "<p> Douglas was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Douglas noticed the barista’s new mustache.", "Before ordering cake, Douglas took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_10_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Douglas was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Douglas noticed the barista’s new mustache.", "Before ordering cake, Douglas took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Douglas_location-jungle",
						"false_rfc":"subject-Douglas_location-jungle" }
			} 
	var s_11 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Douglas noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_11_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Douglas noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Douglas_location-jungle",
						"type": "story" }
	} 
	var q_12 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Douglas noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Douglas stole a salt shaker and left.", "After ordering, Albert stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_12_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Douglas noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Douglas stole a salt shaker and left.", "After ordering, Albert stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Douglas_location-jungle",
						"false_rfc":"subject-Albert_location-deep" }
			} 
	var s_13 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Douglas stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_13_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Douglas stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Douglas_location-jungle",
						"type": "story" }
	} 
	var s_14 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_14_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Douglas_location-jungle",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_15 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jonathan walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_15_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jonathan walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var s_16 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jonathan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_16_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jonathan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var q_17 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jonathan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jonathan noticed the barista’s new mustache.", "Before ordering cake, Jonathan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_17_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jonathan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jonathan noticed the barista’s new mustache.", "Before ordering cake, Jonathan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jonathan_location-jungle",
						"false_rfc":"subject-Jonathan_location-jungle" }
			} 
	var s_18 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jonathan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_18_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jonathan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var q_19 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jonathan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jonathan then sat by the window, and read a book for hours.", "After ordering, Jonathan stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_19_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jonathan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jonathan then sat by the window, and read a book for hours.", "After ordering, Jonathan stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jonathan_location-jungle",
						"false_rfc":"subject-Jonathan_location-jungle" }
			} 
	var s_20 = {
		type: "html-keyboard-response",
		stimulus: "Jonathan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_20_ = {
		type: "html-keyboard-response",
		stimulus: "Jonathan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var s_21 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_21_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_22 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Dorothy walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_22_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Dorothy walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 
	var s_23 = {
		type: "html-keyboard-response",
		stimulus: "Dorothy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_23_ = {
		type: "html-keyboard-response",
		stimulus: "Dorothy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 
	var q_24 = {
		type: "html-keyboard-response",
		stimulus: "<p> Dorothy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Dorothy noticed the barista’s new mustache.", "While ordering tea, Joshua noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_24_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Dorothy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Dorothy noticed the barista’s new mustache.", "While ordering tea, Joshua noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Dorothy_location-jungle",
						"false_rfc":"subject-Joshua_location-deep" }
			} 
	var s_25 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Dorothy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_25_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Dorothy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 
	var q_26 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Dorothy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Dorothy then sat by the window, and read a book for hours.", "After ordering, Dorothy stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_26_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Dorothy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Dorothy then sat by the window, and read a book for hours.", "After ordering, Dorothy stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Dorothy_location-jungle",
						"false_rfc":"subject-Dorothy_location-jungle" }
			} 
	var s_27 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Dorothy stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_27_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Dorothy stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 
	var s_28 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_28_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_29 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Gloria walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_29_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Gloria walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Gloria_location-jungle",
						"type": "story" }
	} 
	var s_30 = {
		type: "html-keyboard-response",
		stimulus: "Today, Gloria waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_30_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Gloria waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Gloria_location-jungle",
						"type": "story" }
	} 
	var q_31 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Gloria waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Gloria took a quarter from the tip jar.", "While ordering tea, Gloria noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_31_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Gloria waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Gloria took a quarter from the tip jar.", "While ordering tea, Gloria noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Gloria_location-jungle",
						"false_rfc":"subject-Gloria_location-jungle" }
			} 
	var s_32 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Gloria took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_32_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Gloria took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Gloria_location-jungle",
						"type": "story" }
	} 
	var q_33 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Gloria took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Gloria then sat by the window, and read a book for hours.", "John then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_33_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Gloria took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Gloria then sat by the window, and read a book for hours.", "John then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Gloria_location-jungle",
						"false_rfc":"subject-John_location-deep" }
			} 
	var s_34 = {
		type: "html-keyboard-response",
		stimulus: "Gloria then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_34_ = {
		type: "html-keyboard-response",
		stimulus: "Gloria then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Gloria_location-jungle",
						"type": "story" }
	} 
	var s_35 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_35_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Gloria_location-jungle",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_36 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Amy walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_36_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Amy walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 
	var s_37 = {
		type: "html-keyboard-response",
		stimulus: "Amy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_37_ = {
		type: "html-keyboard-response",
		stimulus: "Amy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 
	var q_38 = {
		type: "html-keyboard-response",
		stimulus: "<p> Amy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Amy noticed the barista’s new mustache.", "Before ordering cake, Amy took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_38_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Amy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Amy noticed the barista’s new mustache.", "Before ordering cake, Amy took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Amy_location-jungle",
						"false_rfc":"subject-Amy_location-jungle" }
			} 
	var s_39 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Amy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_39_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Amy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 
	var q_40 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Amy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Amy stole a salt shaker and left.", "Amy then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_40_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Amy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Amy stole a salt shaker and left.", "Amy then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Amy_location-jungle",
						"false_rfc":"subject-Amy_location-jungle" }
			} 
	var s_41 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amy stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_41_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amy stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 
	var s_42 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_42_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_43 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Louis walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_43_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Louis walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Louis_location-jungle",
						"type": "story" }
	} 
	var s_44 = {
		type: "html-keyboard-response",
		stimulus: "Today, Louis waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_44_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Louis waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Louis_location-jungle",
						"type": "story" }
	} 
	var q_45 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Louis waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Louis noticed the barista’s new mustache.", "Before ordering cake, Louis took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_45_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Louis waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Louis noticed the barista’s new mustache.", "Before ordering cake, Louis took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Louis_location-jungle",
						"false_rfc":"subject-Louis_location-jungle" }
			} 
	var s_46 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Louis took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_46_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Louis took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Louis_location-jungle",
						"type": "story" }
	} 
	var q_47 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Louis took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Louis then sat by the window, and read a book for hours.", "After ordering, Louis stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_47_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Louis took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Louis then sat by the window, and read a book for hours.", "After ordering, Louis stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Louis_location-jungle",
						"false_rfc":"subject-Louis_location-jungle" }
			} 
	var s_48 = {
		type: "html-keyboard-response",
		stimulus: "Louis then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_48_ = {
		type: "html-keyboard-response",
		stimulus: "Louis then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Louis_location-jungle",
						"type": "story" }
	} 
	var s_49 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_49_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Louis_location-jungle",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_50 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jose walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_50_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jose walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var s_51 = {
		type: "html-keyboard-response",
		stimulus: "Jose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_51_ = {
		type: "html-keyboard-response",
		stimulus: "Jose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var q_52 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jose noticed the barista’s new mustache.", "Before ordering cake, Jose took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_52_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jose noticed the barista’s new mustache.", "Before ordering cake, Jose took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jose_location-jungle",
						"false_rfc":"subject-Jose_location-jungle" }
			} 
	var s_53 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jose noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_53_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jose noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jose noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jose stole a salt shaker and left.", "After ordering, Nicole stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_54_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jose noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jose stole a salt shaker and left.", "After ordering, Nicole stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jose_location-jungle",
						"false_rfc":"subject-Nicole_location-jungle" }
			} 
	var s_55 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jose stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_55_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jose stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var s_56 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_56_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_57 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Victoria walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_57_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Victoria walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Victoria_location-jungle",
						"type": "story" }
	} 
	var s_58 = {
		type: "html-keyboard-response",
		stimulus: "Victoria was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_58_ = {
		type: "html-keyboard-response",
		stimulus: "Victoria was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Victoria_location-jungle",
						"type": "story" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> Victoria was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Victoria noticed the barista’s new mustache.", "Before ordering cake, Victoria took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_59_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Victoria was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Victoria noticed the barista’s new mustache.", "Before ordering cake, Victoria took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Victoria_location-jungle",
						"false_rfc":"subject-Victoria_location-jungle" }
			} 
	var s_60 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Victoria noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_60_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Victoria noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Victoria_location-jungle",
						"type": "story" }
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Victoria noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Victoria stole a salt shaker and left.", "After ordering, Charles stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_61_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Victoria noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Victoria stole a salt shaker and left.", "After ordering, Charles stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Victoria_location-jungle",
						"false_rfc":"subject-Charles_location-deep" }
			} 
	var s_62 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Victoria stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_62_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Victoria stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Victoria_location-jungle",
						"type": "story" }
	} 
	var s_63 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_63_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Victoria_location-jungle",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_64 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Stephanie walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_64_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Stephanie walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 
	var s_65 = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephanie waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_65_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephanie waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 
	var q_66 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephanie waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Stephanie took a quarter from the tip jar.", "While ordering tea, Stephanie noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_66_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephanie waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Stephanie took a quarter from the tip jar.", "While ordering tea, Stephanie noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Stephanie_location-jungle",
						"false_rfc":"subject-Stephanie_location-jungle" }
			} 
	var s_67 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Stephanie took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_67_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Stephanie took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Stephanie took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Stephanie then sat by the window, and read a book for hours.", "After ordering, Stephanie stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_68_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Stephanie took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Stephanie then sat by the window, and read a book for hours.", "After ordering, Stephanie stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Stephanie_location-jungle",
						"false_rfc":"subject-Stephanie_location-jungle" }
			} 
	var s_69 = {
		type: "html-keyboard-response",
		stimulus: "Stephanie then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_69_ = {
		type: "html-keyboard-response",
		stimulus: "Stephanie then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 
	var s_70 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_70_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_71 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Roger walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_71_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Roger walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Roger_location-jungle",
						"type": "story" }
	} 
	var s_72 = {
		type: "html-keyboard-response",
		stimulus: "Roger was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_72_ = {
		type: "html-keyboard-response",
		stimulus: "Roger was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Roger_location-jungle",
						"type": "story" }
	} 
	var q_73 = {
		type: "html-keyboard-response",
		stimulus: "<p> Roger was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Roger took a quarter from the tip jar.", "While ordering tea, Roger noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_73_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Roger was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Roger took a quarter from the tip jar.", "While ordering tea, Roger noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Roger_location-jungle",
						"false_rfc":"subject-Roger_location-jungle" }
			} 
	var s_74 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Roger noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_74_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Roger noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Roger_location-jungle",
						"type": "story" }
	} 
	var q_75 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Roger noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Roger then sat by the window, and read a book for hours.", "After ordering, Roger stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_75_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Roger noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Roger then sat by the window, and read a book for hours.", "After ordering, Roger stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Roger_location-jungle",
						"false_rfc":"subject-Roger_location-jungle" }
			} 
	var s_76 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Roger stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_76_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Roger stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Roger_location-jungle",
						"type": "story" }
	} 
	var s_77 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_77_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Roger_location-jungle",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_78 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Ruth walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_78_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Ruth walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 
	var s_79 = {
		type: "html-keyboard-response",
		stimulus: "Ruth was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_79_ = {
		type: "html-keyboard-response",
		stimulus: "Ruth was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> Ruth was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ruth noticed the barista’s new mustache.", "Before ordering cake, Ruth took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_80_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Ruth was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ruth noticed the barista’s new mustache.", "Before ordering cake, Ruth took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Ruth_location-jungle",
						"false_rfc":"subject-Ruth_location-jungle" }
			} 
	var s_81 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Ruth noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_81_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Ruth noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Ruth noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ruth stole a salt shaker and left.", "Ruth then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_82_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Ruth noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ruth stole a salt shaker and left.", "Ruth then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Ruth_location-jungle",
						"false_rfc":"subject-Ruth_location-jungle" }
			} 
	var s_83 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ruth stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_83_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ruth stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 
	var s_84 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_84_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_85 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Emma walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_85_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Emma walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 
	var s_86 = {
		type: "html-keyboard-response",
		stimulus: "Emma was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_86_ = {
		type: "html-keyboard-response",
		stimulus: "Emma was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> Emma was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emma noticed the barista’s new mustache.", "Before ordering cake, Emma took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_87_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Emma was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emma noticed the barista’s new mustache.", "Before ordering cake, Emma took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Emma_location-jungle",
						"false_rfc":"subject-Emma_location-jungle" }
			} 
	var s_88 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emma noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_88_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emma noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 
	var q_89 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emma noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Emma stole a salt shaker and left.", "Emma then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_89_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emma noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Emma stole a salt shaker and left.", "Emma then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Emma_location-jungle",
						"false_rfc":"subject-Emma_location-jungle" }
			} 
	var s_90 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Emma stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_90_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Emma stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 
	var s_91 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_91_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_92 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Andrea walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_92_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Andrea walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Andrea_location-jungle",
						"type": "story" }
	} 
	var s_93 = {
		type: "html-keyboard-response",
		stimulus: "Andrea was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_93_ = {
		type: "html-keyboard-response",
		stimulus: "Andrea was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Andrea_location-jungle",
						"type": "story" }
	} 
	var q_94 = {
		type: "html-keyboard-response",
		stimulus: "<p> Andrea was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Andrea noticed the barista’s new mustache.", "While ordering tea, Arthur noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_94_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Andrea was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Andrea noticed the barista’s new mustache.", "While ordering tea, Arthur noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Andrea_location-jungle",
						"false_rfc":"subject-Arthur_location-deep" }
			} 
	var s_95 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Andrea noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_95_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Andrea noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Andrea_location-jungle",
						"type": "story" }
	} 
	var q_96 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Andrea noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Andrea stole a salt shaker and left.", "Andrea then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_96_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Andrea noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Andrea stole a salt shaker and left.", "Andrea then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Andrea_location-jungle",
						"false_rfc":"subject-Andrea_location-jungle" }
			} 
	var s_97 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Andrea stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_97_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Andrea stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Andrea_location-jungle",
						"type": "story" }
	} 
	var s_98 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_98_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Andrea_location-jungle",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_99 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Gregory walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_99_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Gregory walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Gregory_location-jungle",
						"type": "story" }
	} 
	var s_100 = {
		type: "html-keyboard-response",
		stimulus: "Today, Gregory waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_100_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Gregory waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Gregory_location-jungle",
						"type": "story" }
	} 
	var q_101 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Gregory waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Gregory took a quarter from the tip jar.", "Before ordering cake, Janet took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_101_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Gregory waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Gregory took a quarter from the tip jar.", "Before ordering cake, Janet took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Gregory_location-jungle",
						"false_rfc":"subject-Janet_location-deep" }
			} 
	var s_102 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Gregory took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_102_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Gregory took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Gregory_location-jungle",
						"type": "story" }
	} 
	var q_103 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Gregory took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Gregory stole a salt shaker and left.", "Gregory then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_103_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Gregory took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Gregory stole a salt shaker and left.", "Gregory then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Gregory_location-jungle",
						"false_rfc":"subject-Gregory_location-jungle" }
			} 
	var s_104 = {
		type: "html-keyboard-response",
		stimulus: "Gregory then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_104_ = {
		type: "html-keyboard-response",
		stimulus: "Gregory then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Gregory_location-jungle",
						"type": "story" }
	} 
	var s_105 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_105_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Gregory_location-jungle",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_106 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Ronald walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_106_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Ronald walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ronald_location-jungle",
						"type": "story" }
	} 
	var s_107 = {
		type: "html-keyboard-response",
		stimulus: "Ronald was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_107_ = {
		type: "html-keyboard-response",
		stimulus: "Ronald was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Ronald_location-jungle",
						"type": "story" }
	} 
	var q_108 = {
		type: "html-keyboard-response",
		stimulus: "<p> Ronald was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ronald noticed the barista’s new mustache.", "While ordering tea, Julia noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_108_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Ronald was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ronald noticed the barista’s new mustache.", "While ordering tea, Julia noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Ronald_location-jungle",
						"false_rfc":"subject-Julia_location-deep" }
			} 
	var s_109 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Ronald noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_109_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Ronald noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Ronald_location-jungle",
						"type": "story" }
	} 
	var q_110 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Ronald noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Ronald then sat by the window, and read a book for hours.", "After ordering, Ronald stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_110_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Ronald noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Ronald then sat by the window, and read a book for hours.", "After ordering, Ronald stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Ronald_location-jungle",
						"false_rfc":"subject-Ronald_location-jungle" }
			} 
	var s_111 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ronald stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_111_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ronald stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Ronald_location-jungle",
						"type": "story" }
	} 
	var s_112 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_112_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ronald_location-jungle",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_113 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Sharon walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_113_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Sharon walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sharon_location-jungle",
						"type": "story" }
	} 
	var s_114 = {
		type: "html-keyboard-response",
		stimulus: "Sharon was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_114_ = {
		type: "html-keyboard-response",
		stimulus: "Sharon was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Sharon_location-jungle",
						"type": "story" }
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> Sharon was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Sharon noticed the barista’s new mustache.", "Before ordering cake, Sharon took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_115_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Sharon was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Sharon noticed the barista’s new mustache.", "Before ordering cake, Sharon took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Sharon_location-jungle",
						"false_rfc":"subject-Sharon_location-jungle" }
			} 
	var s_116 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sharon noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_116_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sharon noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Sharon_location-jungle",
						"type": "story" }
	} 
	var q_117 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sharon noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Stephen stole a salt shaker and left.", "After ordering, Sharon stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_117_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sharon noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Stephen stole a salt shaker and left.", "After ordering, Sharon stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Sharon_location-jungle",
						"false_rfc":"subject-Stephen_location-jungle" }
			} 
	var s_118 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Sharon stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_118_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Sharon stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Sharon_location-jungle",
						"type": "story" }
	} 
	var s_119 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_119_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sharon_location-jungle",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_120 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Henry walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_120_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Henry walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Henry_location-jungle",
						"type": "story" }
	} 
	var s_121 = {
		type: "html-keyboard-response",
		stimulus: "Today, Henry waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_121_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Henry waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Henry_location-jungle",
						"type": "story" }
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Henry waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Stephanie took a quarter from the tip jar.", "Before ordering cake, Henry took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_122_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Henry waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Stephanie took a quarter from the tip jar.", "Before ordering cake, Henry took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Henry_location-jungle",
						"false_rfc":"subject-Stephanie_location-deep" }
			} 
	var s_123 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Henry took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_123_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Henry took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Henry_location-jungle",
						"type": "story" }
	} 
	var q_124 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Henry took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Henry then sat by the window, and read a book for hours.", "After ordering, Henry stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_124_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Henry took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Henry then sat by the window, and read a book for hours.", "After ordering, Henry stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Henry_location-jungle",
						"false_rfc":"subject-Henry_location-jungle" }
			} 
	var s_125 = {
		type: "html-keyboard-response",
		stimulus: "Henry then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_125_ = {
		type: "html-keyboard-response",
		stimulus: "Henry then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Henry_location-jungle",
						"type": "story" }
	} 
	var s_126 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_126_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Henry_location-jungle",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_127 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Katherine walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_127_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Katherine walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Katherine_location-jungle",
						"type": "story" }
	} 
	var s_128 = {
		type: "html-keyboard-response",
		stimulus: "Today, Katherine waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_128_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Katherine waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Katherine_location-jungle",
						"type": "story" }
	} 
	var q_129 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Katherine waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Katherine noticed the barista’s new mustache.", "Before ordering cake, Katherine took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_129_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Katherine waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Katherine noticed the barista’s new mustache.", "Before ordering cake, Katherine took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Katherine_location-jungle",
						"false_rfc":"subject-Katherine_location-jungle" }
			} 
	var s_130 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Katherine took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_130_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Katherine took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Katherine_location-jungle",
						"type": "story" }
	} 
	var q_131 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Katherine took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Timothy then sat by the window, and read a book for hours.", "Katherine then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_131_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Katherine took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Timothy then sat by the window, and read a book for hours.", "Katherine then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Katherine_location-jungle",
						"false_rfc":"subject-Timothy_location-jungle" }
			} 
	var s_132 = {
		type: "html-keyboard-response",
		stimulus: "Katherine then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_132_ = {
		type: "html-keyboard-response",
		stimulus: "Katherine then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Katherine_location-jungle",
						"type": "story" }
	} 
	var s_133 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_133_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Katherine_location-jungle",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_134 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jesse walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_134_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jesse walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 
	var s_135 = {
		type: "html-keyboard-response",
		stimulus: "Jesse was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_135_ = {
		type: "html-keyboard-response",
		stimulus: "Jesse was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 
	var q_136 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jesse was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Louis noticed the barista’s new mustache.", "While ordering tea, Jesse noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_136_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jesse was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Louis noticed the barista’s new mustache.", "While ordering tea, Jesse noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jesse_location-jungle",
						"false_rfc":"subject-Louis_location-jungle" }
			} 
	var s_137 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jesse noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_137_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jesse noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 
	var q_138 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jesse noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jesse then sat by the window, and read a book for hours.", "After ordering, Jesse stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_138_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jesse noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jesse then sat by the window, and read a book for hours.", "After ordering, Jesse stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jesse_location-jungle",
						"false_rfc":"subject-Jesse_location-jungle" }
			} 
	var s_139 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jesse stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_139_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jesse stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 
	var s_140 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_140_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_141 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Virginia walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_141_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Virginia walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Virginia_location-jungle",
						"type": "story" }
	} 
	var s_142 = {
		type: "html-keyboard-response",
		stimulus: "Virginia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_142_ = {
		type: "html-keyboard-response",
		stimulus: "Virginia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Virginia_location-jungle",
						"type": "story" }
	} 
	var q_143 = {
		type: "html-keyboard-response",
		stimulus: "<p> Virginia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Virginia noticed the barista’s new mustache.", "Before ordering cake, Virginia took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_143_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Virginia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Virginia noticed the barista’s new mustache.", "Before ordering cake, Virginia took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Virginia_location-jungle",
						"false_rfc":"subject-Virginia_location-jungle" }
			} 
	var s_144 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Virginia noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_144_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Virginia noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Virginia_location-jungle",
						"type": "story" }
	} 
	var q_145 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Virginia noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Virginia stole a salt shaker and left.", "Virginia then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_145_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Virginia noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Virginia stole a salt shaker and left.", "Virginia then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Virginia_location-jungle",
						"false_rfc":"subject-Virginia_location-jungle" }
			} 
	var s_146 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Virginia stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_146_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Virginia stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Virginia_location-jungle",
						"type": "story" }
	} 
	var s_147 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_147_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Virginia_location-jungle",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_148 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Benjamin walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_148_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Benjamin walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 
	var s_149 = {
		type: "html-keyboard-response",
		stimulus: "Today, Benjamin waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_149_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Benjamin waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 
	var q_150 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Benjamin waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Roger took a quarter from the tip jar.", "Before ordering cake, Benjamin took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_150_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Benjamin waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Roger took a quarter from the tip jar.", "Before ordering cake, Benjamin took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Benjamin_location-jungle",
						"false_rfc":"subject-Roger_location-deep" }
			} 
	var s_151 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Benjamin took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_151_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Benjamin took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Benjamin took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Benjamin stole a salt shaker and left.", "Benjamin then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_152_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Benjamin took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Benjamin stole a salt shaker and left.", "Benjamin then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Benjamin_location-jungle",
						"false_rfc":"subject-Benjamin_location-jungle" }
			} 
	var s_153 = {
		type: "html-keyboard-response",
		stimulus: "Benjamin then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_153_ = {
		type: "html-keyboard-response",
		stimulus: "Benjamin then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 
	var s_154 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_154_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_155 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Emma walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_155_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Emma walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 
	var s_156 = {
		type: "html-keyboard-response",
		stimulus: "Emma was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_156_ = {
		type: "html-keyboard-response",
		stimulus: "Emma was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 
	var q_157 = {
		type: "html-keyboard-response",
		stimulus: "<p> Emma was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emma noticed the barista’s new mustache.", "Before ordering cake, Emma took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_157_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Emma was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emma noticed the barista’s new mustache.", "Before ordering cake, Emma took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Emma_location-jungle",
						"false_rfc":"subject-Emma_location-jungle" }
			} 
	var s_158 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emma noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_158_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emma noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 
	var q_159 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emma noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Emma then sat by the window, and read a book for hours.", "After ordering, Emma stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_159_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emma noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Emma then sat by the window, and read a book for hours.", "After ordering, Emma stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Emma_location-jungle",
						"false_rfc":"subject-Emma_location-jungle" }
			} 
	var s_160 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Emma stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_160_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Emma stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 
	var s_161 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_161_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Emma_location-jungle",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_162 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Russell walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_162_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Russell walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var s_163 = {
		type: "html-keyboard-response",
		stimulus: "Today, Russell waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_163_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Russell waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var q_164 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Russell waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Russell took a quarter from the tip jar.", "While ordering tea, Russell noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_164_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Russell waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Russell took a quarter from the tip jar.", "While ordering tea, Russell noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Russell_location-jungle",
						"false_rfc":"subject-Russell_location-jungle" }
			} 
	var s_165 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Russell took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_165_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Russell took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Russell took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Russell stole a salt shaker and left.", "Russell then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_166_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Russell took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Russell stole a salt shaker and left.", "Russell then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Russell_location-jungle",
						"false_rfc":"subject-Russell_location-jungle" }
			} 
	var s_167 = {
		type: "html-keyboard-response",
		stimulus: "Russell then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_167_ = {
		type: "html-keyboard-response",
		stimulus: "Russell then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 
	var s_168 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_168_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Russell_location-jungle",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_169 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Terry walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_169_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Terry walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var s_170 = {
		type: "html-keyboard-response",
		stimulus: "Terry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_170_ = {
		type: "html-keyboard-response",
		stimulus: "Terry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var q_171 = {
		type: "html-keyboard-response",
		stimulus: "<p> Terry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Joan noticed the barista’s new mustache.", "While ordering tea, Terry noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_171_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Terry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Joan noticed the barista’s new mustache.", "While ordering tea, Terry noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Terry_location-jungle",
						"false_rfc":"subject-Joan_location-jungle" }
			} 
	var s_172 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Terry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_172_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Terry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Terry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Terry stole a salt shaker and left.", "Terry then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_173_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Terry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Terry stole a salt shaker and left.", "Terry then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Terry_location-jungle",
						"false_rfc":"subject-Terry_location-jungle" }
			} 
	var s_174 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Terry stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_174_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Terry stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var s_175 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_175_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_176 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jonathan walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_176_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jonathan walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var s_177 = {
		type: "html-keyboard-response",
		stimulus: "Jonathan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_177_ = {
		type: "html-keyboard-response",
		stimulus: "Jonathan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var q_178 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jonathan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jonathan noticed the barista’s new mustache.", "While ordering tea, Jennifer noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_178_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jonathan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jonathan noticed the barista’s new mustache.", "While ordering tea, Jennifer noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jonathan_location-jungle",
						"false_rfc":"subject-Jennifer_location-jungle" }
			} 
	var s_179 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jonathan noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_179_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jonathan noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var q_180 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jonathan noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jonathan stole a salt shaker and left.", "Jonathan then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_180_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jonathan noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jonathan stole a salt shaker and left.", "Jonathan then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jonathan_location-jungle",
						"false_rfc":"subject-Jonathan_location-jungle" }
			} 
	var s_181 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jonathan stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_181_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jonathan stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 
	var s_182 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_182_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jonathan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_183 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Dylan walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_183_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Dylan walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 
	var s_184 = {
		type: "html-keyboard-response",
		stimulus: "Dylan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_184_ = {
		type: "html-keyboard-response",
		stimulus: "Dylan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 
	var q_185 = {
		type: "html-keyboard-response",
		stimulus: "<p> Dylan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Dylan took a quarter from the tip jar.", "While ordering tea, Dylan noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_185_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Dylan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Dylan took a quarter from the tip jar.", "While ordering tea, Dylan noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Dylan_location-jungle",
						"false_rfc":"subject-Dylan_location-jungle" }
			} 
	var s_186 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Dylan noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_186_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Dylan noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 
	var q_187 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Dylan noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Dylan stole a salt shaker and left.", "Dylan then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_187_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Dylan noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Dylan stole a salt shaker and left.", "Dylan then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Dylan_location-jungle",
						"false_rfc":"subject-Dylan_location-jungle" }
			} 
	var s_188 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Dylan stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_188_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Dylan stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 
	var s_189 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_189_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_190 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Benjamin walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_190_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Benjamin walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 
	var s_191 = {
		type: "html-keyboard-response",
		stimulus: "Benjamin was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_191_ = {
		type: "html-keyboard-response",
		stimulus: "Benjamin was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 
	var q_192 = {
		type: "html-keyboard-response",
		stimulus: "<p> Benjamin was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Benjamin noticed the barista’s new mustache.", "Before ordering cake, Benjamin took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_192_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Benjamin was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Benjamin noticed the barista’s new mustache.", "Before ordering cake, Benjamin took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Benjamin_location-jungle",
						"false_rfc":"subject-Benjamin_location-jungle" }
			} 
	var s_193 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Benjamin noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_193_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Benjamin noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Benjamin noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Benjamin then sat by the window, and read a book for hours.", "After ordering, Benjamin stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_194_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Benjamin noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Benjamin then sat by the window, and read a book for hours.", "After ordering, Benjamin stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Benjamin_location-jungle",
						"false_rfc":"subject-Benjamin_location-jungle" }
			} 
	var s_195 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Benjamin stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_195_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Benjamin stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 
	var s_196 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_196_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Benjamin_location-jungle",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_197 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jesse walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_197_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jesse walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 
	var s_198 = {
		type: "html-keyboard-response",
		stimulus: "Jesse was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_198_ = {
		type: "html-keyboard-response",
		stimulus: "Jesse was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 
	var q_199 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jesse was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jesse noticed the barista’s new mustache.", "Before ordering cake, Jesse took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_199_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jesse was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jesse noticed the barista’s new mustache.", "Before ordering cake, Jesse took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jesse_location-jungle",
						"false_rfc":"subject-Jesse_location-jungle" }
			} 
	var s_200 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jesse noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_200_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jesse noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 
	var q_201 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jesse noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jessica stole a salt shaker and left.", "After ordering, Jesse stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_201_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jesse noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jessica stole a salt shaker and left.", "After ordering, Jesse stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jesse_location-jungle",
						"false_rfc":"subject-Jessica_location-jungle" }
			} 
	var s_202 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jesse stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_202_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jesse stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 
	var s_203 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_203_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jesse_location-jungle",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_204 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, William walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_204_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, William walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-William_location-jungle",
						"type": "story" }
	} 
	var s_205 = {
		type: "html-keyboard-response",
		stimulus: "William was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_205_ = {
		type: "html-keyboard-response",
		stimulus: "William was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-William_location-jungle",
						"type": "story" }
	} 
	var q_206 = {
		type: "html-keyboard-response",
		stimulus: "<p> William was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, William took a quarter from the tip jar.", "While ordering tea, William noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_206_ = {
		type: "html-keyboard-response",
		stimulus: "<p> William was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, William took a quarter from the tip jar.", "While ordering tea, William noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-William_location-jungle",
						"false_rfc":"subject-William_location-jungle" }
			} 
	var s_207 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, William noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_207_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, William noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-William_location-jungle",
						"type": "story" }
	} 
	var q_208 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, William noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, William stole a salt shaker and left.", "William then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_208_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, William noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, William stole a salt shaker and left.", "William then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-William_location-jungle",
						"false_rfc":"subject-William_location-jungle" }
			} 
	var s_209 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, William stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_209_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, William stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-William_location-jungle",
						"type": "story" }
	} 
	var s_210 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_210_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-William_location-jungle",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_211 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Tiffany walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_211_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Tiffany walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 
	var s_212 = {
		type: "html-keyboard-response",
		stimulus: "Tiffany was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_212_ = {
		type: "html-keyboard-response",
		stimulus: "Tiffany was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 
	var q_213 = {
		type: "html-keyboard-response",
		stimulus: "<p> Tiffany was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Tiffany took a quarter from the tip jar.", "While ordering tea, Tiffany noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_213_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Tiffany was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Tiffany took a quarter from the tip jar.", "While ordering tea, Tiffany noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Tiffany_location-jungle",
						"false_rfc":"subject-Tiffany_location-jungle" }
			} 
	var s_214 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Tiffany noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_214_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Tiffany noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 
	var q_215 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Tiffany noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Tiffany then sat by the window, and read a book for hours.", "After ordering, Tiffany stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_215_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Tiffany noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Tiffany then sat by the window, and read a book for hours.", "After ordering, Tiffany stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Tiffany_location-jungle",
						"false_rfc":"subject-Tiffany_location-jungle" }
			} 
	var s_216 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Tiffany stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_216_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Tiffany stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 
	var s_217 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_217_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_218 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Dylan walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_218_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Dylan walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 
	var s_219 = {
		type: "html-keyboard-response",
		stimulus: "Today, Dylan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_219_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Dylan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Dylan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Dylan noticed the barista’s new mustache.", "Before ordering cake, Dylan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_220_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Dylan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Dylan noticed the barista’s new mustache.", "Before ordering cake, Dylan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Dylan_location-jungle",
						"false_rfc":"subject-Dylan_location-jungle" }
			} 
	var s_221 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Dylan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_221_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Dylan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 
	var q_222 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Dylan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Dylan then sat by the window, and read a book for hours.", "After ordering, Dylan stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_222_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Dylan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Dylan then sat by the window, and read a book for hours.", "After ordering, Dylan stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Dylan_location-jungle",
						"false_rfc":"subject-Dylan_location-jungle" }
			} 
	var s_223 = {
		type: "html-keyboard-response",
		stimulus: "Dylan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_223_ = {
		type: "html-keyboard-response",
		stimulus: "Dylan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 
	var s_224 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_224_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Dylan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_225 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Ruth walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_225_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Ruth walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 
	var s_226 = {
		type: "html-keyboard-response",
		stimulus: "Ruth was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_226_ = {
		type: "html-keyboard-response",
		stimulus: "Ruth was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 
	var q_227 = {
		type: "html-keyboard-response",
		stimulus: "<p> Ruth was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ruth noticed the barista’s new mustache.", "Before ordering cake, Ruth took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_227_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Ruth was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ruth noticed the barista’s new mustache.", "Before ordering cake, Ruth took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Ruth_location-jungle",
						"false_rfc":"subject-Ruth_location-jungle" }
			} 
	var s_228 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Ruth noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_228_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Ruth noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 
	var q_229 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Ruth noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ruth stole a salt shaker and left.", "After ordering, Juan stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_229_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Ruth noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ruth stole a salt shaker and left.", "After ordering, Juan stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Ruth_location-jungle",
						"false_rfc":"subject-Juan_location-jungle" }
			} 
	var s_230 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ruth stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_230_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ruth stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 
	var s_231 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_231_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ruth_location-jungle",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_232 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Edward walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_232_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Edward walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 
	var s_233 = {
		type: "html-keyboard-response",
		stimulus: "Today, Edward waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_233_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Edward waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 
	var q_234 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Edward waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Edward took a quarter from the tip jar.", "While ordering tea, Edward noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_234_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Edward waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Edward took a quarter from the tip jar.", "While ordering tea, Edward noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Edward_location-jungle",
						"false_rfc":"subject-Edward_location-jungle" }
			} 
	var s_235 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Edward took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_235_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Edward took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 
	var q_236 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Edward took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Edward then sat by the window, and read a book for hours.", "After ordering, Edward stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_236_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Edward took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Edward then sat by the window, and read a book for hours.", "After ordering, Edward stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Edward_location-jungle",
						"false_rfc":"subject-Edward_location-jungle" }
			} 
	var s_237 = {
		type: "html-keyboard-response",
		stimulus: "Edward then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_237_ = {
		type: "html-keyboard-response",
		stimulus: "Edward then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 
	var s_238 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_238_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_239 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Cheryl walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_239_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Cheryl walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 
	var s_240 = {
		type: "html-keyboard-response",
		stimulus: "Cheryl was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_240_ = {
		type: "html-keyboard-response",
		stimulus: "Cheryl was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 
	var q_241 = {
		type: "html-keyboard-response",
		stimulus: "<p> Cheryl was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Cheryl took a quarter from the tip jar.", "While ordering tea, Cheryl noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_241_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Cheryl was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Cheryl took a quarter from the tip jar.", "While ordering tea, Cheryl noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Cheryl_location-jungle",
						"false_rfc":"subject-Cheryl_location-jungle" }
			} 
	var s_242 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Cheryl noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_242_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Cheryl noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 
	var q_243 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Cheryl noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Cheryl stole a salt shaker and left.", "Cheryl then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_243_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Cheryl noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Cheryl stole a salt shaker and left.", "Cheryl then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Cheryl_location-jungle",
						"false_rfc":"subject-Cheryl_location-jungle" }
			} 
	var s_244 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Cheryl stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_244_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Cheryl stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 
	var s_245 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_245_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_246 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Natalie walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_246_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Natalie walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Natalie_location-jungle",
						"type": "story" }
	} 
	var s_247 = {
		type: "html-keyboard-response",
		stimulus: "Natalie was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_247_ = {
		type: "html-keyboard-response",
		stimulus: "Natalie was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Natalie_location-jungle",
						"type": "story" }
	} 
	var q_248 = {
		type: "html-keyboard-response",
		stimulus: "<p> Natalie was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Natalie noticed the barista’s new mustache.", "Before ordering cake, Natalie took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_248_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Natalie was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Natalie noticed the barista’s new mustache.", "Before ordering cake, Natalie took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Natalie_location-jungle",
						"false_rfc":"subject-Natalie_location-jungle" }
			} 
	var s_249 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Natalie noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_249_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Natalie noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Natalie_location-jungle",
						"type": "story" }
	} 
	var q_250 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Natalie noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Natalie then sat by the window, and read a book for hours.", "After ordering, Natalie stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_250_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Natalie noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Natalie then sat by the window, and read a book for hours.", "After ordering, Natalie stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Natalie_location-jungle",
						"false_rfc":"subject-Natalie_location-jungle" }
			} 
	var s_251 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Natalie stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_251_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Natalie stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Natalie_location-jungle",
						"type": "story" }
	} 
	var s_252 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_252_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Natalie_location-jungle",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_253 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Ralph walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_253_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Ralph walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ralph_location-jungle",
						"type": "story" }
	} 
	var s_254 = {
		type: "html-keyboard-response",
		stimulus: "Today, Ralph waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_254_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Ralph waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Ralph_location-jungle",
						"type": "story" }
	} 
	var q_255 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Ralph waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ralph noticed the barista’s new mustache.", "Before ordering cake, Ralph took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_255_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Ralph waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ralph noticed the barista’s new mustache.", "Before ordering cake, Ralph took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Ralph_location-jungle",
						"false_rfc":"subject-Ralph_location-jungle" }
			} 
	var s_256 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ralph took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_256_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ralph took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Ralph_location-jungle",
						"type": "story" }
	} 
	var q_257 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ralph took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jennifer then sat by the window, and read a book for hours.", "Ralph then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_257_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ralph took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jennifer then sat by the window, and read a book for hours.", "Ralph then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Ralph_location-jungle",
						"false_rfc":"subject-Jennifer_location-deep" }
			} 
	var s_258 = {
		type: "html-keyboard-response",
		stimulus: "Ralph then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_258_ = {
		type: "html-keyboard-response",
		stimulus: "Ralph then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Ralph_location-jungle",
						"type": "story" }
	} 
	var s_259 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_259_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ralph_location-jungle",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_260 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Peter walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_260_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Peter walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Peter_location-jungle",
						"type": "story" }
	} 
	var s_261 = {
		type: "html-keyboard-response",
		stimulus: "Peter was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_261_ = {
		type: "html-keyboard-response",
		stimulus: "Peter was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Peter_location-jungle",
						"type": "story" }
	} 
	var q_262 = {
		type: "html-keyboard-response",
		stimulus: "<p> Peter was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Randy noticed the barista’s new mustache.", "While ordering tea, Peter noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_262_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Peter was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Randy noticed the barista’s new mustache.", "While ordering tea, Peter noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Peter_location-jungle",
						"false_rfc":"subject-Randy_location-jungle" }
			} 
	var s_263 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Peter noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_263_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Peter noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Peter_location-jungle",
						"type": "story" }
	} 
	var q_264 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Peter noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Peter stole a salt shaker and left.", "Peter then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_264_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Peter noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Peter stole a salt shaker and left.", "Peter then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Peter_location-jungle",
						"false_rfc":"subject-Peter_location-jungle" }
			} 
	var s_265 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Peter stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_265_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Peter stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Peter_location-jungle",
						"type": "story" }
	} 
	var s_266 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_266_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Peter_location-jungle",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_267 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Stephen walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_267_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Stephen walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Stephen_location-jungle",
						"type": "story" }
	} 
	var s_268 = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephen waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_268_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephen waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Stephen_location-jungle",
						"type": "story" }
	} 
	var q_269 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Stephen noticed the barista’s new mustache.", "Before ordering cake, Stephen took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_269_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Stephen noticed the barista’s new mustache.", "Before ordering cake, Stephen took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Stephen_location-jungle",
						"false_rfc":"subject-Stephen_location-jungle" }
			} 
	var s_270 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Stephen took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_270_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Stephen took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Stephen_location-jungle",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Stephen took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Stephen stole a salt shaker and left.", "Stephen then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_271_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Stephen took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Stephen stole a salt shaker and left.", "Stephen then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Stephen_location-jungle",
						"false_rfc":"subject-Stephen_location-jungle" }
			} 
	var s_272 = {
		type: "html-keyboard-response",
		stimulus: "Stephen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_272_ = {
		type: "html-keyboard-response",
		stimulus: "Stephen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Stephen_location-jungle",
						"type": "story" }
	} 
	var s_273 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_273_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Stephen_location-jungle",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_274 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Zachary walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_274_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Zachary walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Zachary_location-jungle",
						"type": "story" }
	} 
	var s_275 = {
		type: "html-keyboard-response",
		stimulus: "Zachary was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_275_ = {
		type: "html-keyboard-response",
		stimulus: "Zachary was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Zachary_location-jungle",
						"type": "story" }
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> Zachary was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Zachary took a quarter from the tip jar.", "While ordering tea, Zachary noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_276_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Zachary was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Zachary took a quarter from the tip jar.", "While ordering tea, Zachary noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Zachary_location-jungle",
						"false_rfc":"subject-Zachary_location-jungle" }
			} 
	var s_277 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Zachary noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_277_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Zachary noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Zachary_location-jungle",
						"type": "story" }
	} 
	var q_278 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Zachary noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Zachary stole a salt shaker and left.", "After ordering, Noah stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_278_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Zachary noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Zachary stole a salt shaker and left.", "After ordering, Noah stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Zachary_location-jungle",
						"false_rfc":"subject-Noah_location-jungle" }
			} 
	var s_279 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Zachary stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_279_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Zachary stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Zachary_location-jungle",
						"type": "story" }
	} 
	var s_280 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_280_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Zachary_location-jungle",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_281 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kathleen walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_281_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kathleen walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 
	var s_282 = {
		type: "html-keyboard-response",
		stimulus: "Today, Kathleen waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_282_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Kathleen waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 
	var q_283 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Kathleen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Kathleen noticed the barista’s new mustache.", "Before ordering cake, Kathleen took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_283_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Kathleen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Kathleen noticed the barista’s new mustache.", "Before ordering cake, Kathleen took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Kathleen_location-deep",
						"false_rfc":"subject-Kathleen_location-deep" }
			} 
	var s_284 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Kathleen noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_284_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Kathleen noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 
	var q_285 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Kathleen noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Kathleen stole a salt shaker and left.", "Kathleen then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_285_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Kathleen noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Kathleen stole a salt shaker and left.", "Kathleen then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Kathleen_location-deep",
						"false_rfc":"subject-Kathleen_location-deep" }
			} 
	var s_286 = {
		type: "html-keyboard-response",
		stimulus: "Kathleen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_286_ = {
		type: "html-keyboard-response",
		stimulus: "Kathleen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 
	var s_287 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_287_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_288 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Alexander walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_288_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Alexander walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 
	var s_289 = {
		type: "html-keyboard-response",
		stimulus: "Alexander was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_289_ = {
		type: "html-keyboard-response",
		stimulus: "Alexander was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 
	var q_290 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alexander was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Alexander took a quarter from the tip jar.", "While ordering tea, Alexander noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_290_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alexander was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Alexander took a quarter from the tip jar.", "While ordering tea, Alexander noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Alexander_location-deep",
						"false_rfc":"subject-Alexander_location-deep" }
			} 
	var s_291 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Alexander took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_291_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Alexander took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Alexander took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Alexander then sat by the window, and read a book for hours.", "After ordering, Alexander stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_292_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Alexander took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Alexander then sat by the window, and read a book for hours.", "After ordering, Alexander stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Alexander_location-deep",
						"false_rfc":"subject-Alexander_location-deep" }
			} 
	var s_293 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alexander stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_293_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alexander stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 
	var s_294 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_294_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_295 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Frances walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_295_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Frances walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var s_296 = {
		type: "html-keyboard-response",
		stimulus: "Today, Frances waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_296_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Frances waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var q_297 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Frances waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Frances noticed the barista’s new mustache.", "Before ordering cake, Frances took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_297_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Frances waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Frances noticed the barista’s new mustache.", "Before ordering cake, Frances took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Frances_location-deep",
						"false_rfc":"subject-Frances_location-deep" }
			} 
	var s_298 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Frances noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_298_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Frances noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var q_299 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Frances noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Frances then sat by the window, and read a book for hours.", "After ordering, Frances stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_299_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Frances noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Frances then sat by the window, and read a book for hours.", "After ordering, Frances stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Frances_location-deep",
						"false_rfc":"subject-Frances_location-deep" }
			} 
	var s_300 = {
		type: "html-keyboard-response",
		stimulus: "Frances then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_300_ = {
		type: "html-keyboard-response",
		stimulus: "Frances then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var s_301 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_301_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_302 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Alexander walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_302_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Alexander walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 
	var s_303 = {
		type: "html-keyboard-response",
		stimulus: "Alexander was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_303_ = {
		type: "html-keyboard-response",
		stimulus: "Alexander was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 
	var q_304 = {
		type: "html-keyboard-response",
		stimulus: "<p> Alexander was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Alexander took a quarter from the tip jar.", "Before ordering cake, Helen took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_304_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Alexander was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Alexander took a quarter from the tip jar.", "Before ordering cake, Helen took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Alexander_location-deep",
						"false_rfc":"subject-Helen_location-jungle" }
			} 
	var s_305 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Alexander took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_305_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Alexander took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 
	var q_306 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Alexander took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Alexander stole a salt shaker and left.", "Alexander then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_306_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Alexander took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Alexander stole a salt shaker and left.", "Alexander then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Alexander_location-deep",
						"false_rfc":"subject-Alexander_location-deep" }
			} 
	var s_307 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alexander stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_307_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Alexander stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 
	var s_308 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_308_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Alexander_location-deep",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_309 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jonathan walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_309_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jonathan walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jonathan_location-deep",
						"type": "story" }
	} 
	var s_310 = {
		type: "html-keyboard-response",
		stimulus: "Jonathan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_310_ = {
		type: "html-keyboard-response",
		stimulus: "Jonathan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jonathan_location-deep",
						"type": "story" }
	} 
	var q_311 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jonathan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jonathan noticed the barista’s new mustache.", "Before ordering cake, Jonathan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_311_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jonathan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jonathan noticed the barista’s new mustache.", "Before ordering cake, Jonathan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jonathan_location-deep",
						"false_rfc":"subject-Jonathan_location-deep" }
			} 
	var s_312 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jonathan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_312_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jonathan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jonathan_location-deep",
						"type": "story" }
	} 
	var q_313 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jonathan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jonathan stole a salt shaker and left.", "Jonathan then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_313_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jonathan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jonathan stole a salt shaker and left.", "Jonathan then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jonathan_location-deep",
						"false_rfc":"subject-Jonathan_location-deep" }
			} 
	var s_314 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jonathan stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_314_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jonathan stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jonathan_location-deep",
						"type": "story" }
	} 
	var s_315 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_315_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jonathan_location-deep",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_316 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Frances walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_316_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Frances walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var s_317 = {
		type: "html-keyboard-response",
		stimulus: "Frances was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_317_ = {
		type: "html-keyboard-response",
		stimulus: "Frances was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var q_318 = {
		type: "html-keyboard-response",
		stimulus: "<p> Frances was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Frances took a quarter from the tip jar.", "While ordering tea, Frances noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_318_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Frances was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Frances took a quarter from the tip jar.", "While ordering tea, Frances noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Frances_location-deep",
						"false_rfc":"subject-Frances_location-deep" }
			} 
	var s_319 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Frances took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_319_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Frances took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var q_320 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Frances took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Frances then sat by the window, and read a book for hours.", "After ordering, Frances stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_320_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Frances took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Frances then sat by the window, and read a book for hours.", "After ordering, Frances stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Frances_location-deep",
						"false_rfc":"subject-Frances_location-deep" }
			} 
	var s_321 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Frances stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_321_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Frances stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 
	var s_322 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_322_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Frances_location-deep",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_323 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Hannah walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_323_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Hannah walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Hannah_location-deep",
						"type": "story" }
	} 
	var s_324 = {
		type: "html-keyboard-response",
		stimulus: "Hannah was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_324_ = {
		type: "html-keyboard-response",
		stimulus: "Hannah was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Hannah_location-deep",
						"type": "story" }
	} 
	var q_325 = {
		type: "html-keyboard-response",
		stimulus: "<p> Hannah was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Hannah noticed the barista’s new mustache.", "Before ordering cake, Hannah took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_325_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Hannah was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Hannah noticed the barista’s new mustache.", "Before ordering cake, Hannah took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Hannah_location-deep",
						"false_rfc":"subject-Hannah_location-deep" }
			} 
	var s_326 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Hannah took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_326_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Hannah took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Hannah_location-deep",
						"type": "story" }
	} 
	var q_327 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Hannah took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Hannah then sat by the window, and read a book for hours.", "After ordering, Hannah stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_327_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Hannah took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Hannah then sat by the window, and read a book for hours.", "After ordering, Hannah stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Hannah_location-deep",
						"false_rfc":"subject-Hannah_location-deep" }
			} 
	var s_328 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Hannah stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_328_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Hannah stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Hannah_location-deep",
						"type": "story" }
	} 
	var s_329 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_329_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Hannah_location-deep",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_330 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Rose walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_330_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Rose walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 
	var s_331 = {
		type: "html-keyboard-response",
		stimulus: "Rose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_331_ = {
		type: "html-keyboard-response",
		stimulus: "Rose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 
	var q_332 = {
		type: "html-keyboard-response",
		stimulus: "<p> Rose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Rose noticed the barista’s new mustache.", "Before ordering cake, Rose took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_332_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Rose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Rose noticed the barista’s new mustache.", "Before ordering cake, Rose took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Rose_location-deep",
						"false_rfc":"subject-Rose_location-deep" }
			} 
	var s_333 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Rose took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_333_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Rose took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 
	var q_334 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Rose took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Brenda stole a salt shaker and left.", "After ordering, Rose stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_334_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Rose took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Brenda stole a salt shaker and left.", "After ordering, Rose stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Rose_location-deep",
						"false_rfc":"subject-Brenda_location-deep" }
			} 
	var s_335 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Rose stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_335_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Rose stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 
	var s_336 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_336_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_337 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Harold walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_337_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Harold walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Harold_location-deep",
						"type": "story" }
	} 
	var s_338 = {
		type: "html-keyboard-response",
		stimulus: "Today, Harold waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_338_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Harold waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Harold_location-deep",
						"type": "story" }
	} 
	var q_339 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Harold waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Harold noticed the barista’s new mustache.", "Before ordering cake, Harold took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_339_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Harold waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Harold noticed the barista’s new mustache.", "Before ordering cake, Harold took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Harold_location-deep",
						"false_rfc":"subject-Harold_location-deep" }
			} 
	var s_340 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Harold noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_340_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Harold noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Harold_location-deep",
						"type": "story" }
	} 
	var q_341 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Harold noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Rebecca then sat by the window, and read a book for hours.", "Harold then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_341_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Harold noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Rebecca then sat by the window, and read a book for hours.", "Harold then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Harold_location-deep",
						"false_rfc":"subject-Rebecca_location-deep" }
			} 
	var s_342 = {
		type: "html-keyboard-response",
		stimulus: "Harold then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_342_ = {
		type: "html-keyboard-response",
		stimulus: "Harold then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Harold_location-deep",
						"type": "story" }
	} 
	var s_343 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_343_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Harold_location-deep",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_344 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Donna walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_344_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Donna walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Donna_location-deep",
						"type": "story" }
	} 
	var s_345 = {
		type: "html-keyboard-response",
		stimulus: "Today, Donna waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_345_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Donna waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Donna_location-deep",
						"type": "story" }
	} 
	var q_346 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Donna waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Donna took a quarter from the tip jar.", "While ordering tea, Donna noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_346_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Donna waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Donna took a quarter from the tip jar.", "While ordering tea, Donna noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Donna_location-deep",
						"false_rfc":"subject-Donna_location-deep" }
			} 
	var s_347 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Donna noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_347_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Donna noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Donna_location-deep",
						"type": "story" }
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Donna noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Donna stole a salt shaker and left.", "Donna then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_348_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Donna noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Donna stole a salt shaker and left.", "Donna then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Donna_location-deep",
						"false_rfc":"subject-Donna_location-deep" }
			} 
	var s_349 = {
		type: "html-keyboard-response",
		stimulus: "Donna then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_349_ = {
		type: "html-keyboard-response",
		stimulus: "Donna then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Donna_location-deep",
						"type": "story" }
	} 
	var s_350 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_350_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Donna_location-deep",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_351 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Ruth walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_351_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Ruth walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ruth_location-deep",
						"type": "story" }
	} 
	var s_352 = {
		type: "html-keyboard-response",
		stimulus: "Ruth was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_352_ = {
		type: "html-keyboard-response",
		stimulus: "Ruth was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Ruth_location-deep",
						"type": "story" }
	} 
	var q_353 = {
		type: "html-keyboard-response",
		stimulus: "<p> Ruth was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Ruth took a quarter from the tip jar.", "While ordering tea, Ruth noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_353_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Ruth was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Ruth took a quarter from the tip jar.", "While ordering tea, Ruth noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Ruth_location-deep",
						"false_rfc":"subject-Ruth_location-deep" }
			} 
	var s_354 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ruth took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_354_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ruth took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Ruth_location-deep",
						"type": "story" }
	} 
	var q_355 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ruth took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Kimberly stole a salt shaker and left.", "After ordering, Ruth stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_355_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ruth took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Kimberly stole a salt shaker and left.", "After ordering, Ruth stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Ruth_location-deep",
						"false_rfc":"subject-Kimberly_location-jungle" }
			} 
	var s_356 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ruth stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_356_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ruth stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Ruth_location-deep",
						"type": "story" }
	} 
	var s_357 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_357_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ruth_location-deep",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_358 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sara walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_358_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sara walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sara_location-deep",
						"type": "story" }
	} 
	var s_359 = {
		type: "html-keyboard-response",
		stimulus: "Today, Sara waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_359_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Sara waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Sara_location-deep",
						"type": "story" }
	} 
	var q_360 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sara waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Brian noticed the barista’s new mustache.", "While ordering tea, Sara noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_360_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sara waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Brian noticed the barista’s new mustache.", "While ordering tea, Sara noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Sara_location-deep",
						"false_rfc":"subject-Brian_location-deep" }
			} 
	var s_361 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sara noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_361_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sara noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Sara_location-deep",
						"type": "story" }
	} 
	var q_362 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sara noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sara then sat by the window, and read a book for hours.", "After ordering, Sara stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_362_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sara noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sara then sat by the window, and read a book for hours.", "After ordering, Sara stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Sara_location-deep",
						"false_rfc":"subject-Sara_location-deep" }
			} 
	var s_363 = {
		type: "html-keyboard-response",
		stimulus: "Sara then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_363_ = {
		type: "html-keyboard-response",
		stimulus: "Sara then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Sara_location-deep",
						"type": "story" }
	} 
	var s_364 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_364_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sara_location-deep",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_365 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jacqueline walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_365_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jacqueline walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jacqueline_location-deep",
						"type": "story" }
	} 
	var s_366 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jacqueline waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_366_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jacqueline waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jacqueline_location-deep",
						"type": "story" }
	} 
	var q_367 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jacqueline waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacqueline noticed the barista’s new mustache.", "Before ordering cake, Jacqueline took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_367_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jacqueline waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacqueline noticed the barista’s new mustache.", "Before ordering cake, Jacqueline took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jacqueline_location-deep",
						"false_rfc":"subject-Jacqueline_location-deep" }
			} 
	var s_368 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacqueline noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_368_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacqueline noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jacqueline_location-deep",
						"type": "story" }
	} 
	var q_369 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacqueline noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Randy then sat by the window, and read a book for hours.", "Jacqueline then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_369_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacqueline noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Randy then sat by the window, and read a book for hours.", "Jacqueline then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jacqueline_location-deep",
						"false_rfc":"subject-Randy_location-jungle" }
			} 
	var s_370 = {
		type: "html-keyboard-response",
		stimulus: "Jacqueline then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_370_ = {
		type: "html-keyboard-response",
		stimulus: "Jacqueline then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jacqueline_location-deep",
						"type": "story" }
	} 
	var s_371 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_371_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jacqueline_location-deep",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_372 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Edward walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_372_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Edward walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Edward_location-deep",
						"type": "story" }
	} 
	var s_373 = {
		type: "html-keyboard-response",
		stimulus: "Today, Edward waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_373_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Edward waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Edward_location-deep",
						"type": "story" }
	} 
	var q_374 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Edward waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Edward noticed the barista’s new mustache.", "Before ordering cake, Edward took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_374_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Edward waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Edward noticed the barista’s new mustache.", "Before ordering cake, Edward took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Edward_location-deep",
						"false_rfc":"subject-Edward_location-deep" }
			} 
	var s_375 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Edward noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_375_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Edward noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Edward_location-deep",
						"type": "story" }
	} 
	var q_376 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Edward noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Edward then sat by the window, and read a book for hours.", "Jack then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_376_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Edward noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Edward then sat by the window, and read a book for hours.", "Jack then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Edward_location-deep",
						"false_rfc":"subject-Jack_location-deep" }
			} 
	var s_377 = {
		type: "html-keyboard-response",
		stimulus: "Edward then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_377_ = {
		type: "html-keyboard-response",
		stimulus: "Edward then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Edward_location-deep",
						"type": "story" }
	} 
	var s_378 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_378_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Edward_location-deep",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_379 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Gregory walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_379_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Gregory walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Gregory_location-deep",
						"type": "story" }
	} 
	var s_380 = {
		type: "html-keyboard-response",
		stimulus: "Gregory was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_380_ = {
		type: "html-keyboard-response",
		stimulus: "Gregory was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Gregory_location-deep",
						"type": "story" }
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> Gregory was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Gregory took a quarter from the tip jar.", "While ordering tea, Gregory noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_381_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Gregory was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Gregory took a quarter from the tip jar.", "While ordering tea, Gregory noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Gregory_location-deep",
						"false_rfc":"subject-Gregory_location-deep" }
			} 
	var s_382 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Gregory took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_382_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Gregory took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Gregory_location-deep",
						"type": "story" }
	} 
	var q_383 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Gregory took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Gregory stole a salt shaker and left.", "Gregory then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_383_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Gregory took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Gregory stole a salt shaker and left.", "Gregory then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Gregory_location-deep",
						"false_rfc":"subject-Gregory_location-deep" }
			} 
	var s_384 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Gregory stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_384_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Gregory stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Gregory_location-deep",
						"type": "story" }
	} 
	var s_385 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_385_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Gregory_location-deep",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_386 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Rose walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_386_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Rose walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 
	var s_387 = {
		type: "html-keyboard-response",
		stimulus: "Rose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_387_ = {
		type: "html-keyboard-response",
		stimulus: "Rose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 
	var q_388 = {
		type: "html-keyboard-response",
		stimulus: "<p> Rose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Rose noticed the barista’s new mustache.", "Before ordering cake, Rose took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_388_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Rose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Rose noticed the barista’s new mustache.", "Before ordering cake, Rose took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Rose_location-deep",
						"false_rfc":"subject-Rose_location-deep" }
			} 
	var s_389 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Rose took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_389_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Rose took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 
	var q_390 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Rose took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Rose stole a salt shaker and left.", "Rose then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_390_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Rose took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Rose stole a salt shaker and left.", "Rose then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Rose_location-deep",
						"false_rfc":"subject-Rose_location-deep" }
			} 
	var s_391 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Rose stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_391_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Rose stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 
	var s_392 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_392_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Rose_location-deep",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_393 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sandra walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_393_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sandra walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var s_394 = {
		type: "html-keyboard-response",
		stimulus: "Today, Sandra waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_394_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Sandra waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var q_395 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sandra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Sandra took a quarter from the tip jar.", "While ordering tea, Sandra noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_395_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sandra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Sandra took a quarter from the tip jar.", "While ordering tea, Sandra noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Sandra_location-deep",
						"false_rfc":"subject-Sandra_location-deep" }
			} 
	var s_396 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sandra noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_396_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sandra noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var q_397 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sandra noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sandra then sat by the window, and read a book for hours.", "After ordering, Sandra stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_397_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sandra noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sandra then sat by the window, and read a book for hours.", "After ordering, Sandra stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Sandra_location-deep",
						"false_rfc":"subject-Sandra_location-deep" }
			} 
	var s_398 = {
		type: "html-keyboard-response",
		stimulus: "Sandra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_398_ = {
		type: "html-keyboard-response",
		stimulus: "Sandra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var s_399 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_399_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_400 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jordan walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_400_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jordan walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 
	var s_401 = {
		type: "html-keyboard-response",
		stimulus: "Jordan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_401_ = {
		type: "html-keyboard-response",
		stimulus: "Jordan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jordan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jordan noticed the barista’s new mustache.", "Before ordering cake, Jordan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_402_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jordan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jordan noticed the barista’s new mustache.", "Before ordering cake, Jordan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jordan_location-deep",
						"false_rfc":"subject-Jordan_location-deep" }
			} 
	var s_403 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jordan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_403_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jordan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jordan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jordan then sat by the window, and read a book for hours.", "After ordering, Jordan stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_404_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jordan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jordan then sat by the window, and read a book for hours.", "After ordering, Jordan stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jordan_location-deep",
						"false_rfc":"subject-Jordan_location-deep" }
			} 
	var s_405 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jordan stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_405_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jordan stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 
	var s_406 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_406_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_407 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jacob walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_407_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jacob walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 
	var s_408 = {
		type: "html-keyboard-response",
		stimulus: "Jacob was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_408_ = {
		type: "html-keyboard-response",
		stimulus: "Jacob was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 
	var q_409 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jacob was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacob noticed the barista’s new mustache.", "Before ordering cake, Jacob took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_409_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jacob was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacob noticed the barista’s new mustache.", "Before ordering cake, Jacob took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jacob_location-deep",
						"false_rfc":"subject-Jacob_location-deep" }
			} 
	var s_410 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jacob took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_410_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jacob took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 
	var q_411 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jacob took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jacob stole a salt shaker and left.", "After ordering, Dennis stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_411_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jacob took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jacob stole a salt shaker and left.", "After ordering, Dennis stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jacob_location-deep",
						"false_rfc":"subject-Dennis_location-deep" }
			} 
	var s_412 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jacob stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_412_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jacob stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 
	var s_413 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_413_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_414 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Patricia walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_414_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Patricia walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 
	var s_415 = {
		type: "html-keyboard-response",
		stimulus: "Today, Patricia waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_415_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Patricia waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 
	var q_416 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Patricia waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Patricia noticed the barista’s new mustache.", "Before ordering cake, Patricia took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_416_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Patricia waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Patricia noticed the barista’s new mustache.", "Before ordering cake, Patricia took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Patricia_location-deep",
						"false_rfc":"subject-Patricia_location-deep" }
			} 
	var s_417 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Patricia noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_417_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Patricia noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 
	var q_418 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Patricia noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Patricia stole a salt shaker and left.", "Patricia then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_418_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Patricia noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Patricia stole a salt shaker and left.", "Patricia then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Patricia_location-deep",
						"false_rfc":"subject-Patricia_location-deep" }
			} 
	var s_419 = {
		type: "html-keyboard-response",
		stimulus: "Patricia then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_419_ = {
		type: "html-keyboard-response",
		stimulus: "Patricia then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 
	var s_420 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_420_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_421 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Roy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_421_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Roy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Roy_location-deep",
						"type": "story" }
	} 
	var s_422 = {
		type: "html-keyboard-response",
		stimulus: "Today, Roy waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_422_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Roy waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Roy_location-deep",
						"type": "story" }
	} 
	var q_423 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Roy waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Roy noticed the barista’s new mustache.", "While ordering tea, Nicole noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_423_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Roy waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Roy noticed the barista’s new mustache.", "While ordering tea, Nicole noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Roy_location-deep",
						"false_rfc":"subject-Nicole_location-deep" }
			} 
	var s_424 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Roy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_424_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Roy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Roy_location-deep",
						"type": "story" }
	} 
	var q_425 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Roy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Roy stole a salt shaker and left.", "Roy then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_425_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Roy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Roy stole a salt shaker and left.", "Roy then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Roy_location-deep",
						"false_rfc":"subject-Roy_location-deep" }
			} 
	var s_426 = {
		type: "html-keyboard-response",
		stimulus: "Roy then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_426_ = {
		type: "html-keyboard-response",
		stimulus: "Roy then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Roy_location-deep",
						"type": "story" }
	} 
	var s_427 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_427_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Roy_location-deep",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_428 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Arthur walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_428_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Arthur walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Arthur_location-deep",
						"type": "story" }
	} 
	var s_429 = {
		type: "html-keyboard-response",
		stimulus: "Today, Arthur waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_429_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Arthur waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Arthur_location-deep",
						"type": "story" }
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Arthur waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Arthur took a quarter from the tip jar.", "While ordering tea, Arthur noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_430_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Arthur waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Arthur took a quarter from the tip jar.", "While ordering tea, Arthur noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Arthur_location-deep",
						"false_rfc":"subject-Arthur_location-deep" }
			} 
	var s_431 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Arthur noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_431_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Arthur noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Arthur_location-deep",
						"type": "story" }
	} 
	var q_432 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Arthur noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Arthur stole a salt shaker and left.", "Arthur then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_432_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Arthur noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Arthur stole a salt shaker and left.", "Arthur then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Arthur_location-deep",
						"false_rfc":"subject-Arthur_location-deep" }
			} 
	var s_433 = {
		type: "html-keyboard-response",
		stimulus: "Arthur then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_433_ = {
		type: "html-keyboard-response",
		stimulus: "Arthur then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Arthur_location-deep",
						"type": "story" }
	} 
	var s_434 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_434_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Arthur_location-deep",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_435 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Terry walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_435_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Terry walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Terry_location-deep",
						"type": "story" }
	} 
	var s_436 = {
		type: "html-keyboard-response",
		stimulus: "Today, Terry waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_436_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Terry waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Terry_location-deep",
						"type": "story" }
	} 
	var q_437 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Terry waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Terry took a quarter from the tip jar.", "While ordering tea, Terry noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_437_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Terry waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Terry took a quarter from the tip jar.", "While ordering tea, Terry noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Terry_location-deep",
						"false_rfc":"subject-Terry_location-deep" }
			} 
	var s_438 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Terry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_438_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Terry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Terry_location-deep",
						"type": "story" }
	} 
	var q_439 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Terry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Terry then sat by the window, and read a book for hours.", "After ordering, Terry stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_439_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Terry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Terry then sat by the window, and read a book for hours.", "After ordering, Terry stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Terry_location-deep",
						"false_rfc":"subject-Terry_location-deep" }
			} 
	var s_440 = {
		type: "html-keyboard-response",
		stimulus: "Terry then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_440_ = {
		type: "html-keyboard-response",
		stimulus: "Terry then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Terry_location-deep",
						"type": "story" }
	} 
	var s_441 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_441_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Terry_location-deep",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_442 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Cynthia walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_442_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Cynthia walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Cynthia_location-deep",
						"type": "story" }
	} 
	var s_443 = {
		type: "html-keyboard-response",
		stimulus: "Cynthia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_443_ = {
		type: "html-keyboard-response",
		stimulus: "Cynthia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Cynthia_location-deep",
						"type": "story" }
	} 
	var q_444 = {
		type: "html-keyboard-response",
		stimulus: "<p> Cynthia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Cynthia noticed the barista’s new mustache.", "Before ordering cake, Cynthia took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_444_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Cynthia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Cynthia noticed the barista’s new mustache.", "Before ordering cake, Cynthia took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Cynthia_location-deep",
						"false_rfc":"subject-Cynthia_location-deep" }
			} 
	var s_445 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Cynthia took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_445_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Cynthia took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Cynthia_location-deep",
						"type": "story" }
	} 
	var q_446 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Cynthia took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Cynthia stole a salt shaker and left.", "Cynthia then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_446_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Cynthia took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Cynthia stole a salt shaker and left.", "Cynthia then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Cynthia_location-deep",
						"false_rfc":"subject-Cynthia_location-deep" }
			} 
	var s_447 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Cynthia stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_447_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Cynthia stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Cynthia_location-deep",
						"type": "story" }
	} 
	var s_448 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_448_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Cynthia_location-deep",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_449 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Adam walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_449_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Adam walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var s_450 = {
		type: "html-keyboard-response",
		stimulus: "Today, Adam waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_450_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Adam waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_451 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Adam waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Adam noticed the barista’s new mustache.", "Before ordering cake, Adam took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_451_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Adam waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Adam noticed the barista’s new mustache.", "Before ordering cake, Adam took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-Adam_location-deep" }
			} 
	var s_452 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Adam noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_452_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Adam noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_453 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Adam noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Adam stole a salt shaker and left.", "Adam then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_453_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Adam noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Adam stole a salt shaker and left.", "Adam then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-Adam_location-deep" }
			} 
	var s_454 = {
		type: "html-keyboard-response",
		stimulus: "Adam then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_454_ = {
		type: "html-keyboard-response",
		stimulus: "Adam then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var s_455 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_455_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_456 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Amy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_456_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Amy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 
	var s_457 = {
		type: "html-keyboard-response",
		stimulus: "Amy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_457_ = {
		type: "html-keyboard-response",
		stimulus: "Amy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 
	var q_458 = {
		type: "html-keyboard-response",
		stimulus: "<p> Amy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Amy noticed the barista’s new mustache.", "Before ordering cake, Amy took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_458_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Amy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Amy noticed the barista’s new mustache.", "Before ordering cake, Amy took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Amy_location-deep",
						"false_rfc":"subject-Amy_location-deep" }
			} 
	var s_459 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Amy took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_459_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Amy took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 
	var q_460 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Amy took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Amy then sat by the window, and read a book for hours.", "After ordering, Amy stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_460_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Amy took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Amy then sat by the window, and read a book for hours.", "After ordering, Amy stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Amy_location-deep",
						"false_rfc":"subject-Amy_location-deep" }
			} 
	var s_461 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amy stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_461_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amy stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 
	var s_462 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_462_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_463 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Teresa walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_463_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Teresa walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Teresa_location-deep",
						"type": "story" }
	} 
	var s_464 = {
		type: "html-keyboard-response",
		stimulus: "Today, Teresa waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_464_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Teresa waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Teresa_location-deep",
						"type": "story" }
	} 
	var q_465 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Teresa waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Teresa noticed the barista’s new mustache.", "Before ordering cake, Teresa took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_465_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Teresa waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Teresa noticed the barista’s new mustache.", "Before ordering cake, Teresa took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Teresa_location-deep",
						"false_rfc":"subject-Teresa_location-deep" }
			} 
	var s_466 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Teresa noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_466_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Teresa noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Teresa_location-deep",
						"type": "story" }
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Teresa noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Teresa then sat by the window, and read a book for hours.", "After ordering, Teresa stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_467_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Teresa noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Teresa then sat by the window, and read a book for hours.", "After ordering, Teresa stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Teresa_location-deep",
						"false_rfc":"subject-Teresa_location-deep" }
			} 
	var s_468 = {
		type: "html-keyboard-response",
		stimulus: "Teresa then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_468_ = {
		type: "html-keyboard-response",
		stimulus: "Teresa then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Teresa_location-deep",
						"type": "story" }
	} 
	var s_469 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_469_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Teresa_location-deep",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_470 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Zachary walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_470_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Zachary walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 
	var s_471 = {
		type: "html-keyboard-response",
		stimulus: "Today, Zachary waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_471_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Zachary waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 
	var q_472 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Zachary waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Zachary noticed the barista’s new mustache.", "While ordering tea, Justin noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_472_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Zachary waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Zachary noticed the barista’s new mustache.", "While ordering tea, Justin noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Zachary_location-deep",
						"false_rfc":"subject-Justin_location-deep" }
			} 
	var s_473 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Zachary noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_473_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Zachary noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 
	var q_474 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Zachary noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Zachary then sat by the window, and read a book for hours.", "After ordering, Zachary stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_474_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Zachary noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Zachary then sat by the window, and read a book for hours.", "After ordering, Zachary stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Zachary_location-deep",
						"false_rfc":"subject-Zachary_location-deep" }
			} 
	var s_475 = {
		type: "html-keyboard-response",
		stimulus: "Zachary then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_475_ = {
		type: "html-keyboard-response",
		stimulus: "Zachary then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 
	var s_476 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_476_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_477 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Charles walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_477_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Charles walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Charles_location-deep",
						"type": "story" }
	} 
	var s_478 = {
		type: "html-keyboard-response",
		stimulus: "Charles was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_478_ = {
		type: "html-keyboard-response",
		stimulus: "Charles was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Charles_location-deep",
						"type": "story" }
	} 
	var q_479 = {
		type: "html-keyboard-response",
		stimulus: "<p> Charles was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Charles took a quarter from the tip jar.", "While ordering tea, Charles noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_479_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Charles was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Charles took a quarter from the tip jar.", "While ordering tea, Charles noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Charles_location-deep",
						"false_rfc":"subject-Charles_location-deep" }
			} 
	var s_480 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Charles took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_480_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Charles took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Charles_location-deep",
						"type": "story" }
	} 
	var q_481 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Charles took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Charles then sat by the window, and read a book for hours.", "After ordering, Charles stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_481_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Charles took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Charles then sat by the window, and read a book for hours.", "After ordering, Charles stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Charles_location-deep",
						"false_rfc":"subject-Charles_location-deep" }
			} 
	var s_482 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Charles stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_482_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Charles stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Charles_location-deep",
						"type": "story" }
	} 
	var s_483 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_483_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Charles_location-deep",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_484 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Zachary walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_484_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Zachary walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 
	var s_485 = {
		type: "html-keyboard-response",
		stimulus: "Zachary was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_485_ = {
		type: "html-keyboard-response",
		stimulus: "Zachary was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 
	var q_486 = {
		type: "html-keyboard-response",
		stimulus: "<p> Zachary was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Zachary took a quarter from the tip jar.", "While ordering tea, Zachary noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_486_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Zachary was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Zachary took a quarter from the tip jar.", "While ordering tea, Zachary noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Zachary_location-deep",
						"false_rfc":"subject-Zachary_location-deep" }
			} 
	var s_487 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Zachary took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_487_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Zachary took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 
	var q_488 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Zachary took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Zachary stole a salt shaker and left.", "Zachary then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_488_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Zachary took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Zachary stole a salt shaker and left.", "Zachary then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Zachary_location-deep",
						"false_rfc":"subject-Zachary_location-deep" }
			} 
	var s_489 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Zachary stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_489_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Zachary stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 
	var s_490 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_490_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Zachary_location-deep",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_491 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Keith walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_491_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Keith walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Keith_location-deep",
						"type": "story" }
	} 
	var s_492 = {
		type: "html-keyboard-response",
		stimulus: "Today, Keith waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_492_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Keith waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Keith_location-deep",
						"type": "story" }
	} 
	var q_493 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Keith waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Keith took a quarter from the tip jar.", "While ordering tea, Keith noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_493_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Keith waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Keith took a quarter from the tip jar.", "While ordering tea, Keith noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Keith_location-deep",
						"false_rfc":"subject-Keith_location-deep" }
			} 
	var s_494 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Keith noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_494_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Keith noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Keith_location-deep",
						"type": "story" }
	} 
	var q_495 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Keith noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Keith stole a salt shaker and left.", "Keith then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_495_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Keith noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Keith stole a salt shaker and left.", "Keith then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Keith_location-deep",
						"false_rfc":"subject-Keith_location-deep" }
			} 
	var s_496 = {
		type: "html-keyboard-response",
		stimulus: "Keith then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_496_ = {
		type: "html-keyboard-response",
		stimulus: "Keith then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Keith_location-deep",
						"type": "story" }
	} 
	var s_497 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_497_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Keith_location-deep",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_498 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jesse walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_498_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jesse walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jesse_location-deep",
						"type": "story" }
	} 
	var s_499 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jesse waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_499_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jesse waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jesse_location-deep",
						"type": "story" }
	} 
	var q_500 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jesse waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jesse took a quarter from the tip jar.", "While ordering tea, Jesse noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_500_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jesse waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jesse took a quarter from the tip jar.", "While ordering tea, Jesse noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jesse_location-deep",
						"false_rfc":"subject-Jesse_location-deep" }
			} 
	var s_501 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jesse noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_501_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jesse noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jesse_location-deep",
						"type": "story" }
	} 
	var q_502 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jesse noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Lauren then sat by the window, and read a book for hours.", "Jesse then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_502_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jesse noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Lauren then sat by the window, and read a book for hours.", "Jesse then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jesse_location-deep",
						"false_rfc":"subject-Lauren_location-deep" }
			} 
	var s_503 = {
		type: "html-keyboard-response",
		stimulus: "Jesse then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_503_ = {
		type: "html-keyboard-response",
		stimulus: "Jesse then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jesse_location-deep",
						"type": "story" }
	} 
	var s_504 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_504_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jesse_location-deep",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_505 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jacob walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_505_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jacob walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 
	var s_506 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jacob waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_506_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jacob waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 
	var q_507 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jacob waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Susan noticed the barista’s new mustache.", "While ordering tea, Jacob noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_507_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jacob waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Susan noticed the barista’s new mustache.", "While ordering tea, Jacob noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jacob_location-deep",
						"false_rfc":"subject-Susan_location-deep" }
			} 
	var s_508 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacob noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_508_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacob noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacob noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Kyle then sat by the window, and read a book for hours.", "Jacob then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_509_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacob noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Kyle then sat by the window, and read a book for hours.", "Jacob then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jacob_location-deep",
						"false_rfc":"subject-Kyle_location-deep" }
			} 
	var s_510 = {
		type: "html-keyboard-response",
		stimulus: "Jacob then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_510_ = {
		type: "html-keyboard-response",
		stimulus: "Jacob then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 
	var s_511 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_511_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jacob_location-deep",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_512 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sandra walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_512_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sandra walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var s_513 = {
		type: "html-keyboard-response",
		stimulus: "Today, Sandra waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_513_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Sandra waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var q_514 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sandra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Sandra noticed the barista’s new mustache.", "Before ordering cake, Sandra took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_514_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sandra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Sandra noticed the barista’s new mustache.", "Before ordering cake, Sandra took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Sandra_location-deep",
						"false_rfc":"subject-Sandra_location-deep" }
			} 
	var s_515 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sandra noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_515_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sandra noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var q_516 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sandra noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sandra then sat by the window, and read a book for hours.", "After ordering, Sandra stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_516_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sandra noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sandra then sat by the window, and read a book for hours.", "After ordering, Sandra stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Sandra_location-deep",
						"false_rfc":"subject-Sandra_location-deep" }
			} 
	var s_517 = {
		type: "html-keyboard-response",
		stimulus: "Sandra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_517_ = {
		type: "html-keyboard-response",
		stimulus: "Sandra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var s_518 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_518_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_519 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Beverly walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_519_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Beverly walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Beverly_location-deep",
						"type": "story" }
	} 
	var s_520 = {
		type: "html-keyboard-response",
		stimulus: "Today, Beverly waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_520_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Beverly waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Beverly_location-deep",
						"type": "story" }
	} 
	var q_521 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Beverly waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Beverly noticed the barista’s new mustache.", "Before ordering cake, Beverly took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_521_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Beverly waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Beverly noticed the barista’s new mustache.", "Before ordering cake, Beverly took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Beverly_location-deep",
						"false_rfc":"subject-Beverly_location-deep" }
			} 
	var s_522 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Beverly noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_522_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Beverly noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Beverly_location-deep",
						"type": "story" }
	} 
	var q_523 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Beverly noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Beverly then sat by the window, and read a book for hours.", "After ordering, Beverly stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_523_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Beverly noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Beverly then sat by the window, and read a book for hours.", "After ordering, Beverly stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Beverly_location-deep",
						"false_rfc":"subject-Beverly_location-deep" }
			} 
	var s_524 = {
		type: "html-keyboard-response",
		stimulus: "Beverly then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_524_ = {
		type: "html-keyboard-response",
		stimulus: "Beverly then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Beverly_location-deep",
						"type": "story" }
	} 
	var s_525 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_525_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Beverly_location-deep",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_526 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jack walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_526_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jack walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jack_location-deep",
						"type": "story" }
	} 
	var s_527 = {
		type: "html-keyboard-response",
		stimulus: "Jack was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_527_ = {
		type: "html-keyboard-response",
		stimulus: "Jack was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jack_location-deep",
						"type": "story" }
	} 
	var q_528 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jack was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jack took a quarter from the tip jar.", "While ordering tea, Jack noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_528_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jack was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jack took a quarter from the tip jar.", "While ordering tea, Jack noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jack_location-deep",
						"false_rfc":"subject-Jack_location-deep" }
			} 
	var s_529 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jack took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_529_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jack took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jack_location-deep",
						"type": "story" }
	} 
	var q_530 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jack took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jack stole a salt shaker and left.", "Jack then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_530_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jack took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jack stole a salt shaker and left.", "Jack then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jack_location-deep",
						"false_rfc":"subject-Jack_location-deep" }
			} 
	var s_531 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jack stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_531_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jack stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jack_location-deep",
						"type": "story" }
	} 
	var s_532 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_532_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jack_location-deep",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_533 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Cheryl walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_533_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Cheryl walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 
	var s_534 = {
		type: "html-keyboard-response",
		stimulus: "Cheryl was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_534_ = {
		type: "html-keyboard-response",
		stimulus: "Cheryl was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 
	var q_535 = {
		type: "html-keyboard-response",
		stimulus: "<p> Cheryl was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Cheryl took a quarter from the tip jar.", "While ordering tea, Cheryl noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_535_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Cheryl was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Cheryl took a quarter from the tip jar.", "While ordering tea, Cheryl noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Cheryl_location-deep",
						"false_rfc":"subject-Cheryl_location-deep" }
			} 
	var s_536 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Cheryl took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_536_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Cheryl took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 
	var q_537 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Cheryl took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Cheryl stole a salt shaker and left.", "Cheryl then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_537_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Cheryl took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Cheryl stole a salt shaker and left.", "Cheryl then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Cheryl_location-deep",
						"false_rfc":"subject-Cheryl_location-deep" }
			} 
	var s_538 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Cheryl stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_538_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Cheryl stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 
	var s_539 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_539_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_540 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Christine walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_540_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Christine walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Christine_location-deep",
						"type": "story" }
	} 
	var s_541 = {
		type: "html-keyboard-response",
		stimulus: "Christine was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_541_ = {
		type: "html-keyboard-response",
		stimulus: "Christine was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Christine_location-deep",
						"type": "story" }
	} 
	var q_542 = {
		type: "html-keyboard-response",
		stimulus: "<p> Christine was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Christine noticed the barista’s new mustache.", "Before ordering cake, Christine took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_542_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Christine was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Christine noticed the barista’s new mustache.", "Before ordering cake, Christine took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Christine_location-deep",
						"false_rfc":"subject-Christine_location-deep" }
			} 
	var s_543 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Christine took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_543_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Christine took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Christine_location-deep",
						"type": "story" }
	} 
	var q_544 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Christine took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Bruce stole a salt shaker and left.", "After ordering, Christine stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_544_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Christine took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Bruce stole a salt shaker and left.", "After ordering, Christine stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Christine_location-deep",
						"false_rfc":"subject-Bruce_location-deep" }
			} 
	var s_545 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Christine stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_545_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Christine stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Christine_location-deep",
						"type": "story" }
	} 
	var s_546 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_546_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Christine_location-deep",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_547 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Deborah walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_547_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Deborah walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Deborah_location-deep",
						"type": "story" }
	} 
	var s_548 = {
		type: "html-keyboard-response",
		stimulus: "Deborah was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_548_ = {
		type: "html-keyboard-response",
		stimulus: "Deborah was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Deborah_location-deep",
						"type": "story" }
	} 
	var q_549 = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jacqueline took a quarter from the tip jar.", "Before ordering cake, Deborah took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_549_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Deborah was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jacqueline took a quarter from the tip jar.", "Before ordering cake, Deborah took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Deborah_location-deep",
						"false_rfc":"subject-Jacqueline_location-jungle" }
			} 
	var s_550 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Deborah took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_550_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Deborah took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Deborah_location-deep",
						"type": "story" }
	} 
	var q_551 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Deborah took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Rachel stole a salt shaker and left.", "After ordering, Deborah stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_551_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Deborah took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Rachel stole a salt shaker and left.", "After ordering, Deborah stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Deborah_location-deep",
						"false_rfc":"subject-Rachel_location-jungle" }
			} 
	var s_552 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Deborah stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_552_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Deborah stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Deborah_location-deep",
						"type": "story" }
	} 
	var s_553 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_553_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Deborah_location-deep",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_554 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Larry walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_554_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Larry walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Larry_location-deep",
						"type": "story" }
	} 
	var s_555 = {
		type: "html-keyboard-response",
		stimulus: "Larry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_555_ = {
		type: "html-keyboard-response",
		stimulus: "Larry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Larry_location-deep",
						"type": "story" }
	} 
	var q_556 = {
		type: "html-keyboard-response",
		stimulus: "<p> Larry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Larry took a quarter from the tip jar.", "Before ordering cake, Kathleen took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_556_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Larry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Larry took a quarter from the tip jar.", "Before ordering cake, Kathleen took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Larry_location-deep",
						"false_rfc":"subject-Kathleen_location-deep" }
			} 
	var s_557 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Larry took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_557_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Larry took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Larry_location-deep",
						"type": "story" }
	} 
	var q_558 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Larry took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Larry then sat by the window, and read a book for hours.", "After ordering, Larry stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_558_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Larry took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Larry then sat by the window, and read a book for hours.", "After ordering, Larry stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Larry_location-deep",
						"false_rfc":"subject-Larry_location-deep" }
			} 
	var s_559 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Larry stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_559_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Larry stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Larry_location-deep",
						"type": "story" }
	} 
	var s_560 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_560_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Larry_location-deep",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_561 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Debra walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_561_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Debra walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var s_562 = {
		type: "html-keyboard-response",
		stimulus: "Today, Debra waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_562_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Debra waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var q_563 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Debra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Debra took a quarter from the tip jar.", "While ordering tea, Debra noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_563_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Debra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Debra took a quarter from the tip jar.", "While ordering tea, Debra noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Debra_location-jungle",
						"false_rfc":"subject-Debra_location-jungle" }
			} 
	var s_564 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Debra took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_564_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Debra took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var q_565 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Debra took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Debra then sat by the window, and read a book for hours.", "After ordering, Debra stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_565_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Debra took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Debra then sat by the window, and read a book for hours.", "After ordering, Debra stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Debra_location-jungle",
						"false_rfc":"subject-Debra_location-jungle" }
			} 
	var s_566 = {
		type: "html-keyboard-response",
		stimulus: "Debra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_566_ = {
		type: "html-keyboard-response",
		stimulus: "Debra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var s_567 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_567_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_568 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Cheryl walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_568_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Cheryl walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 
	var s_569 = {
		type: "html-keyboard-response",
		stimulus: "Cheryl was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_569_ = {
		type: "html-keyboard-response",
		stimulus: "Cheryl was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 
	var q_570 = {
		type: "html-keyboard-response",
		stimulus: "<p> Cheryl was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Cheryl noticed the barista’s new mustache.", "While ordering tea, Patricia noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_570_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Cheryl was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Cheryl noticed the barista’s new mustache.", "While ordering tea, Patricia noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Cheryl_location-jungle",
						"false_rfc":"subject-Patricia_location-deep" }
			} 
	var s_571 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Cheryl noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_571_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Cheryl noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 
	var q_572 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Cheryl noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Cheryl stole a salt shaker and left.", "After ordering, Andrew stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_572_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Cheryl noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Cheryl stole a salt shaker and left.", "After ordering, Andrew stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Cheryl_location-jungle",
						"false_rfc":"subject-Andrew_location-deep" }
			} 
	var s_573 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Cheryl stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_573_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Cheryl stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 
	var s_574 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_574_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Cheryl_location-jungle",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_575 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jacob walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_575_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jacob walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var s_576 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jacob waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_576_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jacob waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var q_577 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jacob waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Abigail took a quarter from the tip jar.", "Before ordering cake, Jacob took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_577_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jacob waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Abigail took a quarter from the tip jar.", "Before ordering cake, Jacob took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jacob_location-jungle",
						"false_rfc":"subject-Abigail_location-jungle" }
			} 
	var s_578 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jacob took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_578_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jacob took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var q_579 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jacob took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jacob stole a salt shaker and left.", "Jacob then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_579_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jacob took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jacob stole a salt shaker and left.", "Jacob then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jacob_location-jungle",
						"false_rfc":"subject-Jacob_location-jungle" }
			} 
	var s_580 = {
		type: "html-keyboard-response",
		stimulus: "Jacob then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_580_ = {
		type: "html-keyboard-response",
		stimulus: "Jacob then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var s_581 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_581_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_582 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Wayne walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_582_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Wayne walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Wayne_location-jungle",
						"type": "story" }
	} 
	var s_583 = {
		type: "html-keyboard-response",
		stimulus: "Today, Wayne waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_583_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Wayne waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Wayne_location-jungle",
						"type": "story" }
	} 
	var q_584 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Wayne waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Frances took a quarter from the tip jar.", "Before ordering cake, Wayne took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_584_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Wayne waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Frances took a quarter from the tip jar.", "Before ordering cake, Wayne took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Wayne_location-jungle",
						"false_rfc":"subject-Frances_location-jungle" }
			} 
	var s_585 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Wayne took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_585_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Wayne took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Wayne_location-jungle",
						"type": "story" }
	} 
	var q_586 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Wayne took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Wayne then sat by the window, and read a book for hours.", "Jeffrey then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_586_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Wayne took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Wayne then sat by the window, and read a book for hours.", "Jeffrey then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Wayne_location-jungle",
						"false_rfc":"subject-Jeffrey_location-deep" }
			} 
	var s_587 = {
		type: "html-keyboard-response",
		stimulus: "Wayne then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_587_ = {
		type: "html-keyboard-response",
		stimulus: "Wayne then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Wayne_location-jungle",
						"type": "story" }
	} 
	var s_588 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_588_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Wayne_location-jungle",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_589 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jose walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_589_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jose walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var s_590 = {
		type: "html-keyboard-response",
		stimulus: "Jose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_590_ = {
		type: "html-keyboard-response",
		stimulus: "Jose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jose took a quarter from the tip jar.", "While ordering tea, Jose noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_591_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jose took a quarter from the tip jar.", "While ordering tea, Jose noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jose_location-jungle",
						"false_rfc":"subject-Jose_location-jungle" }
			} 
	var s_592 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jose noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_592_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jose noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jose noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jose stole a salt shaker and left.", "Jose then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_593_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jose noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jose stole a salt shaker and left.", "Jose then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jose_location-jungle",
						"false_rfc":"subject-Jose_location-jungle" }
			} 
	var s_594 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jose stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_594_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jose stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var s_595 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_595_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_596 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Debra walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_596_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Debra walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var s_597 = {
		type: "html-keyboard-response",
		stimulus: "Today, Debra waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_597_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Debra waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var q_598 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Debra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Debra took a quarter from the tip jar.", "Before ordering cake, Gregory took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_598_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Debra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Debra took a quarter from the tip jar.", "Before ordering cake, Gregory took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Debra_location-jungle",
						"false_rfc":"subject-Gregory_location-deep" }
			} 
	var s_599 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Debra took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_599_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Debra took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Debra took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Debra then sat by the window, and read a book for hours.", "After ordering, Debra stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_600_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Debra took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Debra then sat by the window, and read a book for hours.", "After ordering, Debra stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Debra_location-jungle",
						"false_rfc":"subject-Debra_location-jungle" }
			} 
	var s_601 = {
		type: "html-keyboard-response",
		stimulus: "Debra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_601_ = {
		type: "html-keyboard-response",
		stimulus: "Debra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 
	var s_602 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_602_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Debra_location-jungle",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_603 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jessica walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_603_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jessica walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jessica_location-jungle",
						"type": "story" }
	} 
	var s_604 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jessica waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_604_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jessica waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jessica_location-jungle",
						"type": "story" }
	} 
	var q_605 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jessica waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jessica noticed the barista’s new mustache.", "Before ordering cake, Jessica took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_605_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jessica waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jessica noticed the barista’s new mustache.", "Before ordering cake, Jessica took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jessica_location-jungle",
						"false_rfc":"subject-Jessica_location-jungle" }
			} 
	var s_606 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jessica took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_606_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jessica took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jessica_location-jungle",
						"type": "story" }
	} 
	var q_607 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jessica took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jessica then sat by the window, and read a book for hours.", "After ordering, Jessica stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_607_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jessica took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jessica then sat by the window, and read a book for hours.", "After ordering, Jessica stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jessica_location-jungle",
						"false_rfc":"subject-Jessica_location-jungle" }
			} 
	var s_608 = {
		type: "html-keyboard-response",
		stimulus: "Jessica then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_608_ = {
		type: "html-keyboard-response",
		stimulus: "Jessica then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jessica_location-jungle",
						"type": "story" }
	} 
	var s_609 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_609_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jessica_location-jungle",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_610 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Michelle walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_610_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Michelle walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 
	var s_611 = {
		type: "html-keyboard-response",
		stimulus: "Michelle was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_611_ = {
		type: "html-keyboard-response",
		stimulus: "Michelle was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 
	var q_612 = {
		type: "html-keyboard-response",
		stimulus: "<p> Michelle was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Michelle took a quarter from the tip jar.", "While ordering tea, Michelle noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_612_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Michelle was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Michelle took a quarter from the tip jar.", "While ordering tea, Michelle noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Michelle_location-jungle",
						"false_rfc":"subject-Michelle_location-jungle" }
			} 
	var s_613 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Michelle noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_613_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Michelle noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Michelle noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Michelle stole a salt shaker and left.", "Michelle then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_614_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Michelle noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Michelle stole a salt shaker and left.", "Michelle then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Michelle_location-jungle",
						"false_rfc":"subject-Michelle_location-jungle" }
			} 
	var s_615 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Michelle stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_615_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Michelle stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 
	var s_616 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_616_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_617 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Linda walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_617_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Linda walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Linda_location-jungle",
						"type": "story" }
	} 
	var s_618 = {
		type: "html-keyboard-response",
		stimulus: "Linda was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_618_ = {
		type: "html-keyboard-response",
		stimulus: "Linda was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Linda_location-jungle",
						"type": "story" }
	} 
	var q_619 = {
		type: "html-keyboard-response",
		stimulus: "<p> Linda was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Linda noticed the barista’s new mustache.", "Before ordering cake, Linda took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_619_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Linda was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Linda noticed the barista’s new mustache.", "Before ordering cake, Linda took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Linda_location-jungle",
						"false_rfc":"subject-Linda_location-jungle" }
			} 
	var s_620 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Linda noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_620_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Linda noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Linda_location-jungle",
						"type": "story" }
	} 
	var q_621 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Linda noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Linda stole a salt shaker and left.", "Linda then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_621_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Linda noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Linda stole a salt shaker and left.", "Linda then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Linda_location-jungle",
						"false_rfc":"subject-Linda_location-jungle" }
			} 
	var s_622 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Linda stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_622_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Linda stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Linda_location-jungle",
						"type": "story" }
	} 
	var s_623 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_623_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Linda_location-jungle",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_624 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jacqueline walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_624_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jacqueline walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jacqueline_location-jungle",
						"type": "story" }
	} 
	var s_625 = {
		type: "html-keyboard-response",
		stimulus: "Jacqueline was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_625_ = {
		type: "html-keyboard-response",
		stimulus: "Jacqueline was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jacqueline_location-jungle",
						"type": "story" }
	} 
	var q_626 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jacqueline was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacqueline noticed the barista’s new mustache.", "Before ordering cake, Jacqueline took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_626_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jacqueline was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacqueline noticed the barista’s new mustache.", "Before ordering cake, Jacqueline took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jacqueline_location-jungle",
						"false_rfc":"subject-Jacqueline_location-jungle" }
			} 
	var s_627 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacqueline noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_627_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacqueline noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jacqueline_location-jungle",
						"type": "story" }
	} 
	var q_628 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacqueline noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jacqueline then sat by the window, and read a book for hours.", "After ordering, Jacqueline stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_628_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacqueline noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jacqueline then sat by the window, and read a book for hours.", "After ordering, Jacqueline stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jacqueline_location-jungle",
						"false_rfc":"subject-Jacqueline_location-jungle" }
			} 
	var s_629 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jacqueline stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_629_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jacqueline stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jacqueline_location-jungle",
						"type": "story" }
	} 
	var s_630 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_630_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jacqueline_location-jungle",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_631 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Dorothy walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_631_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Dorothy walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 
	var s_632 = {
		type: "html-keyboard-response",
		stimulus: "Dorothy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_632_ = {
		type: "html-keyboard-response",
		stimulus: "Dorothy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 
	var q_633 = {
		type: "html-keyboard-response",
		stimulus: "<p> Dorothy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Dorothy took a quarter from the tip jar.", "While ordering tea, Dorothy noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_633_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Dorothy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Dorothy took a quarter from the tip jar.", "While ordering tea, Dorothy noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Dorothy_location-jungle",
						"false_rfc":"subject-Dorothy_location-jungle" }
			} 
	var s_634 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Dorothy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_634_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Dorothy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 
	var q_635 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Dorothy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Dorothy then sat by the window, and read a book for hours.", "After ordering, Dorothy stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_635_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Dorothy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Dorothy then sat by the window, and read a book for hours.", "After ordering, Dorothy stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Dorothy_location-jungle",
						"false_rfc":"subject-Dorothy_location-jungle" }
			} 
	var s_636 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Dorothy stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_636_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Dorothy stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 
	var s_637 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_637_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Dorothy_location-jungle",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_638 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Terry walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_638_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Terry walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var s_639 = {
		type: "html-keyboard-response",
		stimulus: "Terry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_639_ = {
		type: "html-keyboard-response",
		stimulus: "Terry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var q_640 = {
		type: "html-keyboard-response",
		stimulus: "<p> Terry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Terry took a quarter from the tip jar.", "While ordering tea, Terry noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_640_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Terry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Terry took a quarter from the tip jar.", "While ordering tea, Terry noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Terry_location-jungle",
						"false_rfc":"subject-Terry_location-jungle" }
			} 
	var s_641 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Terry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_641_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Terry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var q_642 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Terry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Terry then sat by the window, and read a book for hours.", "After ordering, Terry stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_642_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Terry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Terry then sat by the window, and read a book for hours.", "After ordering, Terry stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Terry_location-jungle",
						"false_rfc":"subject-Terry_location-jungle" }
			} 
	var s_643 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Terry stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_643_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Terry stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var s_644 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_644_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_645 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Scott walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_645_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Scott walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Scott_location-jungle",
						"type": "story" }
	} 
	var s_646 = {
		type: "html-keyboard-response",
		stimulus: "Scott was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_646_ = {
		type: "html-keyboard-response",
		stimulus: "Scott was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Scott_location-jungle",
						"type": "story" }
	} 
	var q_647 = {
		type: "html-keyboard-response",
		stimulus: "<p> Scott was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Scott noticed the barista’s new mustache.", "Before ordering cake, Scott took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_647_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Scott was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Scott noticed the barista’s new mustache.", "Before ordering cake, Scott took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Scott_location-jungle",
						"false_rfc":"subject-Scott_location-jungle" }
			} 
	var s_648 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Scott noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_648_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Scott noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Scott_location-jungle",
						"type": "story" }
	} 
	var q_649 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Scott noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Scott then sat by the window, and read a book for hours.", "After ordering, Scott stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_649_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Scott noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Scott then sat by the window, and read a book for hours.", "After ordering, Scott stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Scott_location-jungle",
						"false_rfc":"subject-Scott_location-jungle" }
			} 
	var s_650 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Scott stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_650_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Scott stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Scott_location-jungle",
						"type": "story" }
	} 
	var s_651 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_651_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Scott_location-jungle",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_652 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jacob walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_652_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jacob walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var s_653 = {
		type: "html-keyboard-response",
		stimulus: "Jacob was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_653_ = {
		type: "html-keyboard-response",
		stimulus: "Jacob was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var q_654 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jacob was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacob noticed the barista’s new mustache.", "While ordering tea, Lori noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_654_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jacob was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacob noticed the barista’s new mustache.", "While ordering tea, Lori noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jacob_location-jungle",
						"false_rfc":"subject-Lori_location-deep" }
			} 
	var s_655 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacob noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_655_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacob noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var q_656 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacob noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jacob then sat by the window, and read a book for hours.", "After ordering, Jacob stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_656_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacob noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jacob then sat by the window, and read a book for hours.", "After ordering, Jacob stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jacob_location-jungle",
						"false_rfc":"subject-Jacob_location-jungle" }
			} 
	var s_657 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jacob stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_657_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jacob stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var s_658 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_658_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_659 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Lisa walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_659_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Lisa walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Lisa_location-jungle",
						"type": "story" }
	} 
	var s_660 = {
		type: "html-keyboard-response",
		stimulus: "Today, Lisa waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_660_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Lisa waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Lisa_location-jungle",
						"type": "story" }
	} 
	var q_661 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Lisa waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Samantha took a quarter from the tip jar.", "Before ordering cake, Lisa took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_661_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Lisa waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Samantha took a quarter from the tip jar.", "Before ordering cake, Lisa took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Lisa_location-jungle",
						"false_rfc":"subject-Samantha_location-deep" }
			} 
	var s_662 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Lisa took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_662_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Lisa took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Lisa_location-jungle",
						"type": "story" }
	} 
	var q_663 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Lisa took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Lisa stole a salt shaker and left.", "Lisa then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_663_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Lisa took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Lisa stole a salt shaker and left.", "Lisa then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Lisa_location-jungle",
						"false_rfc":"subject-Lisa_location-jungle" }
			} 
	var s_664 = {
		type: "html-keyboard-response",
		stimulus: "Lisa then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_664_ = {
		type: "html-keyboard-response",
		stimulus: "Lisa then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Lisa_location-jungle",
						"type": "story" }
	} 
	var s_665 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_665_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Lisa_location-jungle",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_666 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Charles walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_666_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Charles walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Charles_location-jungle",
						"type": "story" }
	} 
	var s_667 = {
		type: "html-keyboard-response",
		stimulus: "Today, Charles waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_667_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Charles waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Charles_location-jungle",
						"type": "story" }
	} 
	var q_668 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Charles waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Charles noticed the barista’s new mustache.", "Before ordering cake, Charles took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_668_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Charles waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Charles noticed the barista’s new mustache.", "Before ordering cake, Charles took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Charles_location-jungle",
						"false_rfc":"subject-Charles_location-jungle" }
			} 
	var s_669 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Charles took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_669_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Charles took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Charles_location-jungle",
						"type": "story" }
	} 
	var q_670 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Charles took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Charles stole a salt shaker and left.", "Charles then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_670_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Charles took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Charles stole a salt shaker and left.", "Charles then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Charles_location-jungle",
						"false_rfc":"subject-Charles_location-jungle" }
			} 
	var s_671 = {
		type: "html-keyboard-response",
		stimulus: "Charles then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_671_ = {
		type: "html-keyboard-response",
		stimulus: "Charles then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Charles_location-jungle",
						"type": "story" }
	} 
	var s_672 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_672_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Charles_location-jungle",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_673 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Judith walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_673_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Judith walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 
	var s_674 = {
		type: "html-keyboard-response",
		stimulus: "Today, Judith waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_674_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Judith waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 
	var q_675 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Judith waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Judith took a quarter from the tip jar.", "While ordering tea, Judith noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_675_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Judith waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Judith took a quarter from the tip jar.", "While ordering tea, Judith noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Judith_location-jungle",
						"false_rfc":"subject-Judith_location-jungle" }
			} 
	var s_676 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Judith took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_676_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Judith took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 
	var q_677 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Judith took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Judith stole a salt shaker and left.", "Judith then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_677_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Judith took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Judith stole a salt shaker and left.", "Judith then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Judith_location-jungle",
						"false_rfc":"subject-Judith_location-jungle" }
			} 
	var s_678 = {
		type: "html-keyboard-response",
		stimulus: "Judith then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_678_ = {
		type: "html-keyboard-response",
		stimulus: "Judith then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 
	var s_679 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_679_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_680 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, James walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_680_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, James walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-James_location-jungle",
						"type": "story" }
	} 
	var s_681 = {
		type: "html-keyboard-response",
		stimulus: "Today, James waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_681_ = {
		type: "html-keyboard-response",
		stimulus: "Today, James waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-James_location-jungle",
						"type": "story" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, James waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, James noticed the barista’s new mustache.", "Before ordering cake, James took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_682_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, James waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, James noticed the barista’s new mustache.", "Before ordering cake, James took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-James_location-jungle",
						"false_rfc":"subject-James_location-jungle" }
			} 
	var s_683 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, James took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_683_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, James took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-James_location-jungle",
						"type": "story" }
	} 
	var q_684 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, James took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["James then sat by the window, and read a book for hours.", "After ordering, James stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_684_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, James took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["James then sat by the window, and read a book for hours.", "After ordering, James stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-James_location-jungle",
						"false_rfc":"subject-James_location-jungle" }
			} 
	var s_685 = {
		type: "html-keyboard-response",
		stimulus: "James then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_685_ = {
		type: "html-keyboard-response",
		stimulus: "James then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-James_location-jungle",
						"type": "story" }
	} 
	var s_686 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_686_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-James_location-jungle",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_687 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Carol walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_687_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Carol walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Carol_location-jungle",
						"type": "story" }
	} 
	var s_688 = {
		type: "html-keyboard-response",
		stimulus: "Carol was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_688_ = {
		type: "html-keyboard-response",
		stimulus: "Carol was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Carol_location-jungle",
						"type": "story" }
	} 
	var q_689 = {
		type: "html-keyboard-response",
		stimulus: "<p> Carol was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Carol took a quarter from the tip jar.", "While ordering tea, Carol noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_689_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Carol was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Carol took a quarter from the tip jar.", "While ordering tea, Carol noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Carol_location-jungle",
						"false_rfc":"subject-Carol_location-jungle" }
			} 
	var s_690 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Carol noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_690_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Carol noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Carol_location-jungle",
						"type": "story" }
	} 
	var q_691 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Carol noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Carol stole a salt shaker and left.", "Carol then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_691_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Carol noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Carol stole a salt shaker and left.", "Carol then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Carol_location-jungle",
						"false_rfc":"subject-Carol_location-jungle" }
			} 
	var s_692 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Carol stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_692_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Carol stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Carol_location-jungle",
						"type": "story" }
	} 
	var s_693 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_693_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Carol_location-jungle",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_694 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Barbara walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_694_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Barbara walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Barbara_location-jungle",
						"type": "story" }
	} 
	var s_695 = {
		type: "html-keyboard-response",
		stimulus: "Today, Barbara waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_695_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Barbara waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Barbara_location-jungle",
						"type": "story" }
	} 
	var q_696 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Barbara waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Barbara noticed the barista’s new mustache.", "Before ordering cake, Barbara took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_696_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Barbara waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Barbara noticed the barista’s new mustache.", "Before ordering cake, Barbara took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Barbara_location-jungle",
						"false_rfc":"subject-Barbara_location-jungle" }
			} 
	var s_697 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Barbara took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_697_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Barbara took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Barbara_location-jungle",
						"type": "story" }
	} 
	var q_698 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Barbara took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Barbara then sat by the window, and read a book for hours.", "After ordering, Barbara stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_698_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Barbara took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Barbara then sat by the window, and read a book for hours.", "After ordering, Barbara stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Barbara_location-jungle",
						"false_rfc":"subject-Barbara_location-jungle" }
			} 
	var s_699 = {
		type: "html-keyboard-response",
		stimulus: "Barbara then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_699_ = {
		type: "html-keyboard-response",
		stimulus: "Barbara then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Barbara_location-jungle",
						"type": "story" }
	} 
	var s_700 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_700_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Barbara_location-jungle",
						"type": "story" }
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_701 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Joseph walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_701_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Joseph walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Joseph_location-jungle",
						"type": "story" }
	} 
	var s_702 = {
		type: "html-keyboard-response",
		stimulus: "Today, Joseph waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_702_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Joseph waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Joseph_location-jungle",
						"type": "story" }
	} 
	var q_703 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Joseph waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Joseph took a quarter from the tip jar.", "While ordering tea, Joseph noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_703_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Joseph waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Joseph took a quarter from the tip jar.", "While ordering tea, Joseph noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Joseph_location-jungle",
						"false_rfc":"subject-Joseph_location-jungle" }
			} 
	var s_704 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Joseph took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_704_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Joseph took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Joseph_location-jungle",
						"type": "story" }
	} 
	var q_705 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Joseph took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Joseph then sat by the window, and read a book for hours.", "After ordering, Joseph stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_705_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Joseph took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Joseph then sat by the window, and read a book for hours.", "After ordering, Joseph stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Joseph_location-jungle",
						"false_rfc":"subject-Joseph_location-jungle" }
			} 
	var s_706 = {
		type: "html-keyboard-response",
		stimulus: "Joseph then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_706_ = {
		type: "html-keyboard-response",
		stimulus: "Joseph then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Joseph_location-jungle",
						"type": "story" }
	} 
	var s_707 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_707_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Joseph_location-jungle",
						"type": "story" }
	} 

	var betweenstory_101 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_708 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Madison walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_708_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Madison walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Madison_location-jungle",
						"type": "story" }
	} 
	var s_709 = {
		type: "html-keyboard-response",
		stimulus: "Today, Madison waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_709_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Madison waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Madison_location-jungle",
						"type": "story" }
	} 
	var q_710 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Madison waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Madison took a quarter from the tip jar.", "While ordering tea, Madison noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_710_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Madison waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Madison took a quarter from the tip jar.", "While ordering tea, Madison noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Madison_location-jungle",
						"false_rfc":"subject-Madison_location-jungle" }
			} 
	var s_711 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Madison took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_711_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Madison took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Madison_location-jungle",
						"type": "story" }
	} 
	var q_712 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Madison took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Madison then sat by the window, and read a book for hours.", "After ordering, Madison stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_712_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Madison took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Madison then sat by the window, and read a book for hours.", "After ordering, Madison stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Madison_location-jungle",
						"false_rfc":"subject-Madison_location-jungle" }
			} 
	var s_713 = {
		type: "html-keyboard-response",
		stimulus: "Madison then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_713_ = {
		type: "html-keyboard-response",
		stimulus: "Madison then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Madison_location-jungle",
						"type": "story" }
	} 
	var s_714 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_714_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Madison_location-jungle",
						"type": "story" }
	} 

	var betweenstory_102 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_715 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Tyler walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_715_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Tyler walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 
	var s_716 = {
		type: "html-keyboard-response",
		stimulus: "Tyler was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_716_ = {
		type: "html-keyboard-response",
		stimulus: "Tyler was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 
	var q_717 = {
		type: "html-keyboard-response",
		stimulus: "<p> Tyler was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Tyler took a quarter from the tip jar.", "While ordering tea, Tyler noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_717_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Tyler was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Tyler took a quarter from the tip jar.", "While ordering tea, Tyler noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Tyler_location-jungle",
						"false_rfc":"subject-Tyler_location-jungle" }
			} 
	var s_718 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Tyler noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_718_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Tyler noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 
	var q_719 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Tyler noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Tyler stole a salt shaker and left.", "Tyler then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_719_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Tyler noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Tyler stole a salt shaker and left.", "Tyler then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Tyler_location-jungle",
						"false_rfc":"subject-Tyler_location-jungle" }
			} 
	var s_720 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Tyler stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_720_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Tyler stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 
	var s_721 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_721_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 

	var betweenstory_103 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_722 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Harold walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_722_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Harold walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Harold_location-jungle",
						"type": "story" }
	} 
	var s_723 = {
		type: "html-keyboard-response",
		stimulus: "Harold was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_723_ = {
		type: "html-keyboard-response",
		stimulus: "Harold was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Harold_location-jungle",
						"type": "story" }
	} 
	var q_724 = {
		type: "html-keyboard-response",
		stimulus: "<p> Harold was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Harold took a quarter from the tip jar.", "While ordering tea, Harold noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_724_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Harold was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Harold took a quarter from the tip jar.", "While ordering tea, Harold noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Harold_location-jungle",
						"false_rfc":"subject-Harold_location-jungle" }
			} 
	var s_725 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Harold noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_725_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Harold noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Harold_location-jungle",
						"type": "story" }
	} 
	var q_726 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Harold noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Harold then sat by the window, and read a book for hours.", "After ordering, Harold stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_726_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Harold noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Harold then sat by the window, and read a book for hours.", "After ordering, Harold stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Harold_location-jungle",
						"false_rfc":"subject-Harold_location-jungle" }
			} 
	var s_727 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Harold stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_727_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Harold stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Harold_location-jungle",
						"type": "story" }
	} 
	var s_728 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_728_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Harold_location-jungle",
						"type": "story" }
	} 

	var betweenstory_104 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_729 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Brandon walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_729_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Brandon walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 
	var s_730 = {
		type: "html-keyboard-response",
		stimulus: "Brandon was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_730_ = {
		type: "html-keyboard-response",
		stimulus: "Brandon was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 
	var q_731 = {
		type: "html-keyboard-response",
		stimulus: "<p> Brandon was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Brandon took a quarter from the tip jar.", "While ordering tea, Brandon noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_731_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Brandon was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Brandon took a quarter from the tip jar.", "While ordering tea, Brandon noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Brandon_location-jungle",
						"false_rfc":"subject-Brandon_location-jungle" }
			} 
	var s_732 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Brandon noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_732_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Brandon noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 
	var q_733 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Brandon noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Brandon then sat by the window, and read a book for hours.", "After ordering, Brandon stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_733_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Brandon noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Brandon then sat by the window, and read a book for hours.", "After ordering, Brandon stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Brandon_location-jungle",
						"false_rfc":"subject-Brandon_location-jungle" }
			} 
	var s_734 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Brandon stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_734_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Brandon stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 
	var s_735 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_735_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 

	var betweenstory_105 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_736 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Judith walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_736_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Judith walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 
	var s_737 = {
		type: "html-keyboard-response",
		stimulus: "Judith was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_737_ = {
		type: "html-keyboard-response",
		stimulus: "Judith was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 
	var q_738 = {
		type: "html-keyboard-response",
		stimulus: "<p> Judith was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Judith noticed the barista’s new mustache.", "Before ordering cake, Judith took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_738_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Judith was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Judith noticed the barista’s new mustache.", "Before ordering cake, Judith took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Judith_location-jungle",
						"false_rfc":"subject-Judith_location-jungle" }
			} 
	var s_739 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Judith noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_739_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Judith noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 
	var q_740 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Judith noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Judith stole a salt shaker and left.", "Judith then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_740_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Judith noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Judith stole a salt shaker and left.", "Judith then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Judith_location-jungle",
						"false_rfc":"subject-Judith_location-jungle" }
			} 
	var s_741 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Judith stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_741_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Judith stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 
	var s_742 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_742_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Judith_location-jungle",
						"type": "story" }
	} 

	var betweenstory_106 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_743 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Emily walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_743_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Emily walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 
	var s_744 = {
		type: "html-keyboard-response",
		stimulus: "Emily was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_744_ = {
		type: "html-keyboard-response",
		stimulus: "Emily was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 
	var q_745 = {
		type: "html-keyboard-response",
		stimulus: "<p> Emily was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emily noticed the barista’s new mustache.", "While ordering tea, Andrew noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_745_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Emily was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emily noticed the barista’s new mustache.", "While ordering tea, Andrew noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Emily_location-jungle",
						"false_rfc":"subject-Andrew_location-deep" }
			} 
	var s_746 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emily noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_746_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emily noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 
	var q_747 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emily noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Emily then sat by the window, and read a book for hours.", "After ordering, Emily stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_747_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emily noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Emily then sat by the window, and read a book for hours.", "After ordering, Emily stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Emily_location-jungle",
						"false_rfc":"subject-Emily_location-jungle" }
			} 
	var s_748 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Emily stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_748_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Emily stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 
	var s_749 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_749_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 

	var betweenstory_107 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_750 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Helen walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_750_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Helen walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Helen_location-jungle",
						"type": "story" }
	} 
	var s_751 = {
		type: "html-keyboard-response",
		stimulus: "Today, Helen waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_751_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Helen waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Helen_location-jungle",
						"type": "story" }
	} 
	var q_752 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Helen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Helen noticed the barista’s new mustache.", "Before ordering cake, Helen took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_752_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Helen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Helen noticed the barista’s new mustache.", "Before ordering cake, Helen took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Helen_location-jungle",
						"false_rfc":"subject-Helen_location-jungle" }
			} 
	var s_753 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Helen took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_753_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Helen took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Helen_location-jungle",
						"type": "story" }
	} 
	var q_754 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Helen took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Helen then sat by the window, and read a book for hours.", "Margaret then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_754_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Helen took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Helen then sat by the window, and read a book for hours.", "Margaret then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Helen_location-jungle",
						"false_rfc":"subject-Margaret_location-jungle" }
			} 
	var s_755 = {
		type: "html-keyboard-response",
		stimulus: "Helen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_755_ = {
		type: "html-keyboard-response",
		stimulus: "Helen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Helen_location-jungle",
						"type": "story" }
	} 
	var s_756 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_756_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Helen_location-jungle",
						"type": "story" }
	} 

	var betweenstory_108 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_757 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Elizabeth walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_757_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Elizabeth walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var s_758 = {
		type: "html-keyboard-response",
		stimulus: "Today, Elizabeth waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_758_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Elizabeth waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var q_759 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Elizabeth waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Elizabeth noticed the barista’s new mustache.", "Before ordering cake, Elizabeth took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_759_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Elizabeth waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Elizabeth noticed the barista’s new mustache.", "Before ordering cake, Elizabeth took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Elizabeth_location-jungle",
						"false_rfc":"subject-Elizabeth_location-jungle" }
			} 
	var s_760 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Elizabeth took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_760_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Elizabeth took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var q_761 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Elizabeth took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Elizabeth stole a salt shaker and left.", "Elizabeth then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_761_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Elizabeth took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Elizabeth stole a salt shaker and left.", "Elizabeth then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Elizabeth_location-jungle",
						"false_rfc":"subject-Elizabeth_location-jungle" }
			} 
	var s_762 = {
		type: "html-keyboard-response",
		stimulus: "Elizabeth then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_762_ = {
		type: "html-keyboard-response",
		stimulus: "Elizabeth then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var s_763 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_763_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 

	var betweenstory_109 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_764 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Elizabeth walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_764_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Elizabeth walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var s_765 = {
		type: "html-keyboard-response",
		stimulus: "Today, Elizabeth waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_765_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Elizabeth waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var q_766 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Elizabeth waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Catherine took a quarter from the tip jar.", "Before ordering cake, Elizabeth took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_766_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Elizabeth waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Catherine took a quarter from the tip jar.", "Before ordering cake, Elizabeth took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Elizabeth_location-jungle",
						"false_rfc":"subject-Catherine_location-jungle" }
			} 
	var s_767 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Elizabeth took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_767_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Elizabeth took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var q_768 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Elizabeth took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Elizabeth then sat by the window, and read a book for hours.", "After ordering, Elizabeth stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_768_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Elizabeth took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Elizabeth then sat by the window, and read a book for hours.", "After ordering, Elizabeth stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Elizabeth_location-jungle",
						"false_rfc":"subject-Elizabeth_location-jungle" }
			} 
	var s_769 = {
		type: "html-keyboard-response",
		stimulus: "Elizabeth then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_769_ = {
		type: "html-keyboard-response",
		stimulus: "Elizabeth then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var s_770 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_770_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 

	var betweenstory_110 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_771 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Michelle walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_771_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Michelle walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 
	var s_772 = {
		type: "html-keyboard-response",
		stimulus: "Today, Michelle waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_772_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Michelle waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 
	var q_773 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Michelle waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Michelle took a quarter from the tip jar.", "Before ordering cake, Stephen took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_773_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Michelle waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Michelle took a quarter from the tip jar.", "Before ordering cake, Stephen took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Michelle_location-jungle",
						"false_rfc":"subject-Stephen_location-deep" }
			} 
	var s_774 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Michelle took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_774_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Michelle took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 
	var q_775 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Michelle took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Michelle stole a salt shaker and left.", "Michelle then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_775_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Michelle took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Michelle stole a salt shaker and left.", "Michelle then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Michelle_location-jungle",
						"false_rfc":"subject-Michelle_location-jungle" }
			} 
	var s_776 = {
		type: "html-keyboard-response",
		stimulus: "Michelle then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_776_ = {
		type: "html-keyboard-response",
		stimulus: "Michelle then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 
	var s_777 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_777_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Michelle_location-jungle",
						"type": "story" }
	} 

	var betweenstory_111 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_778 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Emily walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_778_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Emily walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 
	var s_779 = {
		type: "html-keyboard-response",
		stimulus: "Emily was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_779_ = {
		type: "html-keyboard-response",
		stimulus: "Emily was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 
	var q_780 = {
		type: "html-keyboard-response",
		stimulus: "<p> Emily was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emily noticed the barista’s new mustache.", "Before ordering cake, Emily took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_780_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Emily was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emily noticed the barista’s new mustache.", "Before ordering cake, Emily took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Emily_location-jungle",
						"false_rfc":"subject-Emily_location-jungle" }
			} 
	var s_781 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emily noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_781_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emily noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 
	var q_782 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emily noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Emily stole a salt shaker and left.", "After ordering, Bobby stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_782_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emily noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Emily stole a salt shaker and left.", "After ordering, Bobby stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Emily_location-jungle",
						"false_rfc":"subject-Bobby_location-deep" }
			} 
	var s_783 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Emily stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_783_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Emily stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 
	var s_784 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_784_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Emily_location-jungle",
						"type": "story" }
	} 

	var betweenstory_112 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_785 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Rachel walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_785_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Rachel walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Rachel_location-jungle",
						"type": "story" }
	} 
	var s_786 = {
		type: "html-keyboard-response",
		stimulus: "Rachel was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_786_ = {
		type: "html-keyboard-response",
		stimulus: "Rachel was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Rachel_location-jungle",
						"type": "story" }
	} 
	var q_787 = {
		type: "html-keyboard-response",
		stimulus: "<p> Rachel was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Rachel noticed the barista’s new mustache.", "Before ordering cake, Rachel took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_787_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Rachel was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Rachel noticed the barista’s new mustache.", "Before ordering cake, Rachel took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Rachel_location-jungle",
						"false_rfc":"subject-Rachel_location-jungle" }
			} 
	var s_788 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Rachel noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_788_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Rachel noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Rachel_location-jungle",
						"type": "story" }
	} 
	var q_789 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Rachel noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Rachel stole a salt shaker and left.", "Rachel then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_789_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Rachel noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Rachel stole a salt shaker and left.", "Rachel then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Rachel_location-jungle",
						"false_rfc":"subject-Rachel_location-jungle" }
			} 
	var s_790 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Rachel stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_790_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Rachel stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Rachel_location-jungle",
						"type": "story" }
	} 
	var s_791 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_791_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Rachel_location-jungle",
						"type": "story" }
	} 

	var betweenstory_113 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_792 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Patricia walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_792_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Patricia walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Patricia_location-jungle",
						"type": "story" }
	} 
	var s_793 = {
		type: "html-keyboard-response",
		stimulus: "Patricia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_793_ = {
		type: "html-keyboard-response",
		stimulus: "Patricia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Patricia_location-jungle",
						"type": "story" }
	} 
	var q_794 = {
		type: "html-keyboard-response",
		stimulus: "<p> Patricia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Sara noticed the barista’s new mustache.", "While ordering tea, Patricia noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_794_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Patricia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Sara noticed the barista’s new mustache.", "While ordering tea, Patricia noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Patricia_location-jungle",
						"false_rfc":"subject-Sara_location-deep" }
			} 
	var s_795 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Patricia noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_795_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Patricia noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Patricia_location-jungle",
						"type": "story" }
	} 
	var q_796 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Patricia noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Patricia stole a salt shaker and left.", "After ordering, Cheryl stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_796_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Patricia noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Patricia stole a salt shaker and left.", "After ordering, Cheryl stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Patricia_location-jungle",
						"false_rfc":"subject-Cheryl_location-jungle" }
			} 
	var s_797 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Patricia stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_797_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Patricia stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Patricia_location-jungle",
						"type": "story" }
	} 
	var s_798 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_798_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Patricia_location-jungle",
						"type": "story" }
	} 

	var betweenstory_114 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_799 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Tyler walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_799_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Tyler walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 
	var s_800 = {
		type: "html-keyboard-response",
		stimulus: "Today, Tyler waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_800_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Tyler waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 
	var q_801 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Tyler waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Tyler noticed the barista’s new mustache.", "Before ordering cake, Tyler took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_801_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Tyler waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Tyler noticed the barista’s new mustache.", "Before ordering cake, Tyler took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Tyler_location-jungle",
						"false_rfc":"subject-Tyler_location-jungle" }
			} 
	var s_802 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Tyler took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_802_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Tyler took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 
	var q_803 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Tyler took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Tyler then sat by the window, and read a book for hours.", "After ordering, Tyler stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_803_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Tyler took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Tyler then sat by the window, and read a book for hours.", "After ordering, Tyler stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Tyler_location-jungle",
						"false_rfc":"subject-Tyler_location-jungle" }
			} 
	var s_804 = {
		type: "html-keyboard-response",
		stimulus: "Tyler then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_804_ = {
		type: "html-keyboard-response",
		stimulus: "Tyler then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 
	var s_805 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_805_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Tyler_location-jungle",
						"type": "story" }
	} 

	var betweenstory_115 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_806 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jerry walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_806_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jerry walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jerry_location-jungle",
						"type": "story" }
	} 
	var s_807 = {
		type: "html-keyboard-response",
		stimulus: "Jerry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_807_ = {
		type: "html-keyboard-response",
		stimulus: "Jerry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jerry_location-jungle",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jerry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jerry noticed the barista’s new mustache.", "While ordering tea, Bruce noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_808_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jerry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jerry noticed the barista’s new mustache.", "While ordering tea, Bruce noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jerry_location-jungle",
						"false_rfc":"subject-Bruce_location-jungle" }
			} 
	var s_809 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jerry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_809_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jerry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jerry_location-jungle",
						"type": "story" }
	} 
	var q_810 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jerry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jerry stole a salt shaker and left.", "Jerry then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_810_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jerry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jerry stole a salt shaker and left.", "Jerry then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jerry_location-jungle",
						"false_rfc":"subject-Jerry_location-jungle" }
			} 
	var s_811 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jerry stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_811_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jerry stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jerry_location-jungle",
						"type": "story" }
	} 
	var s_812 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_812_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jerry_location-jungle",
						"type": "story" }
	} 

	var betweenstory_116 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_813 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Robert walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_813_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Robert walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Robert_location-jungle",
						"type": "story" }
	} 
	var s_814 = {
		type: "html-keyboard-response",
		stimulus: "Robert was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_814_ = {
		type: "html-keyboard-response",
		stimulus: "Robert was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Robert_location-jungle",
						"type": "story" }
	} 
	var q_815 = {
		type: "html-keyboard-response",
		stimulus: "<p> Robert was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Robert took a quarter from the tip jar.", "While ordering tea, Robert noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_815_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Robert was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Robert took a quarter from the tip jar.", "While ordering tea, Robert noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Robert_location-jungle",
						"false_rfc":"subject-Robert_location-jungle" }
			} 
	var s_816 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Robert noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_816_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Robert noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Robert_location-jungle",
						"type": "story" }
	} 
	var q_817 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Robert noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Robert stole a salt shaker and left.", "Robert then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_817_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Robert noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Robert stole a salt shaker and left.", "Robert then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Robert_location-jungle",
						"false_rfc":"subject-Robert_location-jungle" }
			} 
	var s_818 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Robert stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_818_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Robert stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Robert_location-jungle",
						"type": "story" }
	} 
	var s_819 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_819_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Robert_location-jungle",
						"type": "story" }
	} 

	var betweenstory_117 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_820 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Stephanie walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_820_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Stephanie walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 
	var s_821 = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephanie waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_821_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephanie waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 
	var q_822 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephanie waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Stephanie took a quarter from the tip jar.", "While ordering tea, Stephanie noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_822_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephanie waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Stephanie took a quarter from the tip jar.", "While ordering tea, Stephanie noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Stephanie_location-jungle",
						"false_rfc":"subject-Stephanie_location-jungle" }
			} 
	var s_823 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Stephanie took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_823_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Stephanie took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 
	var q_824 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Stephanie took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Stephanie stole a salt shaker and left.", "Stephanie then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_824_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Stephanie took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Stephanie stole a salt shaker and left.", "Stephanie then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Stephanie_location-jungle",
						"false_rfc":"subject-Stephanie_location-jungle" }
			} 
	var s_825 = {
		type: "html-keyboard-response",
		stimulus: "Stephanie then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_825_ = {
		type: "html-keyboard-response",
		stimulus: "Stephanie then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 
	var s_826 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_826_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Stephanie_location-jungle",
						"type": "story" }
	} 

	var betweenstory_118 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_827 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jacob walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_827_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jacob walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var s_828 = {
		type: "html-keyboard-response",
		stimulus: "Jacob was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_828_ = {
		type: "html-keyboard-response",
		stimulus: "Jacob was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var q_829 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jacob was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jacob took a quarter from the tip jar.", "While ordering tea, Jacob noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_829_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jacob was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jacob took a quarter from the tip jar.", "While ordering tea, Jacob noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jacob_location-jungle",
						"false_rfc":"subject-Jacob_location-jungle" }
			} 
	var s_830 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacob noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_830_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jacob noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var q_831 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacob noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jacob stole a salt shaker and left.", "After ordering, Noah stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_831_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jacob noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jacob stole a salt shaker and left.", "After ordering, Noah stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jacob_location-jungle",
						"false_rfc":"subject-Noah_location-deep" }
			} 
	var s_832 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jacob stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_832_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jacob stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 
	var s_833 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_833_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jacob_location-jungle",
						"type": "story" }
	} 

	var betweenstory_119 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_834 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Doris walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_834_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Doris walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Doris_location-jungle",
						"type": "story" }
	} 
	var s_835 = {
		type: "html-keyboard-response",
		stimulus: "Doris was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_835_ = {
		type: "html-keyboard-response",
		stimulus: "Doris was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Doris_location-jungle",
						"type": "story" }
	} 
	var q_836 = {
		type: "html-keyboard-response",
		stimulus: "<p> Doris was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Doris noticed the barista’s new mustache.", "Before ordering cake, Doris took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_836_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Doris was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Doris noticed the barista’s new mustache.", "Before ordering cake, Doris took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Doris_location-jungle",
						"false_rfc":"subject-Doris_location-jungle" }
			} 
	var s_837 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Doris noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_837_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Doris noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Doris_location-jungle",
						"type": "story" }
	} 
	var q_838 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Doris noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Doris stole a salt shaker and left.", "Doris then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_838_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Doris noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Doris stole a salt shaker and left.", "Doris then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Doris_location-jungle",
						"false_rfc":"subject-Doris_location-jungle" }
			} 
	var s_839 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Doris stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_839_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Doris stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Doris_location-jungle",
						"type": "story" }
	} 
	var s_840 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_840_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Doris_location-jungle",
						"type": "story" }
	} 

	var betweenstory_120 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_841 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Adam walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_841_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Adam walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var s_842 = {
		type: "html-keyboard-response",
		stimulus: "Adam was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_842_ = {
		type: "html-keyboard-response",
		stimulus: "Adam was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_843 = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Adam noticed the barista’s new mustache.", "Before ordering cake, Adam took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_843_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Adam noticed the barista’s new mustache.", "Before ordering cake, Adam took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-Adam_location-deep" }
			} 
	var s_844 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Adam took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_844_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Adam took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var q_845 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Adam took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Adam then sat by the window, and read a book for hours.", "After ordering, Adam stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_845_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Adam took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Adam then sat by the window, and read a book for hours.", "After ordering, Adam stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Adam_location-deep",
						"false_rfc":"subject-Adam_location-deep" }
			} 
	var s_846 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Adam stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_846_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Adam stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 
	var s_847 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_847_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Adam_location-deep",
						"type": "story" }
	} 

	var betweenstory_121 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_848 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Stephanie walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_848_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Stephanie walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Stephanie_location-deep",
						"type": "story" }
	} 
	var s_849 = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephanie waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_849_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Stephanie waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Stephanie_location-deep",
						"type": "story" }
	} 
	var q_850 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephanie waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Stephanie noticed the barista’s new mustache.", "Before ordering cake, Stephanie took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_850_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Stephanie waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Stephanie noticed the barista’s new mustache.", "Before ordering cake, Stephanie took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Stephanie_location-deep",
						"false_rfc":"subject-Stephanie_location-deep" }
			} 
	var s_851 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Stephanie noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_851_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Stephanie noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Stephanie_location-deep",
						"type": "story" }
	} 
	var q_852 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Stephanie noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Stephanie then sat by the window, and read a book for hours.", "After ordering, Stephanie stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_852_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Stephanie noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Stephanie then sat by the window, and read a book for hours.", "After ordering, Stephanie stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Stephanie_location-deep",
						"false_rfc":"subject-Stephanie_location-deep" }
			} 
	var s_853 = {
		type: "html-keyboard-response",
		stimulus: "Stephanie then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_853_ = {
		type: "html-keyboard-response",
		stimulus: "Stephanie then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Stephanie_location-deep",
						"type": "story" }
	} 
	var s_854 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_854_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Stephanie_location-deep",
						"type": "story" }
	} 

	var betweenstory_122 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_855 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Ronald walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_855_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Ronald walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ronald_location-deep",
						"type": "story" }
	} 
	var s_856 = {
		type: "html-keyboard-response",
		stimulus: "Ronald was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_856_ = {
		type: "html-keyboard-response",
		stimulus: "Ronald was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Ronald_location-deep",
						"type": "story" }
	} 
	var q_857 = {
		type: "html-keyboard-response",
		stimulus: "<p> Ronald was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Carolyn took a quarter from the tip jar.", "Before ordering cake, Ronald took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_857_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Ronald was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Carolyn took a quarter from the tip jar.", "Before ordering cake, Ronald took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Ronald_location-deep",
						"false_rfc":"subject-Carolyn_location-deep" }
			} 
	var s_858 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ronald took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_858_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ronald took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Ronald_location-deep",
						"type": "story" }
	} 
	var q_859 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ronald took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ronald stole a salt shaker and left.", "Ronald then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_859_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ronald took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ronald stole a salt shaker and left.", "Ronald then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Ronald_location-deep",
						"false_rfc":"subject-Ronald_location-deep" }
			} 
	var s_860 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ronald stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_860_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ronald stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Ronald_location-deep",
						"type": "story" }
	} 
	var s_861 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_861_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ronald_location-deep",
						"type": "story" }
	} 

	var betweenstory_123 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_862 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sandra walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_862_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sandra walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var s_863 = {
		type: "html-keyboard-response",
		stimulus: "Today, Sandra waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_863_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Sandra waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var q_864 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sandra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Sandra took a quarter from the tip jar.", "While ordering tea, Sandra noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_864_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sandra waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Sandra took a quarter from the tip jar.", "While ordering tea, Sandra noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Sandra_location-deep",
						"false_rfc":"subject-Sandra_location-deep" }
			} 
	var s_865 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sandra noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_865_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sandra noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var q_866 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sandra noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sandra then sat by the window, and read a book for hours.", "After ordering, Sandra stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_866_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sandra noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sandra then sat by the window, and read a book for hours.", "After ordering, Sandra stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Sandra_location-deep",
						"false_rfc":"subject-Sandra_location-deep" }
			} 
	var s_867 = {
		type: "html-keyboard-response",
		stimulus: "Sandra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_867_ = {
		type: "html-keyboard-response",
		stimulus: "Sandra then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 
	var s_868 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_868_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sandra_location-deep",
						"type": "story" }
	} 

	var betweenstory_124 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_869 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Anthony walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_869_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Anthony walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Anthony_location-deep",
						"type": "story" }
	} 
	var s_870 = {
		type: "html-keyboard-response",
		stimulus: "Anthony was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_870_ = {
		type: "html-keyboard-response",
		stimulus: "Anthony was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Anthony_location-deep",
						"type": "story" }
	} 
	var q_871 = {
		type: "html-keyboard-response",
		stimulus: "<p> Anthony was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Anthony noticed the barista’s new mustache.", "Before ordering cake, Anthony took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_871_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Anthony was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Anthony noticed the barista’s new mustache.", "Before ordering cake, Anthony took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Anthony_location-deep",
						"false_rfc":"subject-Anthony_location-deep" }
			} 
	var s_872 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Anthony took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_872_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Anthony took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Anthony_location-deep",
						"type": "story" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Anthony took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Anthony stole a salt shaker and left.", "Anthony then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_873_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Anthony took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Anthony stole a salt shaker and left.", "Anthony then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Anthony_location-deep",
						"false_rfc":"subject-Anthony_location-deep" }
			} 
	var s_874 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Anthony stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_874_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Anthony stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Anthony_location-deep",
						"type": "story" }
	} 
	var s_875 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_875_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Anthony_location-deep",
						"type": "story" }
	} 

	var betweenstory_125 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_876 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Michelle walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_876_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Michelle walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Michelle_location-deep",
						"type": "story" }
	} 
	var s_877 = {
		type: "html-keyboard-response",
		stimulus: "Michelle was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_877_ = {
		type: "html-keyboard-response",
		stimulus: "Michelle was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Michelle_location-deep",
						"type": "story" }
	} 
	var q_878 = {
		type: "html-keyboard-response",
		stimulus: "<p> Michelle was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Michelle took a quarter from the tip jar.", "While ordering tea, Michelle noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_878_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Michelle was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Michelle took a quarter from the tip jar.", "While ordering tea, Michelle noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Michelle_location-deep",
						"false_rfc":"subject-Michelle_location-deep" }
			} 
	var s_879 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Michelle took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_879_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Michelle took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Michelle_location-deep",
						"type": "story" }
	} 
	var q_880 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Michelle took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Michelle stole a salt shaker and left.", "Michelle then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_880_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Michelle took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Michelle stole a salt shaker and left.", "Michelle then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Michelle_location-deep",
						"false_rfc":"subject-Michelle_location-deep" }
			} 
	var s_881 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Michelle stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_881_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Michelle stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Michelle_location-deep",
						"type": "story" }
	} 
	var s_882 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_882_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Michelle_location-deep",
						"type": "story" }
	} 

	var betweenstory_126 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_883 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Rachel walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_883_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Rachel walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Rachel_location-deep",
						"type": "story" }
	} 
	var s_884 = {
		type: "html-keyboard-response",
		stimulus: "Today, Rachel waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_884_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Rachel waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Rachel_location-deep",
						"type": "story" }
	} 
	var q_885 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Rachel waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacob noticed the barista’s new mustache.", "While ordering tea, Rachel noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_885_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Rachel waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Jacob noticed the barista’s new mustache.", "While ordering tea, Rachel noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Rachel_location-deep",
						"false_rfc":"subject-Jacob_location-jungle" }
			} 
	var s_886 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Rachel noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_886_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Rachel noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Rachel_location-deep",
						"type": "story" }
	} 
	var q_887 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Rachel noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Rachel then sat by the window, and read a book for hours.", "After ordering, Rachel stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_887_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Rachel noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Rachel then sat by the window, and read a book for hours.", "After ordering, Rachel stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Rachel_location-deep",
						"false_rfc":"subject-Rachel_location-deep" }
			} 
	var s_888 = {
		type: "html-keyboard-response",
		stimulus: "Rachel then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_888_ = {
		type: "html-keyboard-response",
		stimulus: "Rachel then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Rachel_location-deep",
						"type": "story" }
	} 
	var s_889 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_889_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Rachel_location-deep",
						"type": "story" }
	} 

	var betweenstory_127 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_890 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Logan walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_890_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Logan walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Logan_location-deep",
						"type": "story" }
	} 
	var s_891 = {
		type: "html-keyboard-response",
		stimulus: "Logan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_891_ = {
		type: "html-keyboard-response",
		stimulus: "Logan was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Logan_location-deep",
						"type": "story" }
	} 
	var q_892 = {
		type: "html-keyboard-response",
		stimulus: "<p> Logan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Logan noticed the barista’s new mustache.", "Before ordering cake, Logan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_892_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Logan was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Logan noticed the barista’s new mustache.", "Before ordering cake, Logan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Logan_location-deep",
						"false_rfc":"subject-Logan_location-deep" }
			} 
	var s_893 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Logan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_893_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Logan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Logan_location-deep",
						"type": "story" }
	} 
	var q_894 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Logan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Logan stole a salt shaker and left.", "Logan then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_894_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Logan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Logan stole a salt shaker and left.", "Logan then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Logan_location-deep",
						"false_rfc":"subject-Logan_location-deep" }
			} 
	var s_895 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Logan stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_895_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Logan stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Logan_location-deep",
						"type": "story" }
	} 
	var s_896 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_896_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Logan_location-deep",
						"type": "story" }
	} 

	var betweenstory_128 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_897 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Ashley walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_897_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Ashley walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ashley_location-deep",
						"type": "story" }
	} 
	var s_898 = {
		type: "html-keyboard-response",
		stimulus: "Ashley was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_898_ = {
		type: "html-keyboard-response",
		stimulus: "Ashley was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Ashley_location-deep",
						"type": "story" }
	} 
	var q_899 = {
		type: "html-keyboard-response",
		stimulus: "<p> Ashley was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ashley noticed the barista’s new mustache.", "Before ordering cake, Ashley took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_899_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Ashley was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ashley noticed the barista’s new mustache.", "Before ordering cake, Ashley took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Ashley_location-deep",
						"false_rfc":"subject-Ashley_location-deep" }
			} 
	var s_900 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ashley took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_900_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ashley took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Ashley_location-deep",
						"type": "story" }
	} 
	var q_901 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ashley took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ashley stole a salt shaker and left.", "After ordering, Donald stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_901_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ashley took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ashley stole a salt shaker and left.", "After ordering, Donald stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Ashley_location-deep",
						"false_rfc":"subject-Donald_location-deep" }
			} 
	var s_902 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ashley stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_902_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ashley stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Ashley_location-deep",
						"type": "story" }
	} 
	var s_903 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_903_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ashley_location-deep",
						"type": "story" }
	} 

	var betweenstory_129 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_904 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kimberly walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_904_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kimberly walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 
	var s_905 = {
		type: "html-keyboard-response",
		stimulus: "Kimberly was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_905_ = {
		type: "html-keyboard-response",
		stimulus: "Kimberly was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 
	var q_906 = {
		type: "html-keyboard-response",
		stimulus: "<p> Kimberly was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Kimberly noticed the barista’s new mustache.", "Before ordering cake, Kimberly took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_906_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Kimberly was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Kimberly noticed the barista’s new mustache.", "Before ordering cake, Kimberly took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Kimberly_location-deep",
						"false_rfc":"subject-Kimberly_location-deep" }
			} 
	var s_907 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kimberly took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_907_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kimberly took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 
	var q_908 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kimberly took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Kimberly stole a salt shaker and left.", "Kimberly then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_908_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kimberly took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Kimberly stole a salt shaker and left.", "Kimberly then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Kimberly_location-deep",
						"false_rfc":"subject-Kimberly_location-deep" }
			} 
	var s_909 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kimberly stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_909_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kimberly stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 
	var s_910 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_910_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Kimberly_location-deep",
						"type": "story" }
	} 

	var betweenstory_130 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_911 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Russell walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_911_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Russell walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 
	var s_912 = {
		type: "html-keyboard-response",
		stimulus: "Russell was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_912_ = {
		type: "html-keyboard-response",
		stimulus: "Russell was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 
	var q_913 = {
		type: "html-keyboard-response",
		stimulus: "<p> Russell was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Timothy took a quarter from the tip jar.", "Before ordering cake, Russell took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_913_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Russell was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Timothy took a quarter from the tip jar.", "Before ordering cake, Russell took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Russell_location-deep",
						"false_rfc":"subject-Timothy_location-jungle" }
			} 
	var s_914 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Russell took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_914_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Russell took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 
	var q_915 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Russell took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Russell then sat by the window, and read a book for hours.", "After ordering, Russell stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_915_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Russell took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Russell then sat by the window, and read a book for hours.", "After ordering, Russell stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Russell_location-deep",
						"false_rfc":"subject-Russell_location-deep" }
			} 
	var s_916 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Russell stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_916_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Russell stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 
	var s_917 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_917_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Russell_location-deep",
						"type": "story" }
	} 

	var betweenstory_131 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_918 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Laura walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_918_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Laura walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Laura_location-deep",
						"type": "story" }
	} 
	var s_919 = {
		type: "html-keyboard-response",
		stimulus: "Today, Laura waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_919_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Laura waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Laura_location-deep",
						"type": "story" }
	} 
	var q_920 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Laura waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Laura took a quarter from the tip jar.", "While ordering tea, Laura noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_920_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Laura waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Laura took a quarter from the tip jar.", "While ordering tea, Laura noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Laura_location-deep",
						"false_rfc":"subject-Laura_location-deep" }
			} 
	var s_921 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Laura noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_921_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Laura noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Laura_location-deep",
						"type": "story" }
	} 
	var q_922 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Laura noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Laura stole a salt shaker and left.", "Laura then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_922_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Laura noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Laura stole a salt shaker and left.", "Laura then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Laura_location-deep",
						"false_rfc":"subject-Laura_location-deep" }
			} 
	var s_923 = {
		type: "html-keyboard-response",
		stimulus: "Laura then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_923_ = {
		type: "html-keyboard-response",
		stimulus: "Laura then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Laura_location-deep",
						"type": "story" }
	} 
	var s_924 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_924_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Laura_location-deep",
						"type": "story" }
	} 

	var betweenstory_132 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_925 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Brittany walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_925_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Brittany walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Brittany_location-deep",
						"type": "story" }
	} 
	var s_926 = {
		type: "html-keyboard-response",
		stimulus: "Brittany was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_926_ = {
		type: "html-keyboard-response",
		stimulus: "Brittany was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Brittany_location-deep",
						"type": "story" }
	} 
	var q_927 = {
		type: "html-keyboard-response",
		stimulus: "<p> Brittany was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Brittany took a quarter from the tip jar.", "While ordering tea, Brittany noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_927_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Brittany was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Brittany took a quarter from the tip jar.", "While ordering tea, Brittany noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Brittany_location-deep",
						"false_rfc":"subject-Brittany_location-deep" }
			} 
	var s_928 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Brittany took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_928_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Brittany took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Brittany_location-deep",
						"type": "story" }
	} 
	var q_929 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Brittany took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Brittany then sat by the window, and read a book for hours.", "After ordering, Brittany stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_929_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Brittany took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Brittany then sat by the window, and read a book for hours.", "After ordering, Brittany stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Brittany_location-deep",
						"false_rfc":"subject-Brittany_location-deep" }
			} 
	var s_930 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Brittany stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_930_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Brittany stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Brittany_location-deep",
						"type": "story" }
	} 
	var s_931 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_931_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Brittany_location-deep",
						"type": "story" }
	} 

	var betweenstory_133 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_932 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Andrew walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_932_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Andrew walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Andrew_location-deep",
						"type": "story" }
	} 
	var s_933 = {
		type: "html-keyboard-response",
		stimulus: "Today, Andrew waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_933_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Andrew waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Andrew_location-deep",
						"type": "story" }
	} 
	var q_934 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Andrew waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Andrew took a quarter from the tip jar.", "While ordering tea, Andrew noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_934_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Andrew waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Andrew took a quarter from the tip jar.", "While ordering tea, Andrew noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Andrew_location-deep",
						"false_rfc":"subject-Andrew_location-deep" }
			} 
	var s_935 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Andrew noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_935_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Andrew noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Andrew_location-deep",
						"type": "story" }
	} 
	var q_936 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Andrew noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Andrew stole a salt shaker and left.", "Andrew then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_936_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Andrew noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Andrew stole a salt shaker and left.", "Andrew then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Andrew_location-deep",
						"false_rfc":"subject-Andrew_location-deep" }
			} 
	var s_937 = {
		type: "html-keyboard-response",
		stimulus: "Andrew then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_937_ = {
		type: "html-keyboard-response",
		stimulus: "Andrew then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Andrew_location-deep",
						"type": "story" }
	} 
	var s_938 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_938_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Andrew_location-deep",
						"type": "story" }
	} 

	var betweenstory_134 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_939 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Judy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_939_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Judy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Judy_location-deep",
						"type": "story" }
	} 
	var s_940 = {
		type: "html-keyboard-response",
		stimulus: "Judy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_940_ = {
		type: "html-keyboard-response",
		stimulus: "Judy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Judy_location-deep",
						"type": "story" }
	} 
	var q_941 = {
		type: "html-keyboard-response",
		stimulus: "<p> Judy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Judy took a quarter from the tip jar.", "Before ordering cake, Edward took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_941_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Judy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Judy took a quarter from the tip jar.", "Before ordering cake, Edward took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Judy_location-deep",
						"false_rfc":"subject-Edward_location-deep" }
			} 
	var s_942 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Judy took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_942_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Judy took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Judy_location-deep",
						"type": "story" }
	} 
	var q_943 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Judy took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Judy then sat by the window, and read a book for hours.", "After ordering, Judy stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_943_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Judy took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Judy then sat by the window, and read a book for hours.", "After ordering, Judy stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Judy_location-deep",
						"false_rfc":"subject-Judy_location-deep" }
			} 
	var s_944 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Judy stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_944_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Judy stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Judy_location-deep",
						"type": "story" }
	} 
	var s_945 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_945_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Judy_location-deep",
						"type": "story" }
	} 

	var betweenstory_135 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_946 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jose walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_946_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jose walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jose_location-deep",
						"type": "story" }
	} 
	var s_947 = {
		type: "html-keyboard-response",
		stimulus: "Jose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_947_ = {
		type: "html-keyboard-response",
		stimulus: "Jose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jose_location-deep",
						"type": "story" }
	} 
	var q_948 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jose took a quarter from the tip jar.", "While ordering tea, Jose noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_948_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jose took a quarter from the tip jar.", "While ordering tea, Jose noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jose_location-deep",
						"false_rfc":"subject-Jose_location-deep" }
			} 
	var s_949 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jose took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_949_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jose took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jose_location-deep",
						"type": "story" }
	} 
	var q_950 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jose took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jose stole a salt shaker and left.", "Jose then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_950_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jose took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jose stole a salt shaker and left.", "Jose then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jose_location-deep",
						"false_rfc":"subject-Jose_location-deep" }
			} 
	var s_951 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jose stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_951_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jose stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jose_location-deep",
						"type": "story" }
	} 
	var s_952 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_952_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jose_location-deep",
						"type": "story" }
	} 

	var betweenstory_136 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_953 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kevin walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_953_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kevin walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 
	var s_954 = {
		type: "html-keyboard-response",
		stimulus: "Kevin was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_954_ = {
		type: "html-keyboard-response",
		stimulus: "Kevin was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 
	var q_955 = {
		type: "html-keyboard-response",
		stimulus: "<p> Kevin was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kevin took a quarter from the tip jar.", "While ordering tea, Kevin noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_955_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Kevin was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kevin took a quarter from the tip jar.", "While ordering tea, Kevin noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Kevin_location-deep",
						"false_rfc":"subject-Kevin_location-deep" }
			} 
	var s_956 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kevin took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_956_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kevin took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 
	var q_957 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kevin took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Kevin then sat by the window, and read a book for hours.", "After ordering, Kevin stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_957_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kevin took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Kevin then sat by the window, and read a book for hours.", "After ordering, Kevin stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Kevin_location-deep",
						"false_rfc":"subject-Kevin_location-deep" }
			} 
	var s_958 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kevin stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_958_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kevin stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 
	var s_959 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_959_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 

	var betweenstory_137 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_960 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jeffrey walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_960_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jeffrey walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var s_961 = {
		type: "html-keyboard-response",
		stimulus: "Jeffrey was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_961_ = {
		type: "html-keyboard-response",
		stimulus: "Jeffrey was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var q_962 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jeffrey was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jeffrey took a quarter from the tip jar.", "While ordering tea, Jeffrey noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_962_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jeffrey was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jeffrey took a quarter from the tip jar.", "While ordering tea, Jeffrey noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Jeffrey_location-deep",
						"false_rfc":"subject-Jeffrey_location-deep" }
			} 
	var s_963 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jeffrey took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_963_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Jeffrey took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var q_964 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jeffrey took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jeffrey then sat by the window, and read a book for hours.", "After ordering, Jeffrey stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_964_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Jeffrey took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Jeffrey then sat by the window, and read a book for hours.", "After ordering, Jeffrey stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jeffrey_location-deep",
						"false_rfc":"subject-Jeffrey_location-deep" }
			} 
	var s_965 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jeffrey stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_965_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jeffrey stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 
	var s_966 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_966_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jeffrey_location-deep",
						"type": "story" }
	} 

	var betweenstory_138 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_967 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Daniel walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_967_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Daniel walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Daniel_location-deep",
						"type": "story" }
	} 
	var s_968 = {
		type: "html-keyboard-response",
		stimulus: "Daniel was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_968_ = {
		type: "html-keyboard-response",
		stimulus: "Daniel was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Daniel_location-deep",
						"type": "story" }
	} 
	var q_969 = {
		type: "html-keyboard-response",
		stimulus: "<p> Daniel was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Ronald took a quarter from the tip jar.", "Before ordering cake, Daniel took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_969_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Daniel was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Ronald took a quarter from the tip jar.", "Before ordering cake, Daniel took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Daniel_location-deep",
						"false_rfc":"subject-Ronald_location-jungle" }
			} 
	var s_970 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Daniel took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_970_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Daniel took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Daniel_location-deep",
						"type": "story" }
	} 
	var q_971 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Daniel took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Daniel then sat by the window, and read a book for hours.", "After ordering, Daniel stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_971_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Daniel took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Daniel then sat by the window, and read a book for hours.", "After ordering, Daniel stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Daniel_location-deep",
						"false_rfc":"subject-Daniel_location-deep" }
			} 
	var s_972 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Daniel stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_972_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Daniel stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Daniel_location-deep",
						"type": "story" }
	} 
	var s_973 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_973_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Daniel_location-deep",
						"type": "story" }
	} 

	var betweenstory_139 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_974 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sean walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_974_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sean walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sean_location-deep",
						"type": "story" }
	} 
	var s_975 = {
		type: "html-keyboard-response",
		stimulus: "Today, Sean waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_975_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Sean waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Sean_location-deep",
						"type": "story" }
	} 
	var q_976 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sean waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Brandon noticed the barista’s new mustache.", "While ordering tea, Sean noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_976_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sean waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Brandon noticed the barista’s new mustache.", "While ordering tea, Sean noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Sean_location-deep",
						"false_rfc":"subject-Brandon_location-jungle" }
			} 
	var s_977 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sean noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_977_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sean noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Sean_location-deep",
						"type": "story" }
	} 
	var q_978 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sean noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sean then sat by the window, and read a book for hours.", "Alice then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_978_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sean noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sean then sat by the window, and read a book for hours.", "Alice then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Sean_location-deep",
						"false_rfc":"subject-Alice_location-deep" }
			} 
	var s_979 = {
		type: "html-keyboard-response",
		stimulus: "Sean then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_979_ = {
		type: "html-keyboard-response",
		stimulus: "Sean then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Sean_location-deep",
						"type": "story" }
	} 
	var s_980 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_980_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sean_location-deep",
						"type": "story" }
	} 

	var betweenstory_140 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_981 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Henry walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_981_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Henry walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Henry_location-deep",
						"type": "story" }
	} 
	var s_982 = {
		type: "html-keyboard-response",
		stimulus: "Henry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_982_ = {
		type: "html-keyboard-response",
		stimulus: "Henry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Henry_location-deep",
						"type": "story" }
	} 
	var q_983 = {
		type: "html-keyboard-response",
		stimulus: "<p> Henry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Henry took a quarter from the tip jar.", "While ordering tea, Henry noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_983_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Henry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Henry took a quarter from the tip jar.", "While ordering tea, Henry noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Henry_location-deep",
						"false_rfc":"subject-Henry_location-deep" }
			} 
	var s_984 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Henry took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_984_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Henry took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Henry_location-deep",
						"type": "story" }
	} 
	var q_985 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Henry took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Henry stole a salt shaker and left.", "Henry then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_985_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Henry took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Henry stole a salt shaker and left.", "Henry then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Henry_location-deep",
						"false_rfc":"subject-Henry_location-deep" }
			} 
	var s_986 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Henry stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_986_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Henry stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Henry_location-deep",
						"type": "story" }
	} 
	var s_987 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_987_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Henry_location-deep",
						"type": "story" }
	} 

	var betweenstory_141 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_988 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Patricia walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_988_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Patricia walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 
	var s_989 = {
		type: "html-keyboard-response",
		stimulus: "Patricia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_989_ = {
		type: "html-keyboard-response",
		stimulus: "Patricia was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 
	var q_990 = {
		type: "html-keyboard-response",
		stimulus: "<p> Patricia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Patricia noticed the barista’s new mustache.", "Before ordering cake, Patricia took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_990_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Patricia was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Patricia noticed the barista’s new mustache.", "Before ordering cake, Patricia took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Patricia_location-deep",
						"false_rfc":"subject-Patricia_location-deep" }
			} 
	var s_991 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Patricia took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_991_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Patricia took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 
	var q_992 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Patricia took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Patricia then sat by the window, and read a book for hours.", "After ordering, Patricia stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_992_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Patricia took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Patricia then sat by the window, and read a book for hours.", "After ordering, Patricia stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Patricia_location-deep",
						"false_rfc":"subject-Patricia_location-deep" }
			} 
	var s_993 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Patricia stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_993_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Patricia stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 
	var s_994 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_994_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Patricia_location-deep",
						"type": "story" }
	} 

	var betweenstory_142 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_995 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Nancy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_995_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Nancy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Nancy_location-deep",
						"type": "story" }
	} 
	var s_996 = {
		type: "html-keyboard-response",
		stimulus: "Today, Nancy waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_996_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Nancy waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Nancy_location-deep",
						"type": "story" }
	} 
	var q_997 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Nancy waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Nancy took a quarter from the tip jar.", "While ordering tea, Nancy noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_997_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Nancy waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Nancy took a quarter from the tip jar.", "While ordering tea, Nancy noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Nancy_location-deep",
						"false_rfc":"subject-Nancy_location-deep" }
			} 
	var s_998 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Nancy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_998_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Nancy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Nancy_location-deep",
						"type": "story" }
	} 
	var q_999 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Nancy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Nancy then sat by the window, and read a book for hours.", "After ordering, Nancy stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_999_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Nancy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Nancy then sat by the window, and read a book for hours.", "After ordering, Nancy stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Nancy_location-deep",
						"false_rfc":"subject-Nancy_location-deep" }
			} 
	var s_1000 = {
		type: "html-keyboard-response",
		stimulus: "Nancy then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1000_ = {
		type: "html-keyboard-response",
		stimulus: "Nancy then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Nancy_location-deep",
						"type": "story" }
	} 
	var s_1001 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1001_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Nancy_location-deep",
						"type": "story" }
	} 

	var betweenstory_143 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1002 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Joseph walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1002_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Joseph walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Joseph_location-deep",
						"type": "story" }
	} 
	var s_1003 = {
		type: "html-keyboard-response",
		stimulus: "Today, Joseph waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1003_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Joseph waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Joseph_location-deep",
						"type": "story" }
	} 
	var q_1004 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Joseph waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Joseph took a quarter from the tip jar.", "While ordering tea, Joseph noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1004_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Joseph waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Joseph took a quarter from the tip jar.", "While ordering tea, Joseph noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Joseph_location-deep",
						"false_rfc":"subject-Joseph_location-deep" }
			} 
	var s_1005 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Joseph noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1005_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Joseph noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Joseph_location-deep",
						"type": "story" }
	} 
	var q_1006 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Joseph noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Joseph stole a salt shaker and left.", "Joseph then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1006_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Joseph noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Joseph stole a salt shaker and left.", "Joseph then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Joseph_location-deep",
						"false_rfc":"subject-Joseph_location-deep" }
			} 
	var s_1007 = {
		type: "html-keyboard-response",
		stimulus: "Joseph then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1007_ = {
		type: "html-keyboard-response",
		stimulus: "Joseph then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Joseph_location-deep",
						"type": "story" }
	} 
	var s_1008 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1008_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Joseph_location-deep",
						"type": "story" }
	} 

	var betweenstory_144 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1009 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Victoria walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1009_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Victoria walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Victoria_location-deep",
						"type": "story" }
	} 
	var s_1010 = {
		type: "html-keyboard-response",
		stimulus: "Victoria was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1010_ = {
		type: "html-keyboard-response",
		stimulus: "Victoria was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Victoria_location-deep",
						"type": "story" }
	} 
	var q_1011 = {
		type: "html-keyboard-response",
		stimulus: "<p> Victoria was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Victoria took a quarter from the tip jar.", "While ordering tea, Victoria noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1011_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Victoria was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Victoria took a quarter from the tip jar.", "While ordering tea, Victoria noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Victoria_location-deep",
						"false_rfc":"subject-Victoria_location-deep" }
			} 
	var s_1012 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Victoria took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1012_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Victoria took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Victoria_location-deep",
						"type": "story" }
	} 
	var q_1013 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Victoria took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Victoria then sat by the window, and read a book for hours.", "After ordering, Victoria stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1013_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Victoria took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Victoria then sat by the window, and read a book for hours.", "After ordering, Victoria stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Victoria_location-deep",
						"false_rfc":"subject-Victoria_location-deep" }
			} 
	var s_1014 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Victoria stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1014_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Victoria stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Victoria_location-deep",
						"type": "story" }
	} 
	var s_1015 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1015_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Victoria_location-deep",
						"type": "story" }
	} 

	var betweenstory_145 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1016 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sharon walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1016_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Sharon walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sharon_location-deep",
						"type": "story" }
	} 
	var s_1017 = {
		type: "html-keyboard-response",
		stimulus: "Today, Sharon waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1017_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Sharon waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Sharon_location-deep",
						"type": "story" }
	} 
	var q_1018 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sharon waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Sharon took a quarter from the tip jar.", "While ordering tea, Sharon noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1018_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sharon waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Sharon took a quarter from the tip jar.", "While ordering tea, Sharon noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Sharon_location-deep",
						"false_rfc":"subject-Sharon_location-deep" }
			} 
	var s_1019 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sharon noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1019_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sharon noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Sharon_location-deep",
						"type": "story" }
	} 
	var q_1020 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sharon noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sharon then sat by the window, and read a book for hours.", "After ordering, Sharon stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1020_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sharon noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Sharon then sat by the window, and read a book for hours.", "After ordering, Sharon stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Sharon_location-deep",
						"false_rfc":"subject-Sharon_location-deep" }
			} 
	var s_1021 = {
		type: "html-keyboard-response",
		stimulus: "Sharon then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1021_ = {
		type: "html-keyboard-response",
		stimulus: "Sharon then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Sharon_location-deep",
						"type": "story" }
	} 
	var s_1022 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1022_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sharon_location-deep",
						"type": "story" }
	} 

	var betweenstory_146 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1023 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Emma walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1023_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Emma walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Emma_location-deep",
						"type": "story" }
	} 
	var s_1024 = {
		type: "html-keyboard-response",
		stimulus: "Today, Emma waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1024_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Emma waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Emma_location-deep",
						"type": "story" }
	} 
	var q_1025 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Emma waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emma noticed the barista’s new mustache.", "While ordering tea, Louis noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1025_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Emma waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Emma noticed the barista’s new mustache.", "While ordering tea, Louis noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Emma_location-deep",
						"false_rfc":"subject-Louis_location-deep" }
			} 
	var s_1026 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emma noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1026_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emma noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Emma_location-deep",
						"type": "story" }
	} 
	var q_1027 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emma noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Emma then sat by the window, and read a book for hours.", "After ordering, Emma stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1027_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emma noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Emma then sat by the window, and read a book for hours.", "After ordering, Emma stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Emma_location-deep",
						"false_rfc":"subject-Emma_location-deep" }
			} 
	var s_1028 = {
		type: "html-keyboard-response",
		stimulus: "Emma then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1028_ = {
		type: "html-keyboard-response",
		stimulus: "Emma then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Emma_location-deep",
						"type": "story" }
	} 
	var s_1029 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1029_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Emma_location-deep",
						"type": "story" }
	} 

	var betweenstory_147 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1030 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jordan walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1030_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jordan walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 
	var s_1031 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jordan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1031_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jordan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 
	var q_1032 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jordan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jordan took a quarter from the tip jar.", "While ordering tea, Jordan noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1032_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jordan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jordan took a quarter from the tip jar.", "While ordering tea, Jordan noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jordan_location-deep",
						"false_rfc":"subject-Jordan_location-deep" }
			} 
	var s_1033 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jordan noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1033_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jordan noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 
	var q_1034 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jordan noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jordan then sat by the window, and read a book for hours.", "After ordering, Jordan stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1034_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jordan noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jordan then sat by the window, and read a book for hours.", "After ordering, Jordan stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jordan_location-deep",
						"false_rfc":"subject-Jordan_location-deep" }
			} 
	var s_1035 = {
		type: "html-keyboard-response",
		stimulus: "Jordan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1035_ = {
		type: "html-keyboard-response",
		stimulus: "Jordan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 
	var s_1036 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1036_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jordan_location-deep",
						"type": "story" }
	} 

	var betweenstory_148 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1037 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Amy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1037_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Amy walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 
	var s_1038 = {
		type: "html-keyboard-response",
		stimulus: "Amy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1038_ = {
		type: "html-keyboard-response",
		stimulus: "Amy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 
	var q_1039 = {
		type: "html-keyboard-response",
		stimulus: "<p> Amy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Amy noticed the barista’s new mustache.", "Before ordering cake, Amy took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1039_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Amy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Amy noticed the barista’s new mustache.", "Before ordering cake, Amy took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Amy_location-deep",
						"false_rfc":"subject-Amy_location-deep" }
			} 
	var s_1040 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Amy took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1040_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Amy took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 
	var q_1041 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Amy took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Amy then sat by the window, and read a book for hours.", "After ordering, Amy stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1041_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Amy took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Amy then sat by the window, and read a book for hours.", "After ordering, Amy stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Amy_location-deep",
						"false_rfc":"subject-Amy_location-deep" }
			} 
	var s_1042 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amy stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1042_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amy stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 
	var s_1043 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1043_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Amy_location-deep",
						"type": "story" }
	} 

	var betweenstory_149 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1044 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Janet walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1044_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Janet walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Janet_location-deep",
						"type": "story" }
	} 
	var s_1045 = {
		type: "html-keyboard-response",
		stimulus: "Today, Janet waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1045_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Janet waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Janet_location-deep",
						"type": "story" }
	} 
	var q_1046 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Janet waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Janet noticed the barista’s new mustache.", "While ordering tea, Frank noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1046_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Janet waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Janet noticed the barista’s new mustache.", "While ordering tea, Frank noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Janet_location-deep",
						"false_rfc":"subject-Frank_location-deep" }
			} 
	var s_1047 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Janet noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1047_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Janet noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Janet_location-deep",
						"type": "story" }
	} 
	var q_1048 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Janet noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Angela then sat by the window, and read a book for hours.", "Janet then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1048_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Janet noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Angela then sat by the window, and read a book for hours.", "Janet then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Janet_location-deep",
						"false_rfc":"subject-Angela_location-jungle" }
			} 
	var s_1049 = {
		type: "html-keyboard-response",
		stimulus: "Janet then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1049_ = {
		type: "html-keyboard-response",
		stimulus: "Janet then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Janet_location-deep",
						"type": "story" }
	} 
	var s_1050 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1050_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Janet_location-deep",
						"type": "story" }
	} 

	var betweenstory_150 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1051 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Samuel walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1051_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Samuel walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var s_1052 = {
		type: "html-keyboard-response",
		stimulus: "Today, Samuel waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1052_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Samuel waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var q_1053 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Samuel waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Samuel noticed the barista’s new mustache.", "Before ordering cake, Samuel took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1053_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Samuel waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Samuel noticed the barista’s new mustache.", "Before ordering cake, Samuel took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Samuel_location-deep",
						"false_rfc":"subject-Samuel_location-deep" }
			} 
	var s_1054 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Samuel noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1054_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Samuel noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var q_1055 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Samuel noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Samuel then sat by the window, and read a book for hours.", "Dorothy then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1055_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Samuel noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Samuel then sat by the window, and read a book for hours.", "Dorothy then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Samuel_location-deep",
						"false_rfc":"subject-Dorothy_location-deep" }
			} 
	var s_1056 = {
		type: "html-keyboard-response",
		stimulus: "Samuel then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1056_ = {
		type: "html-keyboard-response",
		stimulus: "Samuel then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 
	var s_1057 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1057_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Samuel_location-deep",
						"type": "story" }
	} 

	var betweenstory_151 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1058 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Ralph walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1058_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Ralph walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Ralph_location-deep",
						"type": "story" }
	} 
	var s_1059 = {
		type: "html-keyboard-response",
		stimulus: "Ralph was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1059_ = {
		type: "html-keyboard-response",
		stimulus: "Ralph was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Ralph_location-deep",
						"type": "story" }
	} 
	var q_1060 = {
		type: "html-keyboard-response",
		stimulus: "<p> Ralph was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ralph noticed the barista’s new mustache.", "Before ordering cake, Ralph took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1060_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Ralph was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Ralph noticed the barista’s new mustache.", "Before ordering cake, Ralph took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Ralph_location-deep",
						"false_rfc":"subject-Ralph_location-deep" }
			} 
	var s_1061 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ralph took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1061_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Ralph took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Ralph_location-deep",
						"type": "story" }
	} 
	var q_1062 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ralph took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ralph stole a salt shaker and left.", "Ralph then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1062_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Ralph took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Ralph stole a salt shaker and left.", "Ralph then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Ralph_location-deep",
						"false_rfc":"subject-Ralph_location-deep" }
			} 
	var s_1063 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ralph stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1063_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Ralph stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Ralph_location-deep",
						"type": "story" }
	} 
	var s_1064 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1064_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Ralph_location-deep",
						"type": "story" }
	} 

	var betweenstory_152 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1065 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kathleen walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1065_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kathleen walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 
	var s_1066 = {
		type: "html-keyboard-response",
		stimulus: "Today, Kathleen waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1066_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Kathleen waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 
	var q_1067 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Kathleen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Brenda noticed the barista’s new mustache.", "While ordering tea, Kathleen noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1067_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Kathleen waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Brenda noticed the barista’s new mustache.", "While ordering tea, Kathleen noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Kathleen_location-deep",
						"false_rfc":"subject-Brenda_location-jungle" }
			} 
	var s_1068 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Kathleen noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1068_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Kathleen noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 
	var q_1069 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Kathleen noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Kathleen then sat by the window, and read a book for hours.", "Benjamin then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1069_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Kathleen noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Kathleen then sat by the window, and read a book for hours.", "Benjamin then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Kathleen_location-deep",
						"false_rfc":"subject-Benjamin_location-jungle" }
			} 
	var s_1070 = {
		type: "html-keyboard-response",
		stimulus: "Kathleen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1070_ = {
		type: "html-keyboard-response",
		stimulus: "Kathleen then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 
	var s_1071 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1071_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Kathleen_location-deep",
						"type": "story" }
	} 

	var betweenstory_153 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1072 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Cheryl walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1072_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Cheryl walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 
	var s_1073 = {
		type: "html-keyboard-response",
		stimulus: "Today, Cheryl waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1073_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Cheryl waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 
	var q_1074 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Cheryl waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Cheryl noticed the barista’s new mustache.", "Before ordering cake, Cheryl took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1074_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Cheryl waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Cheryl noticed the barista’s new mustache.", "Before ordering cake, Cheryl took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Cheryl_location-deep",
						"false_rfc":"subject-Cheryl_location-deep" }
			} 
	var s_1075 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Cheryl noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1075_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Cheryl noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 
	var q_1076 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Cheryl noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Cheryl then sat by the window, and read a book for hours.", "After ordering, Cheryl stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1076_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Cheryl noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Cheryl then sat by the window, and read a book for hours.", "After ordering, Cheryl stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Cheryl_location-deep",
						"false_rfc":"subject-Cheryl_location-deep" }
			} 
	var s_1077 = {
		type: "html-keyboard-response",
		stimulus: "Cheryl then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1077_ = {
		type: "html-keyboard-response",
		stimulus: "Cheryl then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 
	var s_1078 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1078_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Cheryl_location-deep",
						"type": "story" }
	} 

	var betweenstory_154 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1079 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jennifer walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1079_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Jennifer walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jennifer_location-deep",
						"type": "story" }
	} 
	var s_1080 = {
		type: "html-keyboard-response",
		stimulus: "Today, Jennifer waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1080_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Jennifer waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Jennifer_location-deep",
						"type": "story" }
	} 
	var q_1081 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jennifer waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jennifer took a quarter from the tip jar.", "While ordering tea, Jennifer noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1081_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Jennifer waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jennifer took a quarter from the tip jar.", "While ordering tea, Jennifer noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jennifer_location-deep",
						"false_rfc":"subject-Jennifer_location-deep" }
			} 
	var s_1082 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jennifer noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1082_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jennifer noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jennifer_location-deep",
						"type": "story" }
	} 
	var q_1083 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jennifer noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jennifer then sat by the window, and read a book for hours.", "After ordering, Jennifer stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1083_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jennifer noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Jennifer then sat by the window, and read a book for hours.", "After ordering, Jennifer stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Jennifer_location-deep",
						"false_rfc":"subject-Jennifer_location-deep" }
			} 
	var s_1084 = {
		type: "html-keyboard-response",
		stimulus: "Jennifer then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1084_ = {
		type: "html-keyboard-response",
		stimulus: "Jennifer then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Jennifer_location-deep",
						"type": "story" }
	} 
	var s_1085 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1085_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jennifer_location-deep",
						"type": "story" }
	} 

	var betweenstory_155 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1086 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Elizabeth walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1086_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Elizabeth walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Elizabeth_location-deep",
						"type": "story" }
	} 
	var s_1087 = {
		type: "html-keyboard-response",
		stimulus: "Today, Elizabeth waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1087_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Elizabeth waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Elizabeth_location-deep",
						"type": "story" }
	} 
	var q_1088 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Elizabeth waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Elizabeth took a quarter from the tip jar.", "While ordering tea, Elizabeth noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1088_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Elizabeth waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Elizabeth took a quarter from the tip jar.", "While ordering tea, Elizabeth noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Elizabeth_location-deep",
						"false_rfc":"subject-Elizabeth_location-deep" }
			} 
	var s_1089 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Elizabeth noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1089_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Elizabeth noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Elizabeth_location-deep",
						"type": "story" }
	} 
	var q_1090 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Elizabeth noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Elizabeth then sat by the window, and read a book for hours.", "After ordering, Elizabeth stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1090_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Elizabeth noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Elizabeth then sat by the window, and read a book for hours.", "After ordering, Elizabeth stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Elizabeth_location-deep",
						"false_rfc":"subject-Elizabeth_location-deep" }
			} 
	var s_1091 = {
		type: "html-keyboard-response",
		stimulus: "Elizabeth then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1091_ = {
		type: "html-keyboard-response",
		stimulus: "Elizabeth then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Elizabeth_location-deep",
						"type": "story" }
	} 
	var s_1092 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1092_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Elizabeth_location-deep",
						"type": "story" }
	} 

	var betweenstory_156 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1093 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kevin walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1093_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Kevin walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 
	var s_1094 = {
		type: "html-keyboard-response",
		stimulus: "Kevin was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1094_ = {
		type: "html-keyboard-response",
		stimulus: "Kevin was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 
	var q_1095 = {
		type: "html-keyboard-response",
		stimulus: "<p> Kevin was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kevin took a quarter from the tip jar.", "While ordering tea, Kevin noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1095_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Kevin was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kevin took a quarter from the tip jar.", "While ordering tea, Kevin noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Kevin_location-deep",
						"false_rfc":"subject-Kevin_location-deep" }
			} 
	var s_1096 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kevin took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1096_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kevin took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 
	var q_1097 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kevin took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Kevin then sat by the window, and read a book for hours.", "After ordering, Kevin stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1097_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kevin took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Kevin then sat by the window, and read a book for hours.", "After ordering, Kevin stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Kevin_location-deep",
						"false_rfc":"subject-Kevin_location-deep" }
			} 
	var s_1098 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kevin stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1098_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kevin stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 
	var s_1099 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1099_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Kevin_location-deep",
						"type": "story" }
	} 

	var betweenstory_157 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1100 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Tyler walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1100_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Tyler walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Tyler_location-deep",
						"type": "story" }
	} 
	var s_1101 = {
		type: "html-keyboard-response",
		stimulus: "Today, Tyler waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1101_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Tyler waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Tyler_location-deep",
						"type": "story" }
	} 
	var q_1102 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Tyler waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Tyler noticed the barista’s new mustache.", "While ordering tea, Natalie noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1102_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Tyler waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Tyler noticed the barista’s new mustache.", "While ordering tea, Natalie noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Tyler_location-deep",
						"false_rfc":"subject-Natalie_location-jungle" }
			} 
	var s_1103 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Tyler noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1103_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Tyler noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Tyler_location-deep",
						"type": "story" }
	} 
	var q_1104 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Tyler noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Tyler then sat by the window, and read a book for hours.", "Sarah then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1104_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Tyler noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Tyler then sat by the window, and read a book for hours.", "Sarah then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Tyler_location-deep",
						"false_rfc":"subject-Sarah_location-deep" }
			} 
	var s_1105 = {
		type: "html-keyboard-response",
		stimulus: "Tyler then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1105_ = {
		type: "html-keyboard-response",
		stimulus: "Tyler then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Tyler_location-deep",
						"type": "story" }
	} 
	var s_1106 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1106_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Tyler_location-deep",
						"type": "story" }
	} 

	var betweenstory_158 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1107 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Michael walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1107_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Michael walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Michael_location-deep",
						"type": "story" }
	} 
	var s_1108 = {
		type: "html-keyboard-response",
		stimulus: "Today, Michael waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1108_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Michael waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Michael_location-deep",
						"type": "story" }
	} 
	var q_1109 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Michael waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Michael noticed the barista’s new mustache.", "Before ordering cake, Michael took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1109_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Michael waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Michael noticed the barista’s new mustache.", "Before ordering cake, Michael took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Michael_location-deep",
						"false_rfc":"subject-Michael_location-deep" }
			} 
	var s_1110 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Michael noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1110_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Michael noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Michael_location-deep",
						"type": "story" }
	} 
	var q_1111 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Michael noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Michael stole a salt shaker and left.", "Michael then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1111_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Michael noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Michael stole a salt shaker and left.", "Michael then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Michael_location-deep",
						"false_rfc":"subject-Michael_location-deep" }
			} 
	var s_1112 = {
		type: "html-keyboard-response",
		stimulus: "Michael then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1112_ = {
		type: "html-keyboard-response",
		stimulus: "Michael then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Michael_location-deep",
						"type": "story" }
	} 
	var s_1113 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1113_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Michael_location-deep",
						"type": "story" }
	} 

	var betweenstory_159 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1114 = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Emily walked into the deep ocean cafe",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1114_ = {
		type: "html-keyboard-response",
		stimulus: "One fine morning, Emily walked into the deep ocean cafe",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Emily_location-deep",
						"type": "story" }
	} 
	var s_1115 = {
		type: "html-keyboard-response",
		stimulus: "Today, Emily waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1115_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Emily waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Emily_location-deep",
						"type": "story" }
	} 
	var q_1116 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Emily waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Emily took a quarter from the tip jar.", "While ordering tea, Emily noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1116_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Emily waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Emily took a quarter from the tip jar.", "While ordering tea, Emily noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Emily_location-deep",
						"false_rfc":"subject-Emily_location-deep" }
			} 
	var s_1117 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emily noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1117_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Emily noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Emily_location-deep",
						"type": "story" }
	} 
	var q_1118 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emily noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Emily then sat by the window, and read a book for hours.", "After ordering, Emily stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1118_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Emily noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Emily then sat by the window, and read a book for hours.", "After ordering, Emily stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Emily_location-deep",
						"false_rfc":"subject-Emily_location-deep" }
			} 
	var s_1119 = {
		type: "html-keyboard-response",
		stimulus: "Emily then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1119_ = {
		type: "html-keyboard-response",
		stimulus: "Emily then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Emily_location-deep",
						"type": "story" }
	} 
	var s_1120 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1120_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Emily_location-deep",
						"type": "story" }
	} 

	var betweenstory_160 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1121 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Anna walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1121_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Anna walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Anna_location-jungle",
						"type": "story" }
	} 
	var s_1122 = {
		type: "html-keyboard-response",
		stimulus: "Today, Anna waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1122_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Anna waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Anna_location-jungle",
						"type": "story" }
	} 
	var q_1123 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Anna waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Anna noticed the barista’s new mustache.", "Before ordering cake, Anna took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1123_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Anna waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Anna noticed the barista’s new mustache.", "Before ordering cake, Anna took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Anna_location-jungle",
						"false_rfc":"subject-Anna_location-jungle" }
			} 
	var s_1124 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Anna took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1124_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Anna took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Anna_location-jungle",
						"type": "story" }
	} 
	var q_1125 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Anna took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Anna stole a salt shaker and left.", "Anna then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1125_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Anna took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Anna stole a salt shaker and left.", "Anna then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Anna_location-jungle",
						"false_rfc":"subject-Anna_location-jungle" }
			} 
	var s_1126 = {
		type: "html-keyboard-response",
		stimulus: "Anna then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1126_ = {
		type: "html-keyboard-response",
		stimulus: "Anna then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Anna_location-jungle",
						"type": "story" }
	} 
	var s_1127 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1127_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Anna_location-jungle",
						"type": "story" }
	} 

	var betweenstory_161 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1128 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Christopher walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1128_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Christopher walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 
	var s_1129 = {
		type: "html-keyboard-response",
		stimulus: "Today, Christopher waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1129_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Christopher waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 
	var q_1130 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Christopher waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Roy took a quarter from the tip jar.", "Before ordering cake, Christopher took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1130_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Christopher waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Roy took a quarter from the tip jar.", "Before ordering cake, Christopher took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Christopher_location-jungle",
						"false_rfc":"subject-Roy_location-jungle" }
			} 
	var s_1131 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Christopher took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1131_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Christopher took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 
	var q_1132 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Christopher took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Christopher stole a salt shaker and left.", "Christopher then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1132_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Christopher took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Christopher stole a salt shaker and left.", "Christopher then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Christopher_location-jungle",
						"false_rfc":"subject-Christopher_location-jungle" }
			} 
	var s_1133 = {
		type: "html-keyboard-response",
		stimulus: "Christopher then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1133_ = {
		type: "html-keyboard-response",
		stimulus: "Christopher then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 
	var s_1134 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1134_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 

	var betweenstory_162 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1135 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Catherine walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1135_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Catherine walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Catherine_location-jungle",
						"type": "story" }
	} 
	var s_1136 = {
		type: "html-keyboard-response",
		stimulus: "Today, Catherine waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1136_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Catherine waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Catherine_location-jungle",
						"type": "story" }
	} 
	var q_1137 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Catherine waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Catherine noticed the barista’s new mustache.", "Before ordering cake, Catherine took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1137_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Catherine waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Catherine noticed the barista’s new mustache.", "Before ordering cake, Catherine took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Catherine_location-jungle",
						"false_rfc":"subject-Catherine_location-jungle" }
			} 
	var s_1138 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Catherine took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1138_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Catherine took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Catherine_location-jungle",
						"type": "story" }
	} 
	var q_1139 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Catherine took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Catherine stole a salt shaker and left.", "Catherine then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1139_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Catherine took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Catherine stole a salt shaker and left.", "Catherine then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Catherine_location-jungle",
						"false_rfc":"subject-Catherine_location-jungle" }
			} 
	var s_1140 = {
		type: "html-keyboard-response",
		stimulus: "Catherine then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1140_ = {
		type: "html-keyboard-response",
		stimulus: "Catherine then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Catherine_location-jungle",
						"type": "story" }
	} 
	var s_1141 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1141_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Catherine_location-jungle",
						"type": "story" }
	} 

	var betweenstory_163 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1142 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Keith walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1142_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Keith walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 
	var s_1143 = {
		type: "html-keyboard-response",
		stimulus: "Today, Keith waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1143_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Keith waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 
	var q_1144 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Keith waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Keith took a quarter from the tip jar.", "While ordering tea, Keith noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1144_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Keith waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Keith took a quarter from the tip jar.", "While ordering tea, Keith noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Keith_location-jungle",
						"false_rfc":"subject-Keith_location-jungle" }
			} 
	var s_1145 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Keith took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1145_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Keith took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 
	var q_1146 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Keith took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Keith then sat by the window, and read a book for hours.", "After ordering, Keith stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1146_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Keith took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Keith then sat by the window, and read a book for hours.", "After ordering, Keith stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Keith_location-jungle",
						"false_rfc":"subject-Keith_location-jungle" }
			} 
	var s_1147 = {
		type: "html-keyboard-response",
		stimulus: "Keith then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1147_ = {
		type: "html-keyboard-response",
		stimulus: "Keith then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 
	var s_1148 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1148_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 

	var betweenstory_164 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1149 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Kevin walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1149_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Kevin walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kevin_location-jungle",
						"type": "story" }
	} 
	var s_1150 = {
		type: "html-keyboard-response",
		stimulus: "Kevin was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1150_ = {
		type: "html-keyboard-response",
		stimulus: "Kevin was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Kevin_location-jungle",
						"type": "story" }
	} 
	var q_1151 = {
		type: "html-keyboard-response",
		stimulus: "<p> Kevin was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kevin took a quarter from the tip jar.", "While ordering tea, Kevin noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1151_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Kevin was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kevin took a quarter from the tip jar.", "While ordering tea, Kevin noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Kevin_location-jungle",
						"false_rfc":"subject-Kevin_location-jungle" }
			} 
	var s_1152 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Kevin noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1152_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Kevin noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Kevin_location-jungle",
						"type": "story" }
	} 
	var q_1153 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Kevin noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Christina stole a salt shaker and left.", "After ordering, Kevin stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1153_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Kevin noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Christina stole a salt shaker and left.", "After ordering, Kevin stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Kevin_location-jungle",
						"false_rfc":"subject-Christina_location-jungle" }
			} 
	var s_1154 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kevin stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1154_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kevin stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Kevin_location-jungle",
						"type": "story" }
	} 
	var s_1155 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1155_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Kevin_location-jungle",
						"type": "story" }
	} 

	var betweenstory_165 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1156 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Amy walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1156_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Amy walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 
	var s_1157 = {
		type: "html-keyboard-response",
		stimulus: "Amy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1157_ = {
		type: "html-keyboard-response",
		stimulus: "Amy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 
	var q_1158 = {
		type: "html-keyboard-response",
		stimulus: "<p> Amy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Amy took a quarter from the tip jar.", "While ordering tea, Amy noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1158_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Amy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Amy took a quarter from the tip jar.", "While ordering tea, Amy noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Amy_location-jungle",
						"false_rfc":"subject-Amy_location-jungle" }
			} 
	var s_1159 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Amy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1159_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Amy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 
	var q_1160 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Amy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Amy stole a salt shaker and left.", "After ordering, Tyler stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1160_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Amy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Amy stole a salt shaker and left.", "After ordering, Tyler stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Amy_location-jungle",
						"false_rfc":"subject-Tyler_location-jungle" }
			} 
	var s_1161 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amy stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1161_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amy stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 
	var s_1162 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1162_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Amy_location-jungle",
						"type": "story" }
	} 

	var betweenstory_166 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1163 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Adam walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1163_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Adam walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Adam_location-jungle",
						"type": "story" }
	} 
	var s_1164 = {
		type: "html-keyboard-response",
		stimulus: "Adam was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1164_ = {
		type: "html-keyboard-response",
		stimulus: "Adam was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Adam_location-jungle",
						"type": "story" }
	} 
	var q_1165 = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Adam took a quarter from the tip jar.", "While ordering tea, Adam noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1165_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Adam was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Adam took a quarter from the tip jar.", "While ordering tea, Adam noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Adam_location-jungle",
						"false_rfc":"subject-Adam_location-jungle" }
			} 
	var s_1166 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Adam noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1166_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Adam noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Adam_location-jungle",
						"type": "story" }
	} 
	var q_1167 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Adam noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Adam then sat by the window, and read a book for hours.", "After ordering, Adam stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1167_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Adam noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Adam then sat by the window, and read a book for hours.", "After ordering, Adam stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Adam_location-jungle",
						"false_rfc":"subject-Adam_location-jungle" }
			} 
	var s_1168 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Adam stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1168_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Adam stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Adam_location-jungle",
						"type": "story" }
	} 
	var s_1169 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1169_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Adam_location-jungle",
						"type": "story" }
	} 

	var betweenstory_167 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1170 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Juan walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1170_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Juan walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Juan_location-jungle",
						"type": "story" }
	} 
	var s_1171 = {
		type: "html-keyboard-response",
		stimulus: "Today, Juan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1171_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Juan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Juan_location-jungle",
						"type": "story" }
	} 
	var q_1172 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Juan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Juan took a quarter from the tip jar.", "While ordering tea, Juan noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1172_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Juan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Juan took a quarter from the tip jar.", "While ordering tea, Juan noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Juan_location-jungle",
						"false_rfc":"subject-Juan_location-jungle" }
			} 
	var s_1173 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Juan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1173_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Juan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Juan_location-jungle",
						"type": "story" }
	} 
	var q_1174 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Juan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Juan then sat by the window, and read a book for hours.", "After ordering, Juan stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1174_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Juan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Juan then sat by the window, and read a book for hours.", "After ordering, Juan stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Juan_location-jungle",
						"false_rfc":"subject-Juan_location-jungle" }
			} 
	var s_1175 = {
		type: "html-keyboard-response",
		stimulus: "Juan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1175_ = {
		type: "html-keyboard-response",
		stimulus: "Juan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Juan_location-jungle",
						"type": "story" }
	} 
	var s_1176 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1176_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Juan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_168 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1177 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Nancy walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1177_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Nancy walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 
	var s_1178 = {
		type: "html-keyboard-response",
		stimulus: "Nancy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1178_ = {
		type: "html-keyboard-response",
		stimulus: "Nancy was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 
	var q_1179 = {
		type: "html-keyboard-response",
		stimulus: "<p> Nancy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Nancy noticed the barista’s new mustache.", "While ordering tea, Kenneth noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1179_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Nancy was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Nancy noticed the barista’s new mustache.", "While ordering tea, Kenneth noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Nancy_location-jungle",
						"false_rfc":"subject-Kenneth_location-jungle" }
			} 
	var s_1180 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Nancy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1180_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Nancy noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 
	var q_1181 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Nancy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Nancy stole a salt shaker and left.", "After ordering, Lauren stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1181_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Nancy noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Nancy stole a salt shaker and left.", "After ordering, Lauren stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Nancy_location-jungle",
						"false_rfc":"subject-Lauren_location-deep" }
			} 
	var s_1182 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Nancy stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1182_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Nancy stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 
	var s_1183 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1183_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 

	var betweenstory_169 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1184 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Marie walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1184_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Marie walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Marie_location-jungle",
						"type": "story" }
	} 
	var s_1185 = {
		type: "html-keyboard-response",
		stimulus: "Marie was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1185_ = {
		type: "html-keyboard-response",
		stimulus: "Marie was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Marie_location-jungle",
						"type": "story" }
	} 
	var q_1186 = {
		type: "html-keyboard-response",
		stimulus: "<p> Marie was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Marie noticed the barista’s new mustache.", "Before ordering cake, Marie took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1186_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Marie was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Marie noticed the barista’s new mustache.", "Before ordering cake, Marie took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Marie_location-jungle",
						"false_rfc":"subject-Marie_location-jungle" }
			} 
	var s_1187 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Marie noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1187_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Marie noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Marie_location-jungle",
						"type": "story" }
	} 
	var q_1188 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Marie noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Matthew stole a salt shaker and left.", "After ordering, Marie stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1188_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Marie noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Matthew stole a salt shaker and left.", "After ordering, Marie stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Marie_location-jungle",
						"false_rfc":"subject-Matthew_location-jungle" }
			} 
	var s_1189 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Marie stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1189_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Marie stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Marie_location-jungle",
						"type": "story" }
	} 
	var s_1190 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1190_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Marie_location-jungle",
						"type": "story" }
	} 

	var betweenstory_170 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1191 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Amanda walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1191_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Amanda walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 
	var s_1192 = {
		type: "html-keyboard-response",
		stimulus: "Amanda was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1192_ = {
		type: "html-keyboard-response",
		stimulus: "Amanda was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 
	var q_1193 = {
		type: "html-keyboard-response",
		stimulus: "<p> Amanda was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Amanda noticed the barista’s new mustache.", "Before ordering cake, Amanda took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1193_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Amanda was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Amanda noticed the barista’s new mustache.", "Before ordering cake, Amanda took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Amanda_location-jungle",
						"false_rfc":"subject-Amanda_location-jungle" }
			} 
	var s_1194 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Amanda noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1194_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Amanda noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 
	var q_1195 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Amanda noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Amanda then sat by the window, and read a book for hours.", "After ordering, Amanda stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1195_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Amanda noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Amanda then sat by the window, and read a book for hours.", "After ordering, Amanda stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Amanda_location-jungle",
						"false_rfc":"subject-Amanda_location-jungle" }
			} 
	var s_1196 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amanda stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1196_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Amanda stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 
	var s_1197 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1197_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 

	var betweenstory_171 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1198 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Arthur walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1198_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Arthur walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Arthur_location-jungle",
						"type": "story" }
	} 
	var s_1199 = {
		type: "html-keyboard-response",
		stimulus: "Arthur was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1199_ = {
		type: "html-keyboard-response",
		stimulus: "Arthur was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Arthur_location-jungle",
						"type": "story" }
	} 
	var q_1200 = {
		type: "html-keyboard-response",
		stimulus: "<p> Arthur was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Arthur noticed the barista’s new mustache.", "While ordering tea, Beverly noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1200_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Arthur was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Arthur noticed the barista’s new mustache.", "While ordering tea, Beverly noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Arthur_location-jungle",
						"false_rfc":"subject-Beverly_location-jungle" }
			} 
	var s_1201 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Arthur noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1201_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Arthur noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Arthur_location-jungle",
						"type": "story" }
	} 
	var q_1202 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Arthur noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Arthur stole a salt shaker and left.", "Arthur then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1202_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Arthur noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Arthur stole a salt shaker and left.", "Arthur then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Arthur_location-jungle",
						"false_rfc":"subject-Arthur_location-jungle" }
			} 
	var s_1203 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Arthur stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1203_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Arthur stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Arthur_location-jungle",
						"type": "story" }
	} 
	var s_1204 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1204_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Arthur_location-jungle",
						"type": "story" }
	} 

	var betweenstory_172 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1205 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Grace walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1205_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Grace walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Grace_location-jungle",
						"type": "story" }
	} 
	var s_1206 = {
		type: "html-keyboard-response",
		stimulus: "Grace was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1206_ = {
		type: "html-keyboard-response",
		stimulus: "Grace was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Grace_location-jungle",
						"type": "story" }
	} 
	var q_1207 = {
		type: "html-keyboard-response",
		stimulus: "<p> Grace was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Grace took a quarter from the tip jar.", "While ordering tea, Grace noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1207_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Grace was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Grace took a quarter from the tip jar.", "While ordering tea, Grace noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Grace_location-jungle",
						"false_rfc":"subject-Grace_location-jungle" }
			} 
	var s_1208 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Grace noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1208_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Grace noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Grace_location-jungle",
						"type": "story" }
	} 
	var q_1209 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Grace noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Grace then sat by the window, and read a book for hours.", "After ordering, Grace stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1209_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Grace noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Grace then sat by the window, and read a book for hours.", "After ordering, Grace stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Grace_location-jungle",
						"false_rfc":"subject-Grace_location-jungle" }
			} 
	var s_1210 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Grace stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1210_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Grace stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Grace_location-jungle",
						"type": "story" }
	} 
	var s_1211 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1211_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Grace_location-jungle",
						"type": "story" }
	} 

	var betweenstory_173 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1212 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Nancy walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1212_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Nancy walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 
	var s_1213 = {
		type: "html-keyboard-response",
		stimulus: "Today, Nancy waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1213_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Nancy waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 
	var q_1214 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Nancy waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Nancy noticed the barista’s new mustache.", "Before ordering cake, Nancy took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1214_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Nancy waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Nancy noticed the barista’s new mustache.", "Before ordering cake, Nancy took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Nancy_location-jungle",
						"false_rfc":"subject-Nancy_location-jungle" }
			} 
	var s_1215 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Nancy took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1215_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Nancy took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 
	var q_1216 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Nancy took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Nancy stole a salt shaker and left.", "Nancy then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1216_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Nancy took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Nancy stole a salt shaker and left.", "Nancy then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Nancy_location-jungle",
						"false_rfc":"subject-Nancy_location-jungle" }
			} 
	var s_1217 = {
		type: "html-keyboard-response",
		stimulus: "Nancy then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1217_ = {
		type: "html-keyboard-response",
		stimulus: "Nancy then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 
	var s_1218 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1218_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Nancy_location-jungle",
						"type": "story" }
	} 

	var betweenstory_174 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1219 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Edward walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1219_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Edward walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 
	var s_1220 = {
		type: "html-keyboard-response",
		stimulus: "Edward was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1220_ = {
		type: "html-keyboard-response",
		stimulus: "Edward was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 
	var q_1221 = {
		type: "html-keyboard-response",
		stimulus: "<p> Edward was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Edward noticed the barista’s new mustache.", "Before ordering cake, Edward took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1221_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Edward was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Edward noticed the barista’s new mustache.", "Before ordering cake, Edward took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Edward_location-jungle",
						"false_rfc":"subject-Edward_location-jungle" }
			} 
	var s_1222 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Edward noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1222_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Edward noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 
	var q_1223 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Edward noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Edward then sat by the window, and read a book for hours.", "After ordering, Edward stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1223_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Edward noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Edward then sat by the window, and read a book for hours.", "After ordering, Edward stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Edward_location-jungle",
						"false_rfc":"subject-Edward_location-jungle" }
			} 
	var s_1224 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Edward stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1224_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Edward stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 
	var s_1225 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1225_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Edward_location-jungle",
						"type": "story" }
	} 

	var betweenstory_175 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1226 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Elizabeth walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1226_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Elizabeth walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var s_1227 = {
		type: "html-keyboard-response",
		stimulus: "Today, Elizabeth waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1227_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Elizabeth waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var q_1228 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Elizabeth waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Elizabeth took a quarter from the tip jar.", "While ordering tea, Elizabeth noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1228_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Elizabeth waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Elizabeth took a quarter from the tip jar.", "While ordering tea, Elizabeth noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Elizabeth_location-jungle",
						"false_rfc":"subject-Elizabeth_location-jungle" }
			} 
	var s_1229 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Elizabeth took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1229_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Elizabeth took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var q_1230 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Elizabeth took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Elizabeth stole a salt shaker and left.", "Elizabeth then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1230_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Elizabeth took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Elizabeth stole a salt shaker and left.", "Elizabeth then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Elizabeth_location-jungle",
						"false_rfc":"subject-Elizabeth_location-jungle" }
			} 
	var s_1231 = {
		type: "html-keyboard-response",
		stimulus: "Elizabeth then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1231_ = {
		type: "html-keyboard-response",
		stimulus: "Elizabeth then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 
	var s_1232 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1232_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Elizabeth_location-jungle",
						"type": "story" }
	} 

	var betweenstory_176 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1233 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Terry walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1233_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Terry walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var s_1234 = {
		type: "html-keyboard-response",
		stimulus: "Today, Terry waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1234_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Terry waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var q_1235 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Terry waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Terry took a quarter from the tip jar.", "While ordering tea, Terry noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1235_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Terry waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Terry took a quarter from the tip jar.", "While ordering tea, Terry noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Terry_location-jungle",
						"false_rfc":"subject-Terry_location-jungle" }
			} 
	var s_1236 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Terry took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1236_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Terry took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var q_1237 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Terry took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Terry then sat by the window, and read a book for hours.", "After ordering, Terry stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1237_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Terry took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Terry then sat by the window, and read a book for hours.", "After ordering, Terry stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Terry_location-jungle",
						"false_rfc":"subject-Terry_location-jungle" }
			} 
	var s_1238 = {
		type: "html-keyboard-response",
		stimulus: "Terry then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1238_ = {
		type: "html-keyboard-response",
		stimulus: "Terry then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 
	var s_1239 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1239_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Terry_location-jungle",
						"type": "story" }
	} 

	var betweenstory_177 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1240 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Brandon walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1240_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Brandon walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 
	var s_1241 = {
		type: "html-keyboard-response",
		stimulus: "Today, Brandon waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1241_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Brandon waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 
	var q_1242 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Brandon waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Brandon took a quarter from the tip jar.", "While ordering tea, Brandon noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1242_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Brandon waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Brandon took a quarter from the tip jar.", "While ordering tea, Brandon noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Brandon_location-jungle",
						"false_rfc":"subject-Brandon_location-jungle" }
			} 
	var s_1243 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Brandon took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1243_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Brandon took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 
	var q_1244 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Brandon took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Brandon stole a salt shaker and left.", "Brandon then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1244_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Brandon took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Brandon stole a salt shaker and left.", "Brandon then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Brandon_location-jungle",
						"false_rfc":"subject-Brandon_location-jungle" }
			} 
	var s_1245 = {
		type: "html-keyboard-response",
		stimulus: "Brandon then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1245_ = {
		type: "html-keyboard-response",
		stimulus: "Brandon then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 
	var s_1246 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1246_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Brandon_location-jungle",
						"type": "story" }
	} 

	var betweenstory_178 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1247 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Martha walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1247_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Martha walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Martha_location-jungle",
						"type": "story" }
	} 
	var s_1248 = {
		type: "html-keyboard-response",
		stimulus: "Today, Martha waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1248_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Martha waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Martha_location-jungle",
						"type": "story" }
	} 
	var q_1249 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Martha waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Martha noticed the barista’s new mustache.", "Before ordering cake, Martha took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1249_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Martha waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Martha noticed the barista’s new mustache.", "Before ordering cake, Martha took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Martha_location-jungle",
						"false_rfc":"subject-Martha_location-jungle" }
			} 
	var s_1250 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Martha took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1250_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Martha took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Martha_location-jungle",
						"type": "story" }
	} 
	var q_1251 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Martha took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Martha then sat by the window, and read a book for hours.", "After ordering, Martha stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1251_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Martha took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Martha then sat by the window, and read a book for hours.", "After ordering, Martha stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Martha_location-jungle",
						"false_rfc":"subject-Martha_location-jungle" }
			} 
	var s_1252 = {
		type: "html-keyboard-response",
		stimulus: "Martha then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1252_ = {
		type: "html-keyboard-response",
		stimulus: "Martha then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Martha_location-jungle",
						"type": "story" }
	} 
	var s_1253 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1253_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Martha_location-jungle",
						"type": "story" }
	} 

	var betweenstory_179 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1254 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Walter walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1254_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Walter walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Walter_location-jungle",
						"type": "story" }
	} 
	var s_1255 = {
		type: "html-keyboard-response",
		stimulus: "Today, Walter waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1255_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Walter waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Walter_location-jungle",
						"type": "story" }
	} 
	var q_1256 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Walter waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kenneth took a quarter from the tip jar.", "Before ordering cake, Walter took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1256_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Walter waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kenneth took a quarter from the tip jar.", "Before ordering cake, Walter took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Walter_location-jungle",
						"false_rfc":"subject-Kenneth_location-deep" }
			} 
	var s_1257 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Walter took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1257_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Walter took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Walter_location-jungle",
						"type": "story" }
	} 
	var q_1258 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Walter took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Joyce then sat by the window, and read a book for hours.", "Walter then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1258_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Walter took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Joyce then sat by the window, and read a book for hours.", "Walter then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Walter_location-jungle",
						"false_rfc":"subject-Joyce_location-jungle" }
			} 
	var s_1259 = {
		type: "html-keyboard-response",
		stimulus: "Walter then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1259_ = {
		type: "html-keyboard-response",
		stimulus: "Walter then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Walter_location-jungle",
						"type": "story" }
	} 
	var s_1260 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1260_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Walter_location-jungle",
						"type": "story" }
	} 

	var betweenstory_180 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1261 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Maria walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1261_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Maria walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Maria_location-jungle",
						"type": "story" }
	} 
	var s_1262 = {
		type: "html-keyboard-response",
		stimulus: "Maria was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1262_ = {
		type: "html-keyboard-response",
		stimulus: "Maria was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Maria_location-jungle",
						"type": "story" }
	} 
	var q_1263 = {
		type: "html-keyboard-response",
		stimulus: "<p> Maria was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Maria took a quarter from the tip jar.", "While ordering tea, Maria noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1263_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Maria was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Maria took a quarter from the tip jar.", "While ordering tea, Maria noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Maria_location-jungle",
						"false_rfc":"subject-Maria_location-jungle" }
			} 
	var s_1264 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Maria noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1264_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Maria noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Maria_location-jungle",
						"type": "story" }
	} 
	var q_1265 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Maria noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Madison stole a salt shaker and left.", "After ordering, Maria stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1265_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Maria noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Madison stole a salt shaker and left.", "After ordering, Maria stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Maria_location-jungle",
						"false_rfc":"subject-Madison_location-deep" }
			} 
	var s_1266 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Maria stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1266_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Maria stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Maria_location-jungle",
						"type": "story" }
	} 
	var s_1267 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1267_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Maria_location-jungle",
						"type": "story" }
	} 

	var betweenstory_181 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1268 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Keith walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1268_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Keith walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 
	var s_1269 = {
		type: "html-keyboard-response",
		stimulus: "Today, Keith waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1269_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Keith waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 
	var q_1270 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Keith waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Keith noticed the barista’s new mustache.", "Before ordering cake, Keith took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1270_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Keith waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Keith noticed the barista’s new mustache.", "Before ordering cake, Keith took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Keith_location-jungle",
						"false_rfc":"subject-Keith_location-jungle" }
			} 
	var s_1271 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Keith took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1271_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Keith took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 
	var q_1272 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Keith took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Keith stole a salt shaker and left.", "Keith then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1272_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Keith took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Keith stole a salt shaker and left.", "Keith then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Keith_location-jungle",
						"false_rfc":"subject-Keith_location-jungle" }
			} 
	var s_1273 = {
		type: "html-keyboard-response",
		stimulus: "Keith then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1273_ = {
		type: "html-keyboard-response",
		stimulus: "Keith then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 
	var s_1274 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1274_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Keith_location-jungle",
						"type": "story" }
	} 

	var betweenstory_182 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1275 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Kyle walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1275_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Kyle walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kyle_location-jungle",
						"type": "story" }
	} 
	var s_1276 = {
		type: "html-keyboard-response",
		stimulus: "Today, Kyle waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1276_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Kyle waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Kyle_location-jungle",
						"type": "story" }
	} 
	var q_1277 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Kyle waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kyle took a quarter from the tip jar.", "While ordering tea, Kyle noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1277_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Kyle waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Kyle took a quarter from the tip jar.", "While ordering tea, Kyle noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Kyle_location-jungle",
						"false_rfc":"subject-Kyle_location-jungle" }
			} 
	var s_1278 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kyle took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1278_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Kyle took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Kyle_location-jungle",
						"type": "story" }
	} 
	var q_1279 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kyle took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Kyle then sat by the window, and read a book for hours.", "After ordering, Kyle stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1279_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Kyle took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Kyle then sat by the window, and read a book for hours.", "After ordering, Kyle stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Kyle_location-jungle",
						"false_rfc":"subject-Kyle_location-jungle" }
			} 
	var s_1280 = {
		type: "html-keyboard-response",
		stimulus: "Kyle then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1280_ = {
		type: "html-keyboard-response",
		stimulus: "Kyle then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Kyle_location-jungle",
						"type": "story" }
	} 
	var s_1281 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1281_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Kyle_location-jungle",
						"type": "story" }
	} 

	var betweenstory_183 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1282 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Shirley walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1282_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Shirley walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Shirley_location-jungle",
						"type": "story" }
	} 
	var s_1283 = {
		type: "html-keyboard-response",
		stimulus: "Today, Shirley waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1283_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Shirley waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Shirley_location-jungle",
						"type": "story" }
	} 
	var q_1284 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Shirley waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Shirley took a quarter from the tip jar.", "While ordering tea, Shirley noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1284_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Shirley waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Shirley took a quarter from the tip jar.", "While ordering tea, Shirley noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Shirley_location-jungle",
						"false_rfc":"subject-Shirley_location-jungle" }
			} 
	var s_1285 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Shirley took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1285_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Shirley took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Shirley_location-jungle",
						"type": "story" }
	} 
	var q_1286 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Shirley took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Shirley then sat by the window, and read a book for hours.", "After ordering, Shirley stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1286_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Shirley took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Shirley then sat by the window, and read a book for hours.", "After ordering, Shirley stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Shirley_location-jungle",
						"false_rfc":"subject-Shirley_location-jungle" }
			} 
	var s_1287 = {
		type: "html-keyboard-response",
		stimulus: "Shirley then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1287_ = {
		type: "html-keyboard-response",
		stimulus: "Shirley then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Shirley_location-jungle",
						"type": "story" }
	} 
	var s_1288 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1288_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Shirley_location-jungle",
						"type": "story" }
	} 

	var betweenstory_184 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1289 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Rose walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1289_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Rose walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Rose_location-jungle",
						"type": "story" }
	} 
	var s_1290 = {
		type: "html-keyboard-response",
		stimulus: "Rose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1290_ = {
		type: "html-keyboard-response",
		stimulus: "Rose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Rose_location-jungle",
						"type": "story" }
	} 
	var q_1291 = {
		type: "html-keyboard-response",
		stimulus: "<p> Rose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Rose noticed the barista’s new mustache.", "While ordering tea, Carl noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1291_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Rose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Rose noticed the barista’s new mustache.", "While ordering tea, Carl noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Rose_location-jungle",
						"false_rfc":"subject-Carl_location-deep" }
			} 
	var s_1292 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Rose noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1292_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Rose noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Rose_location-jungle",
						"type": "story" }
	} 
	var q_1293 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Rose noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Rose then sat by the window, and read a book for hours.", "After ordering, Rose stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1293_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Rose noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Rose then sat by the window, and read a book for hours.", "After ordering, Rose stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Rose_location-jungle",
						"false_rfc":"subject-Rose_location-jungle" }
			} 
	var s_1294 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Rose stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1294_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Rose stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Rose_location-jungle",
						"type": "story" }
	} 
	var s_1295 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1295_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Rose_location-jungle",
						"type": "story" }
	} 

	var betweenstory_185 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1296 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Frances walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1296_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Frances walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Frances_location-jungle",
						"type": "story" }
	} 
	var s_1297 = {
		type: "html-keyboard-response",
		stimulus: "Today, Frances waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1297_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Frances waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Frances_location-jungle",
						"type": "story" }
	} 
	var q_1298 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Frances waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Frances noticed the barista’s new mustache.", "Before ordering cake, Frances took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1298_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Frances waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Frances noticed the barista’s new mustache.", "Before ordering cake, Frances took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Frances_location-jungle",
						"false_rfc":"subject-Frances_location-jungle" }
			} 
	var s_1299 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Frances took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1299_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Frances took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Frances_location-jungle",
						"type": "story" }
	} 
	var q_1300 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Frances took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Gerald then sat by the window, and read a book for hours.", "Frances then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1300_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Frances took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Gerald then sat by the window, and read a book for hours.", "Frances then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Frances_location-jungle",
						"false_rfc":"subject-Gerald_location-jungle" }
			} 
	var s_1301 = {
		type: "html-keyboard-response",
		stimulus: "Frances then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1301_ = {
		type: "html-keyboard-response",
		stimulus: "Frances then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Frances_location-jungle",
						"type": "story" }
	} 
	var s_1302 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1302_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Frances_location-jungle",
						"type": "story" }
	} 

	var betweenstory_186 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1303 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Sandra walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1303_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Sandra walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sandra_location-jungle",
						"type": "story" }
	} 
	var s_1304 = {
		type: "html-keyboard-response",
		stimulus: "Sandra was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1304_ = {
		type: "html-keyboard-response",
		stimulus: "Sandra was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Sandra_location-jungle",
						"type": "story" }
	} 
	var q_1305 = {
		type: "html-keyboard-response",
		stimulus: "<p> Sandra was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Christine noticed the barista’s new mustache.", "While ordering tea, Sandra noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1305_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Sandra was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Christine noticed the barista’s new mustache.", "While ordering tea, Sandra noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Sandra_location-jungle",
						"false_rfc":"subject-Christine_location-deep" }
			} 
	var s_1306 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sandra noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1306_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Sandra noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Sandra_location-jungle",
						"type": "story" }
	} 
	var q_1307 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sandra noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Sandra stole a salt shaker and left.", "Sandra then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1307_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Sandra noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Sandra stole a salt shaker and left.", "Sandra then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Sandra_location-jungle",
						"false_rfc":"subject-Sandra_location-jungle" }
			} 
	var s_1308 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Sandra stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1308_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Sandra stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Sandra_location-jungle",
						"type": "story" }
	} 
	var s_1309 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1309_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sandra_location-jungle",
						"type": "story" }
	} 

	var betweenstory_187 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1310 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Nathan walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1310_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Nathan walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Nathan_location-jungle",
						"type": "story" }
	} 
	var s_1311 = {
		type: "html-keyboard-response",
		stimulus: "Today, Nathan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1311_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Nathan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Nathan_location-jungle",
						"type": "story" }
	} 
	var q_1312 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Nathan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Nathan took a quarter from the tip jar.", "While ordering tea, Nathan noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1312_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Nathan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Nathan took a quarter from the tip jar.", "While ordering tea, Nathan noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Nathan_location-jungle",
						"false_rfc":"subject-Nathan_location-jungle" }
			} 
	var s_1313 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Nathan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1313_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Nathan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Nathan_location-jungle",
						"type": "story" }
	} 
	var q_1314 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Nathan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Nathan stole a salt shaker and left.", "Nathan then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1314_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Nathan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Nathan stole a salt shaker and left.", "Nathan then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Nathan_location-jungle",
						"false_rfc":"subject-Nathan_location-jungle" }
			} 
	var s_1315 = {
		type: "html-keyboard-response",
		stimulus: "Nathan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1315_ = {
		type: "html-keyboard-response",
		stimulus: "Nathan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Nathan_location-jungle",
						"type": "story" }
	} 
	var s_1316 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1316_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Nathan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_188 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1317 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Larry walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1317_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Larry walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Larry_location-jungle",
						"type": "story" }
	} 
	var s_1318 = {
		type: "html-keyboard-response",
		stimulus: "Larry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1318_ = {
		type: "html-keyboard-response",
		stimulus: "Larry was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Larry_location-jungle",
						"type": "story" }
	} 
	var q_1319 = {
		type: "html-keyboard-response",
		stimulus: "<p> Larry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Kimberly noticed the barista’s new mustache.", "While ordering tea, Larry noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1319_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Larry was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Kimberly noticed the barista’s new mustache.", "While ordering tea, Larry noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Larry_location-jungle",
						"false_rfc":"subject-Kimberly_location-jungle" }
			} 
	var s_1320 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Larry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1320_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Larry noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Larry_location-jungle",
						"type": "story" }
	} 
	var q_1321 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Larry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Larry then sat by the window, and read a book for hours.", "After ordering, Larry stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1321_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Larry noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Larry then sat by the window, and read a book for hours.", "After ordering, Larry stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Larry_location-jungle",
						"false_rfc":"subject-Larry_location-jungle" }
			} 
	var s_1322 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Larry stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1322_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Larry stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Larry_location-jungle",
						"type": "story" }
	} 
	var s_1323 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1323_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Larry_location-jungle",
						"type": "story" }
	} 

	var betweenstory_189 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1324 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Tiffany walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1324_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Tiffany walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 
	var s_1325 = {
		type: "html-keyboard-response",
		stimulus: "Today, Tiffany waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1325_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Tiffany waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 
	var q_1326 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Tiffany waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Tiffany took a quarter from the tip jar.", "Before ordering cake, Juan took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1326_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Tiffany waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Tiffany took a quarter from the tip jar.", "Before ordering cake, Juan took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Tiffany_location-jungle",
						"false_rfc":"subject-Juan_location-jungle" }
			} 
	var s_1327 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Tiffany took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1327_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Tiffany took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 
	var q_1328 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Tiffany took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Tiffany stole a salt shaker and left.", "Tiffany then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1328_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Tiffany took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Tiffany stole a salt shaker and left.", "Tiffany then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Tiffany_location-jungle",
						"false_rfc":"subject-Tiffany_location-jungle" }
			} 
	var s_1329 = {
		type: "html-keyboard-response",
		stimulus: "Tiffany then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1329_ = {
		type: "html-keyboard-response",
		stimulus: "Tiffany then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 
	var s_1330 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1330_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Tiffany_location-jungle",
						"type": "story" }
	} 

	var betweenstory_190 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1331 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Kelly walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1331_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Kelly walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Kelly_location-jungle",
						"type": "story" }
	} 
	var s_1332 = {
		type: "html-keyboard-response",
		stimulus: "Kelly was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1332_ = {
		type: "html-keyboard-response",
		stimulus: "Kelly was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Kelly_location-jungle",
						"type": "story" }
	} 
	var q_1333 = {
		type: "html-keyboard-response",
		stimulus: "<p> Kelly was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Andrea noticed the barista’s new mustache.", "While ordering tea, Kelly noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1333_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Kelly was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Andrea noticed the barista’s new mustache.", "While ordering tea, Kelly noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Kelly_location-jungle",
						"false_rfc":"subject-Andrea_location-deep" }
			} 
	var s_1334 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Kelly noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1334_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Kelly noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Kelly_location-jungle",
						"type": "story" }
	} 
	var q_1335 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Kelly noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jeremy stole a salt shaker and left.", "After ordering, Kelly stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1335_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Kelly noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jeremy stole a salt shaker and left.", "After ordering, Kelly stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Kelly_location-jungle",
						"false_rfc":"subject-Jeremy_location-jungle" }
			} 
	var s_1336 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kelly stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1336_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Kelly stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Kelly_location-jungle",
						"type": "story" }
	} 
	var s_1337 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1337_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Kelly_location-jungle",
						"type": "story" }
	} 

	var betweenstory_191 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1338 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Christopher walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1338_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Christopher walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 
	var s_1339 = {
		type: "html-keyboard-response",
		stimulus: "Christopher was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1339_ = {
		type: "html-keyboard-response",
		stimulus: "Christopher was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 
	var q_1340 = {
		type: "html-keyboard-response",
		stimulus: "<p> Christopher was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Christopher noticed the barista’s new mustache.", "Before ordering cake, Christopher took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1340_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Christopher was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Christopher noticed the barista’s new mustache.", "Before ordering cake, Christopher took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Christopher_location-jungle",
						"false_rfc":"subject-Christopher_location-jungle" }
			} 
	var s_1341 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Christopher noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1341_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Christopher noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 
	var q_1342 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Christopher noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Christopher then sat by the window, and read a book for hours.", "After ordering, Christopher stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1342_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Christopher noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["Christopher then sat by the window, and read a book for hours.", "After ordering, Christopher stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Christopher_location-jungle",
						"false_rfc":"subject-Christopher_location-jungle" }
			} 
	var s_1343 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Christopher stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1343_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Christopher stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 
	var s_1344 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1344_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Christopher_location-jungle",
						"type": "story" }
	} 

	var betweenstory_192 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1345 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jose walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1345_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Jose walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var s_1346 = {
		type: "html-keyboard-response",
		stimulus: "Jose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1346_ = {
		type: "html-keyboard-response",
		stimulus: "Jose was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var q_1347 = {
		type: "html-keyboard-response",
		stimulus: "<p> Jose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jose took a quarter from the tip jar.", "While ordering tea, Jose noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1347_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Jose was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jose took a quarter from the tip jar.", "While ordering tea, Jose noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Jose_location-jungle",
						"false_rfc":"subject-Jose_location-jungle" }
			} 
	var s_1348 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jose noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1348_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Jose noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var q_1349 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jose noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jose stole a salt shaker and left.", "Jose then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1349_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Jose noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Jose stole a salt shaker and left.", "Jose then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Jose_location-jungle",
						"false_rfc":"subject-Jose_location-jungle" }
			} 
	var s_1350 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jose stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1350_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Jose stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 
	var s_1351 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1351_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Jose_location-jungle",
						"type": "story" }
	} 

	var betweenstory_193 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1352 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Megan walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1352_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Megan walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Megan_location-jungle",
						"type": "story" }
	} 
	var s_1353 = {
		type: "html-keyboard-response",
		stimulus: "Today, Megan waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1353_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Megan waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Megan_location-jungle",
						"type": "story" }
	} 
	var q_1354 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Megan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Megan took a quarter from the tip jar.", "Before ordering cake, Brian took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1354_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Megan waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Megan took a quarter from the tip jar.", "Before ordering cake, Brian took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Megan_location-jungle",
						"false_rfc":"subject-Brian_location-jungle" }
			} 
	var s_1355 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Megan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1355_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Megan took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Megan_location-jungle",
						"type": "story" }
	} 
	var q_1356 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Megan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Megan then sat by the window, and read a book for hours.", "Brian then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1356_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Megan took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Megan then sat by the window, and read a book for hours.", "Brian then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Megan_location-jungle",
						"false_rfc":"subject-Brian_location-deep" }
			} 
	var s_1357 = {
		type: "html-keyboard-response",
		stimulus: "Megan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1357_ = {
		type: "html-keyboard-response",
		stimulus: "Megan then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Megan_location-jungle",
						"type": "story" }
	} 
	var s_1358 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1358_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Megan_location-jungle",
						"type": "story" }
	} 

	var betweenstory_194 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1359 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Thomas walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1359_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Thomas walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Thomas_location-jungle",
						"type": "story" }
	} 
	var s_1360 = {
		type: "html-keyboard-response",
		stimulus: "Today, Thomas waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1360_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Thomas waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Thomas_location-jungle",
						"type": "story" }
	} 
	var q_1361 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Thomas waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Thomas took a quarter from the tip jar.", "Before ordering cake, Joe took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1361_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Thomas waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Thomas took a quarter from the tip jar.", "Before ordering cake, Joe took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Thomas_location-jungle",
						"false_rfc":"subject-Joe_location-deep" }
			} 
	var s_1362 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Thomas took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1362_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Thomas took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Thomas_location-jungle",
						"type": "story" }
	} 
	var q_1363 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Thomas took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Thomas stole a salt shaker and left.", "Thomas then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1363_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Thomas took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Thomas stole a salt shaker and left.", "Thomas then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Thomas_location-jungle",
						"false_rfc":"subject-Thomas_location-jungle" }
			} 
	var s_1364 = {
		type: "html-keyboard-response",
		stimulus: "Thomas then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1364_ = {
		type: "html-keyboard-response",
		stimulus: "Thomas then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Thomas_location-jungle",
						"type": "story" }
	} 
	var s_1365 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1365_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Thomas_location-jungle",
						"type": "story" }
	} 

	var betweenstory_195 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1366 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Amanda walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1366_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Amanda walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 
	var s_1367 = {
		type: "html-keyboard-response",
		stimulus: "Today, Amanda waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1367_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Amanda waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 
	var q_1368 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Amanda waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Amanda took a quarter from the tip jar.", "Before ordering cake, Michael took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1368_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Amanda waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Amanda took a quarter from the tip jar.", "Before ordering cake, Michael took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Amanda_location-jungle",
						"false_rfc":"subject-Michael_location-deep" }
			} 
	var s_1369 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Amanda took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1369_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Amanda took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 
	var q_1370 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Amanda took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Amanda then sat by the window, and read a book for hours.", "After ordering, Amanda stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1370_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Amanda took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Amanda then sat by the window, and read a book for hours.", "After ordering, Amanda stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Amanda_location-jungle",
						"false_rfc":"subject-Amanda_location-jungle" }
			} 
	var s_1371 = {
		type: "html-keyboard-response",
		stimulus: "Amanda then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1371_ = {
		type: "html-keyboard-response",
		stimulus: "Amanda then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 
	var s_1372 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1372_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Amanda_location-jungle",
						"type": "story" }
	} 

	var betweenstory_196 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1373 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Sarah walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1373_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Sarah walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sarah_location-jungle",
						"type": "story" }
	} 
	var s_1374 = {
		type: "html-keyboard-response",
		stimulus: "Today, Sarah waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1374_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Sarah waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Sarah_location-jungle",
						"type": "story" }
	} 
	var q_1375 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sarah waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Sarah took a quarter from the tip jar.", "While ordering tea, Sarah noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1375_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sarah waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Sarah took a quarter from the tip jar.", "While ordering tea, Sarah noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Sarah_location-jungle",
						"false_rfc":"subject-Sarah_location-jungle" }
			} 
	var s_1376 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Sarah took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1376_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Sarah took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Sarah_location-jungle",
						"type": "story" }
	} 
	var q_1377 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Sarah took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Sarah stole a salt shaker and left.", "Sarah then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1377_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Sarah took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Sarah stole a salt shaker and left.", "Sarah then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Sarah_location-jungle",
						"false_rfc":"subject-Sarah_location-jungle" }
			} 
	var s_1378 = {
		type: "html-keyboard-response",
		stimulus: "Sarah then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1378_ = {
		type: "html-keyboard-response",
		stimulus: "Sarah then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Sarah_location-jungle",
						"type": "story" }
	} 
	var s_1379 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1379_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sarah_location-jungle",
						"type": "story" }
	} 

	var betweenstory_197 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1380 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Julie walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1380_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Julie walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 
	var s_1381 = {
		type: "html-keyboard-response",
		stimulus: "Today, Julie waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1381_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Julie waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 
	var q_1382 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Julie waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Julie noticed the barista’s new mustache.", "Before ordering cake, Julie took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1382_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Julie waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Julie noticed the barista’s new mustache.", "Before ordering cake, Julie took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Julie_location-jungle",
						"false_rfc":"subject-Julie_location-jungle" }
			} 
	var s_1383 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Julie took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1383_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Julie took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 
	var q_1384 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Julie took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Julie then sat by the window, and read a book for hours.", "After ordering, Julie stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1384_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Julie took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Julie then sat by the window, and read a book for hours.", "After ordering, Julie stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Julie_location-jungle",
						"false_rfc":"subject-Julie_location-jungle" }
			} 
	var s_1385 = {
		type: "html-keyboard-response",
		stimulus: "Julie then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1385_ = {
		type: "html-keyboard-response",
		stimulus: "Julie then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 
	var s_1386 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1386_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 

	var betweenstory_198 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1387 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Julie walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1387_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Julie walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 
	var s_1388 = {
		type: "html-keyboard-response",
		stimulus: "Julie was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1388_ = {
		type: "html-keyboard-response",
		stimulus: "Julie was impatient, and decided to cut the line.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE12",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 
	var q_1389 = {
		type: "html-keyboard-response",
		stimulus: "<p> Julie was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Julie noticed the barista’s new mustache.", "While ordering tea, Russell noticed the barista’s new mustache."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1389_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Julie was impatient, and decided to cut the line. <br><br><br> what happens next? <p>",
		labels: ["While ordering tea, Julie noticed the barista’s new mustache.", "While ordering tea, Russell noticed the barista’s new mustache."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE12",
						"true_tonode": "NODE21",
						"false_tonode": "NODE21",
						"true_rfc":"subject-Julie_location-jungle",
						"false_rfc":"subject-Russell_location-jungle" }
			} 
	var s_1390 = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Julie noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1390_ = {
		type: "html-keyboard-response",
		stimulus: "While ordering tea, Julie noticed the barista’s new mustache.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE21",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 
	var q_1391 = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Julie noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Julie stole a salt shaker and left.", "Julie then sat by the window, and read a book for hours."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1391_ = {
		type: "html-keyboard-response",
		stimulus: "<p> While ordering tea, Julie noticed the barista’s new mustache. <br><br><br> what happens next? <p>",
		labels: ["After ordering, Julie stole a salt shaker and left.", "Julie then sat by the window, and read a book for hours."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE21",
						"true_tonode": "NODE32",
						"false_tonode": "NODE31",
						"true_rfc":"subject-Julie_location-jungle",
						"false_rfc":"subject-Julie_location-jungle" }
			} 
	var s_1392 = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Julie stole a salt shaker and left.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1392_ = {
		type: "html-keyboard-response",
		stimulus: "After ordering, Julie stole a salt shaker and left.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE32",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 
	var s_1393 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1393_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Julie_location-jungle",
						"type": "story" }
	} 

	var betweenstory_199 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 

	var s_1394 = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Sean walked into the jungle brew house ",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1394_ = {
		type: "html-keyboard-response",
		stimulus: "One strange evening, Sean walked into the jungle brew house ",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "BEGIN",
						"rfc": "subject-Sean_location-jungle",
						"type": "story" }
	} 
	var s_1395 = {
		type: "html-keyboard-response",
		stimulus: "Today, Sean waited in line patiently.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1395_ = {
		type: "html-keyboard-response",
		stimulus: "Today, Sean waited in line patiently.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE11",
						"rfc": "subject-Sean_location-jungle",
						"type": "story" }
	} 
	var q_1396 = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sean waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jack took a quarter from the tip jar.", "Before ordering cake, Sean took a quarter from the tip jar."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1396_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Today, Sean waited in line patiently. <br><br><br> what happens next? <p>",
		labels: ["Before ordering cake, Jack took a quarter from the tip jar.", "Before ordering cake, Sean took a quarter from the tip jar."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NODE11",
						"true_tonode": "NODE22",
						"false_tonode": "NODE22",
						"true_rfc":"subject-Sean_location-jungle",
						"false_rfc":"subject-Jack_location-deep" }
			} 
	var s_1397 = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Sean took a quarter from the tip jar.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1397_ = {
		type: "html-keyboard-response",
		stimulus: "Before ordering cake, Sean took a quarter from the tip jar.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE22",
						"rfc": "subject-Sean_location-jungle",
						"type": "story" }
	} 
	var q_1398 = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Sean took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Sean then sat by the window, and read a book for hours.", "After ordering, Sean stole a salt shaker and left."],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_QUESTION_ITI
	}

	var q_1398_ = {
		type: "html-keyboard-response",
		stimulus: "<p> Before ordering cake, Sean took a quarter from the tip jar. <br><br><br> what happens next? <p>",
		labels: ["Sean then sat by the window, and read a book for hours.", "After ordering, Sean stole a salt shaker and left."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "NODE22",
						"true_tonode": "NODE31",
						"false_tonode": "NODE32",
						"true_rfc":"subject-Sean_location-jungle",
						"false_rfc":"subject-Sean_location-jungle" }
			} 
	var s_1399 = {
		type: "html-keyboard-response",
		stimulus: "Sean then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1399_ = {
		type: "html-keyboard-response",
		stimulus: "Sean then sat by the window, and read a book for hours.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "NODE31",
						"rfc": "subject-Sean_location-jungle",
						"type": "story" }
	} 
	var s_1400 = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: jsPsych.NO_KEYS,
		trial_duration: MIN_STORY_ITI,
		data: {"type": "instruction"}
	}

	var s_1400_ = {
		type: "html-keyboard-response",
		stimulus: "That is all that is remembered.",
		labels: ["", ""],
		choices: ['space'],
		data: { "state": "END",
						"rfc": "subject-Sean_location-jungle",
						"type": "story" }
	} 

	var betweenstory_200 = {
		type: 'instructions',
		pages: ['<h1 style="color:white; background-color:black"><br><br><br> ** ~ NEW STORY ~ ** <br><br><br><br><br></h1>'],
		data: {"type": "between_story_marker"}
	} 


// CODE BODY END


var comments = {
  type: 'survey-text',
  questions: [{prompt: "Thanks for participating! We appreciate any feedback.", 
                rows: 15, columns: 100}],
  }

jsPsych.init({
  timeline: [intro_instructions,intro_instructions2,s_1,s_1_,s_2,s_2_,q_3,q_3_,s_4,s_4_,q_5,q_5_,s_6,s_6_,s_7,s_7_,betweenstory_1,s_8,s_8_,s_9,s_9_,q_10,q_10_,s_11,s_11_,q_12,q_12_,s_13,s_13_,s_14,s_14_,betweenstory_2,s_15,s_15_,s_16,s_16_,q_17,q_17_,s_18,s_18_,q_19,q_19_,s_20,s_20_,s_21,s_21_,betweenstory_3,s_22,s_22_,s_23,s_23_,q_24,q_24_,s_25,s_25_,q_26,q_26_,s_27,s_27_,s_28,s_28_,betweenstory_4,s_29,s_29_,s_30,s_30_,q_31,q_31_,s_32,s_32_,q_33,q_33_,s_34,s_34_,s_35,s_35_,betweenstory_5,s_36,s_36_,s_37,s_37_,q_38,q_38_,s_39,s_39_,q_40,q_40_,s_41,s_41_,s_42,s_42_,betweenstory_6,s_43,s_43_,s_44,s_44_,q_45,q_45_,s_46,s_46_,q_47,q_47_,s_48,s_48_,s_49,s_49_,betweenstory_7,s_50,s_50_,s_51,s_51_,q_52,q_52_,s_53,s_53_,q_54,q_54_,s_55,s_55_,s_56,s_56_,betweenstory_8,s_57,s_57_,s_58,s_58_,q_59,q_59_,s_60,s_60_,q_61,q_61_,s_62,s_62_,s_63,s_63_,betweenstory_9,s_64,s_64_,s_65,s_65_,q_66,q_66_,s_67,s_67_,q_68,q_68_,s_69,s_69_,s_70,s_70_,betweenstory_10,s_71,s_71_,s_72,s_72_,q_73,q_73_,s_74,s_74_,q_75,q_75_,s_76,s_76_,s_77,s_77_,betweenstory_11,s_78,s_78_,s_79,s_79_,q_80,q_80_,s_81,s_81_,q_82,q_82_,s_83,s_83_,s_84,s_84_,betweenstory_12,s_85,s_85_,s_86,s_86_,q_87,q_87_,s_88,s_88_,q_89,q_89_,s_90,s_90_,s_91,s_91_,betweenstory_13,s_92,s_92_,s_93,s_93_,q_94,q_94_,s_95,s_95_,q_96,q_96_,s_97,s_97_,s_98,s_98_,betweenstory_14,s_99,s_99_,s_100,s_100_,q_101,q_101_,s_102,s_102_,q_103,q_103_,s_104,s_104_,s_105,s_105_,betweenstory_15,s_106,s_106_,s_107,s_107_,q_108,q_108_,s_109,s_109_,q_110,q_110_,s_111,s_111_,s_112,s_112_,betweenstory_16,s_113,s_113_,s_114,s_114_,q_115,q_115_,s_116,s_116_,q_117,q_117_,s_118,s_118_,s_119,s_119_,betweenstory_17,s_120,s_120_,s_121,s_121_,q_122,q_122_,s_123,s_123_,q_124,q_124_,s_125,s_125_,s_126,s_126_,betweenstory_18,s_127,s_127_,s_128,s_128_,q_129,q_129_,s_130,s_130_,q_131,q_131_,s_132,s_132_,s_133,s_133_,betweenstory_19,s_134,s_134_,s_135,s_135_,q_136,q_136_,s_137,s_137_,q_138,q_138_,s_139,s_139_,s_140,s_140_,betweenstory_20,s_141,s_141_,s_142,s_142_,q_143,q_143_,s_144,s_144_,q_145,q_145_,s_146,s_146_,s_147,s_147_,betweenstory_21,s_148,s_148_,s_149,s_149_,q_150,q_150_,s_151,s_151_,q_152,q_152_,s_153,s_153_,s_154,s_154_,betweenstory_22,s_155,s_155_,s_156,s_156_,q_157,q_157_,s_158,s_158_,q_159,q_159_,s_160,s_160_,s_161,s_161_,betweenstory_23,s_162,s_162_,s_163,s_163_,q_164,q_164_,s_165,s_165_,q_166,q_166_,s_167,s_167_,s_168,s_168_,betweenstory_24,s_169,s_169_,s_170,s_170_,q_171,q_171_,s_172,s_172_,q_173,q_173_,s_174,s_174_,s_175,s_175_,betweenstory_25,s_176,s_176_,s_177,s_177_,q_178,q_178_,s_179,s_179_,q_180,q_180_,s_181,s_181_,s_182,s_182_,betweenstory_26,s_183,s_183_,s_184,s_184_,q_185,q_185_,s_186,s_186_,q_187,q_187_,s_188,s_188_,s_189,s_189_,betweenstory_27,s_190,s_190_,s_191,s_191_,q_192,q_192_,s_193,s_193_,q_194,q_194_,s_195,s_195_,s_196,s_196_,betweenstory_28,s_197,s_197_,s_198,s_198_,q_199,q_199_,s_200,s_200_,q_201,q_201_,s_202,s_202_,s_203,s_203_,betweenstory_29,s_204,s_204_,s_205,s_205_,q_206,q_206_,s_207,s_207_,q_208,q_208_,s_209,s_209_,s_210,s_210_,betweenstory_30,s_211,s_211_,s_212,s_212_,q_213,q_213_,s_214,s_214_,q_215,q_215_,s_216,s_216_,s_217,s_217_,betweenstory_31,s_218,s_218_,s_219,s_219_,q_220,q_220_,s_221,s_221_,q_222,q_222_,s_223,s_223_,s_224,s_224_,betweenstory_32,s_225,s_225_,s_226,s_226_,q_227,q_227_,s_228,s_228_,q_229,q_229_,s_230,s_230_,s_231,s_231_,betweenstory_33,s_232,s_232_,s_233,s_233_,q_234,q_234_,s_235,s_235_,q_236,q_236_,s_237,s_237_,s_238,s_238_,betweenstory_34,s_239,s_239_,s_240,s_240_,q_241,q_241_,s_242,s_242_,q_243,q_243_,s_244,s_244_,s_245,s_245_,betweenstory_35,s_246,s_246_,s_247,s_247_,q_248,q_248_,s_249,s_249_,q_250,q_250_,s_251,s_251_,s_252,s_252_,betweenstory_36,s_253,s_253_,s_254,s_254_,q_255,q_255_,s_256,s_256_,q_257,q_257_,s_258,s_258_,s_259,s_259_,betweenstory_37,s_260,s_260_,s_261,s_261_,q_262,q_262_,s_263,s_263_,q_264,q_264_,s_265,s_265_,s_266,s_266_,betweenstory_38,s_267,s_267_,s_268,s_268_,q_269,q_269_,s_270,s_270_,q_271,q_271_,s_272,s_272_,s_273,s_273_,betweenstory_39,s_274,s_274_,s_275,s_275_,q_276,q_276_,s_277,s_277_,q_278,q_278_,s_279,s_279_,s_280,s_280_,betweenstory_40,s_281,s_281_,s_282,s_282_,q_283,q_283_,s_284,s_284_,q_285,q_285_,s_286,s_286_,s_287,s_287_,betweenstory_41,s_288,s_288_,s_289,s_289_,q_290,q_290_,s_291,s_291_,q_292,q_292_,s_293,s_293_,s_294,s_294_,betweenstory_42,s_295,s_295_,s_296,s_296_,q_297,q_297_,s_298,s_298_,q_299,q_299_,s_300,s_300_,s_301,s_301_,betweenstory_43,s_302,s_302_,s_303,s_303_,q_304,q_304_,s_305,s_305_,q_306,q_306_,s_307,s_307_,s_308,s_308_,betweenstory_44,s_309,s_309_,s_310,s_310_,q_311,q_311_,s_312,s_312_,q_313,q_313_,s_314,s_314_,s_315,s_315_,betweenstory_45,s_316,s_316_,s_317,s_317_,q_318,q_318_,s_319,s_319_,q_320,q_320_,s_321,s_321_,s_322,s_322_,betweenstory_46,s_323,s_323_,s_324,s_324_,q_325,q_325_,s_326,s_326_,q_327,q_327_,s_328,s_328_,s_329,s_329_,betweenstory_47,s_330,s_330_,s_331,s_331_,q_332,q_332_,s_333,s_333_,q_334,q_334_,s_335,s_335_,s_336,s_336_,betweenstory_48,s_337,s_337_,s_338,s_338_,q_339,q_339_,s_340,s_340_,q_341,q_341_,s_342,s_342_,s_343,s_343_,betweenstory_49,s_344,s_344_,s_345,s_345_,q_346,q_346_,s_347,s_347_,q_348,q_348_,s_349,s_349_,s_350,s_350_,betweenstory_50,s_351,s_351_,s_352,s_352_,q_353,q_353_,s_354,s_354_,q_355,q_355_,s_356,s_356_,s_357,s_357_,betweenstory_51,s_358,s_358_,s_359,s_359_,q_360,q_360_,s_361,s_361_,q_362,q_362_,s_363,s_363_,s_364,s_364_,betweenstory_52,s_365,s_365_,s_366,s_366_,q_367,q_367_,s_368,s_368_,q_369,q_369_,s_370,s_370_,s_371,s_371_,betweenstory_53,s_372,s_372_,s_373,s_373_,q_374,q_374_,s_375,s_375_,q_376,q_376_,s_377,s_377_,s_378,s_378_,betweenstory_54,s_379,s_379_,s_380,s_380_,q_381,q_381_,s_382,s_382_,q_383,q_383_,s_384,s_384_,s_385,s_385_,betweenstory_55,s_386,s_386_,s_387,s_387_,q_388,q_388_,s_389,s_389_,q_390,q_390_,s_391,s_391_,s_392,s_392_,betweenstory_56,s_393,s_393_,s_394,s_394_,q_395,q_395_,s_396,s_396_,q_397,q_397_,s_398,s_398_,s_399,s_399_,betweenstory_57,s_400,s_400_,s_401,s_401_,q_402,q_402_,s_403,s_403_,q_404,q_404_,s_405,s_405_,s_406,s_406_,betweenstory_58,s_407,s_407_,s_408,s_408_,q_409,q_409_,s_410,s_410_,q_411,q_411_,s_412,s_412_,s_413,s_413_,betweenstory_59,s_414,s_414_,s_415,s_415_,q_416,q_416_,s_417,s_417_,q_418,q_418_,s_419,s_419_,s_420,s_420_,betweenstory_60,s_421,s_421_,s_422,s_422_,q_423,q_423_,s_424,s_424_,q_425,q_425_,s_426,s_426_,s_427,s_427_,betweenstory_61,s_428,s_428_,s_429,s_429_,q_430,q_430_,s_431,s_431_,q_432,q_432_,s_433,s_433_,s_434,s_434_,betweenstory_62,s_435,s_435_,s_436,s_436_,q_437,q_437_,s_438,s_438_,q_439,q_439_,s_440,s_440_,s_441,s_441_,betweenstory_63,s_442,s_442_,s_443,s_443_,q_444,q_444_,s_445,s_445_,q_446,q_446_,s_447,s_447_,s_448,s_448_,betweenstory_64,s_449,s_449_,s_450,s_450_,q_451,q_451_,s_452,s_452_,q_453,q_453_,s_454,s_454_,s_455,s_455_,betweenstory_65,s_456,s_456_,s_457,s_457_,q_458,q_458_,s_459,s_459_,q_460,q_460_,s_461,s_461_,s_462,s_462_,betweenstory_66,s_463,s_463_,s_464,s_464_,q_465,q_465_,s_466,s_466_,q_467,q_467_,s_468,s_468_,s_469,s_469_,betweenstory_67,s_470,s_470_,s_471,s_471_,q_472,q_472_,s_473,s_473_,q_474,q_474_,s_475,s_475_,s_476,s_476_,betweenstory_68,s_477,s_477_,s_478,s_478_,q_479,q_479_,s_480,s_480_,q_481,q_481_,s_482,s_482_,s_483,s_483_,betweenstory_69,s_484,s_484_,s_485,s_485_,q_486,q_486_,s_487,s_487_,q_488,q_488_,s_489,s_489_,s_490,s_490_,betweenstory_70,s_491,s_491_,s_492,s_492_,q_493,q_493_,s_494,s_494_,q_495,q_495_,s_496,s_496_,s_497,s_497_,betweenstory_71,s_498,s_498_,s_499,s_499_,q_500,q_500_,s_501,s_501_,q_502,q_502_,s_503,s_503_,s_504,s_504_,betweenstory_72,s_505,s_505_,s_506,s_506_,q_507,q_507_,s_508,s_508_,q_509,q_509_,s_510,s_510_,s_511,s_511_,betweenstory_73,s_512,s_512_,s_513,s_513_,q_514,q_514_,s_515,s_515_,q_516,q_516_,s_517,s_517_,s_518,s_518_,betweenstory_74,s_519,s_519_,s_520,s_520_,q_521,q_521_,s_522,s_522_,q_523,q_523_,s_524,s_524_,s_525,s_525_,betweenstory_75,s_526,s_526_,s_527,s_527_,q_528,q_528_,s_529,s_529_,q_530,q_530_,s_531,s_531_,s_532,s_532_,betweenstory_76,s_533,s_533_,s_534,s_534_,q_535,q_535_,s_536,s_536_,q_537,q_537_,s_538,s_538_,s_539,s_539_,betweenstory_77,s_540,s_540_,s_541,s_541_,q_542,q_542_,s_543,s_543_,q_544,q_544_,s_545,s_545_,s_546,s_546_,betweenstory_78,s_547,s_547_,s_548,s_548_,q_549,q_549_,s_550,s_550_,q_551,q_551_,s_552,s_552_,s_553,s_553_,betweenstory_79,s_554,s_554_,s_555,s_555_,q_556,q_556_,s_557,s_557_,q_558,q_558_,s_559,s_559_,s_560,s_560_,betweenstory_80,s_561,s_561_,s_562,s_562_,q_563,q_563_,s_564,s_564_,q_565,q_565_,s_566,s_566_,s_567,s_567_,betweenstory_81,s_568,s_568_,s_569,s_569_,q_570,q_570_,s_571,s_571_,q_572,q_572_,s_573,s_573_,s_574,s_574_,betweenstory_82,s_575,s_575_,s_576,s_576_,q_577,q_577_,s_578,s_578_,q_579,q_579_,s_580,s_580_,s_581,s_581_,betweenstory_83,s_582,s_582_,s_583,s_583_,q_584,q_584_,s_585,s_585_,q_586,q_586_,s_587,s_587_,s_588,s_588_,betweenstory_84,s_589,s_589_,s_590,s_590_,q_591,q_591_,s_592,s_592_,q_593,q_593_,s_594,s_594_,s_595,s_595_,betweenstory_85,s_596,s_596_,s_597,s_597_,q_598,q_598_,s_599,s_599_,q_600,q_600_,s_601,s_601_,s_602,s_602_,betweenstory_86,s_603,s_603_,s_604,s_604_,q_605,q_605_,s_606,s_606_,q_607,q_607_,s_608,s_608_,s_609,s_609_,betweenstory_87,s_610,s_610_,s_611,s_611_,q_612,q_612_,s_613,s_613_,q_614,q_614_,s_615,s_615_,s_616,s_616_,betweenstory_88,s_617,s_617_,s_618,s_618_,q_619,q_619_,s_620,s_620_,q_621,q_621_,s_622,s_622_,s_623,s_623_,betweenstory_89,s_624,s_624_,s_625,s_625_,q_626,q_626_,s_627,s_627_,q_628,q_628_,s_629,s_629_,s_630,s_630_,betweenstory_90,s_631,s_631_,s_632,s_632_,q_633,q_633_,s_634,s_634_,q_635,q_635_,s_636,s_636_,s_637,s_637_,betweenstory_91,s_638,s_638_,s_639,s_639_,q_640,q_640_,s_641,s_641_,q_642,q_642_,s_643,s_643_,s_644,s_644_,betweenstory_92,s_645,s_645_,s_646,s_646_,q_647,q_647_,s_648,s_648_,q_649,q_649_,s_650,s_650_,s_651,s_651_,betweenstory_93,s_652,s_652_,s_653,s_653_,q_654,q_654_,s_655,s_655_,q_656,q_656_,s_657,s_657_,s_658,s_658_,betweenstory_94,s_659,s_659_,s_660,s_660_,q_661,q_661_,s_662,s_662_,q_663,q_663_,s_664,s_664_,s_665,s_665_,betweenstory_95,s_666,s_666_,s_667,s_667_,q_668,q_668_,s_669,s_669_,q_670,q_670_,s_671,s_671_,s_672,s_672_,betweenstory_96,s_673,s_673_,s_674,s_674_,q_675,q_675_,s_676,s_676_,q_677,q_677_,s_678,s_678_,s_679,s_679_,betweenstory_97,s_680,s_680_,s_681,s_681_,q_682,q_682_,s_683,s_683_,q_684,q_684_,s_685,s_685_,s_686,s_686_,betweenstory_98,s_687,s_687_,s_688,s_688_,q_689,q_689_,s_690,s_690_,q_691,q_691_,s_692,s_692_,s_693,s_693_,betweenstory_99,s_694,s_694_,s_695,s_695_,q_696,q_696_,s_697,s_697_,q_698,q_698_,s_699,s_699_,s_700,s_700_,betweenstory_100,s_701,s_701_,s_702,s_702_,q_703,q_703_,s_704,s_704_,q_705,q_705_,s_706,s_706_,s_707,s_707_,betweenstory_101,s_708,s_708_,s_709,s_709_,q_710,q_710_,s_711,s_711_,q_712,q_712_,s_713,s_713_,s_714,s_714_,betweenstory_102,s_715,s_715_,s_716,s_716_,q_717,q_717_,s_718,s_718_,q_719,q_719_,s_720,s_720_,s_721,s_721_,betweenstory_103,s_722,s_722_,s_723,s_723_,q_724,q_724_,s_725,s_725_,q_726,q_726_,s_727,s_727_,s_728,s_728_,betweenstory_104,s_729,s_729_,s_730,s_730_,q_731,q_731_,s_732,s_732_,q_733,q_733_,s_734,s_734_,s_735,s_735_,betweenstory_105,s_736,s_736_,s_737,s_737_,q_738,q_738_,s_739,s_739_,q_740,q_740_,s_741,s_741_,s_742,s_742_,betweenstory_106,s_743,s_743_,s_744,s_744_,q_745,q_745_,s_746,s_746_,q_747,q_747_,s_748,s_748_,s_749,s_749_,betweenstory_107,s_750,s_750_,s_751,s_751_,q_752,q_752_,s_753,s_753_,q_754,q_754_,s_755,s_755_,s_756,s_756_,betweenstory_108,s_757,s_757_,s_758,s_758_,q_759,q_759_,s_760,s_760_,q_761,q_761_,s_762,s_762_,s_763,s_763_,betweenstory_109,s_764,s_764_,s_765,s_765_,q_766,q_766_,s_767,s_767_,q_768,q_768_,s_769,s_769_,s_770,s_770_,betweenstory_110,s_771,s_771_,s_772,s_772_,q_773,q_773_,s_774,s_774_,q_775,q_775_,s_776,s_776_,s_777,s_777_,betweenstory_111,s_778,s_778_,s_779,s_779_,q_780,q_780_,s_781,s_781_,q_782,q_782_,s_783,s_783_,s_784,s_784_,betweenstory_112,s_785,s_785_,s_786,s_786_,q_787,q_787_,s_788,s_788_,q_789,q_789_,s_790,s_790_,s_791,s_791_,betweenstory_113,s_792,s_792_,s_793,s_793_,q_794,q_794_,s_795,s_795_,q_796,q_796_,s_797,s_797_,s_798,s_798_,betweenstory_114,s_799,s_799_,s_800,s_800_,q_801,q_801_,s_802,s_802_,q_803,q_803_,s_804,s_804_,s_805,s_805_,betweenstory_115,s_806,s_806_,s_807,s_807_,q_808,q_808_,s_809,s_809_,q_810,q_810_,s_811,s_811_,s_812,s_812_,betweenstory_116,s_813,s_813_,s_814,s_814_,q_815,q_815_,s_816,s_816_,q_817,q_817_,s_818,s_818_,s_819,s_819_,betweenstory_117,s_820,s_820_,s_821,s_821_,q_822,q_822_,s_823,s_823_,q_824,q_824_,s_825,s_825_,s_826,s_826_,betweenstory_118,s_827,s_827_,s_828,s_828_,q_829,q_829_,s_830,s_830_,q_831,q_831_,s_832,s_832_,s_833,s_833_,betweenstory_119,s_834,s_834_,s_835,s_835_,q_836,q_836_,s_837,s_837_,q_838,q_838_,s_839,s_839_,s_840,s_840_,betweenstory_120,s_841,s_841_,s_842,s_842_,q_843,q_843_,s_844,s_844_,q_845,q_845_,s_846,s_846_,s_847,s_847_,betweenstory_121,s_848,s_848_,s_849,s_849_,q_850,q_850_,s_851,s_851_,q_852,q_852_,s_853,s_853_,s_854,s_854_,betweenstory_122,s_855,s_855_,s_856,s_856_,q_857,q_857_,s_858,s_858_,q_859,q_859_,s_860,s_860_,s_861,s_861_,betweenstory_123,s_862,s_862_,s_863,s_863_,q_864,q_864_,s_865,s_865_,q_866,q_866_,s_867,s_867_,s_868,s_868_,betweenstory_124,s_869,s_869_,s_870,s_870_,q_871,q_871_,s_872,s_872_,q_873,q_873_,s_874,s_874_,s_875,s_875_,betweenstory_125,s_876,s_876_,s_877,s_877_,q_878,q_878_,s_879,s_879_,q_880,q_880_,s_881,s_881_,s_882,s_882_,betweenstory_126,s_883,s_883_,s_884,s_884_,q_885,q_885_,s_886,s_886_,q_887,q_887_,s_888,s_888_,s_889,s_889_,betweenstory_127,s_890,s_890_,s_891,s_891_,q_892,q_892_,s_893,s_893_,q_894,q_894_,s_895,s_895_,s_896,s_896_,betweenstory_128,s_897,s_897_,s_898,s_898_,q_899,q_899_,s_900,s_900_,q_901,q_901_,s_902,s_902_,s_903,s_903_,betweenstory_129,s_904,s_904_,s_905,s_905_,q_906,q_906_,s_907,s_907_,q_908,q_908_,s_909,s_909_,s_910,s_910_,betweenstory_130,s_911,s_911_,s_912,s_912_,q_913,q_913_,s_914,s_914_,q_915,q_915_,s_916,s_916_,s_917,s_917_,betweenstory_131,s_918,s_918_,s_919,s_919_,q_920,q_920_,s_921,s_921_,q_922,q_922_,s_923,s_923_,s_924,s_924_,betweenstory_132,s_925,s_925_,s_926,s_926_,q_927,q_927_,s_928,s_928_,q_929,q_929_,s_930,s_930_,s_931,s_931_,betweenstory_133,s_932,s_932_,s_933,s_933_,q_934,q_934_,s_935,s_935_,q_936,q_936_,s_937,s_937_,s_938,s_938_,betweenstory_134,s_939,s_939_,s_940,s_940_,q_941,q_941_,s_942,s_942_,q_943,q_943_,s_944,s_944_,s_945,s_945_,betweenstory_135,s_946,s_946_,s_947,s_947_,q_948,q_948_,s_949,s_949_,q_950,q_950_,s_951,s_951_,s_952,s_952_,betweenstory_136,s_953,s_953_,s_954,s_954_,q_955,q_955_,s_956,s_956_,q_957,q_957_,s_958,s_958_,s_959,s_959_,betweenstory_137,s_960,s_960_,s_961,s_961_,q_962,q_962_,s_963,s_963_,q_964,q_964_,s_965,s_965_,s_966,s_966_,betweenstory_138,s_967,s_967_,s_968,s_968_,q_969,q_969_,s_970,s_970_,q_971,q_971_,s_972,s_972_,s_973,s_973_,betweenstory_139,s_974,s_974_,s_975,s_975_,q_976,q_976_,s_977,s_977_,q_978,q_978_,s_979,s_979_,s_980,s_980_,betweenstory_140,s_981,s_981_,s_982,s_982_,q_983,q_983_,s_984,s_984_,q_985,q_985_,s_986,s_986_,s_987,s_987_,betweenstory_141,s_988,s_988_,s_989,s_989_,q_990,q_990_,s_991,s_991_,q_992,q_992_,s_993,s_993_,s_994,s_994_,betweenstory_142,s_995,s_995_,s_996,s_996_,q_997,q_997_,s_998,s_998_,q_999,q_999_,s_1000,s_1000_,s_1001,s_1001_,betweenstory_143,s_1002,s_1002_,s_1003,s_1003_,q_1004,q_1004_,s_1005,s_1005_,q_1006,q_1006_,s_1007,s_1007_,s_1008,s_1008_,betweenstory_144,s_1009,s_1009_,s_1010,s_1010_,q_1011,q_1011_,s_1012,s_1012_,q_1013,q_1013_,s_1014,s_1014_,s_1015,s_1015_,betweenstory_145,s_1016,s_1016_,s_1017,s_1017_,q_1018,q_1018_,s_1019,s_1019_,q_1020,q_1020_,s_1021,s_1021_,s_1022,s_1022_,betweenstory_146,s_1023,s_1023_,s_1024,s_1024_,q_1025,q_1025_,s_1026,s_1026_,q_1027,q_1027_,s_1028,s_1028_,s_1029,s_1029_,betweenstory_147,s_1030,s_1030_,s_1031,s_1031_,q_1032,q_1032_,s_1033,s_1033_,q_1034,q_1034_,s_1035,s_1035_,s_1036,s_1036_,betweenstory_148,s_1037,s_1037_,s_1038,s_1038_,q_1039,q_1039_,s_1040,s_1040_,q_1041,q_1041_,s_1042,s_1042_,s_1043,s_1043_,betweenstory_149,s_1044,s_1044_,s_1045,s_1045_,q_1046,q_1046_,s_1047,s_1047_,q_1048,q_1048_,s_1049,s_1049_,s_1050,s_1050_,betweenstory_150,s_1051,s_1051_,s_1052,s_1052_,q_1053,q_1053_,s_1054,s_1054_,q_1055,q_1055_,s_1056,s_1056_,s_1057,s_1057_,betweenstory_151,s_1058,s_1058_,s_1059,s_1059_,q_1060,q_1060_,s_1061,s_1061_,q_1062,q_1062_,s_1063,s_1063_,s_1064,s_1064_,betweenstory_152,s_1065,s_1065_,s_1066,s_1066_,q_1067,q_1067_,s_1068,s_1068_,q_1069,q_1069_,s_1070,s_1070_,s_1071,s_1071_,betweenstory_153,s_1072,s_1072_,s_1073,s_1073_,q_1074,q_1074_,s_1075,s_1075_,q_1076,q_1076_,s_1077,s_1077_,s_1078,s_1078_,betweenstory_154,s_1079,s_1079_,s_1080,s_1080_,q_1081,q_1081_,s_1082,s_1082_,q_1083,q_1083_,s_1084,s_1084_,s_1085,s_1085_,betweenstory_155,s_1086,s_1086_,s_1087,s_1087_,q_1088,q_1088_,s_1089,s_1089_,q_1090,q_1090_,s_1091,s_1091_,s_1092,s_1092_,betweenstory_156,s_1093,s_1093_,s_1094,s_1094_,q_1095,q_1095_,s_1096,s_1096_,q_1097,q_1097_,s_1098,s_1098_,s_1099,s_1099_,betweenstory_157,s_1100,s_1100_,s_1101,s_1101_,q_1102,q_1102_,s_1103,s_1103_,q_1104,q_1104_,s_1105,s_1105_,s_1106,s_1106_,betweenstory_158,s_1107,s_1107_,s_1108,s_1108_,q_1109,q_1109_,s_1110,s_1110_,q_1111,q_1111_,s_1112,s_1112_,s_1113,s_1113_,betweenstory_159,s_1114,s_1114_,s_1115,s_1115_,q_1116,q_1116_,s_1117,s_1117_,q_1118,q_1118_,s_1119,s_1119_,s_1120,s_1120_,betweenstory_160,s_1121,s_1121_,s_1122,s_1122_,q_1123,q_1123_,s_1124,s_1124_,q_1125,q_1125_,s_1126,s_1126_,s_1127,s_1127_,betweenstory_161,s_1128,s_1128_,s_1129,s_1129_,q_1130,q_1130_,s_1131,s_1131_,q_1132,q_1132_,s_1133,s_1133_,s_1134,s_1134_,betweenstory_162,s_1135,s_1135_,s_1136,s_1136_,q_1137,q_1137_,s_1138,s_1138_,q_1139,q_1139_,s_1140,s_1140_,s_1141,s_1141_,betweenstory_163,s_1142,s_1142_,s_1143,s_1143_,q_1144,q_1144_,s_1145,s_1145_,q_1146,q_1146_,s_1147,s_1147_,s_1148,s_1148_,betweenstory_164,s_1149,s_1149_,s_1150,s_1150_,q_1151,q_1151_,s_1152,s_1152_,q_1153,q_1153_,s_1154,s_1154_,s_1155,s_1155_,betweenstory_165,s_1156,s_1156_,s_1157,s_1157_,q_1158,q_1158_,s_1159,s_1159_,q_1160,q_1160_,s_1161,s_1161_,s_1162,s_1162_,betweenstory_166,s_1163,s_1163_,s_1164,s_1164_,q_1165,q_1165_,s_1166,s_1166_,q_1167,q_1167_,s_1168,s_1168_,s_1169,s_1169_,betweenstory_167,s_1170,s_1170_,s_1171,s_1171_,q_1172,q_1172_,s_1173,s_1173_,q_1174,q_1174_,s_1175,s_1175_,s_1176,s_1176_,betweenstory_168,s_1177,s_1177_,s_1178,s_1178_,q_1179,q_1179_,s_1180,s_1180_,q_1181,q_1181_,s_1182,s_1182_,s_1183,s_1183_,betweenstory_169,s_1184,s_1184_,s_1185,s_1185_,q_1186,q_1186_,s_1187,s_1187_,q_1188,q_1188_,s_1189,s_1189_,s_1190,s_1190_,betweenstory_170,s_1191,s_1191_,s_1192,s_1192_,q_1193,q_1193_,s_1194,s_1194_,q_1195,q_1195_,s_1196,s_1196_,s_1197,s_1197_,betweenstory_171,s_1198,s_1198_,s_1199,s_1199_,q_1200,q_1200_,s_1201,s_1201_,q_1202,q_1202_,s_1203,s_1203_,s_1204,s_1204_,betweenstory_172,s_1205,s_1205_,s_1206,s_1206_,q_1207,q_1207_,s_1208,s_1208_,q_1209,q_1209_,s_1210,s_1210_,s_1211,s_1211_,betweenstory_173,s_1212,s_1212_,s_1213,s_1213_,q_1214,q_1214_,s_1215,s_1215_,q_1216,q_1216_,s_1217,s_1217_,s_1218,s_1218_,betweenstory_174,s_1219,s_1219_,s_1220,s_1220_,q_1221,q_1221_,s_1222,s_1222_,q_1223,q_1223_,s_1224,s_1224_,s_1225,s_1225_,betweenstory_175,s_1226,s_1226_,s_1227,s_1227_,q_1228,q_1228_,s_1229,s_1229_,q_1230,q_1230_,s_1231,s_1231_,s_1232,s_1232_,betweenstory_176,s_1233,s_1233_,s_1234,s_1234_,q_1235,q_1235_,s_1236,s_1236_,q_1237,q_1237_,s_1238,s_1238_,s_1239,s_1239_,betweenstory_177,s_1240,s_1240_,s_1241,s_1241_,q_1242,q_1242_,s_1243,s_1243_,q_1244,q_1244_,s_1245,s_1245_,s_1246,s_1246_,betweenstory_178,s_1247,s_1247_,s_1248,s_1248_,q_1249,q_1249_,s_1250,s_1250_,q_1251,q_1251_,s_1252,s_1252_,s_1253,s_1253_,betweenstory_179,s_1254,s_1254_,s_1255,s_1255_,q_1256,q_1256_,s_1257,s_1257_,q_1258,q_1258_,s_1259,s_1259_,s_1260,s_1260_,betweenstory_180,s_1261,s_1261_,s_1262,s_1262_,q_1263,q_1263_,s_1264,s_1264_,q_1265,q_1265_,s_1266,s_1266_,s_1267,s_1267_,betweenstory_181,s_1268,s_1268_,s_1269,s_1269_,q_1270,q_1270_,s_1271,s_1271_,q_1272,q_1272_,s_1273,s_1273_,s_1274,s_1274_,betweenstory_182,s_1275,s_1275_,s_1276,s_1276_,q_1277,q_1277_,s_1278,s_1278_,q_1279,q_1279_,s_1280,s_1280_,s_1281,s_1281_,betweenstory_183,s_1282,s_1282_,s_1283,s_1283_,q_1284,q_1284_,s_1285,s_1285_,q_1286,q_1286_,s_1287,s_1287_,s_1288,s_1288_,betweenstory_184,s_1289,s_1289_,s_1290,s_1290_,q_1291,q_1291_,s_1292,s_1292_,q_1293,q_1293_,s_1294,s_1294_,s_1295,s_1295_,betweenstory_185,s_1296,s_1296_,s_1297,s_1297_,q_1298,q_1298_,s_1299,s_1299_,q_1300,q_1300_,s_1301,s_1301_,s_1302,s_1302_,betweenstory_186,s_1303,s_1303_,s_1304,s_1304_,q_1305,q_1305_,s_1306,s_1306_,q_1307,q_1307_,s_1308,s_1308_,s_1309,s_1309_,betweenstory_187,s_1310,s_1310_,s_1311,s_1311_,q_1312,q_1312_,s_1313,s_1313_,q_1314,q_1314_,s_1315,s_1315_,s_1316,s_1316_,betweenstory_188,s_1317,s_1317_,s_1318,s_1318_,q_1319,q_1319_,s_1320,s_1320_,q_1321,q_1321_,s_1322,s_1322_,s_1323,s_1323_,betweenstory_189,s_1324,s_1324_,s_1325,s_1325_,q_1326,q_1326_,s_1327,s_1327_,q_1328,q_1328_,s_1329,s_1329_,s_1330,s_1330_,betweenstory_190,s_1331,s_1331_,s_1332,s_1332_,q_1333,q_1333_,s_1334,s_1334_,q_1335,q_1335_,s_1336,s_1336_,s_1337,s_1337_,betweenstory_191,s_1338,s_1338_,s_1339,s_1339_,q_1340,q_1340_,s_1341,s_1341_,q_1342,q_1342_,s_1343,s_1343_,s_1344,s_1344_,betweenstory_192,s_1345,s_1345_,s_1346,s_1346_,q_1347,q_1347_,s_1348,s_1348_,q_1349,q_1349_,s_1350,s_1350_,s_1351,s_1351_,betweenstory_193,s_1352,s_1352_,s_1353,s_1353_,q_1354,q_1354_,s_1355,s_1355_,q_1356,q_1356_,s_1357,s_1357_,s_1358,s_1358_,betweenstory_194,s_1359,s_1359_,s_1360,s_1360_,q_1361,q_1361_,s_1362,s_1362_,q_1363,q_1363_,s_1364,s_1364_,s_1365,s_1365_,betweenstory_195,s_1366,s_1366_,s_1367,s_1367_,q_1368,q_1368_,s_1369,s_1369_,q_1370,q_1370_,s_1371,s_1371_,s_1372,s_1372_,betweenstory_196,s_1373,s_1373_,s_1374,s_1374_,q_1375,q_1375_,s_1376,s_1376_,q_1377,q_1377_,s_1378,s_1378_,s_1379,s_1379_,betweenstory_197,s_1380,s_1380_,s_1381,s_1381_,q_1382,q_1382_,s_1383,s_1383_,q_1384,q_1384_,s_1385,s_1385_,s_1386,s_1386_,betweenstory_198,s_1387,s_1387_,s_1388,s_1388_,q_1389,q_1389_,s_1390,s_1390_,q_1391,q_1391_,s_1392,s_1392_,s_1393,s_1393_,betweenstory_199,s_1394,s_1394_,s_1395,s_1395_,q_1396,q_1396_,s_1397,s_1397_,q_1398,q_1398_,s_1399,s_1399_,s_1400,s_1400_,betweenstory_200,comments],
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