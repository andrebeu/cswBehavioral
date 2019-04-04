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
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_4 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Alice just stared, fascinated by Claire's display."],
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
	var s_9 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
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
						"fromnode": "SUBJFINALTWO",
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
	var s_12 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_13 = {
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

	var s_14 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_15 = {
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
	var s_16 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_21 = {
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
	var s_22 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_24 = {
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

	var s_25 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_26 = {
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
	var s_27 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_29 = {
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
	var s_30 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_32 = {
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
	var s_33 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_36 = {
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

	var s_37 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_38 = {
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
	var s_39 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_41 = {
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
	var s_42 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_44 = {
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
	var s_45 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_48 = {
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

	var s_49 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_53 = {
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
	var s_54 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_55 = {
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
	var s_56 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_57 = {
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
	var s_58 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_60 = {
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

	var s_61 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_62 = {
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
	var s_63 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_66 = {
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
	var s_67 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_68 = {
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
	var s_69 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_70 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_71 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice ran out yelling 'Juice is better, anyway!'", "Bill ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_72 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_74 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_77 = {
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
	var s_78 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_79 = {
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
	var s_80 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_82 = {
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
	var s_83 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_85 = {
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

	var s_86 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_88 = {
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
	var s_89 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_91 = {
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
	var s_92 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_94 = {
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
	var s_95 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_96 = {
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
	var s_97 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_98 = {
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

	var s_99 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
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
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_105 = {
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
	var s_106 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_107 = {
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
	var s_108 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_109 = {
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

	var s_110 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_113 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_114 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_115 = {
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
	var s_116 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_119 = {
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
	var s_120 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_121 = {
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

	var s_122 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_123 = {
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
	var s_124 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_127 = {
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
	var s_128 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_129 = {
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
	var s_130 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_133 = {
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

	var s_134 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_137 = {
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
	var s_138 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
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

	var betweenstory_12 = {
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
	var s_147 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_150 = {
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
	var s_151 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_153 = {
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
	var s_154 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_156 = {
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

	var s_157 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_158 = {
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
	var s_159 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
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
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_162 = {
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
	var s_163 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_164 = {
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
	var s_165 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_166 = {
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
	var s_167 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_169 = {
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

	var s_170 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_171 = {
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
	var s_172 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_176 = {
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
	var s_177 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_180 = {
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

	var s_181 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_182 = {
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
	var s_183 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_185 = {
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
	var s_186 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_187 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "David began lecturing on the motions of the stars to calm Bill down."],
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
	var s_188 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_189 = {
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
	var s_190 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_191 = {
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
	var s_192 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_193 = {
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
	var s_194 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_195 = {
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

	var s_196 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_197 = {
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
	var s_198 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_201 = {
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
	var s_202 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_203 = {
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
	var s_204 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_206 = {
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
	var s_207 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_208 = {
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

	var s_209 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
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
		var q_212 = {
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
	var s_213 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_214 = {
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
	var s_215 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_216 = {
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
	var s_217 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_218 = {
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
	var s_219 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_220 = {
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
	var s_221 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_222 = {
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

	var s_223 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_224 = {
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
	var s_225 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_228 = {
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
	var s_229 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_230 = {
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
	var s_231 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_232 = {
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
	var s_233 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_234 = {
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
	var s_235 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_236 = {
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

	var s_237 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_238 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_240 = {
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
	var s_241 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_242 = {
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
	var s_243 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_245 = {
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
	var s_246 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_247 = {
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
	var s_248 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_251 = {
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
	var s_252 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_254 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_255 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_260 = {
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

	var s_261 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_262 = {
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
	var s_263 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_265 = {
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
	var s_266 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_267 = {
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
	var s_268 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_271 = {
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
	var s_272 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_273 = {
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

	var s_274 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_275 = {
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
	var s_276 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_283 = {
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

	var s_284 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_285 = {
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
	var s_286 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_288 = {
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
	var s_289 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_291 = {
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
	var s_292 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_293 = {
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
	var s_294 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_295 = {
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
	var s_296 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_297 = {
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

	var s_298 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_301 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared curiously at Claire's rebellion."],
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
	var s_302 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_303 = {
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
	var s_304 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_306 = {
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
	var s_307 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_309 = {
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

	var s_310 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_314 = {
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
	var s_315 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_318 = {
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
	var s_319 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_320 = {
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

	var s_321 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_324 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_325 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_326 = {
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
	var s_327 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_328 = {
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
	var s_329 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_333 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_336 = {
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
	var s_337 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_338 = {
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
	var s_339 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_341 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_343 = {
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

	var s_344 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_345 = {
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
	var s_346 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_353 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_355 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_359 = {
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
	var s_360 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_361 = {
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
	var s_362 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_363 = {
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
	var s_364 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_365 = {
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
	var s_366 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_368 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_371 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
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
	var s_372 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_373 = {
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
	var s_374 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_375 = {
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
	var s_376 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_377 = {
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
	var s_378 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_380 = {
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

	var s_381 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_384 = {
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
	var s_385 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_386 = {
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
	var s_387 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_390 = {
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
	var s_391 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_392 = {
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

	var s_393 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_394 = {
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
	var s_395 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_398 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "Claire was appalled! 'Really? is that all you can muster?.'"],
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
	var s_399 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
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

	var betweenstory_33 = {
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
	var s_406 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_408 = {
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
	var s_409 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_410 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "Claire was appalled! 'Really? is that all you can muster?.'"],
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
	var s_411 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_414 = {
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
	var s_415 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_416 = {
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

	var s_417 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_420 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_421 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_426 = {
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

	var s_427 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_428 = {
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
	var s_429 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_432 = {
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
	var s_433 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_434 = {
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
	var s_435 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_438 = {
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

	var s_439 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_440 = {
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
	var s_441 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_443 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Bill just stared, fascinated by David's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_444 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_446 = {
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
	var s_447 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_448 = {
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
	var s_449 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_450 = {
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
	var s_451 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_452 = {
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

	var s_453 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_454 = {
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
	var s_455 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_458 = {
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
	var s_459 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
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

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_464 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_465 = {
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
	var s_466 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_468 = {
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
	var s_469 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_471 = {
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
	var s_472 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_473 = {
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
	var s_474 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_475 = {
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
	var s_476 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_477 = {
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

	var s_478 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_479 = {
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
	var s_480 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_483 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_484 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_486 = {
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
	var s_487 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_489 = {
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
	var s_492 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_494 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_495 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_496 = {
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
	var s_497 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_498 = {
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
	var s_499 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_500 = {
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
	var s_501 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_502 = {
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
	var s_503 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_504 = {
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

	var s_505 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_508 = {
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
	var s_509 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_510 = {
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
	var s_511 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_512 = {
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
	var s_513 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_514 = {
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
	var s_515 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_516 = {
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
	var s_517 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_518 = {
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

	var s_519 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_523 = {
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
	var s_524 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_530 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_533 = {
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
	var s_534 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_535 = {
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
	var s_536 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_537 = {
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
	var s_538 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_540 = {
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
	var s_541 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
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

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_543 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_544 = {
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
	var s_545 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_546 = {
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
	var s_547 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_548 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Alice just stared curiously at Claire's rebellion."],
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
	var s_549 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_550 = {
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
	var s_551 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_552 = {
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
	var s_553 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_554 = {
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
	var s_555 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_556 = {
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
	var s_557 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_558 = {
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

	var s_559 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_560 = {
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
	var s_561 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_563 = {
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
	var s_564 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_567 = {
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
	var s_568 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_570 = {
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

	var s_571 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_574 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
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
	var s_575 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_576 = {
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
	var s_577 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_578 = {
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
	var s_579 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_580 = {
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
	var s_581 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_583 = {
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

	var s_584 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_588 = {
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
	var s_589 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
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
		var q_591 = {
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
	var s_592 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
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

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_595 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_596 = {
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
	var s_597 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_600 = {
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
	var s_601 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_602 = {
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
	var s_603 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_606 = {
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

	var s_607 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_608 = {
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
	var s_609 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_611 = {
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
	var s_612 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_613 = {
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
	var s_614 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_615 = {
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
	var s_616 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_618 = {
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
	var s_619 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_620 = {
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

	var s_621 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_622 = {
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
	var s_623 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_626 = {
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
	var s_627 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_628 = {
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
	var s_629 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_630 = {
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
	var s_631 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_632 = {
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
	var s_633 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_634 = {
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

	var s_635 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_636 = {
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
	var s_637 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_639 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_640 = {
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
	var s_641 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_642 = {
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
	var s_643 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_645 = {
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
	var s_646 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_647 = {
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

	var s_648 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_649 = {
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
	var s_650 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_652 = {
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
	var s_653 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_654 = {
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
	var s_655 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_658 = {
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
	var s_659 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_660 = {
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

	var s_661 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_664 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Unanounced, Bill began running around David until David realized things were Real and True."],
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
	var s_665 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_667 = {
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
	var s_668 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_669 = {
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
	var s_670 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_671 = {
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
	var s_672 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_673 = {
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

	var s_674 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_675 = {
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
	var s_676 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_678 = {
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
	var s_679 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_681 = {
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
	var s_682 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_684 = {
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
	var s_685 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_686 = {
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

	var s_687 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_688 = {
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
	var s_689 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_691 = {
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
	var s_692 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_694 = {
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
	var s_695 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_697 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Alice walked out, muttering something left unheard.", "Calmly Bill walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_698 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_699 = {
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

	var s_700 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_704 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_705 = {
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
	var s_706 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_707 = {
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
	var s_708 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_709 = {
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
	var s_710 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_711 = {
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

	var s_712 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_713 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_715 = {
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
	var s_716 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_717 = {
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
	var s_718 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_721 = {
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
	var s_722 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_723 = {
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

	var s_724 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_725 = {
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
	var s_726 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_728 = {
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
	var s_729 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_730 = {
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
	var s_731 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
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
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_734 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
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
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_738 = {
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
	var s_739 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_741 = {
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
	var s_742 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_743 = {
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
	var s_744 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_745 = {
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
	var s_746 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_747 = {
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
	var s_748 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_749 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_750 = {
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

	var s_751 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_752 = {
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
	var s_753 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_755 = {
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
	var s_756 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_757 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_758 = {
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
	var s_759 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_760 = {
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
	var s_761 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_762 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_763 = {
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

	var s_764 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_765 = {
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
	var s_766 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_768 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_769 = {
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
	var s_770 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_771 = {
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
	var s_772 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_773 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_774 = {
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
	var s_775 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_776 = {
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

	var s_777 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_778 = {
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
	var s_779 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_781 = {
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
	var s_782 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_783 = {
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
	var s_784 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_785 = {
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
	var s_786 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_787 = {
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
	var s_788 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_789 = {
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
	var s_790 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_791 = {
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

	var s_792 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_793 = {
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
	var s_794 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_795 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_796 = {
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
	var s_797 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_798 = {
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
	var s_799 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_800 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_801 = {
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
	var s_802 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_803 = {
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
	var s_804 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_805 = {
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

	var s_806 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_808 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_809 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_810 = {
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
	var s_811 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_812 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_813 = {
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
	var s_814 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_815 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_816 = {
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

	var s_817 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_818 = {
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
	var s_819 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_821 = {
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
	var s_822 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_823 = {
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
	var s_824 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_825 = {
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
	var s_826 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_828 = {
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
	var s_829 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_830 = {
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

	var s_831 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_832 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_833 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_834 = {
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
	var s_835 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_836 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_838 = {
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
	var s_839 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_840 = {
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
	var s_841 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_842 = {
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

	var s_843 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_844 = {
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
	var s_845 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_846 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_847 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_848 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_849 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_850 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_851 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_852 = {
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
	var s_853 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_854 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_855 = {
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

	var s_856 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_857 = {
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
	var s_858 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_859 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_860 = {
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
	var s_861 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_862 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_863 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Alice was completely still, when suddenly she pulled out the violin."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "SUBJFINALTWO",
						"false_tonode": "SUBJFINALTWO",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_864 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_865 = {
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
	var s_866 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_867 = {
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
	var s_868 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_869 = {
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

	var s_870 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_871 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_872 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_873 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_874 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_875 = {
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
	var s_876 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_877 = {
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
	var s_878 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_879 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_880 = {
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
	var s_881 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_882 = {
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

	var s_883 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_884 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_885 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_886 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
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
	var s_887 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_888 = {
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
	var s_889 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_890 = {
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
	var s_891 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_892 = {
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
	var s_893 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_894 = {
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
	var s_895 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_896 = {
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

	var s_897 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_898 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_899 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_900 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_901 = {
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
	var s_902 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_903 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_904 = {
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
	var s_905 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_906 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_907 = {
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

	var s_908 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_909 = {
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
	var s_910 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_911 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_912 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Bill just stared curiously at David's rebellion."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_913 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_914 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_915 = {
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
	var s_916 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_917 = {
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
	var s_918 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_919 = {
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
	var s_920 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_921 = {
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

	var s_922 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_923 = {
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
	var s_924 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_925 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_926 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_927 = {
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
	var s_928 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_929 = {
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
	var s_930 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_931 = {
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
	var s_932 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_933 = {
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
	var s_934 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_935 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_936 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_937 = {
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
	var s_938 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_939 = {
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
	var s_940 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_941 = {
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
	var s_942 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_943 = {
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
	var s_944 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_945 = {
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
	var s_946 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_947 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_949 = {
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

	var s_950 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_951 = {
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
	var s_952 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_954 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_955 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_956 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_957 = {
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
	var s_958 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_959 = {
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
	var s_960 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_961 = {
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
	var s_962 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_963 = {
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

	var s_964 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_966 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_968 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire was appalled! 'Really? is that all you can muster?.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJREACTS",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_969 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_970 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she pulled out the violin.", "Alice immediately pulled out a straw and a collection of spitballs."],
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
	var s_971 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_973 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_974 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_975 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_976 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_978 = {
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
	var s_979 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_980 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David was appalled! 'Really? is that all you can muster?.'"],
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
	var s_981 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_982 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_983 = {
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
	var s_984 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
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
		pages: ["One afternoon, Alice walked into the book store."],
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
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_990 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Alice just stared, fascinated by Claire's display."],
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
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_993 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_994 = {
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
	var s_995 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_996 = {
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
	var s_997 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_998 = {
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

	var s_999 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1000 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1002 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_1003 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1004 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1005 = {
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
	var s_1006 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1007 = {
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
	var s_1008 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1009 = {
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
	var s_1010 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1011 = {
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

	var s_1012 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1013 = {
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
	var s_1014 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1015 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1016 = {
		type: 'instructions',
		pages: ["Alice just stared, fascinated by Claire's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1017 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_1018 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1019 = {
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
	var s_1020 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1021 = {
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
	var s_1022 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1023 = {
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
	var s_1024 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1025 = {
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

	var s_1026 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1027 = {
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
	var s_1028 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1029 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1030 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_1031 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1032 = {
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
	var s_1033 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1034 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1035 = {
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
	var s_1036 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1037 = {
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
	var s_1038 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1039 = {
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

	var s_1040 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1042 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1043 = {
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
	var s_1044 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1045 = {
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
	var s_1046 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1047 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1048 = {
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
	var s_1049 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1050 = {
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
	var s_1051 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1052 = {
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

	var s_1053 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1055 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1056 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1057 = {
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
	var s_1058 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1059 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately pulled out a straw and a collection of spitballs."],
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
	var s_1060 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1061 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1062 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1063 = {
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

	var s_1064 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1065 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1066 = {
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
	var s_1067 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1068 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_1069 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1070 = {
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
	var s_1071 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1072 = {
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
	var s_1073 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1074 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1076 = {
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

	var s_1077 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1078 = {
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
	var s_1079 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1080 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1081 = {
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
	var s_1082 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1083 = {
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
	var s_1084 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1085 = {
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
	var s_1086 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1087 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1088 = {
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
	var s_1089 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1090 = {
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

	var s_1091 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1092 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1094 = {
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
	var s_1095 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1096 = {
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
	var s_1097 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1098 = {
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
	var s_1099 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1100 = {
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
	var s_1101 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1102 = {
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
	var s_1103 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1104 = {
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

	var s_1105 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1106 = {
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
	var s_1107 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1108 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1109 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1110 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1111 = {
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
	var s_1112 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1113 = {
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
	var s_1114 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1115 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1116 = {
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

	var s_1117 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1119 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1120 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1121 = {
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
	var s_1122 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1123 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Bill was completely still, when suddenly he pulled out the violin."],
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
	var s_1124 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1125 = {
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
	var s_1126 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1127 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1128 = {
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

	var s_1129 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1130 = {
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
	var s_1131 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1132 = {
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
	var s_1133 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1134 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1136 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1137 = {
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
	var s_1138 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1139 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1140 = {
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

	var s_1141 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1142 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Inspired by the afternoon's heat, Bill cut the line", "While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
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
	var s_1143 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1144 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1145 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared curiously at David's rebellion.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
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
	var s_1146 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1147 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1148 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1150 = {
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
	var s_1151 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1152 = {
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

	var s_1153 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1154 = {
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
	var s_1155 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1156 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1157 = {
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
	var s_1158 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1159 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1160 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1161 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1163 = {
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

	var s_1164 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1165 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1166 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1167 = {
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
	var s_1168 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1169 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1170 = {
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
	var s_1171 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1172 = {
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
	var s_1173 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1174 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1175 = {
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

	var s_1176 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1177 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1178 = {
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
	var s_1179 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1181 = {
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
	var s_1182 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1183 = {
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
	var s_1184 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1185 = {
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
	var s_1186 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1187 = {
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
	var s_1188 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1189 = {
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

	var s_1190 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1191 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1192 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1193 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1194 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1195 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1196 = {
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
	var s_1197 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1198 = {
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
	var s_1199 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1200 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1201 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1202 = {
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
	var s_1203 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1204 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1205 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared curiously at Claire's rebellion.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_1206 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1207 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1208 = {
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
	var s_1209 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1210 = {
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
	var s_1211 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1212 = {
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
	var s_1213 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1214 = {
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

	var s_1215 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1216 = {
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
	var s_1217 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
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
	var s_1220 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1221 = {
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
	var s_1222 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1223 = {
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
	var s_1224 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1225 = {
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
	var s_1226 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1227 = {
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
	var s_1228 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1229 = {
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

	var s_1230 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1231 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1232 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1233 = {
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
	var s_1234 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1235 = {
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
	var s_1236 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1238 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1239 = {
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
	var s_1240 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1241 = {
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

	var s_1242 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1243 = {
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
	var s_1244 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1245 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1246 = {
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
	var s_1247 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1248 = {
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
	var s_1249 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1250 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1251 = {
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
	var s_1252 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1253 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1254 = {
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

	var s_1255 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1256 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1257 = {
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
	var s_1258 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1259 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
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
	var s_1260 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1261 = {
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
	var s_1262 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1263 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Bill immediately pulled out a straw and a collection of spitballs."],
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
	var s_1264 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1265 = {
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
	var s_1266 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1267 = {
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
	var s_1268 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1269 = {
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,s_3,q_4,s_5,q_6,s_7,q_8,s_9,q_10,s_11,s_12,s_13,betweenstory_1,s_14,q_15,s_16,s_17,s_18,s_19,s_20,q_21,s_22,s_23,s_24,betweenstory_2,s_25,q_26,s_27,s_28,q_29,s_30,s_31,q_32,s_33,s_34,s_35,s_36,betweenstory_3,s_37,q_38,s_39,s_40,q_41,s_42,s_43,q_44,s_45,s_46,s_47,s_48,betweenstory_4,s_49,s_50,s_51,s_52,q_53,s_54,q_55,s_56,q_57,s_58,s_59,s_60,betweenstory_5,s_61,q_62,s_63,s_64,s_65,q_66,s_67,q_68,s_69,s_70,q_71,s_72,s_73,betweenstory_6,s_74,s_75,s_76,q_77,s_78,q_79,s_80,s_81,q_82,s_83,s_84,s_85,betweenstory_7,s_86,s_87,q_88,s_89,s_90,q_91,s_92,s_93,q_94,s_95,q_96,s_97,s_98,betweenstory_8,s_99,s_100,s_101,s_102,s_103,s_104,q_105,s_106,q_107,s_108,s_109,betweenstory_9,s_110,s_111,s_112,q_113,s_114,q_115,s_116,s_117,s_118,q_119,s_120,s_121,betweenstory_10,s_122,q_123,s_124,s_125,s_126,q_127,s_128,q_129,s_130,s_131,s_132,s_133,betweenstory_11,s_134,s_135,s_136,q_137,s_138,s_139,s_140,s_141,q_142,s_143,s_144,betweenstory_12,s_145,q_146,s_147,s_148,s_149,q_150,s_151,s_152,q_153,s_154,s_155,s_156,betweenstory_13,s_157,q_158,s_159,s_160,s_161,q_162,s_163,q_164,s_165,q_166,s_167,s_168,s_169,betweenstory_14,s_170,q_171,s_172,s_173,s_174,s_175,q_176,s_177,s_178,s_179,s_180,betweenstory_15,s_181,q_182,s_183,s_184,q_185,s_186,q_187,s_188,q_189,s_190,q_191,s_192,q_193,s_194,s_195,betweenstory_16,s_196,q_197,s_198,s_199,s_200,q_201,s_202,q_203,s_204,s_205,q_206,s_207,s_208,betweenstory_17,s_209,s_210,s_211,q_212,s_213,q_214,s_215,q_216,s_217,q_218,s_219,q_220,s_221,s_222,betweenstory_18,s_223,q_224,s_225,s_226,s_227,q_228,s_229,q_230,s_231,q_232,s_233,q_234,s_235,s_236,betweenstory_19,s_237,s_238,s_239,q_240,s_241,q_242,s_243,s_244,q_245,s_246,q_247,s_248,s_249,betweenstory_20,s_250,q_251,s_252,s_253,q_254,s_255,s_256,s_257,s_258,s_259,s_260,betweenstory_21,s_261,q_262,s_263,s_264,q_265,s_266,q_267,s_268,s_269,s_270,q_271,s_272,s_273,betweenstory_22,s_274,q_275,s_276,s_277,s_278,s_279,s_280,s_281,s_282,s_283,betweenstory_23,s_284,q_285,s_286,s_287,q_288,s_289,s_290,q_291,s_292,q_293,s_294,q_295,s_296,s_297,betweenstory_24,s_298,s_299,s_300,q_301,s_302,q_303,s_304,s_305,q_306,s_307,s_308,s_309,betweenstory_25,s_310,s_311,s_312,s_313,q_314,s_315,s_316,s_317,q_318,s_319,s_320,betweenstory_26,s_321,s_322,s_323,q_324,s_325,q_326,s_327,q_328,s_329,s_330,s_331,s_332,betweenstory_27,s_333,s_334,s_335,q_336,s_337,q_338,s_339,s_340,s_341,s_342,s_343,betweenstory_28,s_344,q_345,s_346,s_347,s_348,s_349,s_350,s_351,q_352,s_353,s_354,betweenstory_29,s_355,s_356,s_357,s_358,q_359,s_360,q_361,s_362,q_363,s_364,q_365,s_366,s_367,betweenstory_30,s_368,s_369,s_370,q_371,s_372,q_373,s_374,q_375,s_376,q_377,s_378,s_379,s_380,betweenstory_31,s_381,s_382,s_383,q_384,s_385,q_386,s_387,s_388,s_389,q_390,s_391,s_392,betweenstory_32,s_393,q_394,s_395,s_396,s_397,q_398,s_399,s_400,s_401,s_402,s_403,betweenstory_33,s_404,q_405,s_406,s_407,q_408,s_409,q_410,s_411,s_412,s_413,q_414,s_415,s_416,betweenstory_34,s_417,s_418,s_419,q_420,s_421,s_422,s_423,s_424,s_425,s_426,betweenstory_35,s_427,q_428,s_429,s_430,s_431,q_432,s_433,q_434,s_435,s_436,s_437,s_438,betweenstory_36,s_439,q_440,s_441,s_442,q_443,s_444,s_445,q_446,s_447,q_448,s_449,q_450,s_451,s_452,betweenstory_37,s_453,q_454,s_455,s_456,s_457,q_458,s_459,s_460,s_461,s_462,s_463,betweenstory_38,s_464,q_465,s_466,s_467,q_468,s_469,s_470,q_471,s_472,q_473,s_474,q_475,s_476,s_477,betweenstory_39,s_478,q_479,s_480,s_481,s_482,q_483,s_484,s_485,q_486,s_487,s_488,s_489,betweenstory_40,s_490,q_491,s_492,s_493,q_494,s_495,q_496,s_497,q_498,s_499,q_500,s_501,q_502,s_503,s_504,betweenstory_41,s_505,s_506,s_507,q_508,s_509,q_510,s_511,q_512,s_513,q_514,s_515,q_516,s_517,s_518,betweenstory_42,s_519,s_520,s_521,s_522,q_523,s_524,s_525,s_526,q_527,s_528,s_529,betweenstory_43,s_530,s_531,s_532,q_533,s_534,q_535,s_536,q_537,s_538,s_539,q_540,s_541,s_542,betweenstory_44,s_543,q_544,s_545,q_546,s_547,q_548,s_549,q_550,s_551,q_552,s_553,q_554,s_555,q_556,s_557,s_558,betweenstory_45,s_559,q_560,s_561,s_562,q_563,s_564,s_565,s_566,q_567,s_568,s_569,s_570,betweenstory_46,s_571,s_572,s_573,q_574,s_575,q_576,s_577,q_578,s_579,q_580,s_581,s_582,s_583,betweenstory_47,s_584,s_585,s_586,s_587,q_588,s_589,s_590,q_591,s_592,s_593,s_594,betweenstory_48,s_595,q_596,s_597,s_598,s_599,q_600,s_601,q_602,s_603,s_604,s_605,s_606,betweenstory_49,s_607,q_608,s_609,s_610,q_611,s_612,q_613,s_614,q_615,s_616,s_617,q_618,s_619,s_620,betweenstory_50,s_621,q_622,s_623,s_624,s_625,q_626,s_627,q_628,s_629,q_630,s_631,q_632,s_633,s_634,betweenstory_51,s_635,q_636,s_637,s_638,s_639,q_640,s_641,q_642,s_643,s_644,q_645,s_646,s_647,betweenstory_52,s_648,q_649,s_650,s_651,q_652,s_653,q_654,s_655,s_656,s_657,q_658,s_659,s_660,betweenstory_53,s_661,s_662,s_663,q_664,s_665,s_666,q_667,s_668,q_669,s_670,q_671,s_672,s_673,betweenstory_54,s_674,q_675,s_676,s_677,q_678,s_679,s_680,q_681,s_682,s_683,q_684,s_685,s_686,betweenstory_55,s_687,q_688,s_689,s_690,q_691,s_692,s_693,q_694,s_695,s_696,q_697,s_698,s_699,betweenstory_56,s_700,s_701,s_702,s_703,s_704,q_705,s_706,q_707,s_708,q_709,s_710,s_711,betweenstory_57,s_712,s_713,s_714,q_715,s_716,q_717,s_718,s_719,s_720,q_721,s_722,s_723,betweenstory_58,s_724,q_725,s_726,s_727,q_728,s_729,q_730,s_731,s_732,q_733,s_734,s_735,s_736,betweenstory_59,s_737,q_738,s_739,s_740,q_741,s_742,q_743,s_744,q_745,s_746,q_747,s_748,s_749,s_750,betweenstory_60,s_751,q_752,s_753,s_754,q_755,s_756,s_757,q_758,s_759,q_760,s_761,s_762,s_763,betweenstory_61,s_764,q_765,s_766,s_767,s_768,q_769,s_770,q_771,s_772,s_773,q_774,s_775,s_776,betweenstory_62,s_777,q_778,s_779,s_780,q_781,s_782,q_783,s_784,q_785,s_786,q_787,s_788,q_789,s_790,s_791,betweenstory_63,s_792,q_793,s_794,s_795,q_796,s_797,q_798,s_799,s_800,q_801,s_802,q_803,s_804,s_805,betweenstory_64,s_806,s_807,s_808,s_809,q_810,s_811,s_812,q_813,s_814,s_815,s_816,betweenstory_65,s_817,q_818,s_819,s_820,q_821,s_822,q_823,s_824,q_825,s_826,s_827,q_828,s_829,s_830,betweenstory_66,s_831,s_832,s_833,q_834,s_835,s_836,s_837,q_838,s_839,q_840,s_841,s_842,betweenstory_67,s_843,q_844,s_845,s_846,q_847,s_848,q_849,s_850,s_851,q_852,s_853,s_854,s_855,betweenstory_68,s_856,q_857,s_858,s_859,q_860,s_861,s_862,q_863,s_864,q_865,s_866,q_867,s_868,s_869,betweenstory_69,s_870,s_871,s_872,q_873,s_874,q_875,s_876,q_877,s_878,s_879,q_880,s_881,s_882,betweenstory_70,s_883,s_884,s_885,q_886,s_887,q_888,s_889,q_890,s_891,q_892,s_893,q_894,s_895,s_896,betweenstory_71,s_897,s_898,s_899,s_900,q_901,s_902,s_903,q_904,s_905,s_906,s_907,betweenstory_72,s_908,q_909,s_910,s_911,q_912,s_913,s_914,q_915,s_916,q_917,s_918,q_919,s_920,s_921,betweenstory_73,s_922,q_923,s_924,s_925,s_926,q_927,s_928,q_929,s_930,q_931,s_932,q_933,s_934,s_935,betweenstory_74,s_936,q_937,s_938,q_939,s_940,q_941,s_942,q_943,s_944,q_945,s_946,s_947,s_948,s_949,betweenstory_75,s_950,q_951,s_952,s_953,q_954,s_955,s_956,q_957,s_958,q_959,s_960,q_961,s_962,s_963,betweenstory_76,s_964,s_965,s_966,s_967,q_968,s_969,q_970,s_971,s_972,s_973,s_974,betweenstory_77,s_975,s_976,s_977,q_978,s_979,q_980,s_981,s_982,q_983,s_984,s_985,s_986,betweenstory_78,s_987,s_988,s_989,q_990,s_991,s_992,s_993,q_994,s_995,q_996,s_997,s_998,betweenstory_79,s_999,s_1000,s_1001,q_1002,s_1003,s_1004,q_1005,s_1006,q_1007,s_1008,q_1009,s_1010,s_1011,betweenstory_80,s_1012,q_1013,s_1014,s_1015,s_1016,q_1017,s_1018,q_1019,s_1020,q_1021,s_1022,q_1023,s_1024,s_1025,betweenstory_81,s_1026,q_1027,s_1028,s_1029,q_1030,s_1031,q_1032,s_1033,s_1034,q_1035,s_1036,q_1037,s_1038,s_1039,betweenstory_82,s_1040,s_1041,s_1042,q_1043,s_1044,q_1045,s_1046,s_1047,q_1048,s_1049,q_1050,s_1051,s_1052,betweenstory_83,s_1053,s_1054,s_1055,s_1056,q_1057,s_1058,q_1059,s_1060,s_1061,s_1062,s_1063,betweenstory_84,s_1064,s_1065,q_1066,s_1067,q_1068,s_1069,q_1070,s_1071,q_1072,s_1073,s_1074,s_1075,s_1076,betweenstory_85,s_1077,q_1078,s_1079,s_1080,q_1081,s_1082,q_1083,s_1084,q_1085,s_1086,s_1087,q_1088,s_1089,s_1090,betweenstory_86,s_1091,s_1092,s_1093,q_1094,s_1095,q_1096,s_1097,q_1098,s_1099,q_1100,s_1101,q_1102,s_1103,s_1104,betweenstory_87,s_1105,q_1106,s_1107,s_1108,s_1109,s_1110,q_1111,s_1112,q_1113,s_1114,s_1115,s_1116,betweenstory_88,s_1117,s_1118,s_1119,s_1120,q_1121,s_1122,q_1123,s_1124,q_1125,s_1126,s_1127,s_1128,betweenstory_89,s_1129,q_1130,s_1131,q_1132,s_1133,s_1134,s_1135,s_1136,q_1137,s_1138,s_1139,s_1140,betweenstory_90,s_1141,q_1142,s_1143,s_1144,q_1145,s_1146,s_1147,s_1148,s_1149,q_1150,s_1151,s_1152,betweenstory_91,s_1153,q_1154,s_1155,s_1156,q_1157,s_1158,s_1159,s_1160,s_1161,s_1162,s_1163,betweenstory_92,s_1164,s_1165,s_1166,q_1167,s_1168,s_1169,q_1170,s_1171,q_1172,s_1173,s_1174,s_1175,betweenstory_93,s_1176,s_1177,q_1178,s_1179,s_1180,q_1181,s_1182,q_1183,s_1184,q_1185,s_1186,q_1187,s_1188,s_1189,betweenstory_94,s_1190,s_1191,s_1192,s_1193,s_1194,s_1195,q_1196,s_1197,q_1198,s_1199,s_1200,betweenstory_95,s_1201,q_1202,s_1203,s_1204,q_1205,s_1206,s_1207,q_1208,s_1209,q_1210,s_1211,q_1212,s_1213,s_1214,betweenstory_96,s_1215,q_1216,s_1217,s_1218,q_1219,s_1220,q_1221,s_1222,q_1223,s_1224,q_1225,s_1226,q_1227,s_1228,s_1229,betweenstory_97,s_1230,s_1231,s_1232,q_1233,s_1234,q_1235,s_1236,s_1237,s_1238,q_1239,s_1240,s_1241,betweenstory_98,s_1242,q_1243,s_1244,s_1245,q_1246,s_1247,q_1248,s_1249,s_1250,q_1251,s_1252,s_1253,s_1254,betweenstory_99,s_1255,s_1256,q_1257,s_1258,q_1259,s_1260,q_1261,s_1262,q_1263,s_1264,q_1265,s_1266,q_1267,s_1268,s_1269,betweenstory_100,],

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