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
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_6 = {
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
	var s_7 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_9 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_10 = {
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

	var s_11 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_12 = {
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
	var s_13 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_17 = {
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
	var s_18 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_19 = {
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
	var s_20 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_22 = {
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

	var s_23 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_24 = {
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
	var s_25 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_26 = {
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
	var s_27 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_30 = {
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
	var s_31 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_32 = {
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
	var s_33 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_34 = {
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
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_38 = {
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
	var s_39 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_41 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Unanounced, Bill began running around David until David realized things were Real and True."],
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
	var s_42 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_44 = {
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
	var s_45 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_47 = {
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
	var s_48 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_49 = {
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

	var s_50 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_54 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire began lecturing on the motions of the stars to calm Alice down.", "David considered using those kong-fu skills to calm Bill down."],
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
	var s_55 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_56 = {
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
	var s_57 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_58 = {
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
	var s_59 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_60 = {
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
	var s_61 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_62 = {
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

	var s_63 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_64 = {
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
	var s_65 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_67 = {
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
	var s_68 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_69 = {
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
	var s_70 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_72 = {
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
	var s_73 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_75 = {
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

	var s_76 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_77 = {
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
	var s_78 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_80 = {
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
	var s_81 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_82 = {
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
	var s_83 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_85 = {
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
	var s_86 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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
	var s_91 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_93 = {
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
	var s_94 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_99 = {
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

	var s_100 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_101 = {
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
	var s_102 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_103 = {
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
	var s_104 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_105 = {
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
	var s_106 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_107 = {
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
	var s_108 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_109 = {
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
	var s_110 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_111 = {
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
	var s_112 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_113 = {
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
	var s_114 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_115 = {
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

	var s_116 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_117 = {
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
	var s_118 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_120 = {
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
	var s_121 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_122 = {
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
	var s_123 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_124 = {
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
	var s_125 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_126 = {
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
	var s_127 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
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
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_131 = {
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
	var s_132 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_135 = {
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
	var s_136 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_137 = {
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
	var s_138 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_139 = {
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
	var s_140 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_141 = {
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
	var s_142 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
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
		var q_145 = {
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
	var s_146 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_151 = {
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
	var s_152 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_153 = {
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
	var s_154 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_155 = {
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

	var s_156 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_157 = {
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
	var s_158 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_160 = {
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
	var s_161 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_162 = {
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
	var s_163 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_167 = {
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

	var s_168 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_172 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was appalled! 'Really? is that all you can muster?.'", "David considered using those kong-fu skills to calm Bill down."],
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
	var s_173 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_175 = {
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
	var s_176 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_177 = {
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
	var s_178 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_179 = {
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

	var s_180 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_181 = {
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
	var s_182 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
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
		var q_184 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David gave up the frenzy.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
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
	var s_185 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_187 = {
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
	var s_188 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
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
						"fromnode": "BARISTAORDERS",
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
		var q_194 = {
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
	var s_195 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_199 = {
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
	var s_200 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_201 = {
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
	var s_202 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_203 = {
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
	var s_204 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_205 = {
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

	var s_206 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_207 = {
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
	var s_208 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
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
		var q_214 = {
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
	var s_215 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_216 = {
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

	var s_217 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
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
	var s_220 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_221 = {
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
	var s_222 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_223 = {
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
	var s_224 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_225 = {
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
	var s_226 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_227 = {
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
	var s_228 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_229 = {
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

	var s_230 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_235 = {
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
	var s_236 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_238 = {
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
	var s_239 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_240 = {
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

	var s_241 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_242 = {
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
	var s_243 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_245 = {
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
	var s_246 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_247 = {
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
	var s_248 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_249 = {
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
	var s_250 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_252 = {
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
	var s_253 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_254 = {
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

	var s_255 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_256 = {
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
	var s_257 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_261 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill immediately pulled out a straw and a collection of spitballs.", "Alice immediately pulled out a straw and a collection of spitballs."],
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
	var s_262 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_265 = {
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

	var s_266 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_267 = {
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
	var s_268 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_269 = {
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
	var s_270 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_271 = {
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
	var s_272 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_274 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Bill immediately pulled out a straw and a collection of spitballs."],
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
	var s_275 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_276 = {
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
	var s_277 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_279 = {
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

	var s_280 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_281 = {
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
	var s_282 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_284 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
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
	var s_285 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_287 = {
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
	var s_288 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_290 = {
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
	var s_291 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_292 = {
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

	var s_293 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_294 = {
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
	var s_295 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_297 = {
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
	var s_298 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_299 = {
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
	var s_300 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_301 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Alice immediately chugged down three cups of moccachino."],
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
	var s_302 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_305 = {
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

	var s_306 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_307 = {
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
	var s_308 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_311 = {
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
	var s_312 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_313 = {
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
	var s_314 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_316 = {
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
	var s_317 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_318 = {
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

	var s_319 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_320 = {
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
	var s_321 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_322 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_324 = {
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
	var s_325 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_326 = {
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
	var s_327 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_330 = {
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

	var s_331 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_338 = {
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
	var s_339 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_340 = {
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

	var s_341 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_344 = {
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
	var s_345 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_346 = {
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
	var s_347 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_348 = {
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
	var s_349 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_352 = {
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

	var s_353 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_357 = {
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
	var s_358 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_360 = {
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
	var s_361 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_363 = {
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

	var s_364 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_367 = {
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
	var s_368 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_369 = {
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
	var s_370 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_371 = {
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
	var s_372 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_373 = {
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
	var s_374 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_375 = {
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
	var s_376 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_377 = {
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

	var s_378 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_381 = {
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
	var s_382 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_384 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately pulled out a straw and a collection of spitballs."],
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
	var s_385 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_386 = {
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
	var s_387 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_388 = {
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
	var s_389 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_390 = {
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

	var s_391 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_394 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice just stared, fascinated by Claire's display.", "Bill just stared, fascinated by David's display."],
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
	var s_395 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_397 = {
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
	var s_398 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_399 = {
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
	var s_400 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_402 = {
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

	var s_403 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_406 = {
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
	var s_407 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_408 = {
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
	var s_409 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_410 = {
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
	var s_411 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_412 = {
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
	var s_413 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_414 = {
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

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_417 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_420 = {
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
	var s_421 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_422 = {
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
	var s_423 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_424 = {
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
	var s_425 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_427 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_428 = {
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

	var s_429 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_433 = {
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
	var s_434 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_436 = {
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
	var s_437 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_439 = {
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

	var s_440 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_447 = {
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
	var s_448 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_449 = {
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

	var s_450 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_451 = {
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
	var s_452 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
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
		var q_456 = {
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
	var s_457 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_458 = {
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
	var s_459 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
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
		var q_465 = {
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
	var s_466 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
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
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_469 = {
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
	var s_470 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_474 = {
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
	var s_475 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_477 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill began running around David until David realized things were Real and True."],
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
	var s_478 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_479 = {
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
	var s_480 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_482 = {
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
	var s_483 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_484 = {
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
	var s_485 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_486 = {
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

	var s_487 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_488 = {
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
	var s_489 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_491 = {
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
	var s_492 = {
		type: 'instructions',
		pages: ["Bill just stared curiously at David's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_493 = {
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
	var s_494 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_496 = {
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
	var s_497 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_498 = {
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
	var s_499 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_500 = {
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

	var s_501 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_504 = {
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
	var s_505 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_507 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he pulled out the violin.", "Bill immediately pulled out a straw and a collection of spitballs."],
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
	var s_508 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_509 = {
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
	var s_510 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_512 = {
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

	var s_513 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_514 = {
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
	var s_515 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_519 = {
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
	var s_520 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_521 = {
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
	var s_522 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_524 = {
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

	var s_525 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_526 = {
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
	var s_527 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_529 = {
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
	var s_530 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_532 = {
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
	var s_533 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_534 = {
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
	var s_535 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_536 = {
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
	var s_537 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_539 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_542 = {
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
	var s_543 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_546 = {
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
	var s_547 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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
		var q_551 = {
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
	var s_552 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_555 = {
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
	var s_556 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_557 = {
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
	var s_558 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_565 = {
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
	var s_566 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_567 = {
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
	var s_568 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_569 = {
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
	var s_570 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_571 = {
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
	var s_572 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_574 = {
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

	var s_575 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_576 = {
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
	var s_577 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_579 = {
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
	var s_580 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_582 = {
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
	var s_583 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_584 = {
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
	var s_585 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_586 = {
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
	var s_587 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_589 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_590 = {
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
	var s_591 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_593 = {
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
	var s_594 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_595 = {
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
	var s_596 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_599 = {
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
	var s_600 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_601 = {
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

	var s_602 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_603 = {
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
	var s_604 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_606 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill began running around David until David realized things were Real and True."],
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
	var s_607 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_609 = {
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
	var s_610 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_613 = {
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

	var s_614 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_617 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
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
	var s_618 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_620 = {
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
	var s_621 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_625 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily sneezed on Claire's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
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
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_633 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
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
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_636 = {
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
	var s_637 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_638 = {
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
	var s_639 = {
		type: 'instructions',
		pages: ["David had just returned from yoga: he paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_640 = {
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
	var s_641 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_643 = {
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
	var s_644 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_645 = {
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
	var s_646 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_647 = {
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
	var s_648 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_649 = {
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

	var s_650 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_653 = {
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
	var s_654 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_655 = {
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
	var s_656 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_658 = {
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
	var s_659 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_660 = {
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
	var s_661 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_662 = {
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

	var s_663 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_666 = {
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
	var s_667 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_669 = {
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
	var s_670 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_671 = {
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
	var s_672 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_673 = {
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
	var s_674 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_677 = {
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
	var s_678 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_681 = {
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
	var s_682 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_684 = {
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
	var s_685 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_686 = {
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
	var s_687 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_688 = {
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

	var s_689 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_690 = {
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
	var s_691 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_694 = {
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
	var s_695 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_698 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Calmly Bill walked out, muttering something left unheard.", "Calmly Alice walked out, muttering something left unheard."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_699 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_700 = {
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

	var s_701 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_704 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_705 = {
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
	var s_706 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_708 = {
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
	var s_709 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_710 = {
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
	var s_711 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_712 = {
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
	var s_715 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_717 = {
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
	var s_718 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_720 = {
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
	var s_721 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_722 = {
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
	var s_723 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_724 = {
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
	var s_725 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_726 = {
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

	var s_727 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_729 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_730 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill just stared, fascinated by David's display.", "Alice just stared, fascinated by Claire's display."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Bill_victim-David",
						"false_RFC":"subject-Alice_victim-Claire" }
			} 
	var s_731 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_732 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_733 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_738 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_739 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_741 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_742 = {
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
	var s_743 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_744 = {
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
	var s_745 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_746 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["That was when the bystanding police officer ordered Bill to leave.", "That was when the bystanding police officer ordered Alice to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJFINALTWO",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Alice_victim-Claire",
						"false_RFC":"subject-Bill_victim-David" }
			} 
	var s_747 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_748 = {
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
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_752 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_753 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_754 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Bill just stared, fascinated by David's display."],
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
	var s_755 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_756 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David began lecturing on the motions of the stars to calm Bill down.", "Claire considered using those kong-fu skills to calm Alice down."],
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
	var s_757 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_758 = {
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
	var s_759 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_760 = {
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
	var s_761 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_762 = {
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
	var s_763 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_764 = {
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

	var s_765 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_766 = {
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
	var s_767 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_768 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_769 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_770 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_771 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
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
						"fromnode": "SUBJFINALONE",
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
		var q_774 = {
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
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_778 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_779 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_780 = {
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
	var s_781 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_782 = {
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
	var s_783 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_784 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_785 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_786 = {
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
	var s_787 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_788 = {
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

	var s_789 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_790 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_791 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_792 = {
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
	var s_793 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_794 = {
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
	var s_795 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_796 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_797 = {
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
	var s_798 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_799 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_800 = {
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

	var s_801 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_802 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_803 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_804 = {
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
	var s_805 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_806 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_807 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice was completely still, when suddenly she began professing Aristotelian ethics.", "Bill was completely still, when suddenly he began professing Aristotelian ethics."],
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
	var s_808 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_809 = {
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
	var s_810 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_811 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_812 = {
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

	var s_813 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_814 = {
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
	var s_815 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_816 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_817 = {
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
	var s_818 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_819 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_820 = {
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
	var s_821 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_822 = {
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
	var s_823 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_824 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_825 = {
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

	var s_826 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_827 = {
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
	var s_828 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_829 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_830 = {
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
	var s_831 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_832 = {
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
	var s_833 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_834 = {
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
	var s_835 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_836 = {
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
	var s_837 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_838 = {
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
	var s_839 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_840 = {
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

	var s_841 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_842 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_843 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_844 = {
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
	var s_845 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_846 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'", "Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
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
	var s_847 = {
		type: 'instructions',
		pages: ["Claire was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_848 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Alice immediately pulled out a straw and a collection of spitballs.", "Alice was completely still, when suddenly she began professing Aristotelian ethics."],
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
	var s_849 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_850 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_851 = {
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
	var s_852 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_853 = {
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

	var s_854 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_856 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_857 = {
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
	var s_858 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_859 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_860 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_861 = {
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
	var s_862 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_863 = {
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
	var s_864 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_865 = {
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

	var s_866 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_867 = {
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
	var s_868 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_869 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_870 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_871 = {
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
	var s_872 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_873 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_874 = {
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
	var s_875 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_876 = {
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
	var s_877 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_878 = {
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

	var s_879 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_880 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily sneezed on David's pinky finger."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_881 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_883 = {
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
	var s_884 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_885 = {
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
	var s_886 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_887 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_889 = {
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

	var s_890 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_891 = {
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
	var s_892 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_893 = {
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
	var s_894 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_895 = {
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
	var s_896 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_898 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_899 = {
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
	var s_900 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_902 = {
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

	var s_903 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_904 = {
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
	var s_905 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_906 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_907 = {
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
	var s_908 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_909 = {
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
	var s_910 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_911 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_912 = {
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
	var s_913 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_914 = {
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
	var s_915 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_916 = {
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

	var s_917 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_918 = {
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
	var s_919 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_921 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_922 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_923 = {
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
	var s_924 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_925 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_926 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_927 = {
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
	var s_928 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_929 = {
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

	var s_930 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_931 = {
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
	var s_932 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_933 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_934 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Alice just stared curiously at Claire's rebellion."],
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
	var s_935 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_936 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_937 = {
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
	var s_938 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_939 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_940 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_941 = {
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

	var s_942 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_943 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["Claire was furious: she invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_945 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy.", "Unanounced, Bill began running around David until David realized things were Real and True."],
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
	var s_946 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_947 = {
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
	var s_948 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_949 = {
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
	var s_950 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_951 = {
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
	var s_952 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_954 = {
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

	var s_955 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_956 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_957 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_958 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_959 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_960 = {
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
	var s_961 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_962 = {
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
	var s_963 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_964 = {
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
	var s_965 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_966 = {
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

	var s_967 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_968 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_969 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_970 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_971 = {
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
	var s_972 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_973 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_974 = {
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
	var s_975 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_976 = {
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
	var s_977 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_978 = {
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

	var s_979 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_980 = {
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
	var s_981 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_982 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_983 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy.", "Unanounced, Bill began running around David until David gave up the frenzy."],
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
	var s_984 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_985 = {
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
	var s_986 = {
		type: 'instructions',
		pages: ["David was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_987 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_988 = {
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
	var s_989 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_990 = {
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
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_994 = {
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
	var s_995 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_997 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_998 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire considered using those kong-fu skills to calm Alice down.", "David began lecturing on the motions of the stars to calm Bill down."],
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
	var s_999 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1000 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
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
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1005 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1006 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1007 = {
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
	var s_1008 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1009 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1010 = {
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
	var s_1011 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1012 = {
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
	var s_1013 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1014 = {
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
	var s_1015 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1016 = {
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

	var s_1017 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
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
		var q_1020 = {
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
	var s_1021 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1022 = {
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
	var s_1023 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1024 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1025 = {
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
	var s_1026 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1027 = {
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
	var s_1028 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1029 = {
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

	var s_1030 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1033 = {
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
	var s_1034 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1035 = {
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
	var s_1036 = {
		type: 'instructions',
		pages: ["David was amused! 'Stop! Or I'll ride my unicorns into the sunset..'"],
		data: { "state": "YELL",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1037 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1038 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1039 = {
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
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1043 = {
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
	var s_1044 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1046 = {
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
	var s_1047 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1049 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1051 = {
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
	var s_1052 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1053 = {
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

	var s_1054 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1055 = {
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
	var s_1056 = {
		type: 'instructions',
		pages: ["While in line, Bill clumsily spilled coffee on David's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1057 = {
		type: 'instructions',
		pages: ["David was furious: he invented many words there and then."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1058 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True.", "Unanounced, Bill just shoved David until David gave up the frenzy."],
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
	var s_1059 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1060 = {
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
	var s_1061 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1062 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he pulled out the violin."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1063 = {
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
	var s_1064 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1065 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1066 = {
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

	var s_1067 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1068 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1069 = {
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
	var s_1070 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1071 = {
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
	var s_1072 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1073 = {
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
	var s_1074 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1076 = {
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
	var s_1077 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1078 = {
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
	var s_1079 = {
		type: 'instructions',
		pages: ["Calmly Alice walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1080 = {
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

	var s_1081 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1082 = {
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
	var s_1083 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1084 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1085 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1086 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1087 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was completely still, when suddenly he began professing Aristotelian ethics.", "Alice was completely still, when suddenly she pulled out the violin."],
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
	var s_1088 = {
		type: 'instructions',
		pages: ["Bill was completely still, when suddenly he began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1089 = {
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
	var s_1090 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1091 = {
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
	var s_1092 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1093 = {
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

	var s_1094 = {
		type: 'instructions',
		pages: ["One morning, Alice walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1095 = {
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
	var s_1096 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1097 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1098 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True.", "Unanounced, Bill just shoved David until David realized things were Real and True."],
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
	var s_1099 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1100 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Claire was appalled! 'Really? is that all you can muster?.'", "David was appalled! 'Really? is that all you can muster?.'"],
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
	var s_1101 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1102 = {
		type: 'instructions',
		pages: ["Alice was completely still, when suddenly she began professing Aristotelian ethics."],
		data: { "state": "SUBJFINALTWO",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1103 = {
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
	var s_1104 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1106 = {
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

	var s_1107 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1108 = {
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
	var s_1109 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1110 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1111 = {
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
	var s_1112 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1113 = {
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
	var s_1114 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1115 = {
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
	var s_1116 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1117 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1118 = {
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
	var s_1119 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1120 = {
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

	var s_1121 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1122 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1123 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1124 = {
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
	var s_1125 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1126 = {
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
	var s_1127 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1128 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1129 = {
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
	var s_1130 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1131 = {
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
	var s_1132 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1133 = {
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

	var s_1134 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["While in line, Alice clumsily spilled coffee on Claire's brand-new tuxedo."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1136 = {
		type: 'instructions',
		pages: ["Claire had just returned from yoga: she paced around forcefully thinking 'Namaste! Namaste!'."],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1137 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill began running around David until David gave up the frenzy.", "Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
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
	var s_1138 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1139 = {
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
	var s_1140 = {
		type: 'instructions',
		pages: ["Claire considered using those kong-fu skills to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1141 = {
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
	var s_1142 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1143 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1144 = {
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
	var s_1145 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1146 = {
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

	var s_1147 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1148 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1150 = {
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
	var s_1151 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1152 = {
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
	var s_1153 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1154 = {
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
	var s_1155 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1156 = {
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
	var s_1157 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1158 = {
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
	var s_1159 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1160 = {
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

	var s_1161 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1163 = {
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
	var s_1164 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1165 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Unanounced, Bill just shoved David until David realized things were Real and True.", "Bill just stared, fascinated by David's display."],
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
	var s_1166 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1167 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1168 = {
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
	var s_1169 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1170 = {
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
	var s_1171 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1172 = {
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
	var s_1173 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1174 = {
		type: 'instructions',
		pages: ["All else is unknown."],
		data: { "state": "END",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1175 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1176 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1177 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1178 = {
		type: 'instructions',
		pages: ["Unanounced, Alice just shoved Claire until Claire realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1179 = {
		type: 'instructions',
		pages: ["Claire was appalled! 'Really? is that all you can muster?.'"],
		data: { "state": "YELL",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1180 = {
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
	var s_1181 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1182 = {
		type: 'instructions',
		pages: ["We all saw the barista order Alice to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1183 = {
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
	var s_1184 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1185 = {
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

	var s_1186 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1188 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1189 = {
		type: 'instructions',
		pages: ["Alice just stared curiously at Claire's rebellion."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1190 = {
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
	var s_1191 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1192 = {
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
	var s_1193 = {
		type: 'instructions',
		pages: ["Alice immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1194 = {
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
	var s_1195 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1196 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1197 = {
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

	var s_1198 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1199 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1200 = {
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
	var s_1201 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1202 = {
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
	var s_1203 = {
		type: 'instructions',
		pages: ["Bill just stared, fascinated by David's display."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1204 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["David considered using those kong-fu skills to calm Bill down.", "David was appalled! 'Really? is that all you can muster?.'"],
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
	var s_1205 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1206 = {
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
	var s_1207 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1208 = {
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
	var s_1209 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1210 = {
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
	var s_1211 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1212 = {
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

	var s_1213 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1214 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1215 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1216 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1217 = {
		type: 'instructions',
		pages: ["David considered using those kong-fu skills to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1218 = {
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
	var s_1219 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1220 = {
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
	var s_1221 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1222 = {
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
	var s_1223 = {
		type: 'instructions',
		pages: ["Calmly Bill walked out, muttering something left unheard."],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1224 = {
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

	var s_1225 = {
		type: 'instructions',
		pages: ["One afternoon, Bill walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1226 = {
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
	var s_1227 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1228 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1229 = {
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
	var s_1230 = {
		type: 'instructions',
		pages: ["Unanounced, Bill began running around David until David gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1231 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1232 = {
		type: 'instructions',
		pages: ["Bill immediately pulled out a straw and a collection of spitballs."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1233 = {
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
	var s_1234 = {
		type: 'instructions',
		pages: ["We all saw the barista order Bill to leave. "],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1235 = {
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
	var s_1236 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1237 = {
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

	var s_1238 = {
		type: 'instructions',
		pages: ["One afternoon, Alice walked into the book store."],
		data: { "state": "BEGIN",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1239 = {
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
	var s_1240 = {
		type: 'instructions',
		pages: ["Inspired by the afternoon's heat, Alice cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1241 = {
		type: 'instructions',
		pages: ["Having just read Sartre's 'Nausea', Claire, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1242 = {
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
	var s_1243 = {
		type: 'instructions',
		pages: ["Unanounced, Alice began running around Claire until Claire gave up the frenzy."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1244 = {
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
	var s_1245 = {
		type: 'instructions',
		pages: ["Claire began lecturing on the motions of the stars to calm Alice down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1246 = {
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
	var s_1247 = {
		type: 'instructions',
		pages: ["Alice immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1248 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Alice to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
		var q_1249 = {
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
	var s_1250 = {
		type: 'instructions',
		pages: ["Alice ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Alice_victim-Claire",
						"type": "story" }
	} 
	var s_1251 = {
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

	var s_1252 = {
		type: 'instructions',
		pages: ["One morning, Bill walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1253 = {
		type: 'instructions',
		pages: ["Inspired and wearing a pink top hat, Bill cut the line"],
		data: { "state": "CUTLINE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1254 = {
		type: 'instructions',
		pages: ["Having just read Nietzsche's 'Thus Spoke Zarathustra', David, who was in line,  would not let this pass!"],
		data: { "state": "CUTBACK",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1255 = {
		type: 'instructions',
		pages: ["Unanounced, Bill just shoved David until David realized things were Real and True."],
		data: { "state": "SUBJREACTS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1256 = {
		type: 'instructions',
		pages: ["David began lecturing on the motions of the stars to calm Bill down."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1257 = {
		type: 'instructions',
		pages: ["Bill immediately chugged down three cups of moccachino."],
		data: { "state": "SUBJFINALONE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1258 = {
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
	var s_1259 = {
		type: 'instructions',
		pages: ["That was when the bystanding police officer ordered Bill to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
		var q_1260 = {
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
	var s_1261 = {
		type: 'instructions',
		pages: ["Bill ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Bill_victim-David",
						"type": "story" }
	} 
	var s_1262 = {
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,s_3,s_4,s_5,q_6,s_7,s_8,s_9,s_10,betweenstory_1,s_11,q_12,s_13,s_14,s_15,s_16,q_17,s_18,q_19,s_20,s_21,s_22,betweenstory_2,s_23,q_24,s_25,q_26,s_27,s_28,s_29,q_30,s_31,q_32,s_33,q_34,s_35,s_36,betweenstory_3,s_37,q_38,s_39,s_40,q_41,s_42,s_43,q_44,s_45,s_46,q_47,s_48,s_49,betweenstory_4,s_50,s_51,s_52,s_53,q_54,s_55,q_56,s_57,q_58,s_59,q_60,s_61,s_62,betweenstory_5,s_63,q_64,s_65,s_66,q_67,s_68,q_69,s_70,s_71,q_72,s_73,s_74,s_75,betweenstory_6,s_76,q_77,s_78,s_79,q_80,s_81,q_82,s_83,s_84,q_85,s_86,s_87,s_88,betweenstory_7,s_89,q_90,s_91,s_92,q_93,s_94,s_95,s_96,s_97,s_98,s_99,betweenstory_8,s_100,q_101,s_102,q_103,s_104,q_105,s_106,q_107,s_108,q_109,s_110,q_111,s_112,q_113,s_114,s_115,betweenstory_9,s_116,q_117,s_118,s_119,q_120,s_121,q_122,s_123,q_124,s_125,q_126,s_127,s_128,s_129,betweenstory_10,s_130,q_131,s_132,s_133,s_134,q_135,s_136,q_137,s_138,q_139,s_140,q_141,s_142,s_143,betweenstory_11,s_144,q_145,s_146,s_147,s_148,s_149,s_150,q_151,s_152,q_153,s_154,s_155,betweenstory_12,s_156,q_157,s_158,s_159,q_160,s_161,q_162,s_163,s_164,s_165,s_166,s_167,betweenstory_13,s_168,s_169,s_170,s_171,q_172,s_173,s_174,q_175,s_176,q_177,s_178,s_179,betweenstory_14,s_180,q_181,s_182,s_183,q_184,s_185,s_186,q_187,s_188,s_189,q_190,s_191,s_192,betweenstory_15,s_193,q_194,s_195,s_196,s_197,s_198,q_199,s_200,q_201,s_202,q_203,s_204,s_205,betweenstory_16,s_206,q_207,s_208,s_209,s_210,s_211,s_212,s_213,q_214,s_215,s_216,betweenstory_17,s_217,s_218,s_219,s_220,q_221,s_222,q_223,s_224,q_225,s_226,q_227,s_228,s_229,betweenstory_18,s_230,s_231,s_232,s_233,s_234,q_235,s_236,s_237,q_238,s_239,s_240,betweenstory_19,s_241,q_242,s_243,s_244,q_245,s_246,q_247,s_248,q_249,s_250,s_251,q_252,s_253,s_254,betweenstory_20,s_255,q_256,s_257,s_258,s_259,s_260,q_261,s_262,s_263,s_264,s_265,betweenstory_21,s_266,q_267,s_268,q_269,s_270,q_271,s_272,s_273,q_274,s_275,q_276,s_277,s_278,s_279,betweenstory_22,s_280,q_281,s_282,s_283,q_284,s_285,s_286,q_287,s_288,s_289,q_290,s_291,s_292,betweenstory_23,s_293,q_294,s_295,s_296,q_297,s_298,q_299,s_300,q_301,s_302,s_303,s_304,s_305,betweenstory_24,s_306,q_307,s_308,s_309,s_310,q_311,s_312,q_313,s_314,s_315,q_316,s_317,s_318,betweenstory_25,s_319,q_320,s_321,s_322,s_323,q_324,s_325,q_326,s_327,s_328,s_329,s_330,betweenstory_26,s_331,s_332,s_333,s_334,s_335,s_336,s_337,q_338,s_339,s_340,betweenstory_27,s_341,s_342,s_343,q_344,s_345,q_346,s_347,q_348,s_349,s_350,s_351,s_352,betweenstory_28,s_353,s_354,s_355,s_356,q_357,s_358,s_359,q_360,s_361,s_362,s_363,betweenstory_29,s_364,s_365,s_366,q_367,s_368,q_369,s_370,q_371,s_372,q_373,s_374,q_375,s_376,s_377,betweenstory_30,s_378,s_379,s_380,q_381,s_382,s_383,q_384,s_385,q_386,s_387,q_388,s_389,s_390,betweenstory_31,s_391,s_392,s_393,q_394,s_395,s_396,q_397,s_398,q_399,s_400,s_401,s_402,betweenstory_32,s_403,s_404,s_405,q_406,s_407,q_408,s_409,q_410,s_411,q_412,s_413,q_414,s_415,s_416,betweenstory_33,s_417,s_418,s_419,q_420,s_421,q_422,s_423,q_424,s_425,s_426,s_427,s_428,betweenstory_34,s_429,s_430,s_431,s_432,q_433,s_434,s_435,q_436,s_437,s_438,s_439,betweenstory_35,s_440,s_441,s_442,s_443,s_444,s_445,s_446,q_447,s_448,s_449,betweenstory_36,s_450,q_451,s_452,s_453,s_454,s_455,q_456,s_457,q_458,s_459,s_460,s_461,betweenstory_37,s_462,s_463,s_464,q_465,s_466,s_467,s_468,q_469,s_470,s_471,s_472,betweenstory_38,s_473,q_474,s_475,s_476,q_477,s_478,q_479,s_480,s_481,q_482,s_483,q_484,s_485,s_486,betweenstory_39,s_487,q_488,s_489,s_490,q_491,s_492,q_493,s_494,s_495,q_496,s_497,q_498,s_499,s_500,betweenstory_40,s_501,s_502,s_503,q_504,s_505,s_506,q_507,s_508,q_509,s_510,s_511,s_512,betweenstory_41,s_513,q_514,s_515,s_516,s_517,s_518,q_519,s_520,q_521,s_522,s_523,s_524,betweenstory_42,s_525,q_526,s_527,s_528,q_529,s_530,s_531,q_532,s_533,q_534,s_535,q_536,s_537,s_538,betweenstory_43,s_539,s_540,s_541,q_542,s_543,s_544,s_545,q_546,s_547,s_548,s_549,betweenstory_44,s_550,q_551,s_552,s_553,s_554,q_555,s_556,q_557,s_558,s_559,s_560,s_561,betweenstory_45,s_562,s_563,s_564,q_565,s_566,q_567,s_568,q_569,s_570,q_571,s_572,s_573,s_574,betweenstory_46,s_575,q_576,s_577,s_578,q_579,s_580,s_581,q_582,s_583,q_584,s_585,q_586,s_587,s_588,betweenstory_47,s_589,q_590,s_591,s_592,q_593,s_594,q_595,s_596,s_597,s_598,q_599,s_600,s_601,betweenstory_48,s_602,q_603,s_604,s_605,q_606,s_607,s_608,q_609,s_610,s_611,s_612,s_613,betweenstory_49,s_614,s_615,s_616,q_617,s_618,s_619,q_620,s_621,s_622,s_623,s_624,betweenstory_50,s_625,s_626,s_627,s_628,s_629,s_630,s_631,q_632,s_633,s_634,betweenstory_51,s_635,q_636,s_637,q_638,s_639,q_640,s_641,s_642,q_643,s_644,q_645,s_646,q_647,s_648,s_649,betweenstory_52,s_650,s_651,s_652,q_653,s_654,q_655,s_656,s_657,q_658,s_659,q_660,s_661,s_662,betweenstory_53,s_663,s_664,s_665,q_666,s_667,s_668,q_669,s_670,q_671,s_672,q_673,s_674,s_675,betweenstory_54,s_676,q_677,s_678,s_679,s_680,q_681,s_682,s_683,q_684,s_685,q_686,s_687,s_688,betweenstory_55,s_689,q_690,s_691,s_692,s_693,q_694,s_695,s_696,s_697,q_698,s_699,s_700,betweenstory_56,s_701,s_702,s_703,s_704,q_705,s_706,s_707,q_708,s_709,q_710,s_711,s_712,betweenstory_57,s_713,q_714,s_715,s_716,q_717,s_718,s_719,q_720,s_721,q_722,s_723,q_724,s_725,s_726,betweenstory_58,s_727,s_728,s_729,q_730,s_731,q_732,s_733,s_734,s_735,s_736,s_737,betweenstory_59,s_738,s_739,s_740,s_741,q_742,s_743,q_744,s_745,q_746,s_747,q_748,s_749,s_750,betweenstory_60,s_751,s_752,s_753,q_754,s_755,q_756,s_757,q_758,s_759,q_760,s_761,q_762,s_763,s_764,betweenstory_61,s_765,q_766,s_767,s_768,s_769,s_770,s_771,q_772,s_773,q_774,s_775,s_776,betweenstory_62,s_777,s_778,s_779,q_780,s_781,q_782,s_783,s_784,s_785,q_786,s_787,s_788,betweenstory_63,s_789,s_790,s_791,q_792,s_793,q_794,s_795,s_796,q_797,s_798,s_799,s_800,betweenstory_64,s_801,s_802,s_803,q_804,s_805,s_806,q_807,s_808,q_809,s_810,s_811,s_812,betweenstory_65,s_813,q_814,s_815,s_816,q_817,s_818,s_819,q_820,s_821,q_822,s_823,s_824,s_825,betweenstory_66,s_826,q_827,s_828,s_829,q_830,s_831,q_832,s_833,q_834,s_835,q_836,s_837,q_838,s_839,s_840,betweenstory_67,s_841,s_842,s_843,q_844,s_845,q_846,s_847,q_848,s_849,s_850,q_851,s_852,s_853,betweenstory_68,s_854,s_855,s_856,q_857,s_858,s_859,s_860,q_861,s_862,q_863,s_864,s_865,betweenstory_69,s_866,q_867,s_868,s_869,s_870,q_871,s_872,s_873,q_874,s_875,q_876,s_877,s_878,betweenstory_70,s_879,s_880,s_881,s_882,q_883,s_884,q_885,s_886,s_887,s_888,s_889,betweenstory_71,s_890,q_891,s_892,q_893,s_894,q_895,s_896,s_897,s_898,q_899,s_900,s_901,s_902,betweenstory_72,s_903,q_904,s_905,s_906,q_907,s_908,q_909,s_910,s_911,q_912,s_913,q_914,s_915,s_916,betweenstory_73,s_917,q_918,s_919,s_920,q_921,s_922,q_923,s_924,s_925,s_926,q_927,s_928,s_929,betweenstory_74,s_930,q_931,s_932,s_933,q_934,s_935,s_936,q_937,s_938,s_939,s_940,s_941,betweenstory_75,s_942,s_943,s_944,q_945,s_946,q_947,s_948,q_949,s_950,q_951,s_952,s_953,s_954,betweenstory_76,s_955,s_956,s_957,s_958,s_959,q_960,s_961,q_962,s_963,q_964,s_965,s_966,betweenstory_77,s_967,s_968,s_969,s_970,q_971,s_972,s_973,q_974,s_975,q_976,s_977,s_978,betweenstory_78,s_979,q_980,s_981,s_982,q_983,s_984,q_985,s_986,s_987,q_988,s_989,q_990,s_991,s_992,betweenstory_79,s_993,q_994,s_995,s_996,s_997,q_998,s_999,s_1000,s_1001,s_1002,s_1003,betweenstory_80,s_1004,s_1005,s_1006,q_1007,s_1008,s_1009,q_1010,s_1011,q_1012,s_1013,q_1014,s_1015,s_1016,betweenstory_81,s_1017,s_1018,s_1019,q_1020,s_1021,q_1022,s_1023,s_1024,q_1025,s_1026,q_1027,s_1028,s_1029,betweenstory_82,s_1030,s_1031,s_1032,q_1033,s_1034,q_1035,s_1036,s_1037,s_1038,q_1039,s_1040,s_1041,betweenstory_83,s_1042,q_1043,s_1044,s_1045,q_1046,s_1047,s_1048,s_1049,s_1050,q_1051,s_1052,s_1053,betweenstory_84,s_1054,q_1055,s_1056,s_1057,q_1058,s_1059,q_1060,s_1061,s_1062,q_1063,s_1064,s_1065,s_1066,betweenstory_85,s_1067,s_1068,q_1069,s_1070,q_1071,s_1072,q_1073,s_1074,s_1075,q_1076,s_1077,q_1078,s_1079,s_1080,betweenstory_86,s_1081,q_1082,s_1083,s_1084,s_1085,s_1086,q_1087,s_1088,q_1089,s_1090,q_1091,s_1092,s_1093,betweenstory_87,s_1094,q_1095,s_1096,s_1097,q_1098,s_1099,q_1100,s_1101,s_1102,q_1103,s_1104,s_1105,s_1106,betweenstory_88,s_1107,q_1108,s_1109,s_1110,q_1111,s_1112,q_1113,s_1114,q_1115,s_1116,s_1117,q_1118,s_1119,s_1120,betweenstory_89,s_1121,s_1122,s_1123,q_1124,s_1125,q_1126,s_1127,s_1128,q_1129,s_1130,q_1131,s_1132,s_1133,betweenstory_90,s_1134,s_1135,s_1136,q_1137,s_1138,q_1139,s_1140,q_1141,s_1142,s_1143,q_1144,s_1145,s_1146,betweenstory_91,s_1147,s_1148,s_1149,q_1150,s_1151,q_1152,s_1153,q_1154,s_1155,q_1156,s_1157,q_1158,s_1159,s_1160,betweenstory_92,s_1161,s_1162,q_1163,s_1164,q_1165,s_1166,s_1167,q_1168,s_1169,q_1170,s_1171,q_1172,s_1173,s_1174,betweenstory_93,s_1175,s_1176,s_1177,s_1178,s_1179,q_1180,s_1181,s_1182,q_1183,s_1184,s_1185,betweenstory_94,s_1186,s_1187,s_1188,s_1189,q_1190,s_1191,q_1192,s_1193,q_1194,s_1195,s_1196,s_1197,betweenstory_95,s_1198,s_1199,q_1200,s_1201,q_1202,s_1203,q_1204,s_1205,q_1206,s_1207,q_1208,s_1209,q_1210,s_1211,s_1212,betweenstory_96,s_1213,s_1214,s_1215,s_1216,s_1217,q_1218,s_1219,q_1220,s_1221,q_1222,s_1223,s_1224,betweenstory_97,s_1225,q_1226,s_1227,s_1228,q_1229,s_1230,s_1231,s_1232,q_1233,s_1234,q_1235,s_1236,s_1237,betweenstory_98,s_1238,q_1239,s_1240,s_1241,q_1242,s_1243,q_1244,s_1245,q_1246,s_1247,s_1248,q_1249,s_1250,s_1251,betweenstory_99,s_1252,s_1253,s_1254,s_1255,s_1256,s_1257,q_1258,s_1259,q_1260,s_1261,s_1262,betweenstory_100,],

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