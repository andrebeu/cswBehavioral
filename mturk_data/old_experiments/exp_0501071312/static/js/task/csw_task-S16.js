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
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_3 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
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
	var s_4 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_6 = {
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
	var s_7 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_8 = {
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
	var s_9 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_10 = {
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
	var s_11 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_12 = {
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
	var s_13 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_15 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_18 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_19 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_20 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_21 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_22 = {
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
	var s_23 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_24 = {
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
	var s_25 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_27 = {
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

	var s_28 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_29 = {
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
	var s_30 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_32 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
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
	var s_33 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_35 = {
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
	var s_36 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_37 = {
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
	var s_38 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_39 = {
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
	var s_40 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_42 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_43 = {
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
	var s_44 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_46 = {
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
	var s_47 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_48 = {
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
	var s_49 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_50 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Bill immediately chugged down three cups of moccachino."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "SUBJFINALONE",
						"false_tonode": "SUBJFINALONE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_51 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_56 = {
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
	var s_57 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_59 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill began running around David until David realized things were Real and True."],
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
	var s_60 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_61 = {
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
	var s_62 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_63 = {
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
	var s_64 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_65 = {
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
	var s_66 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_67 = {
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
	var s_68 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_70 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_71 = {
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
	var s_72 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_75 = {
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
	var s_76 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_77 = {
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
	var s_78 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_79 = {
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
	var s_80 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_81 = {
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
	var s_82 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_83 = {
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

	var s_84 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_87 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Bill just stared, fascinated by David's display."],
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
	var s_88 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_90 = {
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
	var s_91 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_92 = {
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
	var s_93 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_94 = {
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
	var s_95 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_96 = {
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

	var s_97 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_98 = {
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
	var s_99 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_101 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
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
	var s_102 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_107 = {
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

	var s_108 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
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
		var q_115 = {
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
	var s_116 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_117 = {
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

	var s_118 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_119 = {
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
	var s_120 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_122 = {
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
	var s_123 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_124 = {
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
	var s_125 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_126 = {
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
	var s_127 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_129 = {
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
	var s_130 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_132 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_135 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
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
	var s_136 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_137 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_138 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_140 = {
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
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_143 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_146 = {
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
	var s_147 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_149 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
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
	var s_150 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_152 = {
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
	var s_153 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_154 = {
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
	var s_155 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_157 = {
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

	var s_158 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_163 = {
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
	var s_164 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_166 = {
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
	var s_167 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_168 = {
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

	var s_169 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_173 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_174 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_175 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_176 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_179 = {
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

	var s_180 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_183 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
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
	var s_184 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_185 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_186 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_188 = {
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
	var s_189 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_191 = {
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

	var s_192 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_193 = {
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
	var s_194 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_196 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
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
	var s_197 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_198 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "David began lecturing on the motions of the stars to calm Bill down."],
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
	var s_199 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_201 = {
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
	var s_202 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_205 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_208 = {
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
	var s_209 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_211 = {
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
	var s_212 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_213 = {
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
	var s_214 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_217 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_220 = {
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
	var s_221 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_222 = {
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
	var s_223 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_225 = {
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
	var s_226 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_228 = {
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

	var s_229 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_231 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
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
	var s_232 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_233 = {
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
	var s_234 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_236 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Bill immediately chugged down three cups of moccachino."],
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
	var s_237 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_238 = {
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
	var s_239 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_242 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_246 = {
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
	var s_247 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_249 = {
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
	var s_250 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_251 = {
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
	var s_252 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_254 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_259 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately chugged down three cups of moccachino.", "Alice immediately chugged down three cups of moccachino."],
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
	var s_260 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_262 = {
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
	var s_263 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_264 = {
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

	var s_265 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_268 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_269 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_274 = {
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

	var s_275 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_276 = {
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
	var s_277 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_279 = {
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
	var s_280 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_281 = {
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
	var s_282 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_283 = {
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
	var s_284 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_285 = {
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
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_290 = {
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
	var s_291 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_292 = {
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
	var s_293 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_294 = {
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
	var s_295 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_296 = {
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
	var s_297 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_298 = {
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
	var s_299 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_300 = {
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
	var s_301 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_302 = {
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
	var s_303 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_305 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_308 = {
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
	var s_309 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_311 = {
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
	var s_312 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_313 = {
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
	var s_314 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_316 = {
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

	var s_317 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_318 = {
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
	var s_319 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_321 = {
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
	var s_322 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_323 = {
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
	var s_324 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_325 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Bill immediately chugged down three cups of moccachino."],
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
	var s_326 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_327 = {
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
		var q_333 = {
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
	var s_334 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_336 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
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
	var s_337 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_338 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "David began lecturing on the motions of the stars to calm Bill down."],
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
	var s_339 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_340 = {
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
	var s_341 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_342 = {
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
	var s_343 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_344 = {
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
	var s_345 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_346 = {
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

	var s_347 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_350 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_351 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_352 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "Claire began lecturing on the motions of the stars to calm Alice down."],
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
	var s_353 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_355 = {
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
	var s_356 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_358 = {
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

	var s_359 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_362 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
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
	var s_363 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_364 = {
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
	var s_365 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_366 = {
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
	var s_367 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
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
	var s_370 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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
		pages: ["One morning, Alice walked into the coffee shop."],
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
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_376 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "David began lecturing on the motions of the stars to calm Bill down."],
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
	var s_377 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_378 = {
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
	var s_379 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_380 = {
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
	var s_381 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_383 = {
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

	var s_384 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_385 = {
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
	var s_386 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_388 = {
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
	var s_389 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_390 = {
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
	var s_391 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_392 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Bill immediately chugged down three cups of moccachino."],
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
	var s_393 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_395 = {
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
	var s_396 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_397 = {
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

	var s_398 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_401 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
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
	var s_402 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_404 = {
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
	var s_405 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_406 = {
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
	var s_407 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_408 = {
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
	var s_409 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_410 = {
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

	var s_411 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_414 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill began running around David until David realized things were Real and True."],
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
	var s_415 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_417 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_418 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_419 = {
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
	var s_420 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_421 = {
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
	var s_422 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_423 = {
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

	var s_424 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_428 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_429 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_431 = {
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
	var s_432 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_433 = {
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
	var s_434 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_436 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_437 = {
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
	var s_438 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_441 = {
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
	var s_442 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_443 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she pulled out the violin."],
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
	var s_444 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_445 = {
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
	var s_446 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_448 = {
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

	var s_449 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_450 = {
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
	var s_451 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_452 = {
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
	var s_453 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_454 = {
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
	var s_455 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_456 = {
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
	var s_457 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_458 = {
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
	var s_459 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_460 = {
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
	var s_461 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_464 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_465 = {
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
	var s_466 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_468 = {
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
	var s_469 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_470 = {
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
	var s_471 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_472 = {
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
	var s_473 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_477 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_478 = {
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
	var s_479 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_481 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
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
	var s_482 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_484 = {
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
	var s_485 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_487 = {
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
	var s_488 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_489 = {
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

	var s_490 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_491 = {
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
	var s_492 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_494 = {
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
	var s_495 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_497 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_498 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_499 = {
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
	var s_500 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_502 = {
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

	var s_503 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_506 = {
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
	var s_507 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_508 = {
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
	var s_509 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_510 = {
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
	var s_511 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_512 = {
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
	var s_513 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_515 = {
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

	var s_516 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_517 = {
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
	var s_518 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_520 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_521 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_522 = {
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
	var s_523 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_525 = {
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
	var s_526 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_527 = {
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
	var s_528 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_529 = {
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

	var s_530 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_531 = {
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
	var s_532 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_533 = {
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
	var s_534 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_535 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_536 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_537 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
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
	var s_538 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_542 = {
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

	var s_543 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_544 = {
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
	var s_545 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_547 = {
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
	var s_548 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_549 = {
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
	var s_550 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_552 = {
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
	var s_553 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_554 = {
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
	var s_555 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_556 = {
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

	var s_557 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_559 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
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
	var s_560 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_561 = {
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
	var s_562 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_563 = {
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
	var s_564 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_565 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Alice immediately chugged down three cups of moccachino."],
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
	var s_566 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_567 = {
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
	var s_568 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_569 = {
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
	var s_570 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_572 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_573 = {
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
	var s_574 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_577 = {
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
	var s_578 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_579 = {
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
	var s_580 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_582 = {
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
	var s_583 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_584 = {
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

	var s_585 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_588 = {
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
	var s_589 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_590 = {
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
	var s_591 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_592 = {
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
	var s_593 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_595 = {
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
	var s_596 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_597 = {
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

	var s_598 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_599 = {
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
	var s_600 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_601 = {
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
	var s_602 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_605 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_606 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_608 = {
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
	var s_609 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_610 = {
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

	var s_611 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_612 = {
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
	var s_613 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_614 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
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
	var s_615 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_617 = {
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
	var s_618 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_619 = {
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
	var s_620 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_621 = {
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
	var s_624 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_626 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_628 = {
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
	var s_629 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_630 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
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
	var s_631 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_632 = {
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
	var s_633 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_634 = {
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
	var s_635 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_636 = {
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
	var s_637 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_638 = {
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
	var s_639 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_640 = {
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

	var s_641 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_642 = {
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
	var s_643 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_646 = {
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
	var s_647 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_649 = {
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
	var s_650 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_652 = {
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

	var s_653 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_654 = {
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
	var s_655 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_658 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_659 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_660 = {
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
	var s_661 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_662 = {
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
	var s_663 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_664 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_665 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_666 = {
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

	var s_667 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_671 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_672 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_673 = {
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
	var s_674 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_675 = {
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
	var s_676 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_677 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_678 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_679 = {
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

	var s_680 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_681 = {
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
	var s_682 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_685 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_686 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_687 = {
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
	var s_688 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_689 = {
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
	var s_690 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_691 = {
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
	var s_692 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_693 = {
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

	var s_694 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_700 = {
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
	var s_701 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_703 = {
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

	var s_704 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_705 = {
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
	var s_706 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_708 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_709 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_711 = {
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
	var s_712 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_713 = {
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
	var s_714 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_715 = {
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
	var s_716 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_717 = {
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

	var s_718 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_719 = {
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
	var s_720 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_721 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_722 = {
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
	var s_723 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_724 = {
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
	var s_725 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_726 = {
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
	var s_727 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_729 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_730 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_731 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_733 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_737 = {
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
	var s_738 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_739 = {
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
	var s_740 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_741 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_742 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_744 = {
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
	var s_745 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_746 = {
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
	var s_747 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_748 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_749 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_750 = {
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
	var s_751 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_752 = {
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
	var s_753 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_754 = {
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

	var s_755 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_756 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_757 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_758 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_760 = {
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
	var s_761 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_762 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_763 = {
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
	var s_764 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_765 = {
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

	var s_766 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_768 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_769 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
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
	var s_770 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_771 = {
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
	var s_772 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_773 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately pulled out a straw and a collection of spitballs."],
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
	var s_774 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_776 = {
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
	var s_777 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_778 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_779 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_780 = {
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
	var s_781 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_783 = {
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
	var s_784 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_785 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_786 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_787 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_788 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_789 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_790 = {
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
	var s_791 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_792 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_793 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_795 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_796 = {
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
	var s_797 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_798 = {
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
	var s_799 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_800 = {
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
	var s_801 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_802 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_803 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_804 = {
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

	var s_805 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_806 = {
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
	var s_807 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_808 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_809 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
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
	var s_810 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_811 = {
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
	var s_812 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_813 = {
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
	var s_814 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_815 = {
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
	var s_816 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_817 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_818 = {
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

	var s_819 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_821 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_823 = {
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
	var s_824 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_825 = {
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
	var s_826 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_828 = {
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
	var s_829 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_830 = {
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

	var s_831 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_832 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_833 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_834 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Bill just stared, fascinated by David's display."],
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
	var s_835 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_836 = {
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
	var s_837 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_838 = {
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
	var s_839 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_841 = {
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
	var s_842 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_843 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_844 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_845 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_846 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_847 = {
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
	var s_848 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_849 = {
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
	var s_850 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_851 = {
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
	var s_852 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_853 = {
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
	var s_854 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_855 = {
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
	var s_856 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_857 = {
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

	var s_858 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_859 = {
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
	var s_860 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_861 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_862 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_863 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_864 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_865 = {
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
	var s_866 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_867 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_868 = {
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

	var s_869 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_870 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_871 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_872 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_873 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_874 = {
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
	var s_875 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_877 = {
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
	var s_878 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_879 = {
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

	var s_880 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_881 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_884 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_885 = {
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
	var s_886 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_887 = {
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
	var s_888 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_889 = {
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
	var s_890 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_891 = {
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

	var s_892 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_893 = {
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
	var s_894 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_895 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_896 = {
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
	var s_897 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_898 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_899 = {
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
	var s_900 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_902 = {
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
	var s_903 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_904 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_905 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_906 = {
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
	var s_907 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_908 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_909 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_910 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_911 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_912 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_913 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_914 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_915 = {
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

	var s_916 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_917 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_918 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_919 = {
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
	var s_920 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_921 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_922 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_923 = {
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
	var s_924 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_925 = {
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
	var s_926 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_927 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_928 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_929 = {
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
	var s_930 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_931 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_932 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_933 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_934 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_935 = {
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
	var s_936 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_937 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_938 = {
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
	var s_939 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_940 = {
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

	var s_941 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_942 = {
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
	var s_943 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_945 = {
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
	var s_946 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_947 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_948 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_949 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_950 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_951 = {
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
	var s_952 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_953 = {
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

	var s_954 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_955 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_956 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_957 = {
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
	var s_958 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_959 = {
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
	var s_960 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_961 = {
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
	var s_962 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_963 = {
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
	var s_964 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_965 = {
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
	var s_966 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_968 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_969 = {
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
	var s_970 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_971 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_973 = {
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
	var s_974 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_975 = {
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
	var s_976 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_978 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_979 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_980 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_981 = {
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
	var s_982 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_983 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_984 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Bill just stared curiously at David's rebellion."],
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
	var s_985 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_986 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "David considered using those kong-fu skills to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_987 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_988 = {
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
	var s_989 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_993 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_994 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_995 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_997 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_998 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1000 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1002 = {
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

	var s_1003 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1004 = {
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
	var s_1005 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1006 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1007 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
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
	var s_1008 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1009 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1010 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1011 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1012 = {
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
	var s_1013 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1014 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1015 = {
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

	var s_1016 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1017 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1019 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
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
	var s_1020 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1021 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1022 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1023 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1024 = {
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
	var s_1025 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1026 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1027 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1029 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1031 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "David began lecturing on the motions of the stars to calm Bill down."],
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
	var s_1032 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1033 = {
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
	var s_1034 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1035 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1036 = {
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
	var s_1037 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1038 = {
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

	var s_1039 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1040 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1042 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1043 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_1044 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1045 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_1046 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1047 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1049 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1050 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1051 = {
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
	var s_1052 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1053 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1063 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1064 = {
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
	var s_1065 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1067 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJREACTS",
						"false_tonode": "SUBJREACTS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1068 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1069 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1071 = {
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
	var s_1072 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1073 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1074 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1075 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1076 = {
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
	var s_1077 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1078 = {
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
	var s_1079 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1080 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1081 = {
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
	var s_1082 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1083 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1084 = {
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
	var s_1085 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1086 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1087 = {
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

	var s_1088 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1089 = {
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
	var s_1090 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1091 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1092 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Bill just stared curiously at David's rebellion."],
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
	var s_1093 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1094 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David began lecturing on the motions of the stars to calm Bill down."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1095 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1096 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1097 = {
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
	var s_1098 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1099 = {
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
	var s_1100 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1101 = {
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

	var s_1102 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1103 = {
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
	var s_1104 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1105 = {
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
	var s_1106 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1107 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
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
	var s_1108 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1109 = {
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
	var s_1110 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1111 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_1112 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1113 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
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

	var betweenstory_87 = {
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
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1119 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
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
	var s_1120 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1121 = {
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
	var s_1122 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1123 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_1124 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1125 = {
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
	var s_1126 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1127 = {
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
	var s_1128 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1129 = {
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

	var s_1130 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1131 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1133 = {
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
	var s_1134 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1135 = {
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
	var s_1136 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1143 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1144 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1145 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!", "Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
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
	var s_1146 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1147 = {
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
	var s_1148 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1150 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Bill immediately chugged down three cups of moccachino."],
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
	var s_1151 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1152 = {
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
	var s_1153 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1154 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1155 = {
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

	var s_1156 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1157 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1159 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
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
	var s_1160 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1161 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
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
	var s_1162 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1163 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1164 = {
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
	var s_1165 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1166 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1167 = {
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

	var s_1168 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1169 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1170 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1171 = {
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
	var s_1172 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1173 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1174 = {
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
	var s_1175 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1176 = {
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
	var s_1177 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1178 = {
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
	var s_1179 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1180 = {
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

	var s_1181 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1182 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1183 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1184 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
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
	var s_1185 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1186 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1187 = {
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
	var s_1188 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1189 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1190 = {
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
	var s_1191 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1192 = {
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

	var s_1193 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1194 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
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
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1197 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1198 = {
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
	var s_1199 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1200 = {
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
	var s_1201 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1202 = {
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
	var s_1203 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1204 = {
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

	var s_1205 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1206 = {
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
	var s_1207 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1208 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1209 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1210 = {
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
	var s_1211 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1212 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately chugged down three cups of moccachino.", "Bill immediately chugged down three cups of moccachino."],
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
	var s_1213 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1214 = {
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
	var s_1215 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1216 = {
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
	var s_1217 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1218 = {
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

	var s_1219 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1220 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1221 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
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
	var s_1222 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1223 = {
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
	var s_1224 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1225 = {
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
			labels: ["Alice immediately chugged down three cups of moccachino.", "Bill immediately pulled out a straw and a collection of spitballs."],
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
	var s_1228 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1229 = {
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
	var s_1230 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1231 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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

	var betweenstory_96 = {
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
	var s_1234 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1235 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1236 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1237 = {
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
	var s_1240 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
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
						"fromnode": "SUBJFINALONE",
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
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_1244 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1246 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1247 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1248 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1249 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1250 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1251 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1252 = {
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
	var s_1253 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1254 = {
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
	var s_1255 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1256 = {
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

	var s_1257 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1258 = {
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
	var s_1259 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1260 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!", "Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
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
	var s_1261 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1262 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1263 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "David considered using those kong-fu skills to calm Bill down."],
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
	var s_1264 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1265 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1266 = {
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
	var s_1267 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1268 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1269 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1270 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1271 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Alice cut the line", "While in line, Alice clumsily sneezed on Claire's pinky finger."],
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
	var s_1272 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1273 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'.", "Claire was furious: she invented many words there and then."],
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
	var s_1274 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1275 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1276 = {
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
	var s_1277 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1278 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1279 = {
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
	var s_1280 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1281 = {
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
	var s_1282 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1283 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,q_3,s_4,s_5,q_6,s_7,q_8,s_9,q_10,s_11,q_12,s_13,s_14,betweenstory_1,s_15,s_16,s_17,q_18,s_19,q_20,s_21,q_22,s_23,q_24,s_25,s_26,s_27,betweenstory_2,s_28,q_29,s_30,s_31,q_32,s_33,s_34,q_35,s_36,q_37,s_38,q_39,s_40,s_41,betweenstory_3,s_42,q_43,s_44,s_45,q_46,s_47,q_48,s_49,q_50,s_51,s_52,s_53,s_54,betweenstory_4,s_55,q_56,s_57,s_58,q_59,s_60,q_61,s_62,q_63,s_64,q_65,s_66,q_67,s_68,s_69,betweenstory_5,s_70,q_71,s_72,s_73,s_74,q_75,s_76,q_77,s_78,q_79,s_80,q_81,s_82,s_83,betweenstory_6,s_84,s_85,s_86,q_87,s_88,s_89,q_90,s_91,q_92,s_93,q_94,s_95,s_96,betweenstory_7,s_97,q_98,s_99,s_100,q_101,s_102,s_103,s_104,s_105,s_106,s_107,betweenstory_8,s_108,s_109,s_110,s_111,s_112,s_113,s_114,q_115,s_116,s_117,betweenstory_9,s_118,q_119,s_120,s_121,q_122,s_123,q_124,s_125,q_126,s_127,s_128,q_129,s_130,s_131,betweenstory_10,s_132,s_133,s_134,q_135,s_136,q_137,s_138,s_139,q_140,s_141,q_142,s_143,s_144,betweenstory_11,s_145,q_146,s_147,s_148,q_149,s_150,s_151,q_152,s_153,q_154,s_155,s_156,s_157,betweenstory_12,s_158,s_159,s_160,s_161,s_162,q_163,s_164,s_165,q_166,s_167,s_168,betweenstory_13,s_169,s_170,s_171,s_172,q_173,s_174,q_175,s_176,s_177,s_178,s_179,betweenstory_14,s_180,s_181,s_182,q_183,s_184,q_185,s_186,s_187,q_188,s_189,s_190,s_191,betweenstory_15,s_192,q_193,s_194,s_195,q_196,s_197,q_198,s_199,s_200,q_201,s_202,s_203,s_204,betweenstory_16,s_205,s_206,s_207,q_208,s_209,s_210,q_211,s_212,q_213,s_214,s_215,s_216,betweenstory_17,s_217,s_218,s_219,q_220,s_221,q_222,s_223,s_224,q_225,s_226,s_227,s_228,betweenstory_18,s_229,s_230,q_231,s_232,q_233,s_234,s_235,q_236,s_237,q_238,s_239,s_240,s_241,betweenstory_19,s_242,s_243,s_244,s_245,q_246,s_247,s_248,q_249,s_250,q_251,s_252,s_253,betweenstory_20,s_254,s_255,s_256,s_257,s_258,q_259,s_260,s_261,q_262,s_263,s_264,betweenstory_21,s_265,s_266,s_267,q_268,s_269,s_270,s_271,s_272,s_273,s_274,betweenstory_22,s_275,q_276,s_277,s_278,q_279,s_280,q_281,s_282,q_283,s_284,q_285,s_286,s_287,s_288,betweenstory_23,s_289,q_290,s_291,q_292,s_293,q_294,s_295,q_296,s_297,q_298,s_299,q_300,s_301,q_302,s_303,s_304,betweenstory_24,s_305,s_306,s_307,q_308,s_309,s_310,q_311,s_312,q_313,s_314,s_315,s_316,betweenstory_25,s_317,q_318,s_319,s_320,q_321,s_322,q_323,s_324,q_325,s_326,q_327,s_328,q_329,s_330,s_331,betweenstory_26,s_332,q_333,s_334,s_335,q_336,s_337,q_338,s_339,q_340,s_341,q_342,s_343,q_344,s_345,s_346,betweenstory_27,s_347,s_348,s_349,q_350,s_351,q_352,s_353,s_354,q_355,s_356,s_357,s_358,betweenstory_28,s_359,s_360,s_361,q_362,s_363,q_364,s_365,q_366,s_367,s_368,q_369,s_370,s_371,betweenstory_29,s_372,s_373,s_374,s_375,q_376,s_377,q_378,s_379,q_380,s_381,s_382,s_383,betweenstory_30,s_384,q_385,s_386,s_387,q_388,s_389,q_390,s_391,q_392,s_393,s_394,q_395,s_396,s_397,betweenstory_31,s_398,s_399,s_400,q_401,s_402,s_403,q_404,s_405,q_406,s_407,q_408,s_409,s_410,betweenstory_32,s_411,s_412,s_413,q_414,s_415,s_416,q_417,s_418,q_419,s_420,q_421,s_422,s_423,betweenstory_33,s_424,s_425,s_426,s_427,q_428,s_429,s_430,q_431,s_432,q_433,s_434,s_435,betweenstory_34,s_436,q_437,s_438,s_439,s_440,q_441,s_442,q_443,s_444,q_445,s_446,s_447,s_448,betweenstory_35,s_449,q_450,s_451,q_452,s_453,q_454,s_455,q_456,s_457,q_458,s_459,q_460,s_461,s_462,s_463,betweenstory_36,s_464,q_465,s_466,s_467,q_468,s_469,q_470,s_471,q_472,s_473,s_474,s_475,s_476,betweenstory_37,s_477,q_478,s_479,s_480,q_481,s_482,s_483,q_484,s_485,s_486,q_487,s_488,s_489,betweenstory_38,s_490,q_491,s_492,s_493,q_494,s_495,s_496,q_497,s_498,q_499,s_500,s_501,s_502,betweenstory_39,s_503,s_504,s_505,q_506,s_507,q_508,s_509,q_510,s_511,q_512,s_513,s_514,s_515,betweenstory_40,s_516,q_517,s_518,s_519,q_520,s_521,q_522,s_523,s_524,q_525,s_526,q_527,s_528,s_529,betweenstory_41,s_530,q_531,s_532,q_533,s_534,q_535,s_536,q_537,s_538,s_539,s_540,s_541,s_542,betweenstory_42,s_543,q_544,s_545,s_546,q_547,s_548,q_549,s_550,s_551,q_552,s_553,q_554,s_555,s_556,betweenstory_43,s_557,s_558,q_559,s_560,q_561,s_562,q_563,s_564,q_565,s_566,q_567,s_568,q_569,s_570,s_571,betweenstory_44,s_572,q_573,s_574,s_575,s_576,q_577,s_578,q_579,s_580,s_581,q_582,s_583,s_584,betweenstory_45,s_585,s_586,s_587,q_588,s_589,q_590,s_591,q_592,s_593,s_594,q_595,s_596,s_597,betweenstory_46,s_598,q_599,s_600,q_601,s_602,s_603,s_604,q_605,s_606,s_607,q_608,s_609,s_610,betweenstory_47,s_611,q_612,s_613,q_614,s_615,s_616,q_617,s_618,q_619,s_620,q_621,s_622,q_623,s_624,s_625,betweenstory_48,s_626,s_627,q_628,s_629,q_630,s_631,q_632,s_633,q_634,s_635,q_636,s_637,q_638,s_639,s_640,betweenstory_49,s_641,q_642,s_643,s_644,s_645,q_646,s_647,s_648,q_649,s_650,s_651,s_652,betweenstory_50,s_653,q_654,s_655,s_656,s_657,q_658,s_659,q_660,s_661,q_662,s_663,q_664,s_665,s_666,betweenstory_51,s_667,s_668,s_669,s_670,q_671,s_672,q_673,s_674,q_675,s_676,q_677,s_678,s_679,betweenstory_52,s_680,q_681,s_682,s_683,s_684,q_685,s_686,q_687,s_688,q_689,s_690,q_691,s_692,s_693,betweenstory_53,s_694,s_695,s_696,s_697,s_698,s_699,q_700,s_701,s_702,s_703,betweenstory_54,s_704,q_705,s_706,s_707,q_708,s_709,s_710,q_711,s_712,q_713,s_714,q_715,s_716,s_717,betweenstory_55,s_718,q_719,s_720,s_721,q_722,s_723,q_724,s_725,q_726,s_727,s_728,s_729,s_730,betweenstory_56,s_731,s_732,s_733,s_734,s_735,s_736,q_737,s_738,q_739,s_740,s_741,betweenstory_57,s_742,s_743,q_744,s_745,q_746,s_747,s_748,s_749,q_750,s_751,q_752,s_753,s_754,betweenstory_58,s_755,s_756,s_757,s_758,s_759,q_760,s_761,s_762,q_763,s_764,s_765,betweenstory_59,s_766,s_767,s_768,q_769,s_770,q_771,s_772,q_773,s_774,s_775,q_776,s_777,s_778,betweenstory_60,s_779,q_780,s_781,s_782,q_783,s_784,q_785,s_786,q_787,s_788,s_789,q_790,s_791,s_792,betweenstory_61,s_793,s_794,s_795,q_796,s_797,q_798,s_799,q_800,s_801,s_802,s_803,s_804,betweenstory_62,s_805,q_806,s_807,s_808,q_809,s_810,q_811,s_812,q_813,s_814,q_815,s_816,s_817,s_818,betweenstory_63,s_819,s_820,s_821,s_822,q_823,s_824,q_825,s_826,s_827,q_828,s_829,s_830,betweenstory_64,s_831,s_832,s_833,q_834,s_835,q_836,s_837,q_838,s_839,s_840,q_841,s_842,s_843,betweenstory_65,s_844,s_845,s_846,q_847,s_848,q_849,s_850,q_851,s_852,q_853,s_854,q_855,s_856,s_857,betweenstory_66,s_858,q_859,s_860,s_861,s_862,s_863,s_864,q_865,s_866,s_867,s_868,betweenstory_67,s_869,s_870,s_871,s_872,s_873,q_874,s_875,s_876,q_877,s_878,s_879,betweenstory_68,s_880,s_881,s_882,s_883,s_884,q_885,s_886,q_887,s_888,q_889,s_890,s_891,betweenstory_69,s_892,q_893,s_894,s_895,q_896,s_897,s_898,q_899,s_900,s_901,q_902,s_903,s_904,betweenstory_70,s_905,q_906,s_907,s_908,s_909,s_910,q_911,s_912,s_913,s_914,s_915,betweenstory_71,s_916,s_917,s_918,q_919,s_920,s_921,s_922,q_923,s_924,q_925,s_926,s_927,betweenstory_72,s_928,q_929,s_930,s_931,q_932,s_933,s_934,q_935,s_936,s_937,q_938,s_939,s_940,betweenstory_73,s_941,q_942,s_943,s_944,q_945,s_946,s_947,q_948,s_949,s_950,q_951,s_952,s_953,betweenstory_74,s_954,s_955,s_956,q_957,s_958,q_959,s_960,q_961,s_962,q_963,s_964,q_965,s_966,s_967,betweenstory_75,s_968,q_969,s_970,s_971,s_972,q_973,s_974,q_975,s_976,s_977,s_978,s_979,betweenstory_76,s_980,q_981,s_982,s_983,q_984,s_985,q_986,s_987,q_988,s_989,s_990,s_991,s_992,betweenstory_77,s_993,s_994,s_995,s_996,q_997,s_998,s_999,s_1000,s_1001,s_1002,betweenstory_78,s_1003,q_1004,s_1005,s_1006,q_1007,s_1008,q_1009,s_1010,s_1011,q_1012,s_1013,s_1014,s_1015,betweenstory_79,s_1016,s_1017,s_1018,q_1019,s_1020,s_1021,s_1022,s_1023,q_1024,s_1025,s_1026,betweenstory_80,s_1027,s_1028,s_1029,s_1030,q_1031,s_1032,q_1033,s_1034,s_1035,q_1036,s_1037,s_1038,betweenstory_81,s_1039,s_1040,s_1041,s_1042,q_1043,s_1044,q_1045,s_1046,s_1047,s_1048,s_1049,betweenstory_82,s_1050,q_1051,s_1052,s_1053,s_1054,s_1055,q_1056,s_1057,q_1058,s_1059,q_1060,s_1061,s_1062,betweenstory_83,s_1063,q_1064,s_1065,s_1066,q_1067,s_1068,s_1069,s_1070,q_1071,s_1072,s_1073,s_1074,betweenstory_84,s_1075,q_1076,s_1077,q_1078,s_1079,s_1080,q_1081,s_1082,s_1083,q_1084,s_1085,s_1086,s_1087,betweenstory_85,s_1088,q_1089,s_1090,s_1091,q_1092,s_1093,q_1094,s_1095,s_1096,q_1097,s_1098,q_1099,s_1100,s_1101,betweenstory_86,s_1102,q_1103,s_1104,q_1105,s_1106,q_1107,s_1108,q_1109,s_1110,q_1111,s_1112,s_1113,s_1114,s_1115,betweenstory_87,s_1116,s_1117,s_1118,q_1119,s_1120,q_1121,s_1122,q_1123,s_1124,q_1125,s_1126,q_1127,s_1128,s_1129,betweenstory_88,s_1130,s_1131,s_1132,q_1133,s_1134,q_1135,s_1136,s_1137,q_1138,s_1139,q_1140,s_1141,s_1142,betweenstory_89,s_1143,s_1144,q_1145,s_1146,q_1147,s_1148,s_1149,q_1150,s_1151,q_1152,s_1153,s_1154,s_1155,betweenstory_90,s_1156,s_1157,s_1158,q_1159,s_1160,q_1161,s_1162,s_1163,q_1164,s_1165,s_1166,s_1167,betweenstory_91,s_1168,s_1169,s_1170,q_1171,s_1172,s_1173,q_1174,s_1175,q_1176,s_1177,q_1178,s_1179,s_1180,betweenstory_92,s_1181,s_1182,s_1183,q_1184,s_1185,s_1186,q_1187,s_1188,s_1189,q_1190,s_1191,s_1192,betweenstory_93,s_1193,s_1194,s_1195,s_1196,s_1197,q_1198,s_1199,q_1200,s_1201,q_1202,s_1203,s_1204,betweenstory_94,s_1205,q_1206,s_1207,s_1208,s_1209,q_1210,s_1211,q_1212,s_1213,q_1214,s_1215,q_1216,s_1217,s_1218,betweenstory_95,s_1219,s_1220,q_1221,s_1222,q_1223,s_1224,q_1225,s_1226,q_1227,s_1228,q_1229,s_1230,s_1231,s_1232,betweenstory_96,s_1233,s_1234,s_1235,s_1236,q_1237,s_1238,q_1239,s_1240,q_1241,s_1242,q_1243,s_1244,s_1245,betweenstory_97,s_1246,s_1247,s_1248,s_1249,s_1250,s_1251,q_1252,s_1253,q_1254,s_1255,s_1256,betweenstory_98,s_1257,q_1258,s_1259,q_1260,s_1261,s_1262,q_1263,s_1264,s_1265,q_1266,s_1267,s_1268,s_1269,betweenstory_99,s_1270,q_1271,s_1272,q_1273,s_1274,s_1275,q_1276,s_1277,s_1278,q_1279,s_1280,q_1281,s_1282,s_1283,betweenstory_100,],

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