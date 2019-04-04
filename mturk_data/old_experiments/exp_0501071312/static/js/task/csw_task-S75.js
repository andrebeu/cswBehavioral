// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var intro1 = {
  type: 'instructions',
  pages: ['** After reading this sentence, press spacebar. ** '],
  data: {"type":"instruction"}
  }
var intro2 = {
  type: 'instructions',
  pages: ['In this experiment you will read stories and answer questions.'],
  data: {"type":"instruction"}
  } 
var intro3 = {
  type: 'instructions',
  pages: ['The stories will be presented one sentence at a time.'],
  data: {"type":"instruction"}
  }
var intro4 = {
  type: 'instructions',
  pages: ['Questions will come up, that ask you to predict what happens next.'],
  data: {"type":"instruction"}
  } 
var intro5 = {
  type: 'instructions',
  pages: ['When a question comes up, select your response with the right or left arrow key.'],
  data: {"type":"instruction"}
  } 
var intro6 = {
  type: 'instructions',
  pages: ['Please pay attention!'],
  data: {"type":"instruction"}
  } 
var intro7 = {
  type: 'instructions',
  pages: [' ** once ready, press spacebar to begin the first story ** '],
  data: {"type":"instruction"}
  } 

// CODE BODY START

	var s_1 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_6 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_7 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_8 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_9 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_10 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_11 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_13 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_14 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Bill cut the line", "While in line, Bill clumsily sneezed on David's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_15 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_17 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_18 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_19 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David began lecturing on the motions of the stars to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_20 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_21 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_22 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_23 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_24 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_25 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_27 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_33 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_34 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_37 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_38 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_39 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_40 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_41 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_42 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_43 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_45 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_46 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_47 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_48 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_51 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_54 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_55 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_57 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_58 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_60 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_61 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_63 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_64 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo.", "Inspired by the afternoon's heat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_65 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_67 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_68 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_72 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_73 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_75 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_76 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired and wearing a pink top hat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_77 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_80 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_81 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_82 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_83 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_84 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_85 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_86 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_87 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_89 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_90 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_91 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_92 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_93 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_94 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_95 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_96 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_97 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_99 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_100 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_103 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_106 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_107 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_108 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_109 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_110 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_111 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_112 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_113 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_114 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_115 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_117 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_119 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_120 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_121 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_122 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_124 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_125 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_126 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_127 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_128 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_129 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_131 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_135 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_136 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_137 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_138 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_139 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_140 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_141 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_142 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_144 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_148 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_149 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_150 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_151 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_155 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_156 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo.", "Inspired and wearing a pink top hat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_157 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_160 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_161 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_162 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_163 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_164 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_165 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_166 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_167 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_169 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_170 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired by the afternoon's heat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_171 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_174 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David began lecturing on the motions of the stars to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_175 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_177 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_178 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_181 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_185 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_186 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_188 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_189 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_190 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_191 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_193 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_198 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_199 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_201 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_202 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_204 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_205 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo.", "Inspired by the afternoon's heat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_206 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_209 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_210 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_211 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_212 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_216 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_219 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_220 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_221 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_222 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_223 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_224 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_225 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_226 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_227 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_228 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_230 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_231 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_232 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_240 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_246 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_247 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_250 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_253 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_254 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_255 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_256 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_257 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_258 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_262 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_263 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo.", "Inspired and wearing a pink top hat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_264 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_266 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_267 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_268 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_269 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_270 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_271 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_272 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_273 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_274 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_275 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_277 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_278 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired by the afternoon's heat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_279 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_281 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_282 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_283 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_284 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_289 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_290 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_291 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_293 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_294 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_296 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_297 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_298 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_299 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_300 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_301 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_303 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_307 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_308 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_309 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_310 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_311 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_312 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_315 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_317 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_318 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_319 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_320 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_321 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_322 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_323 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_324 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_328 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_329 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_330 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_335 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_336 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_337 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_338 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_340 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_341 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Bill cut the line", "While in line, Bill clumsily sneezed on David's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_342 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_344 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_345 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_346 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_347 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_348 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_349 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_350 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_351 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_352 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_353 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_355 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_356 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_357 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_359 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_360 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_361 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_362 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_363 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_364 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_366 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_367 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_369 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_370 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo.", "Inspired and wearing a pink top hat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_371 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_373 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_374 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_375 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_376 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_378 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_379 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_380 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_381 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_383 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_384 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo.", "Inspired by the afternoon's heat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_385 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_390 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_391 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_394 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_397 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill began running around David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_398 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_401 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_402 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_403 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_404 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_406 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_407 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_408 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_410 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_411 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_413 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_414 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_415 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_416 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_417 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_418 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_420 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_425 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_426 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_430 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_434 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_435 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_436 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_437 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_438 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_439 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_440 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_441 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_443 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_448 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_449 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_450 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_451 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_452 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_453 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_455 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_458 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_459 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_460 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_461 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_466 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_467 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_468 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_471 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_472 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_473 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_474 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_476 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_477 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_479 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_480 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_481 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_484 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_485 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_486 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_487 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_488 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_489 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_490 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_491 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_493 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_495 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_496 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_497 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_498 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_499 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David began lecturing on the motions of the stars to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_500 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_502 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_503 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_506 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_507 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo.", "Inspired by the afternoon's heat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_508 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_510 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_511 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_512 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_513 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_514 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_515 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_517 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_518 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_520 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_521 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Bill cut the line", "While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_522 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_525 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David began lecturing on the motions of the stars to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_526 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_527 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_528 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_532 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_533 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired and wearing a pink top hat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_534 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_535 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_536 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_537 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_538 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_539 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_540 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_542 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_543 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_546 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_547 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired by the afternoon's heat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_548 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_550 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_551 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_552 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David began lecturing on the motions of the stars to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_553 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_554 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_555 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_556 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_557 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_560 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_567 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_568 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_570 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_572 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_573 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_575 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_576 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_578 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_579 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_580 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_581 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_583 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_584 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily sneezed on Claire's pinky finger.", "Inspired and wearing a pink top hat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_585 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_587 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_588 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_592 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_593 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_595 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_598 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_599 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_601 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_602 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_606 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_609 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_610 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_612 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_613 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_614 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_615 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_618 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_622 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_623 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_624 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_625 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_626 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_627 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_628 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_629 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_631 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_633 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_634 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_635 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_636 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_637 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_638 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_640 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_641 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_642 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_643 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_645 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_646 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_647 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_649 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_650 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_651 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_652 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_655 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_656 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_658 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_659 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo.", "Inspired and wearing a pink top hat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_660 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_665 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_666 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_667 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_668 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_670 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_671 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired and wearing a pink top hat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_672 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_673 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was furious: he invented many words there and then.", "Claire was furious: she invented many words there and then."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_674 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_677 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Bill immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_678 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_682 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_683 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Bill cut the line", "While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_684 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_686 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_687 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_688 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_689 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_692 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_693 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_695 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_698 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_699 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_701 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_702 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_703 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_704 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_705 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_706 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_707 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_708 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Bill cut the line", "While in line, Bill clumsily sneezed on David's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_709 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_711 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_712 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_713 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_714 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_715 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_719 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_720 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired by the afternoon's heat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_721 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_722 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'.", "Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_723 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_725 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_726 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_727 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_728 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_729 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_730 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_731 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_733 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_734 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_735 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_738 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_739 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_741 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_742 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_744 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_745 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_746 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired and wearing a pink top hat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_747 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_748 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_749 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_750 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_751 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_752 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_753 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_754 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_755 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_756 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_757 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_758 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_760 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_761 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_762 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_763 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_764 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_765 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_766 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_767 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_768 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_769 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_770 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_771 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_772 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired and wearing a pink top hat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_773 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_775 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_776 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_777 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_778 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_779 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_781 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_783 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_784 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired and wearing a pink top hat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_785 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_786 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was furious: he invented many words there and then.", "Claire was furious: she invented many words there and then."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_787 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_788 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Unanounced, Bill began running around David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_789 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_790 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_791 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_792 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_793 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_794 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_795 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_796 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_797 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_798 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_799 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_800 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_801 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_802 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_803 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_804 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_805 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_806 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_808 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_809 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_810 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired and wearing a pink top hat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_811 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_812 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_813 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill began running around David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_814 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_815 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_816 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_817 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_818 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_819 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_820 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_821 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_823 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_824 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_826 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_827 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_828 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "David was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_829 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_830 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_831 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_832 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_833 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_834 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_835 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_836 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_837 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_838 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_839 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_841 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_842 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_843 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_844 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_845 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_846 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_847 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_848 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_849 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_850 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_851 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_852 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_853 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_854 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_856 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_857 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_858 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_859 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_860 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_861 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_862 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_863 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_864 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_865 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_866 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_867 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_868 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_869 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_870 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_871 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_872 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_873 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_874 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_875 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_877 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_878 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily sneezed on Claire's pinky finger.", "Inspired and wearing a pink top hat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_879 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_880 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was furious: he invented many words there and then.", "Claire was furious: she invented many words there and then."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_881 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_883 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_884 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_885 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_886 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_887 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_889 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_890 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_893 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_894 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_895 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_896 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_898 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_899 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_900 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_901 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_902 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily sneezed on Claire's pinky finger.", "Inspired by the afternoon's heat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_903 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_904 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_905 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_906 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_907 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_908 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_909 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_910 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_911 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_912 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_913 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_914 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_915 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_916 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_917 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_918 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_919 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_920 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_921 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_922 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_923 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_924 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_925 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_926 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_927 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_928 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_929 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_930 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_931 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_932 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_933 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_934 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_935 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_936 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_937 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_938 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_939 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_940 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_941 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_942 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_943 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_945 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_946 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_947 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_949 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_950 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_951 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_952 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_954 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_955 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_956 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_957 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_958 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_959 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_960 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_961 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_962 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_963 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Bill cut the line", "While in line, Bill clumsily sneezed on David's pinky finger."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_964 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_966 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_967 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_968 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_969 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_970 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_971 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_973 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_974 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_975 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily sneezed on Claire's pinky finger.", "Inspired and wearing a pink top hat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_976 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_978 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_979 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_980 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_981 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_982 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_983 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_984 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_985 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_986 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_987 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_988 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_989 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_990 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_991 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_993 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_994 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_995 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_996 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_997 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_998 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1000 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1002 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1003 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill began running around David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1004 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1005 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1006 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1007 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1009 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1010 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1011 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1012 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1013 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1014 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1015 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo.", "Inspired by the afternoon's heat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1016 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1017 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1019 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1020 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1021 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1022 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1023 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1024 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1025 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1026 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1027 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1029 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1033 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1034 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1035 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1036 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1037 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1038 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1039 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1040 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1042 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1043 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1044 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1046 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1047 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1049 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1050 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo.", "Inspired by the afternoon's heat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1051 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1052 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1053 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1054 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "David was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1055 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1056 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1057 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1058 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1059 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1060 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1062 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1063 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1064 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1065 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1067 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1068 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1069 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1070 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1071 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1072 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1073 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1074 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1077 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1078 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1079 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1080 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1081 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1082 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1083 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1084 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Bill immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1085 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1086 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1087 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1088 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1089 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1090 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1091 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1092 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1094 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1095 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1096 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1097 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1098 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1099 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1100 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1101 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1102 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1103 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1104 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1106 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1107 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1108 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1109 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1110 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1111 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1112 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1113 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1114 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1115 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1116 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1117 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1119 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1120 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1121 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1122 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1123 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1124 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1125 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1126 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1127 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1128 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1129 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1130 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1131 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1132 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1133 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1134 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1135 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1136 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1137 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1138 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1139 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1140 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1142 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1143 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1144 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1145 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1146 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1147 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1148 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1150 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1151 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1152 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1153 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1154 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1155 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1156 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1157 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1159 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David began lecturing on the motions of the stars to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1160 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1161 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1162 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1163 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1164 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1165 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1166 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1167 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1168 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was furious: he invented many words there and then.", "Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1169 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1170 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1171 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1173 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1174 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1175 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1176 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1177 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1178 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1179 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1181 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1182 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1183 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David began lecturing on the motions of the stars to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1184 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1185 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1186 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1187 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1188 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1189 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1190 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1191 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1192 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1193 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1194 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1195 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1196 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1197 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1198 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1199 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1201 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1202 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1203 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1204 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1205 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily sneezed on Claire's pinky finger.", "Inspired and wearing a pink top hat, Alice cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1206 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1207 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1208 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1209 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1210 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1211 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1212 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1213 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1214 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1215 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1216 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1217 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1218 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1219 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill began running around David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1220 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1221 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1222 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1223 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1224 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1225 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1226 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1227 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Bill cut the line", "While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1228 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1229 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1230 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1231 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1232 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1233 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1234 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1235 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1236 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1237 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1238 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1239 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1240 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1241 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1242 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1243 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1244 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1245 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1246 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1247 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Bill immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1248 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1249 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1250 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1251 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1252 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1253 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1254 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily sneezed on David's pinky finger.", "Inspired and wearing a pink top hat, Bill cut the line"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1255 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1256 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1257 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill began running around David until David gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1258 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1259 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1260 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1261 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1262 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1263 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1264 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1265 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1266 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_100 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,s_3,s_4,s_5,q_6,s_7,q_8,s_9,q_10,s_11,s_12,betweenstory_1,s_13,q_14,s_15,s_16,q_17,s_18,q_19,s_20,q_21,s_22,q_23,s_24,s_25,s_26,betweenstory_2,s_27,s_28,s_29,s_30,s_31,s_32,q_33,s_34,s_35,s_36,betweenstory_3,s_37,q_38,s_39,q_40,s_41,q_42,s_43,s_44,q_45,s_46,q_47,s_48,s_49,s_50,betweenstory_4,s_51,s_52,s_53,q_54,s_55,s_56,q_57,s_58,s_59,q_60,s_61,s_62,betweenstory_5,s_63,q_64,s_65,s_66,q_67,s_68,s_69,s_70,s_71,q_72,s_73,s_74,betweenstory_6,s_75,q_76,s_77,s_78,s_79,q_80,s_81,q_82,s_83,q_84,s_85,q_86,s_87,s_88,betweenstory_7,s_89,q_90,s_91,q_92,s_93,q_94,s_95,q_96,s_97,s_98,q_99,s_100,s_101,s_102,betweenstory_8,s_103,s_104,s_105,q_106,s_107,q_108,s_109,q_110,s_111,q_112,s_113,q_114,s_115,s_116,betweenstory_9,s_117,s_118,q_119,s_120,q_121,s_122,s_123,q_124,s_125,q_126,s_127,q_128,s_129,s_130,betweenstory_10,s_131,s_132,s_133,s_134,q_135,s_136,q_137,s_138,q_139,s_140,q_141,s_142,s_143,betweenstory_11,s_144,s_145,s_146,s_147,q_148,s_149,q_150,s_151,s_152,s_153,s_154,betweenstory_12,s_155,q_156,s_157,s_158,s_159,q_160,s_161,q_162,s_163,q_164,s_165,q_166,s_167,s_168,betweenstory_13,s_169,q_170,s_171,s_172,s_173,q_174,s_175,s_176,q_177,s_178,s_179,s_180,betweenstory_14,s_181,s_182,s_183,s_184,q_185,s_186,s_187,q_188,s_189,q_190,s_191,s_192,betweenstory_15,s_193,s_194,s_195,s_196,s_197,q_198,s_199,s_200,q_201,s_202,s_203,betweenstory_16,s_204,q_205,s_206,s_207,s_208,q_209,s_210,q_211,s_212,s_213,s_214,s_215,betweenstory_17,s_216,s_217,s_218,q_219,s_220,q_221,s_222,q_223,s_224,q_225,s_226,q_227,s_228,s_229,betweenstory_18,s_230,q_231,s_232,s_233,s_234,s_235,s_236,s_237,s_238,s_239,betweenstory_19,s_240,s_241,s_242,s_243,s_244,s_245,q_246,s_247,s_248,s_249,betweenstory_20,s_250,s_251,s_252,q_253,s_254,q_255,s_256,q_257,s_258,s_259,s_260,s_261,betweenstory_21,s_262,q_263,s_264,s_265,q_266,s_267,q_268,s_269,q_270,s_271,q_272,s_273,q_274,s_275,s_276,betweenstory_22,s_277,q_278,s_279,s_280,q_281,s_282,q_283,s_284,s_285,s_286,s_287,s_288,betweenstory_23,s_289,q_290,s_291,s_292,q_293,s_294,s_295,q_296,s_297,q_298,s_299,q_300,s_301,s_302,betweenstory_24,s_303,s_304,s_305,s_306,q_307,s_308,q_309,s_310,q_311,s_312,s_313,s_314,betweenstory_25,s_315,s_316,q_317,s_318,q_319,s_320,q_321,s_322,q_323,s_324,s_325,s_326,s_327,betweenstory_26,s_328,q_329,s_330,s_331,s_332,s_333,s_334,q_335,s_336,q_337,s_338,s_339,betweenstory_27,s_340,q_341,s_342,s_343,q_344,s_345,q_346,s_347,q_348,s_349,q_350,s_351,q_352,s_353,s_354,betweenstory_28,s_355,q_356,s_357,s_358,q_359,s_360,q_361,s_362,q_363,s_364,s_365,q_366,s_367,s_368,betweenstory_29,s_369,q_370,s_371,s_372,q_373,s_374,q_375,s_376,s_377,q_378,s_379,q_380,s_381,s_382,betweenstory_30,s_383,q_384,s_385,s_386,s_387,s_388,s_389,q_390,s_391,s_392,s_393,betweenstory_31,s_394,s_395,s_396,q_397,s_398,s_399,s_400,q_401,s_402,q_403,s_404,s_405,betweenstory_32,s_406,q_407,s_408,s_409,q_410,s_411,s_412,q_413,s_414,q_415,s_416,q_417,s_418,s_419,betweenstory_33,s_420,s_421,s_422,s_423,s_424,q_425,s_426,s_427,s_428,s_429,betweenstory_34,s_430,s_431,s_432,s_433,q_434,s_435,q_436,s_437,q_438,s_439,q_440,s_441,s_442,betweenstory_35,s_443,s_444,s_445,s_446,s_447,q_448,s_449,q_450,s_451,q_452,s_453,s_454,betweenstory_36,s_455,s_456,s_457,q_458,s_459,q_460,s_461,s_462,s_463,s_464,s_465,betweenstory_37,s_466,q_467,s_468,s_469,s_470,q_471,s_472,q_473,s_474,s_475,q_476,s_477,s_478,betweenstory_38,s_479,q_480,s_481,s_482,s_483,q_484,s_485,q_486,s_487,q_488,s_489,q_490,s_491,s_492,betweenstory_39,s_493,s_494,q_495,s_496,q_497,s_498,q_499,s_500,s_501,q_502,s_503,s_504,s_505,betweenstory_40,s_506,q_507,s_508,s_509,q_510,s_511,q_512,s_513,q_514,s_515,s_516,q_517,s_518,s_519,betweenstory_41,s_520,q_521,s_522,s_523,s_524,q_525,s_526,q_527,s_528,s_529,s_530,s_531,betweenstory_42,s_532,q_533,s_534,q_535,s_536,q_537,s_538,q_539,s_540,s_541,q_542,s_543,s_544,s_545,betweenstory_43,s_546,q_547,s_548,s_549,q_550,s_551,q_552,s_553,q_554,s_555,q_556,s_557,s_558,s_559,betweenstory_44,s_560,s_561,s_562,s_563,s_564,s_565,s_566,q_567,s_568,s_569,betweenstory_45,s_570,s_571,q_572,s_573,s_574,q_575,s_576,s_577,q_578,s_579,q_580,s_581,s_582,betweenstory_46,s_583,q_584,s_585,s_586,q_587,s_588,s_589,s_590,s_591,q_592,s_593,s_594,betweenstory_47,s_595,s_596,s_597,q_598,s_599,s_600,q_601,s_602,s_603,s_604,s_605,betweenstory_48,s_606,s_607,s_608,q_609,s_610,s_611,q_612,s_613,q_614,s_615,s_616,s_617,betweenstory_49,s_618,s_619,s_620,s_621,q_622,s_623,q_624,s_625,q_626,s_627,q_628,s_629,s_630,betweenstory_50,s_631,s_632,q_633,s_634,q_635,s_636,q_637,s_638,s_639,q_640,s_641,q_642,s_643,s_644,betweenstory_51,s_645,q_646,s_647,s_648,q_649,s_650,q_651,s_652,s_653,s_654,q_655,s_656,s_657,betweenstory_52,s_658,q_659,s_660,s_661,s_662,s_663,s_664,q_665,s_666,q_667,s_668,s_669,betweenstory_53,s_670,q_671,s_672,q_673,s_674,s_675,s_676,q_677,s_678,s_679,s_680,s_681,betweenstory_54,s_682,q_683,s_684,s_685,q_686,s_687,q_688,s_689,s_690,s_691,q_692,s_693,s_694,betweenstory_55,s_695,s_696,s_697,q_698,s_699,s_700,q_701,s_702,q_703,s_704,s_705,s_706,betweenstory_56,s_707,q_708,s_709,s_710,s_711,q_712,s_713,q_714,s_715,s_716,s_717,s_718,betweenstory_57,s_719,q_720,s_721,q_722,s_723,s_724,s_725,q_726,s_727,q_728,s_729,q_730,s_731,s_732,betweenstory_58,s_733,q_734,s_735,s_736,s_737,q_738,s_739,s_740,q_741,s_742,s_743,s_744,betweenstory_59,s_745,q_746,s_747,s_748,q_749,s_750,s_751,q_752,s_753,q_754,s_755,s_756,s_757,betweenstory_60,s_758,s_759,s_760,s_761,q_762,s_763,q_764,s_765,q_766,s_767,q_768,s_769,s_770,betweenstory_61,s_771,q_772,s_773,s_774,q_775,s_776,q_777,s_778,s_779,s_780,s_781,s_782,betweenstory_62,s_783,q_784,s_785,q_786,s_787,q_788,s_789,s_790,q_791,s_792,s_793,q_794,s_795,s_796,betweenstory_63,s_797,s_798,s_799,q_800,s_801,s_802,q_803,s_804,q_805,s_806,s_807,s_808,betweenstory_64,s_809,q_810,s_811,s_812,q_813,s_814,q_815,s_816,s_817,q_818,s_819,q_820,s_821,s_822,betweenstory_65,s_823,s_824,s_825,q_826,s_827,q_828,s_829,q_830,s_831,q_832,s_833,q_834,s_835,s_836,betweenstory_66,s_837,q_838,s_839,s_840,q_841,s_842,q_843,s_844,q_845,s_846,q_847,s_848,s_849,s_850,betweenstory_67,s_851,s_852,s_853,s_854,s_855,q_856,s_857,s_858,q_859,s_860,s_861,betweenstory_68,s_862,q_863,s_864,s_865,q_866,s_867,q_868,s_869,q_870,s_871,q_872,s_873,q_874,s_875,s_876,betweenstory_69,s_877,q_878,s_879,q_880,s_881,s_882,q_883,s_884,s_885,q_886,s_887,s_888,s_889,betweenstory_70,s_890,s_891,s_892,q_893,s_894,s_895,s_896,s_897,q_898,s_899,s_900,betweenstory_71,s_901,q_902,s_903,s_904,q_905,s_906,q_907,s_908,q_909,s_910,q_911,s_912,s_913,s_914,betweenstory_72,s_915,q_916,s_917,s_918,q_919,s_920,q_921,s_922,q_923,s_924,s_925,q_926,s_927,s_928,betweenstory_73,s_929,q_930,s_931,s_932,q_933,s_934,s_935,s_936,q_937,s_938,s_939,s_940,betweenstory_74,s_941,s_942,s_943,s_944,s_945,q_946,s_947,s_948,s_949,s_950,betweenstory_75,s_951,s_952,s_953,q_954,s_955,s_956,q_957,s_958,s_959,s_960,s_961,betweenstory_76,s_962,q_963,s_964,s_965,s_966,q_967,s_968,q_969,s_970,s_971,s_972,s_973,betweenstory_77,s_974,q_975,s_976,s_977,q_978,s_979,s_980,s_981,q_982,s_983,q_984,s_985,s_986,betweenstory_78,s_987,s_988,s_989,q_990,s_991,s_992,q_993,s_994,q_995,s_996,q_997,s_998,s_999,betweenstory_79,s_1000,s_1001,s_1002,q_1003,s_1004,q_1005,s_1006,q_1007,s_1008,q_1009,s_1010,q_1011,s_1012,s_1013,betweenstory_80,s_1014,q_1015,s_1016,s_1017,s_1018,q_1019,s_1020,s_1021,q_1022,s_1023,s_1024,s_1025,betweenstory_81,s_1026,s_1027,s_1028,q_1029,s_1030,s_1031,s_1032,s_1033,q_1034,s_1035,s_1036,betweenstory_82,s_1037,s_1038,s_1039,q_1040,s_1041,q_1042,s_1043,s_1044,s_1045,q_1046,s_1047,s_1048,betweenstory_83,s_1049,q_1050,s_1051,s_1052,s_1053,q_1054,s_1055,q_1056,s_1057,q_1058,s_1059,q_1060,s_1061,s_1062,betweenstory_84,s_1063,q_1064,s_1065,s_1066,q_1067,s_1068,q_1069,s_1070,s_1071,q_1072,s_1073,q_1074,s_1075,s_1076,betweenstory_85,s_1077,s_1078,s_1079,q_1080,s_1081,q_1082,s_1083,q_1084,s_1085,q_1086,s_1087,s_1088,s_1089,betweenstory_86,s_1090,s_1091,q_1092,s_1093,q_1094,s_1095,q_1096,s_1097,q_1098,s_1099,s_1100,s_1101,s_1102,betweenstory_87,s_1103,s_1104,s_1105,q_1106,s_1107,q_1108,s_1109,q_1110,s_1111,s_1112,q_1113,s_1114,s_1115,betweenstory_88,s_1116,s_1117,s_1118,s_1119,q_1120,s_1121,q_1122,s_1123,q_1124,s_1125,q_1126,s_1127,s_1128,betweenstory_89,s_1129,s_1130,s_1131,q_1132,s_1133,q_1134,s_1135,q_1136,s_1137,q_1138,s_1139,q_1140,s_1141,s_1142,betweenstory_90,s_1143,s_1144,s_1145,q_1146,s_1147,s_1148,s_1149,s_1150,q_1151,s_1152,s_1153,betweenstory_91,s_1154,s_1155,q_1156,s_1157,s_1158,q_1159,s_1160,s_1161,s_1162,q_1163,s_1164,s_1165,betweenstory_92,s_1166,s_1167,q_1168,s_1169,q_1170,s_1171,s_1172,q_1173,s_1174,s_1175,s_1176,s_1177,betweenstory_93,s_1178,s_1179,s_1180,q_1181,s_1182,q_1183,s_1184,q_1185,s_1186,q_1187,s_1188,q_1189,s_1190,s_1191,betweenstory_94,s_1192,q_1193,s_1194,s_1195,s_1196,q_1197,s_1198,q_1199,s_1200,s_1201,s_1202,s_1203,betweenstory_95,s_1204,q_1205,s_1206,s_1207,s_1208,s_1209,q_1210,s_1211,q_1212,s_1213,s_1214,s_1215,betweenstory_96,s_1216,s_1217,s_1218,q_1219,s_1220,s_1221,s_1222,s_1223,s_1224,s_1225,betweenstory_97,s_1226,q_1227,s_1228,s_1229,q_1230,s_1231,q_1232,s_1233,q_1234,s_1235,q_1236,s_1237,q_1238,s_1239,s_1240,betweenstory_98,s_1241,s_1242,s_1243,q_1244,s_1245,s_1246,q_1247,s_1248,q_1249,s_1250,s_1251,s_1252,betweenstory_99,s_1253,q_1254,s_1255,s_1256,q_1257,s_1258,q_1259,s_1260,q_1261,s_1262,s_1263,q_1264,s_1265,s_1266,betweenstory_100,],

  on_data_update: function(data) {
        psiturk.recordTrialData(data);
    },

  on_finish: function() {
    // psiturk save
    psiturk.saveData({
        success: function() { 
            psiturk.completeHIT(); 
        }
    });
  },
});