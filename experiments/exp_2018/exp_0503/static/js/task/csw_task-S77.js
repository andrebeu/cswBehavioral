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
		var q_2 = {
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
	var s_3 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_5 = {
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
	var s_6 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_7 = {
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
	var s_8 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_9 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_11 = {
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
	var s_12 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_13 = {
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

	var s_14 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_17 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_18 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_19 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_20 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_22 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_23 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_24 = {
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
	var s_25 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
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
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_30 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_31 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_32 = {
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
	var s_33 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_34 = {
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
	var s_35 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_36 = {
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
	var s_37 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_38 = {
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
	var s_39 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_40 = {
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

	var s_41 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_42 = {
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
	var s_43 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_46 = {
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
	var s_47 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_48 = {
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
	var s_49 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_50 = {
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
	var s_51 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_52 = {
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
	var s_53 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_55 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_56 = {
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
	var s_57 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_61 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_62 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_64 = {
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
	var s_65 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_66 = {
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

	var s_67 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_71 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_72 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_73 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_74 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_75 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_76 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_77 = {
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
	var s_78 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_79 = {
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

	var s_80 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_83 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Bill just stared, fascinated by David's display."],
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
	var s_84 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_87 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_88 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_89 = {
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
	var s_90 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_91 = {
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

	var s_92 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_93 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo.", "Inspired and wearing a pink top hat, Bill cut the line"],
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
	var s_94 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_96 = {
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
	var s_97 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_98 = {
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
	var s_99 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_100 = {
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
	var s_101 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_102 = {
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
	var s_103 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_104 = {
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
	var s_105 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_107 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_112 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_113 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_117 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_120 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_121 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_122 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_123 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_125 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_126 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_127 = {
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
	var s_128 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_129 = {
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

	var s_130 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_131 = {
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
	var s_132 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_133 = {
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
	var s_134 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_135 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
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
	var s_136 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_137 = {
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
	var s_138 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_139 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_140 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_142 = {
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
	var s_143 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_144 = {
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

	var s_145 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_146 = {
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
	var s_147 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_150 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_151 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_152 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_153 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_154 = {
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
	var s_155 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_156 = {
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
	var s_157 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_159 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_161 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
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
	var s_162 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_163 = {
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
	var s_164 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_165 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "David was appalled! 'Really? is that all you can muster?.'"],
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
	var s_166 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_168 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALONE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_169 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_172 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_176 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
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
	var s_177 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_178 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_179 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_180 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_181 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_184 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_185 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo.", "Inspired and wearing a pink top hat, Bill cut the line"],
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
	var s_186 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_194 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_195 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Bill cut the line", "While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
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
	var s_196 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_198 = {
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
	var s_199 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_200 = {
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
	var s_201 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_202 = {
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
	var s_203 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_204 = {
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
	var s_205 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_207 = {
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

	var s_208 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_209 = {
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
	var s_210 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_213 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_214 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_215 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_216 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_217 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_218 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_220 = {
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

	var s_221 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_225 = {
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
	var s_226 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_228 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_229 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_230 = {
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
	var s_231 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_233 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_236 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
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
	var s_237 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_240 = {
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
	var s_241 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_242 = {
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
	var s_243 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_244 = {
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

	var s_245 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_246 = {
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
	var s_247 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_249 = {
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
	var s_250 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_251 = {
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
	var s_252 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_253 = {
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
	var s_254 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_257 = {
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

	var s_258 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_262 = {
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
	var s_263 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_265 = {
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
	var s_266 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_269 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_270 = {
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
	var s_271 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_273 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_274 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_275 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_276 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_277 = {
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
	var s_278 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_280 = {
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
	var s_281 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_283 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_287 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_288 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_289 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_290 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_292 = {
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
	var s_293 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_295 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_296 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo.", "Inspired by the afternoon's heat, Alice cut the line"],
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
	var s_297 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_299 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_300 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_302 = {
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
	var s_303 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_306 = {
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

	var s_307 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_309 = {
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
	var s_310 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_311 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Bill just stared curiously at David's rebellion."],
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
	var s_312 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_314 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he pulled out the violin."],
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
	var s_315 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_317 = {
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
	var s_318 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_320 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_323 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
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
	var s_324 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_325 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire began lecturing on the motions of the stars to calm Alice down."],
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
	var s_326 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_329 = {
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
	var s_330 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_332 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_335 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_336 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_337 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_338 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_339 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_340 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_341 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_342 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_343 = {
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
	var s_344 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_345 = {
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

	var s_346 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_352 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_353 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_354 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_355 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_357 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_358 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily sneezed on Claire's pinky finger.", "Inspired by the afternoon's heat, Alice cut the line"],
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
	var s_359 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_361 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_362 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_363 = {
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
	var s_364 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_365 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she pulled out the violin."],
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
	var s_366 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_367 = {
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
	var s_368 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_369 = {
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
	var s_370 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_371 = {
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

	var s_372 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_377 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_378 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_381 = {
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

	var s_382 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_384 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was furious: she invented many words there and then.", "David was furious: he invented many words there and then."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_385 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_387 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_388 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_391 = {
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
	var s_392 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_394 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_399 = {
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
	var s_400 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_404 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_405 = {
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
	var s_406 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_408 = {
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
	var s_409 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_412 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_413 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_416 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_421 = {
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
	var s_422 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_423 = {
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
	var s_424 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_425 = {
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
	var s_426 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_427 = {
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

	var s_428 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_429 = {
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
	var s_430 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_433 = {
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
	var s_434 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_436 = {
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
	var s_437 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_440 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_443 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_444 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_449 = {
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

	var s_450 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_452 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
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
	var s_453 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_457 = {
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
	var s_458 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_459 = {
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
	var s_460 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_461 = {
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

	var s_462 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_466 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_467 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_470 = {
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
	var s_471 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_472 = {
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

	var s_473 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_477 = {
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
	var s_478 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_481 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_482 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_483 = {
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

	var s_484 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_487 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill began running around David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_488 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_489 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "David was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_490 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_491 = {
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
	var s_492 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_493 = {
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
	var s_494 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_495 = {
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
	var s_496 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_497 = {
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

	var s_498 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_499 = {
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
	var s_500 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_501 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'.", "David was furious: he invented many words there and then."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_502 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_504 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_505 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_507 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_508 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_509 = {
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
	var s_510 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_512 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_513 = {
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
	var s_514 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_517 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_518 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_519 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Bill was completely still, when suddenly he pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_520 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_521 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_522 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_525 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_530 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he pulled out the violin."],
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
	var s_531 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_533 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_534 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_535 = {
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

	var s_536 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_539 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_540 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_541 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David began lecturing on the motions of the stars to calm Bill down."],
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
	var s_542 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_543 = {
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
	var s_544 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_545 = {
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
	var s_546 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_547 = {
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
	var s_548 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_549 = {
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

	var s_550 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_553 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_554 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_555 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_556 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_558 = {
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
	var s_559 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_561 = {
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

	var s_562 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_563 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
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
	var s_564 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_568 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she pulled out the violin."],
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
	var s_569 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_570 = {
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
	var s_571 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_574 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_577 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_578 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_579 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_580 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_582 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_583 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_585 = {
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

	var s_586 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_587 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Bill cut the line", "While in line, Bill clumsily sneezed on David's pinky finger."],
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
	var s_588 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_591 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_592 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_594 = {
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
	var s_595 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_596 = {
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
	var s_597 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_599 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_600 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Bill cut the line", "While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
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
	var s_601 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_603 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_604 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_606 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he pulled out the violin."],
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
	var s_607 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_608 = {
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
	var s_609 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_612 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_613 = {
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
	var s_614 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_616 = {
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
	var s_617 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_618 = {
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
	var s_619 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_620 = {
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
	var s_621 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_623 = {
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
	var s_624 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_625 = {
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

	var s_626 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_627 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Alice clumsily sneezed on Claire's pinky finger.", "Inspired by the afternoon's heat, Alice cut the line"],
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
	var s_628 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_630 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_631 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_633 = {
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
	var s_634 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_635 = {
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
	var s_636 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_638 = {
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

	var s_639 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_641 = {
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
	var s_642 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_643 = {
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
	var s_644 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_646 = {
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
	var s_647 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_649 = {
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
	var s_650 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_652 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_653 = {
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
	var s_654 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_658 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
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
	var s_659 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_660 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_661 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_662 = {
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
	var s_663 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_665 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_668 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_669 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_671 = {
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
	var s_672 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_675 = {
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

	var s_676 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_680 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_681 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_682 = {
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
	var s_683 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_684 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_685 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_686 = {
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
	var s_687 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_689 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_692 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_693 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_696 = {
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
	var s_697 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_698 = {
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
	var s_699 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_700 = {
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

	var s_701 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_704 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
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
	var s_705 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_706 = {
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
	var s_707 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_708 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_709 = {
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
	var s_710 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_711 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_712 = {
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

	var s_713 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_714 = {
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
	var s_715 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_717 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_718 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_720 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_721 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_722 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_723 = {
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
	var s_724 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_725 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_726 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_729 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_730 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_731 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_733 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_734 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_736 = {
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

	var s_737 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_739 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_741 = {
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
	var s_742 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_743 = {
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
	var s_744 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_745 = {
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
	var s_746 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_747 = {
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
	var s_748 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_749 = {
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

	var s_750 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_751 = {
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
	var s_752 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_753 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_754 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_755 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_756 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_757 = {
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
	var s_758 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_759 = {
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
	var s_760 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_761 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill ran out yelling 'Juice is better, anyway!'", "Alice ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_762 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_763 = {
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

	var s_764 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_765 = {
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
	var s_766 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_768 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_769 = {
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
	var s_770 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_771 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_772 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_773 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_776 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_777 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_778 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
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
	var s_779 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_781 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_782 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Bill was completely still, when suddenly he pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_783 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_784 = {
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
	var s_785 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_786 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_787 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_788 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_789 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_790 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_791 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_792 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_793 = {
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
	var s_794 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_795 = {
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
	var s_796 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_797 = {
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
	var s_798 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_799 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_800 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_801 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_802 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_803 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_804 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_805 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_806 = {
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
	var s_807 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_808 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_809 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_810 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_811 = {
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

	var s_812 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_813 = {
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
	var s_814 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_815 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_816 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_817 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_818 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_819 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_820 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_821 = {
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
	var s_822 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_823 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_824 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_827 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_828 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_829 = {
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
	var s_830 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_831 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_832 = {
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
	var s_833 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_834 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_835 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_836 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_838 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_839 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_841 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_842 = {
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
	var s_843 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_844 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_845 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_846 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_847 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_848 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_849 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_850 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_851 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_852 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_853 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_854 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_855 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_856 = {
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
	var s_857 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_858 = {
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

	var s_859 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_860 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
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
	var s_861 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_862 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_863 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_864 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_865 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_866 = {
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
	var s_867 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_868 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_869 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_870 = {
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
	var s_871 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_872 = {
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

	var s_873 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_874 = {
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
	var s_875 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_877 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_878 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "David began lecturing on the motions of the stars to calm Bill down."],
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
	var s_879 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_880 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_881 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_882 = {
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
	var s_883 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_884 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_885 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_886 = {
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
	var s_887 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_889 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_890 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_892 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she pulled out the violin."],
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
	var s_893 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_894 = {
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
	var s_895 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_896 = {
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
	var s_897 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_898 = {
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

	var s_899 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_900 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_902 = {
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
	var s_903 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_904 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire began lecturing on the motions of the stars to calm Alice down."],
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
	var s_905 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_906 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Bill was completely still, when suddenly he pulled out the violin."],
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
	var s_907 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_908 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_909 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_910 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_911 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_912 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_913 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_914 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_915 = {
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
	var s_916 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_917 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_918 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_919 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_920 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_921 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_922 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_923 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_924 = {
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

	var s_925 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_926 = {
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
	var s_927 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_928 = {
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
	var s_929 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_930 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_931 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_932 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_933 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_934 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_935 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_936 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_937 = {
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
	var s_938 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_939 = {
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

	var s_940 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_941 = {
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
	var s_942 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_943 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_945 = {
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
	var s_946 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_947 = {
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
	var s_948 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_949 = {
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
	var s_950 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_951 = {
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
	var s_952 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_953 = {
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

	var s_954 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_955 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Bill cut the line", "While in line, Bill clumsily sneezed on David's pinky finger."],
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
	var s_956 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_957 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_958 = {
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
	var s_959 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_960 = {
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
	var s_961 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_962 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_963 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_964 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_965 = {
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

	var s_966 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_968 = {
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
	var s_969 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_970 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_971 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_972 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_973 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_974 = {
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
	var s_975 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_976 = {
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
	var s_977 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_978 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_979 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_980 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_981 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo.", "Inspired and wearing a pink top hat, Bill cut the line"],
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
	var s_982 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_983 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_984 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David realized things were Real and True.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_985 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_986 = {
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
	var s_987 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_988 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_989 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_990 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_991 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_993 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_994 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_995 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_997 = {
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
	var s_998 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1000 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1001 = {
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
	var s_1002 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1003 = {
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

	var s_1004 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1005 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1006 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1007 = {
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
	var s_1008 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1009 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1010 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1011 = {
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
	var s_1012 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1013 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1014 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1015 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1016 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1017 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1019 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1020 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1021 = {
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
	var s_1022 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1023 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1024 = {
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
	var s_1025 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1026 = {
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
	var s_1027 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1028 = {
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

	var s_1029 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1032 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1033 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1034 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1035 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1036 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Bill was completely still, when suddenly he pulled out the violin."],
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
	var s_1037 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1038 = {
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
	var s_1039 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1040 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1042 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1043 = {
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
	var s_1044 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1046 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_1047 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1049 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1050 = {
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
	var s_1051 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1052 = {
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
	var s_1053 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1054 = {
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

	var s_1055 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1056 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1057 = {
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
	var s_1058 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1059 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1060 = {
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
	var s_1061 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1062 = {
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
	var s_1063 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1064 = {
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
	var s_1065 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1066 = {
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
	var s_1067 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1068 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1069 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1071 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1072 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_1073 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1074 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1077 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1078 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1079 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1080 = {
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
	var s_1081 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1082 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1083 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1084 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1085 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1086 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1087 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1088 = {
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
	var s_1089 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1090 = {
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

	var s_1091 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1092 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1094 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1095 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1096 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1097 = {
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
	var s_1098 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1099 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1100 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1101 = {
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

	var s_1102 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1103 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo.", "Inspired by the afternoon's heat, Bill cut the line"],
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
	var s_1104 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1106 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1107 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1108 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1109 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1110 = {
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
	var s_1111 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1112 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1113 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1114 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1115 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1116 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1117 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1118 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1119 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1120 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1121 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1122 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1123 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1124 = {
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
	var s_1125 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1126 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1127 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1128 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
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
	var s_1129 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1130 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1131 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Alice just stared curiously at Claire's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1132 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1133 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1134 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1136 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1137 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1138 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1139 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1140 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1141 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1142 = {
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
	var s_1143 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1144 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1145 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1146 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1147 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1148 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1150 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1151 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1152 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1153 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1154 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1155 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1156 = {
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
	var s_1157 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1159 = {
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
	var s_1160 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1161 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire began lecturing on the motions of the stars to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1163 = {
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
	var s_1164 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1165 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1166 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1167 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1168 = {
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

	var s_1169 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1170 = {
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
	var s_1171 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1173 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1174 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_1175 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1176 = {
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
	var s_1177 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1178 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Alice to leave.", "We all saw the barista order Alice to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1179 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1181 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1182 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1183 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired and wearing a pink top hat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
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
	var s_1184 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1185 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1186 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1188 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1189 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately pulled out a straw and a collection of spitballs."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1190 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1191 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Alice to leave. ", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1192 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1193 = {
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
	var s_1194 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1195 = {
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

	var s_1196 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1197 = {
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
	var s_1198 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1199 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1201 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1202 = {
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
	var s_1203 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1204 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1205 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1206 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1207 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1208 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1209 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1210 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1211 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1212 = {
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
	var s_1213 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1214 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1215 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1216 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1217 = {
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
	var s_1218 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1219 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1220 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1221 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1222 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1223 = {
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
	var s_1224 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1225 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "Claire began lecturing on the motions of the stars to calm Alice down."],
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
	var s_1226 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1227 = {
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
	var s_1228 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1229 = {
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
	var s_1230 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1231 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1232 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1233 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1234 = {
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
	var s_1235 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1236 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1238 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1239 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1240 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1241 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["We all saw the barista order Bill to leave. ", "That was when the bystanding police officer ordered Bill to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1242 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1243 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1244 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1245 = {
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

	var s_1246 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1247 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1248 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1249 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Bill just stared curiously at David's rebellion."],
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
	var s_1250 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1251 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1252 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1253 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_1254 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1255 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "We all saw the barista order Bill to leave. "],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1256 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1257 = {
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
	var s_1258 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1259 = {
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,s_4,q_5,s_6,q_7,s_8,s_9,s_10,q_11,s_12,s_13,betweenstory_1,s_14,s_15,s_16,q_17,s_18,q_19,s_20,s_21,q_22,s_23,q_24,s_25,s_26,betweenstory_2,s_27,s_28,s_29,q_30,s_31,q_32,s_33,q_34,s_35,q_36,s_37,q_38,s_39,s_40,betweenstory_3,s_41,q_42,s_43,s_44,s_45,q_46,s_47,q_48,s_49,q_50,s_51,q_52,s_53,s_54,betweenstory_4,s_55,q_56,s_57,s_58,s_59,s_60,q_61,s_62,s_63,q_64,s_65,s_66,betweenstory_5,s_67,s_68,s_69,s_70,q_71,s_72,q_73,s_74,q_75,s_76,q_77,s_78,s_79,betweenstory_6,s_80,s_81,s_82,q_83,s_84,s_85,s_86,q_87,s_88,q_89,s_90,s_91,betweenstory_7,s_92,q_93,s_94,s_95,q_96,s_97,q_98,s_99,q_100,s_101,q_102,s_103,q_104,s_105,s_106,betweenstory_8,s_107,s_108,s_109,s_110,s_111,q_112,s_113,s_114,s_115,s_116,betweenstory_9,s_117,s_118,s_119,q_120,s_121,q_122,s_123,s_124,q_125,s_126,q_127,s_128,s_129,betweenstory_10,s_130,q_131,s_132,q_133,s_134,q_135,s_136,q_137,s_138,q_139,s_140,s_141,q_142,s_143,s_144,betweenstory_11,s_145,q_146,s_147,s_148,s_149,q_150,s_151,q_152,s_153,q_154,s_155,q_156,s_157,s_158,betweenstory_12,s_159,s_160,q_161,s_162,q_163,s_164,q_165,s_166,s_167,q_168,s_169,s_170,s_171,betweenstory_13,s_172,s_173,s_174,s_175,q_176,s_177,q_178,s_179,q_180,s_181,s_182,s_183,betweenstory_14,s_184,q_185,s_186,s_187,s_188,s_189,s_190,s_191,s_192,s_193,betweenstory_15,s_194,q_195,s_196,s_197,q_198,s_199,q_200,s_201,q_202,s_203,q_204,s_205,s_206,s_207,betweenstory_16,s_208,q_209,s_210,s_211,s_212,q_213,s_214,q_215,s_216,q_217,s_218,s_219,s_220,betweenstory_17,s_221,s_222,s_223,s_224,q_225,s_226,s_227,q_228,s_229,q_230,s_231,s_232,betweenstory_18,s_233,s_234,s_235,q_236,s_237,s_238,s_239,q_240,s_241,q_242,s_243,s_244,betweenstory_19,s_245,q_246,s_247,s_248,q_249,s_250,q_251,s_252,q_253,s_254,s_255,s_256,s_257,betweenstory_20,s_258,s_259,s_260,s_261,q_262,s_263,s_264,q_265,s_266,s_267,s_268,betweenstory_21,s_269,q_270,s_271,s_272,q_273,s_274,q_275,s_276,q_277,s_278,s_279,q_280,s_281,s_282,betweenstory_22,s_283,s_284,s_285,s_286,q_287,s_288,q_289,s_290,s_291,q_292,s_293,s_294,betweenstory_23,s_295,q_296,s_297,s_298,q_299,s_300,s_301,q_302,s_303,s_304,s_305,s_306,betweenstory_24,s_307,s_308,q_309,s_310,q_311,s_312,s_313,q_314,s_315,s_316,q_317,s_318,s_319,betweenstory_25,s_320,s_321,s_322,q_323,s_324,q_325,s_326,s_327,s_328,q_329,s_330,s_331,betweenstory_26,s_332,s_333,s_334,q_335,s_336,q_337,s_338,q_339,s_340,q_341,s_342,q_343,s_344,s_345,betweenstory_27,s_346,s_347,s_348,s_349,s_350,s_351,q_352,s_353,q_354,s_355,s_356,betweenstory_28,s_357,q_358,s_359,s_360,q_361,s_362,q_363,s_364,q_365,s_366,q_367,s_368,q_369,s_370,s_371,betweenstory_29,s_372,s_373,s_374,s_375,s_376,q_377,s_378,s_379,s_380,s_381,betweenstory_30,s_382,s_383,q_384,s_385,s_386,q_387,s_388,s_389,s_390,q_391,s_392,s_393,betweenstory_31,s_394,s_395,s_396,s_397,s_398,q_399,s_400,s_401,s_402,s_403,betweenstory_32,s_404,q_405,s_406,s_407,q_408,s_409,s_410,s_411,q_412,s_413,s_414,s_415,betweenstory_33,s_416,s_417,s_418,s_419,s_420,q_421,s_422,q_423,s_424,q_425,s_426,s_427,betweenstory_34,s_428,q_429,s_430,s_431,s_432,q_433,s_434,s_435,q_436,s_437,s_438,s_439,betweenstory_35,s_440,s_441,s_442,q_443,s_444,s_445,s_446,s_447,s_448,s_449,betweenstory_36,s_450,s_451,q_452,s_453,s_454,s_455,s_456,q_457,s_458,q_459,s_460,s_461,betweenstory_37,s_462,s_463,s_464,s_465,q_466,s_467,s_468,s_469,q_470,s_471,s_472,betweenstory_38,s_473,s_474,s_475,s_476,q_477,s_478,s_479,s_480,q_481,s_482,s_483,betweenstory_39,s_484,s_485,s_486,q_487,s_488,q_489,s_490,q_491,s_492,q_493,s_494,q_495,s_496,s_497,betweenstory_40,s_498,q_499,s_500,q_501,s_502,s_503,q_504,s_505,s_506,q_507,s_508,q_509,s_510,s_511,betweenstory_41,s_512,q_513,s_514,s_515,s_516,q_517,s_518,q_519,s_520,q_521,s_522,s_523,s_524,betweenstory_42,s_525,s_526,s_527,s_528,s_529,q_530,s_531,s_532,q_533,s_534,s_535,betweenstory_43,s_536,s_537,s_538,q_539,s_540,q_541,s_542,q_543,s_544,q_545,s_546,q_547,s_548,s_549,betweenstory_44,s_550,s_551,s_552,q_553,s_554,q_555,s_556,s_557,q_558,s_559,s_560,s_561,betweenstory_45,s_562,q_563,s_564,s_565,s_566,s_567,q_568,s_569,q_570,s_571,s_572,s_573,betweenstory_46,s_574,s_575,s_576,q_577,s_578,q_579,s_580,s_581,q_582,s_583,s_584,s_585,betweenstory_47,s_586,q_587,s_588,s_589,s_590,q_591,s_592,s_593,q_594,s_595,q_596,s_597,s_598,betweenstory_48,s_599,q_600,s_601,s_602,q_603,s_604,s_605,q_606,s_607,q_608,s_609,s_610,s_611,betweenstory_49,s_612,q_613,s_614,s_615,q_616,s_617,q_618,s_619,q_620,s_621,s_622,q_623,s_624,s_625,betweenstory_50,s_626,q_627,s_628,s_629,q_630,s_631,s_632,q_633,s_634,q_635,s_636,s_637,s_638,betweenstory_51,s_639,s_640,q_641,s_642,q_643,s_644,s_645,q_646,s_647,s_648,q_649,s_650,s_651,betweenstory_52,s_652,q_653,s_654,s_655,s_656,s_657,q_658,s_659,q_660,s_661,q_662,s_663,s_664,betweenstory_53,s_665,s_666,s_667,q_668,s_669,s_670,q_671,s_672,s_673,s_674,s_675,betweenstory_54,s_676,s_677,s_678,s_679,q_680,s_681,q_682,s_683,q_684,s_685,q_686,s_687,s_688,betweenstory_55,s_689,s_690,s_691,q_692,s_693,s_694,s_695,q_696,s_697,q_698,s_699,s_700,betweenstory_56,s_701,s_702,s_703,q_704,s_705,q_706,s_707,s_708,q_709,s_710,s_711,s_712,betweenstory_57,s_713,q_714,s_715,s_716,q_717,s_718,s_719,q_720,s_721,s_722,q_723,s_724,s_725,betweenstory_58,s_726,s_727,s_728,q_729,s_730,s_731,s_732,q_733,s_734,s_735,s_736,betweenstory_59,s_737,s_738,s_739,s_740,q_741,s_742,q_743,s_744,q_745,s_746,q_747,s_748,s_749,betweenstory_60,s_750,q_751,s_752,s_753,q_754,s_755,s_756,q_757,s_758,q_759,s_760,q_761,s_762,s_763,betweenstory_61,s_764,q_765,s_766,s_767,s_768,q_769,s_770,s_771,q_772,s_773,s_774,s_775,betweenstory_62,s_776,s_777,q_778,s_779,s_780,s_781,q_782,s_783,q_784,s_785,s_786,s_787,betweenstory_63,s_788,s_789,s_790,q_791,s_792,q_793,s_794,q_795,s_796,q_797,s_798,s_799,s_800,betweenstory_64,s_801,s_802,s_803,q_804,s_805,q_806,s_807,s_808,s_809,s_810,s_811,betweenstory_65,s_812,q_813,s_814,s_815,s_816,s_817,s_818,q_819,s_820,q_821,s_822,s_823,betweenstory_66,s_824,s_825,s_826,q_827,s_828,q_829,s_830,s_831,q_832,s_833,s_834,s_835,betweenstory_67,s_836,s_837,s_838,s_839,s_840,s_841,q_842,s_843,s_844,s_845,betweenstory_68,s_846,s_847,s_848,q_849,s_850,q_851,s_852,s_853,q_854,s_855,q_856,s_857,s_858,betweenstory_69,s_859,q_860,s_861,s_862,s_863,q_864,s_865,q_866,s_867,q_868,s_869,q_870,s_871,s_872,betweenstory_70,s_873,q_874,s_875,s_876,s_877,q_878,s_879,s_880,s_881,q_882,s_883,s_884,betweenstory_71,s_885,q_886,s_887,s_888,q_889,s_890,s_891,q_892,s_893,q_894,s_895,q_896,s_897,s_898,betweenstory_72,s_899,s_900,s_901,q_902,s_903,q_904,s_905,q_906,s_907,q_908,s_909,q_910,s_911,s_912,betweenstory_73,s_913,s_914,q_915,s_916,q_917,s_918,s_919,q_920,s_921,s_922,s_923,s_924,betweenstory_74,s_925,q_926,s_927,q_928,s_929,q_930,s_931,q_932,s_933,q_934,s_935,s_936,q_937,s_938,s_939,betweenstory_75,s_940,q_941,s_942,s_943,s_944,q_945,s_946,q_947,s_948,q_949,s_950,q_951,s_952,s_953,betweenstory_76,s_954,q_955,s_956,s_957,q_958,s_959,q_960,s_961,s_962,s_963,s_964,s_965,betweenstory_77,s_966,s_967,q_968,s_969,q_970,s_971,q_972,s_973,q_974,s_975,q_976,s_977,s_978,s_979,betweenstory_78,s_980,q_981,s_982,s_983,q_984,s_985,q_986,s_987,s_988,q_989,s_990,s_991,s_992,betweenstory_79,s_993,s_994,s_995,s_996,q_997,s_998,s_999,s_1000,q_1001,s_1002,s_1003,betweenstory_80,s_1004,s_1005,s_1006,q_1007,s_1008,q_1009,s_1010,q_1011,s_1012,q_1013,s_1014,s_1015,s_1016,betweenstory_81,s_1017,s_1018,s_1019,s_1020,q_1021,s_1022,s_1023,q_1024,s_1025,q_1026,s_1027,s_1028,betweenstory_82,s_1029,s_1030,s_1031,q_1032,s_1033,q_1034,s_1035,q_1036,s_1037,q_1038,s_1039,s_1040,s_1041,betweenstory_83,s_1042,q_1043,s_1044,s_1045,q_1046,s_1047,s_1048,s_1049,q_1050,s_1051,q_1052,s_1053,s_1054,betweenstory_84,s_1055,s_1056,q_1057,s_1058,s_1059,q_1060,s_1061,q_1062,s_1063,q_1064,s_1065,q_1066,s_1067,s_1068,betweenstory_85,s_1069,s_1070,s_1071,q_1072,s_1073,s_1074,s_1075,s_1076,s_1077,s_1078,betweenstory_86,s_1079,q_1080,s_1081,s_1082,s_1083,s_1084,q_1085,s_1086,s_1087,q_1088,s_1089,s_1090,betweenstory_87,s_1091,s_1092,s_1093,s_1094,s_1095,s_1096,q_1097,s_1098,q_1099,s_1100,s_1101,betweenstory_88,s_1102,q_1103,s_1104,s_1105,s_1106,s_1107,s_1108,s_1109,q_1110,s_1111,s_1112,betweenstory_89,s_1113,s_1114,s_1115,q_1116,s_1117,q_1118,s_1119,q_1120,s_1121,q_1122,s_1123,q_1124,s_1125,s_1126,betweenstory_90,s_1127,q_1128,s_1129,s_1130,q_1131,s_1132,q_1133,s_1134,s_1135,q_1136,s_1137,s_1138,s_1139,betweenstory_91,s_1140,s_1141,q_1142,s_1143,q_1144,s_1145,q_1146,s_1147,q_1148,s_1149,q_1150,s_1151,q_1152,s_1153,s_1154,betweenstory_92,s_1155,q_1156,s_1157,s_1158,q_1159,s_1160,q_1161,s_1162,q_1163,s_1164,q_1165,s_1166,s_1167,s_1168,betweenstory_93,s_1169,q_1170,s_1171,s_1172,s_1173,q_1174,s_1175,q_1176,s_1177,q_1178,s_1179,s_1180,s_1181,betweenstory_94,s_1182,q_1183,s_1184,s_1185,q_1186,s_1187,s_1188,q_1189,s_1190,q_1191,s_1192,q_1193,s_1194,s_1195,betweenstory_95,s_1196,q_1197,s_1198,s_1199,s_1200,s_1201,q_1202,s_1203,s_1204,q_1205,s_1206,s_1207,betweenstory_96,s_1208,s_1209,s_1210,s_1211,q_1212,s_1213,q_1214,s_1215,s_1216,q_1217,s_1218,s_1219,betweenstory_97,s_1220,s_1221,s_1222,q_1223,s_1224,q_1225,s_1226,q_1227,s_1228,q_1229,s_1230,s_1231,s_1232,betweenstory_98,s_1233,q_1234,s_1235,s_1236,s_1237,s_1238,q_1239,s_1240,q_1241,s_1242,q_1243,s_1244,s_1245,betweenstory_99,s_1246,s_1247,s_1248,q_1249,s_1250,q_1251,s_1252,q_1253,s_1254,q_1255,s_1256,q_1257,s_1258,s_1259,betweenstory_100,],

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