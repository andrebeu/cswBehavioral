// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var intro_instructions = {
  type: 'instructions',
  pages: ['** After reading this sentence, press spacebar. ** ',
  'Thank you for helping make science happen. (please press spacebar).',
  'Please read the following instructions carefully.',
  'This task involves reading stories and answering questions about the stories.',
  'Depending on how many questions you answer correctly, you can make up to $8.',
  'You will read 100 stories, presented one sentence at a time.',
  'Eventually you will start seeing questions that ask you to predict what happens next in the story.',
  'We will give you two alternative answers. Select the best answer with the left or right key arrow on your keyboard.',
  'Again, if you catch on to the regularities in the stories, you can make up to $8.',
  'Good luck!',
  ' ** ~ WE WILL BEGIN ~ ** '],
  data: {"type":"instruction"}
  }


// CODE BODY START


	var s_1 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
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
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_17 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["he was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
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
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_33 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_41 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_42 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'muddy water' was good here.", "she knew the 'muddy water' was good here."],
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
	var s_43 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_45 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_46 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_49 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_50 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_52 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_55 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_57 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_58 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our narrative is never to be taken lightly!'"],
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
	var s_60 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_61 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_62 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_64 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_66 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!", "After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
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
	var s_67 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_68 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_69 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_72 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_73 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_75 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_76 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'matcha roots' was good here.", "she was told the 'matcha roots' was good here."],
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
	var s_77 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_78 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that Bob Dylan must have been right after all!", "Before ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_79 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_80 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_81 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_82 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_83 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_87 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_88 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'matcha roots' was good here.", "she knew the 'matcha roots' was good here."],
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
	var s_89 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_90 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized all is well beyond the library's last book shelf!", "Before ordering, Alice realized all is well beyond the library's last book shelf!"],
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
	var s_91 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_93 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_94 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_95 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our story is all we could ever know!'"],
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
	var s_96 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_97 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_98 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_100 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_104 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our story is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_107 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_110 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_112 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_113 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_115 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_116 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_120 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_122 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!", "After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
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
	var s_123 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_124 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_125 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_126 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_127 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_129 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_130 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_132 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_133 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
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
	var s_134 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_135 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
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
	var s_136 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_137 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_138 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
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
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_142 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_143 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_145 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_146 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'muddy water' was good here.", "she knew the 'muddy water' was good here."],
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
	var s_147 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_149 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_150 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_153 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_154 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_156 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_158 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!", "After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
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
	var s_159 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_160 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_161 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_162 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_163 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_164 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_165 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_166 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_167 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_169 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_171 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!", "After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
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
	var s_172 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_174 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_175 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_176 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
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
	var s_177 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_180 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_181 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'mocha hopps' was good here.", "she was told the 'mocha hopps' was good here."],
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
	var s_182 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_184 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_185 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_187 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
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
	var s_188 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_189 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_190 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_192 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_193 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'matcha roots' was good here.", "he was told the 'matcha roots' was good here."],
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
	var s_194 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_197 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_198 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_199 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_203 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_206 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_207 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_210 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_213 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_214 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'silk potion' was good here.", "he knew the 'silk potion' was good here."],
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
	var s_215 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_217 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_218 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_220 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
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
	var s_221 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_224 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ["he was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_226 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!", "Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
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
	var s_227 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_229 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_230 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_232 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_233 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_235 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_237 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!", "Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
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
	var s_238 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_239 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_240 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_242 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our story is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_243 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_246 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_248 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_249 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_250 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_251 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_252 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_253 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_254 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is never to be taken lightly!'", "'Our story is never to be taken lightly!'"],
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
	var s_255 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_256 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_257 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_259 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_261 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_262 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_263 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_264 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_265 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_266 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_270 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_271 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'matcha roots' was good here.", "she knew the 'matcha roots' was good here."],
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
	var s_272 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_274 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_275 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_280 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_282 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
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
	var s_283 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_286 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_287 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_288 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Bill transcended."],
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
	var s_289 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_291 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_292 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'matcha roots' was good here.", "she knew the 'matcha roots' was good here."],
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
	var s_293 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_295 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_296 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_298 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our story is a serious thing to behold!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_299 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_301 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_303 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_304 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
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
	var s_305 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_308 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_309 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_310 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_311 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_312 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_313 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_315 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_317 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!", "After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
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
	var s_318 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_319 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_320 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_321 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_322 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_326 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_328 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_329 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_330 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_331 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_332 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_333 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_335 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_336 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_338 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_339 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'mocha hopps' was good here.", "she was told the 'mocha hopps' was good here."],
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
	var s_340 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_341 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that Bob Dylan must have been right after all!", "After ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_342 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_343 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_344 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_345 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_346 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_349 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_351 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_355 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_356 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_357 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_358 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_361 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_362 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'silk potion' was good here.", "he knew the 'silk potion' was good here."],
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
	var s_363 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_365 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_366 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_367 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_368 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_369 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
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
	var s_370 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_371 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_372 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_374 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_375 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'muddy water' was good here.", "she knew the 'muddy water' was good here."],
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
	var s_376 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_377 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that Bob Dylan must have been right after all!", "Before ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_378 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_379 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_380 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_382 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_383 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
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
	var s_384 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_387 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_388 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'silk potion' was good here.", "he was told the 'silk potion' was good here."],
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
	var s_389 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_391 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_393 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is never to be taken lightly!'", "'Our story is never to be taken lightly!'"],
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
	var s_394 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_395 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_396 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
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
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_399 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
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
	var s_400 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_401 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Bill realized that Bob Dylan must have been right after all!"],
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
	var s_402 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_403 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_404 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_405 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_406 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_407 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
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
	var s_408 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_411 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_412 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
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
	var s_413 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_414 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!", "Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_415 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_416 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_417 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_419 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is never to be taken lightly!'", "'Our story is never to be taken lightly!'"],
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
	var s_420 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_421 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_422 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_424 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_426 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!", "After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
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
	var s_427 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_428 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_429 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_430 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_431 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_433 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_434 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_436 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_437 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'matcha roots' was good here.", "he knew the 'matcha roots' was good here."],
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
	var s_438 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_439 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Bill realized that Bob Dylan must have been right after all!"],
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
	var s_440 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_441 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_442 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_443 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_444 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_446 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_447 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_449 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_450 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'silk potion' was good here.", "she was told the 'silk potion' was good here."],
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
	var s_451 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_453 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_454 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_456 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_457 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_458 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_459 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_461 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_462 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'silk potion' was good here.", "he knew the 'silk potion' was good here."],
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
	var s_463 = {
		type: 'instructions',
		pages: ["he was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_464 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_465 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_467 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_468 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_470 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_471 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_472 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_473 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_475 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_476 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_477 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_478 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_479 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_480 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_481 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
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
	var s_482 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_483 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_484 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_486 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_487 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'matcha roots' was good here.", "she knew the 'matcha roots' was good here."],
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
	var s_488 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_489 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
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
	var s_490 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_491 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_492 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_495 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_496 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_498 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_499 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'silk potion' was good here.", "he knew the 'silk potion' was good here."],
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
	var s_500 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_501 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!", "After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_502 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_503 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_504 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_505 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_506 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_507 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
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
	var s_508 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_510 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_512 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_513 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'mocha hopps' was good here.", "she was told the 'mocha hopps' was good here."],
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
	var s_514 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_515 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!", "After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_516 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_517 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_518 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_523 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_525 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!", "After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_526 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_528 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_529 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_530 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_531 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_534 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_535 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'mocha hopps' was good here.", "she was told the 'mocha hopps' was good here."],
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
	var s_536 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_539 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_540 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_541 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our story is a serious thing to behold!'"],
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
	var s_542 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_543 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_544 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_546 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_548 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_549 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_550 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_551 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_553 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our narrative is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "NARRATIVE",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_554 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_557 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_561 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_562 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_563 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_564 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_565 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_567 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_569 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_570 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'silk potion' was good here.", "he was told the 'silk potion' was good here."],
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
	var s_571 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_573 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_574 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_575 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_576 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_577 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_578 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_581 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
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
	var s_583 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_584 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_585 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_587 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_588 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_589 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "NARRATIVE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_590 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_591 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_592 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_594 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_595 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'muddy water' was good here.", "he was told the 'muddy water' was good here."],
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
	var s_596 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_597 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!", "After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_598 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_599 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_600 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_601 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_602 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_604 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_605 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_607 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_610 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_611 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_613 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
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
	var s_614 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_617 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_618 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'matcha roots' was good here.", "he knew the 'matcha roots' was good here."],
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
	var s_619 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_621 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_622 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_625 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_626 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_628 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_630 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Alice realized all is well beyond the library's last book shelf!"],
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
	var s_631 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_632 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_633 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_634 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_635 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_636 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
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
	var s_637 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_638 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_639 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_641 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_642 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'muddy water' was good here.", "she knew the 'muddy water' was good here."],
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
	var s_643 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_645 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_646 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_647 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "RADIO",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_648 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_650 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Bill transcended."],
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
	var s_651 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_653 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_657 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_658 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_659 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
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
	var s_660 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_661 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_662 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_664 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_666 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that Bob Dylan must have been right after all!", "Before ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_667 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_669 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_670 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_671 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_672 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_673 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_676 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_677 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
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
	var s_678 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_679 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that Bob Dylan must have been right after all!", "Before ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_680 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_681 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_682 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_684 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
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
	var s_685 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_686 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_687 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_689 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_690 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'mocha hopps' was good here.", "he was told the 'mocha hopps' was good here."],
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
	var s_691 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_692 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "After ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_693 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_694 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_695 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_697 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_698 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_701 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_702 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'silk potion' was good here.", "she was told the 'silk potion' was good here."],
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
	var s_703 = {
		type: 'instructions',
		pages: ["she knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_704 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_705 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_706 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_708 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our story is that which is Real and True!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "PARENTS",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_709 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_710 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_711 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_712 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_713 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_714 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'silk potion' was good here.", "she was told the 'silk potion' was good here."],
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
	var s_715 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_716 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized all is well beyond the library's last book shelf!", "Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "TOLD",
						"true_tonode": "AFTER",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_717 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_718 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_719 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_721 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_722 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_723 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_725 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_726 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_729 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_730 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_731 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is never to be taken lightly!'", "'Our story is never to be taken lightly!'"],
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
	var s_732 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_733 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_735 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_736 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'mocha hopps' was good here.", "she knew the 'mocha hopps' was good here."],
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
	var s_737 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_739 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_740 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_741 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_742 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_744 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_745 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_746 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_747 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_748 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_749 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!", "Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
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
	var s_750 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_751 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_752 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_753 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_754 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Alice transcended."],
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
	var s_755 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_756 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_757 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_758 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'silk potion' was good here.", "she knew the 'silk potion' was good here."],
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
	var s_759 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_760 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that Bob Dylan must have been right after all!", "Before ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_761 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_762 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_763 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_764 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_765 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_768 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_769 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_770 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_771 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_772 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_773 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_776 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_777 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_778 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_779 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_781 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!", "Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
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
	var s_782 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_783 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_784 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_785 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_786 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_787 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_788 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_789 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_790 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_791 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_792 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_793 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_795 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_796 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_797 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Bill transcended."],
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
	var s_798 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_799 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_800 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_801 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_802 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
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
	var s_803 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_804 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_805 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_806 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
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
	var s_807 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_809 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_810 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_811 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_812 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_813 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_814 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_815 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_816 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_817 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_818 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_819 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_821 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["he knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_823 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_824 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_828 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Alice transcended."],
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
	var s_829 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_830 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_831 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_832 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'muddy water' was good here.", "he was told the 'muddy water' was good here."],
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
	var s_833 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_834 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!", "After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
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
	var s_835 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_836 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_837 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_838 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Alice then remembered her shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_839 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_840 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is that which is Real and True!'", "'Our story is that which is Real and True!'"],
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
	var s_841 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_842 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_843 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_844 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_845 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'mocha hopps' was good here.", "he knew the 'mocha hopps' was good here."],
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
	var s_846 = {
		type: 'instructions',
		pages: ["he knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_847 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_848 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_849 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_850 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_851 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_852 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is a serious thing to behold!'", "'Our narrative is a serious thing to behold!'"],
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
	var s_853 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_854 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_856 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_857 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'silk potion' was good here.", "she knew the 'silk potion' was good here."],
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
	var s_858 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_859 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!", "After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_860 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_861 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_862 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_864 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_865 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is all we could ever know!'", "'Our narrative is all we could ever know!'"],
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
	var s_866 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_867 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_868 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_869 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_870 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_871 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'mocha hopps' was good here.", "he was told the 'mocha hopps' was good here."],
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
	var s_872 = {
		type: 'instructions',
		pages: ["he was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!", "After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
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
	var s_874 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_875 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_876 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_877 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_878 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_879 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_880 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_881 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_882 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_884 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_885 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_886 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "TELE",
						"false_tonode": "TELE",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_887 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_889 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_890 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_892 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_893 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'matcha roots' was good here.", "she knew the 'matcha roots' was good here."],
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
	var s_894 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_895 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "BEFORE",
						"false_tonode": "BEFORE",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_896 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_897 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_898 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_899 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_900 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
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
	var s_901 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_902 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Alice transcended."],
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
	var s_903 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_904 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_905 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_906 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'matcha roots' was good here.", "she knew the 'matcha roots' was good here."],
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
	var s_907 = {
		type: 'instructions',
		pages: ["she was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_908 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Alice realized all is well beyond the library's last book shelf!"],
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
	var s_909 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_910 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_911 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_912 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_913 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_914 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_915 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_916 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_917 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_918 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'muddy water' was good here.", "she knew the 'muddy water' was good here."],
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
	var s_919 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_921 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'", "Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
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
	var s_922 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_923 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_924 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
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
	var s_925 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_926 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Bill was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "NARRATIVE",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Alice_location-brew",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_927 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_928 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_929 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_930 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'muddy water' was good here.", "he knew the 'muddy water' was good here."],
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
	var s_931 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_932 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_933 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_934 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_935 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_936 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is never to be taken lightly!'", "'Our narrative is never to be taken lightly!'"],
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
	var s_937 = {
		type: 'instructions',
		pages: ["'Our narrative is never to be taken lightly!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_938 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_939 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_940 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_941 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_942 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'matcha roots' was good here.", "she knew the 'matcha roots' was good here."],
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
	var s_943 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_944 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized all is well beyond the library's last book shelf!", "Before ordering, Alice realized all is well beyond the library's last book shelf!"],
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
	var s_945 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_946 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_947 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_949 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is never to be taken lightly!'", "'Our story is never to be taken lightly!'"],
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
	var s_950 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_951 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_952 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_953 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_954 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she was told the 'mocha hopps' was good here.", "she knew the 'mocha hopps' was good here."],
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
	var s_955 = {
		type: 'instructions',
		pages: ["she knew the 'mocha hopps' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_956 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!", "Before ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
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
	var s_957 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_958 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "AFTER",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_959 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_960 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_961 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_962 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
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
	var s_963 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_964 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_965 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_966 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_967 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_968 = {
		type: 'instructions',
		pages: ["she was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_969 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_970 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_971 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_973 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_974 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_975 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_976 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["she was told the 'silk potion' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_978 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!", "Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_979 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_980 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_981 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_982 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_983 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our narrative is that which is Real and True!'"],
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
	var s_984 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_985 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_986 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_987 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_988 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_989 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'matcha roots' was good here.", "he was told the 'matcha roots' was good here."],
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
	var s_990 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_991 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
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
	var s_992 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_993 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_994 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_995 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_996 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_997 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
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
	var s_998 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_999 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_1000 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1002 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1003 = {
		type: 'instructions',
		pages: ["she was told the 'mocha hopps' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1004 = {
		type: 'instructions',
		pages: ["Before ordering, Alice realized that Bob Dylan must have been right after all!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1005 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_1006 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1007 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Bill then remembered his shaman-guru saying:"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "TELE",
						"true_tonode": "SHAMAN",
						"false_tonode": "SHAMAN",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1009 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1010 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Bill transcended."],
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
	var s_1011 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1012 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1013 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1014 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
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
	var s_1015 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1016 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Alice realized all is well beyond the library's last book shelf!", "After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "KNEW",
						"true_tonode": "AFTER",
						"false_tonode": "AFTER",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-drinks" }
			} 
	var s_1017 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1019 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_1020 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1021 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our story is that which is Real and True!'", "'Our story is never to be taken lightly!'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHAMAN",
						"true_tonode": "STORY",
						"false_tonode": "STORY",
						"true_rfc":"subject-Alice_location-drinks",
						"false_rfc":"subject-Bill_location-brew" }
			} 
	var s_1022 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1023 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1024 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1025 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1026 = {
		type: 'instructions',
		pages: ["she knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1027 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'hey you! yes you! would you like to give us your money ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1029 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her parents saying:", "Alice then remembered her shaman-guru saying:"],
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
	var s_1030 = {
		type: 'instructions',
		pages: ["Alice then remembered her parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1031 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
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
	var s_1032 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1033 = {
		type: 'instructions',
		pages: ["That's when Alice was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1034 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1035 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1036 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'muddy water' was good here.", "he was told the 'muddy water' was good here."],
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
	var s_1037 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1038 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1039 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_1040 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1042 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1043 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_1044 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1046 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1047 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1049 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1051 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1052 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_1053 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1055 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1056 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'muddy water' was good here.", "he knew the 'muddy water' was good here."],
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
	var s_1057 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1058 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_1059 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1060 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BEFORE",
						"true_tonode": "RADIO",
						"false_tonode": "RADIO",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-drinks" }
			} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1062 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_1063 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1064 = {
		type: 'instructions',
		pages: ["'Our story is never to be taken lightly!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1065 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice was transported.", "That's when Bill was transported."],
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
	var s_1066 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1067 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1068 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1069 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'muddy water' was good here.", "he knew the 'muddy water' was good here."],
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
	var s_1070 = {
		type: 'instructions',
		pages: ["he was told the 'muddy water' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1071 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Alice realized that Bob Dylan must have been right after all!"],
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
	var s_1072 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1073 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1074 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1075 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
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
	var s_1076 = {
		type: 'instructions',
		pages: ["'Our narrative is a serious thing to behold!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1077 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1078 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1079 = {
		type: 'instructions',
		pages: ["One strange evening Bill walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1080 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he was told the 'matcha roots' was good here.", "he knew the 'matcha roots' was good here."],
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
	var s_1081 = {
		type: 'instructions',
		pages: ["he knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1082 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized that the mirrors reflected the labyrinth of time!", "After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
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
	var s_1083 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that the mirrors reflected the labyrinth of time!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1084 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
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
	var s_1085 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1086 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his parents saying:", "Bill then remembered his shaman-guru saying:"],
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
	var s_1087 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1088 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is a serious thing to behold!'", "'Our story is a serious thing to behold!'"],
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
	var s_1089 = {
		type: 'instructions',
		pages: ["'Our story is a serious thing to behold!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var q_1090 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Bill transcended."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSCEND",
						"false_tonode": "TRANSCEND",
						"true_rfc":"subject-Bill_location-brew",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1091 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 
	var s_1092 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-brew",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1093 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1094 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1095 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["After ordering, Bill realized that Bob Dylan must have been right after all!", "Before ordering, Bill realized that Bob Dylan must have been right after all!"],
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
	var s_1096 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized that Bob Dylan must have been right after all!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1097 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1098 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1099 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1100 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Bill transcended."],
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
	var s_1101 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1102 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1103 = {
		type: 'instructions',
		pages: ["One fine morning Alice walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1104 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'muddy water' was good here.", "she was told the 'muddy water' was good here."],
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
	var s_1105 = {
		type: 'instructions',
		pages: ["she knew the 'muddy water' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Alice realized there was a parrot waiting in line for the bathroom!", "After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
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
	var s_1107 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1108 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'and so the unicorns came trodding in and flew off with him ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1109 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Alice then remembered her shaman-guru saying:", "Alice then remembered her parents saying:"],
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
	var s_1110 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1111 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["'Our narrative is all we could ever know!'", "'Our story is all we could ever know!'"],
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
	var s_1112 = {
		type: 'instructions',
		pages: ["'Our story is all we could ever know!'"],
		data: { "state": "STORY",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var q_1113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Alice transcended.", "That's when Alice was transported."],
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
	var s_1114 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 
	var s_1115 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-drinks",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1116 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1117 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'matcha roots' was good here.", "he was told the 'matcha roots' was good here."],
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
	var s_1118 = {
		type: 'instructions',
		pages: ["he was told the 'matcha roots' was good here."],
		data: { "state": "TOLD",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1119 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Before ordering, Bill realized all is well beyond the library's last book shelf!", "After ordering, Bill realized all is well beyond the library's last book shelf!"],
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
	var s_1120 = {
		type: 'instructions',
		pages: ["Before ordering, Bill realized all is well beyond the library's last book shelf!"],
		data: { "state": "BEFORE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1121 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_1122 = {
		type: 'instructions',
		pages: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "TELE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1123 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill then remembered his shaman-guru saying:", "Bill then remembered his parents saying:"],
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
	var s_1124 = {
		type: 'instructions',
		pages: ["Bill then remembered his shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1125 = {
		type: 'instructions',
		pages: ["'Our narrative is that which is Real and True!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1126 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill transcended.", "That's when Bill was transported."],
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
	var s_1127 = {
		type: 'instructions',
		pages: ["That's when Bill transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1128 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1129 = {
		type: 'instructions',
		pages: ["One strange evening Alice walked in to the brew house"],
		data: { "state": "BEGIN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1130 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["she knew the 'matcha roots' was good here.", "she was told the 'matcha roots' was good here."],
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
	var s_1131 = {
		type: 'instructions',
		pages: ["she knew the 'matcha roots' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["After ordering, Alice realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var q_1133 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'", "Suddenly, the television began 'no.. well, maybe.. i guess if only there were ...'"],
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
	var s_1134 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'no.. well, maybe.. i guess if only there were ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Alice then remembered her shaman-guru saying:"],
		data: { "state": "SHAMAN",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1136 = {
		type: 'instructions',
		pages: ["'Our narrative is all we could ever know!'"],
		data: { "state": "NARRATIVE",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1137 = {
		type: 'instructions',
		pages: ["That's when Alice transcended."],
		data: { "state": "TRANSCEND",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 
	var s_1138 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
		data: { "state": "END",
						"rfc": "subject-Alice_location-brew",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1139 = {
		type: 'instructions',
		pages: ["One fine morning Bill walked in to the drinks shop"],
		data: { "state": "BEGIN",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["he knew the 'silk potion' was good here.", "he was told the 'silk potion' was good here."],
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
	var s_1141 = {
		type: 'instructions',
		pages: ["he knew the 'silk potion' was good here."],
		data: { "state": "KNEW",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1142 = {
		type: 'instructions',
		pages: ["After ordering, Bill realized there was a parrot waiting in line for the bathroom!"],
		data: { "state": "AFTER",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1143 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Suddenly, the television began 'meantime, luke warm north pole winds blow in from ...'", "Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
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
	var s_1144 = {
		type: 'instructions',
		pages: ["Suddenly, the radio began 'meantime, luke warm north pole winds blow in from ...'"],
		data: { "state": "RADIO",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1145 = {
		type: 'instructions',
		pages: ["Bill then remembered his parents saying:"],
		data: { "state": "PARENTS",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1146 = {
		type: 'instructions',
		pages: ["'Our story is that which is Real and True!'"],
		data: { "state": "STORY",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var q_1147 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["That's when Bill was transported.", "That's when Alice was transported."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STORY",
						"true_tonode": "TRANSPORT",
						"false_tonode": "TRANSPORT",
						"true_rfc":"subject-Bill_location-drinks",
						"false_rfc":"subject-Alice_location-brew" }
			} 
	var s_1148 = {
		type: 'instructions',
		pages: ["That's when Bill was transported."],
		data: { "state": "TRANSPORT",
						"rfc": "subject-Bill_location-drinks",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["~ FIN ~"],
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
  timeline: [intro_instructions,s_1,s_2,s_3,s_4,s_5,s_6,s_7,s_8,betweenstory_1,s_9,s_10,s_11,s_12,s_13,s_14,s_15,s_16,betweenstory_2,s_17,s_18,s_19,s_20,s_21,s_22,s_23,s_24,betweenstory_3,s_25,s_26,s_27,s_28,s_29,s_30,s_31,s_32,betweenstory_4,s_33,s_34,s_35,s_36,s_37,s_38,s_39,s_40,betweenstory_5,s_41,q_42,s_43,s_44,q_45,s_46,s_47,s_48,q_49,s_50,s_51,betweenstory_6,s_52,s_53,q_54,s_55,s_56,q_57,s_58,q_59,s_60,q_61,s_62,s_63,betweenstory_7,s_64,s_65,q_66,s_67,q_68,s_69,s_70,s_71,q_72,s_73,s_74,betweenstory_8,s_75,q_76,s_77,q_78,s_79,q_80,s_81,q_82,s_83,s_84,s_85,s_86,betweenstory_9,s_87,q_88,s_89,q_90,s_91,s_92,q_93,s_94,q_95,s_96,q_97,s_98,s_99,betweenstory_10,s_100,s_101,s_102,q_103,s_104,s_105,q_106,s_107,s_108,s_109,betweenstory_11,s_110,s_111,q_112,s_113,s_114,q_115,s_116,s_117,s_118,s_119,betweenstory_12,s_120,s_121,q_122,s_123,q_124,s_125,q_126,s_127,s_128,q_129,s_130,s_131,betweenstory_13,s_132,q_133,s_134,q_135,s_136,q_137,s_138,s_139,q_140,s_141,q_142,s_143,s_144,betweenstory_14,s_145,q_146,s_147,s_148,q_149,s_150,s_151,s_152,q_153,s_154,s_155,betweenstory_15,s_156,s_157,q_158,s_159,q_160,s_161,q_162,s_163,q_164,s_165,q_166,s_167,s_168,betweenstory_16,s_169,s_170,q_171,s_172,s_173,q_174,s_175,q_176,s_177,s_178,s_179,betweenstory_17,s_180,q_181,s_182,s_183,q_184,s_185,s_186,q_187,s_188,q_189,s_190,s_191,betweenstory_18,s_192,q_193,s_194,s_195,q_196,s_197,q_198,s_199,s_200,s_201,s_202,betweenstory_19,s_203,s_204,s_205,q_206,s_207,s_208,s_209,q_210,s_211,s_212,betweenstory_20,s_213,q_214,s_215,s_216,q_217,s_218,s_219,q_220,s_221,s_222,s_223,betweenstory_21,s_224,s_225,q_226,s_227,s_228,q_229,s_230,s_231,q_232,s_233,s_234,betweenstory_22,s_235,s_236,q_237,s_238,q_239,s_240,s_241,q_242,s_243,s_244,s_245,betweenstory_23,s_246,s_247,q_248,s_249,q_250,s_251,q_252,s_253,q_254,s_255,q_256,s_257,s_258,betweenstory_24,s_259,s_260,q_261,s_262,q_263,s_264,q_265,s_266,s_267,s_268,s_269,betweenstory_25,s_270,q_271,s_272,s_273,q_274,s_275,s_276,s_277,s_278,s_279,betweenstory_26,s_280,s_281,q_282,s_283,s_284,s_285,q_286,s_287,q_288,s_289,s_290,betweenstory_27,s_291,q_292,s_293,s_294,q_295,s_296,s_297,q_298,s_299,q_300,s_301,s_302,betweenstory_28,s_303,q_304,s_305,s_306,s_307,q_308,s_309,q_310,s_311,q_312,s_313,s_314,betweenstory_29,s_315,s_316,q_317,s_318,q_319,s_320,q_321,s_322,s_323,s_324,s_325,betweenstory_30,s_326,s_327,q_328,s_329,q_330,s_331,q_332,s_333,s_334,q_335,s_336,s_337,betweenstory_31,s_338,q_339,s_340,q_341,s_342,q_343,s_344,q_345,s_346,s_347,q_348,s_349,s_350,betweenstory_32,s_351,s_352,s_353,s_354,q_355,s_356,q_357,s_358,s_359,s_360,betweenstory_33,s_361,q_362,s_363,s_364,q_365,s_366,q_367,s_368,q_369,s_370,q_371,s_372,s_373,betweenstory_34,s_374,q_375,s_376,q_377,s_378,q_379,s_380,q_381,s_382,q_383,s_384,s_385,s_386,betweenstory_35,s_387,q_388,s_389,s_390,s_391,s_392,q_393,s_394,q_395,s_396,s_397,betweenstory_36,s_398,q_399,s_400,q_401,s_402,q_403,s_404,q_405,s_406,q_407,s_408,s_409,s_410,betweenstory_37,s_411,q_412,s_413,q_414,s_415,q_416,s_417,s_418,q_419,s_420,q_421,s_422,s_423,betweenstory_38,s_424,s_425,q_426,s_427,q_428,s_429,q_430,s_431,s_432,q_433,s_434,s_435,betweenstory_39,s_436,q_437,s_438,q_439,s_440,q_441,s_442,q_443,s_444,s_445,q_446,s_447,s_448,betweenstory_40,s_449,q_450,s_451,s_452,q_453,s_454,s_455,q_456,s_457,q_458,s_459,s_460,betweenstory_41,s_461,q_462,s_463,q_464,s_465,s_466,q_467,s_468,s_469,q_470,s_471,s_472,betweenstory_42,s_473,s_474,q_475,s_476,q_477,s_478,q_479,s_480,q_481,s_482,q_483,s_484,s_485,betweenstory_43,s_486,q_487,s_488,q_489,s_490,q_491,s_492,s_493,s_494,q_495,s_496,s_497,betweenstory_44,s_498,q_499,s_500,q_501,s_502,q_503,s_504,q_505,s_506,q_507,s_508,q_509,s_510,s_511,betweenstory_45,s_512,q_513,s_514,q_515,s_516,q_517,s_518,s_519,s_520,s_521,s_522,betweenstory_46,s_523,s_524,q_525,s_526,s_527,q_528,s_529,q_530,s_531,s_532,s_533,betweenstory_47,s_534,q_535,s_536,s_537,s_538,q_539,s_540,q_541,s_542,q_543,s_544,s_545,betweenstory_48,s_546,s_547,q_548,s_549,q_550,s_551,s_552,q_553,s_554,s_555,s_556,betweenstory_49,s_557,s_558,s_559,q_560,s_561,q_562,s_563,q_564,s_565,q_566,s_567,s_568,betweenstory_50,s_569,q_570,s_571,s_572,q_573,s_574,q_575,s_576,q_577,s_578,s_579,s_580,betweenstory_51,s_581,q_582,s_583,q_584,s_585,s_586,q_587,s_588,q_589,s_590,q_591,s_592,s_593,betweenstory_52,s_594,q_595,s_596,q_597,s_598,q_599,s_600,q_601,s_602,s_603,q_604,s_605,s_606,betweenstory_53,s_607,s_608,s_609,q_610,s_611,s_612,q_613,s_614,s_615,s_616,betweenstory_54,s_617,q_618,s_619,s_620,q_621,s_622,s_623,s_624,q_625,s_626,s_627,betweenstory_55,s_628,s_629,q_630,s_631,q_632,s_633,q_634,s_635,q_636,s_637,q_638,s_639,s_640,betweenstory_56,s_641,q_642,s_643,s_644,q_645,s_646,q_647,s_648,s_649,q_650,s_651,s_652,betweenstory_57,s_653,s_654,s_655,s_656,q_657,s_658,q_659,s_660,q_661,s_662,s_663,betweenstory_58,s_664,s_665,q_666,s_667,s_668,q_669,s_670,q_671,s_672,q_673,s_674,s_675,betweenstory_59,s_676,q_677,s_678,q_679,s_680,q_681,s_682,s_683,q_684,s_685,q_686,s_687,s_688,betweenstory_60,s_689,q_690,s_691,q_692,s_693,q_694,s_695,s_696,q_697,s_698,s_699,s_700,betweenstory_61,s_701,q_702,s_703,s_704,q_705,s_706,s_707,q_708,s_709,q_710,s_711,s_712,betweenstory_62,s_713,q_714,s_715,q_716,s_717,q_718,s_719,s_720,s_721,q_722,s_723,s_724,betweenstory_63,s_725,s_726,s_727,s_728,q_729,s_730,q_731,s_732,s_733,s_734,betweenstory_64,s_735,q_736,s_737,s_738,q_739,s_740,q_741,s_742,s_743,q_744,s_745,s_746,betweenstory_65,s_747,s_748,q_749,s_750,s_751,s_752,s_753,q_754,s_755,s_756,betweenstory_66,s_757,q_758,s_759,q_760,s_761,q_762,s_763,q_764,s_765,s_766,s_767,s_768,betweenstory_67,s_769,s_770,q_771,s_772,s_773,s_774,s_775,q_776,s_777,s_778,betweenstory_68,s_779,s_780,q_781,s_782,s_783,q_784,s_785,q_786,s_787,q_788,s_789,s_790,betweenstory_69,s_791,s_792,s_793,s_794,s_795,s_796,q_797,s_798,s_799,betweenstory_70,s_800,s_801,q_802,s_803,s_804,s_805,q_806,s_807,q_808,s_809,s_810,betweenstory_71,s_811,s_812,s_813,q_814,s_815,s_816,s_817,q_818,s_819,s_820,betweenstory_72,s_821,s_822,q_823,s_824,s_825,s_826,s_827,q_828,s_829,s_830,betweenstory_73,s_831,q_832,s_833,q_834,s_835,q_836,s_837,q_838,s_839,q_840,s_841,s_842,s_843,betweenstory_74,s_844,q_845,s_846,q_847,s_848,s_849,q_850,s_851,q_852,s_853,s_854,s_855,betweenstory_75,s_856,q_857,s_858,q_859,s_860,q_861,s_862,q_863,s_864,q_865,s_866,q_867,s_868,s_869,betweenstory_76,s_870,q_871,s_872,q_873,s_874,q_875,s_876,q_877,s_878,s_879,s_880,s_881,betweenstory_77,s_882,s_883,q_884,s_885,q_886,s_887,s_888,s_889,s_890,s_891,betweenstory_78,s_892,q_893,s_894,q_895,s_896,q_897,s_898,s_899,q_900,s_901,q_902,s_903,s_904,betweenstory_79,s_905,q_906,s_907,q_908,s_909,q_910,s_911,q_912,s_913,s_914,s_915,s_916,betweenstory_80,s_917,q_918,s_919,s_920,q_921,s_922,s_923,q_924,s_925,q_926,s_927,s_928,betweenstory_81,s_929,q_930,s_931,s_932,s_933,q_934,s_935,q_936,s_937,q_938,s_939,s_940,betweenstory_82,s_941,q_942,s_943,q_944,s_945,q_946,s_947,s_948,q_949,s_950,s_951,s_952,betweenstory_83,s_953,q_954,s_955,q_956,s_957,q_958,s_959,q_960,s_961,q_962,s_963,q_964,s_965,s_966,betweenstory_84,s_967,s_968,q_969,s_970,s_971,s_972,s_973,s_974,s_975,betweenstory_85,s_976,s_977,q_978,s_979,s_980,q_981,s_982,q_983,s_984,q_985,s_986,s_987,betweenstory_86,s_988,q_989,s_990,q_991,s_992,q_993,s_994,q_995,s_996,q_997,s_998,q_999,s_1000,s_1001,betweenstory_87,s_1002,s_1003,s_1004,q_1005,s_1006,q_1007,s_1008,s_1009,q_1010,s_1011,s_1012,betweenstory_88,s_1013,q_1014,s_1015,q_1016,s_1017,s_1018,q_1019,s_1020,q_1021,s_1022,s_1023,s_1024,betweenstory_89,s_1025,s_1026,s_1027,s_1028,q_1029,s_1030,q_1031,s_1032,s_1033,s_1034,betweenstory_90,s_1035,q_1036,s_1037,s_1038,q_1039,s_1040,s_1041,s_1042,q_1043,s_1044,s_1045,betweenstory_91,s_1046,s_1047,s_1048,s_1049,s_1050,s_1051,q_1052,s_1053,s_1054,betweenstory_92,s_1055,q_1056,s_1057,q_1058,s_1059,q_1060,s_1061,q_1062,s_1063,s_1064,q_1065,s_1066,s_1067,betweenstory_93,s_1068,q_1069,s_1070,q_1071,s_1072,s_1073,s_1074,q_1075,s_1076,s_1077,s_1078,betweenstory_94,s_1079,q_1080,s_1081,q_1082,s_1083,q_1084,s_1085,q_1086,s_1087,q_1088,s_1089,q_1090,s_1091,s_1092,betweenstory_95,s_1093,s_1094,q_1095,s_1096,s_1097,s_1098,s_1099,q_1100,s_1101,s_1102,betweenstory_96,s_1103,q_1104,s_1105,q_1106,s_1107,s_1108,q_1109,s_1110,q_1111,s_1112,q_1113,s_1114,s_1115,betweenstory_97,s_1116,q_1117,s_1118,q_1119,s_1120,q_1121,s_1122,q_1123,s_1124,s_1125,q_1126,s_1127,s_1128,betweenstory_98,s_1129,q_1130,s_1131,s_1132,q_1133,s_1134,s_1135,s_1136,s_1137,s_1138,betweenstory_99,s_1139,q_1140,s_1141,s_1142,q_1143,s_1144,s_1145,s_1146,q_1147,s_1148,s_1149,betweenstory_100,],
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