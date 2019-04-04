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
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_4 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_5 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_6 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Adam.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_7 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_9 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_10 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_11 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_13 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_16 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_17 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_18 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_19 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_22 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_23 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_25 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_26 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Silvia, who was first in line.", "Clumsily, Olivia stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_27 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_29 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_30 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_32 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_33 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_34 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_35 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_36 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_37 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_38 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_39 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_40 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_43 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_44 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_45 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "In retaliation, Bill pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_46 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_47 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_48 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_49 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_50 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_51 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_52 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_54 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_55 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_56 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_57 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia was enraged and said, 'Excuse me?!", "Bill was enraged and said, 'Excuse me?!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_58 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_59 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_60 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_61 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_62 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_67 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_70 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_71 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_74 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_75 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_78 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_81 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_82 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_85 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_86 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_89 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_90 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Bill's foot.", "Adam cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_91 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_92 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Adam.", "Silvia hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_93 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_94 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_95 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_97 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_98 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_102 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_105 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_106 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_109 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_110 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_111 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_112 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_114 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_116 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Adam.", "Silvia hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_117 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_118 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_119 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_120 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Adam.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_121 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_122 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_123 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_124 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_127 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_128 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_129 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia was enraged and said, 'Excuse me?!", "Bill was enraged and said, 'Excuse me?!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_130 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_131 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_132 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_135 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_136 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_137 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_138 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_140 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_142 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Adam.", "Bill hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_143 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_146 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_147 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_150 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy.", "The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "LOVEJUICE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_151 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_152 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_156 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_157 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_159 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_160 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_163 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_166 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_167 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_168 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_169 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_170 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_171 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_172 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_173 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_174 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_175 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_177 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_179 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_180 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_181 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_182 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_183 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_184 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_185 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_189 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_193 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_194 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_195 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_196 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_197 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_198 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_199 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_200 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_202 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_203 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Silvia's foot.", "Olivia cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_204 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_207 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_208 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_209 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_210 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_211 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_212 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_213 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_214 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_216 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_219 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_220 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_221 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Olivia's eyes.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_222 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_223 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_224 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_225 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_226 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_228 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy.", "The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_229 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_230 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_233 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_234 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_235 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_236 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_237 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_238 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_239 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_240 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_241 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_242 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_244 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_245 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Silvia's foot.", "Olivia cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_246 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_248 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_249 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_250 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_251 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_252 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_253 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_254 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_255 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_258 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_264 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_265 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_267 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_268 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_269 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_272 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_273 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_275 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_276 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_278 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_279 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_281 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_286 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_287 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_288 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_289 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_292 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_295 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_296 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_299 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_300 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_301 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_302 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_304 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_307 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_308 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_309 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Olivia's eyes.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_310 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_312 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_313 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_315 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy.", "The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_316 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_317 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_318 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Silvia, who was first in line.", "Clumsily, Olivia stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_319 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_321 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_322 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_323 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Olivia's eyes.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_324 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_325 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_326 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_327 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_328 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_331 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_334 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_335 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_336 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "In retaliation, Silvia pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_337 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_338 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_339 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_340 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_341 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_344 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_345 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Silvia, who was first in line.", "Clumsily, Olivia stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_346 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_349 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Adam.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_350 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_351 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_352 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_354 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_355 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_357 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_360 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_361 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_362 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "In retaliation, Silvia pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_363 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_364 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_365 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_366 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_367 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_370 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_373 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_374 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_375 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_376 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_377 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_378 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_380 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_381 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_383 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_384 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Bill, who was first in line.", "Clumsily, Adam stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_385 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_388 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_389 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_390 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_391 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_393 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_394 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_396 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_399 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_400 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_403 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_404 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_405 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_406 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_408 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_409 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Bill, who was first in line.", "Clumsily, Adam stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_410 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_413 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_414 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_415 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_416 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_418 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_419 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_420 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "LOVEJUICE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_421 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_422 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_423 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Silvia, who was first in line.", "Clumsily, Adam stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_424 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_427 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Olivia's eyes.", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_428 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_429 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_431 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_432 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_434 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_436 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_440 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_441 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_442 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_443 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_445 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_446 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Silvia, who was first in line.", "Clumsily, Adam stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_447 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_451 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_452 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_454 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_455 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_456 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy.", "The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "LOVEJUICE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_457 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_458 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_464 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_465 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_468 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_469 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Silvia's foot.", "Adam cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_470 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_472 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_473 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_474 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_475 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_476 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_477 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_481 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_484 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_487 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_488 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_491 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_495 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Adam.", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_496 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_497 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_498 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_499 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_500 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_503 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_504 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Bill's foot.", "Adam cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_505 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_508 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_509 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_510 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_511 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_512 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_513 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_514 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_515 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_516 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_517 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_521 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_522 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_527 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_532 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_533 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_534 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_537 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_540 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_542 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_543 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_545 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_546 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_548 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_549 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Silvia's foot.", "Olivia cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_550 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_552 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_553 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_554 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Adam.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_555 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_556 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_557 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_561 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_564 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_565 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_569 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_570 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_571 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_572 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_573 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_575 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Adam.", "Silvia hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_576 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_578 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_579 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_581 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_582 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_584 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "LOVEJUICE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_585 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_586 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_587 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Bill, who was first in line.", "Clumsily, Adam stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_588 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_591 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Adam.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_592 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_593 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_594 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_595 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_596 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_599 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_600 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_601 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_604 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_605 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_607 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_608 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_611 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_614 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_615 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Adam.", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_616 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_617 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_618 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_619 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_620 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_621 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_622 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_624 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_625 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, who was first in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_626 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_629 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_630 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_631 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_632 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_634 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_635 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_637 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_638 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Silvia's foot.", "Adam cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_639 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_643 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_644 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_645 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_646 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_647 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_648 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_650 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_651 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Silvia, who was first in line.", "Clumsily, Adam stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_652 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_654 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_655 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_656 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_657 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_660 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_661 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_663 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_664 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Bill's foot.", "Adam cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_665 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_667 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_668 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_670 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_671 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_672 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_673 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_674 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_675 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_677 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_678 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Bill's foot.", "Adam cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_679 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_681 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_682 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_683 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Adam.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_684 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_685 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_686 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_687 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_688 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_689 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_690 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_692 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_697 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_698 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_699 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_700 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_701 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_702 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_704 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_705 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Bill, who was first in line.", "Clumsily, Adam stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_706 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_708 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_709 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_711 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_712 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_713 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_714 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_715 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_717 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_718 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, who was first in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_719 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_720 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was enraged and said, 'Excuse me?!", "Silvia was enraged and said, 'Excuse me?!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_721 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_722 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_723 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_724 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_725 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_726 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_727 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_728 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_729 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_730 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_731 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_732 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, who was first in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_733 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_735 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_736 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_737 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_738 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_739 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_740 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_741 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_742 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_743 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_744 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_745 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_746 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_747 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Silvia, who was first in line.", "Clumsily, Olivia stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_748 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_749 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_750 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_751 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_752 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_753 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_755 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_756 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_757 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_758 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_760 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_761 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Silvia, who was first in line.", "Clumsily, Adam stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_762 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_763 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Adam.", "Silvia hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_764 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_765 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_768 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_769 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_770 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_771 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_772 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_773 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia was enraged and said, 'Excuse me?!", "Bill was enraged and said, 'Excuse me?!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_774 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_775 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_776 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_777 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Olivia's eyes.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_778 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_779 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_780 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_781 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_782 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_783 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_784 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_785 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_786 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Bill, who was first in line.", "Clumsily, Adam stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_787 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_788 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_789 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_790 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_791 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_792 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_793 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_794 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_795 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_796 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_797 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_798 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_799 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_800 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_801 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_802 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Olivia proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_803 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_804 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_805 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_806 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_808 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_809 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_810 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_811 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_812 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_813 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_814 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_815 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_816 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_817 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_818 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_819 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_821 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_823 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_824 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_825 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_828 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_829 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_830 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_831 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy.", "The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_832 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_833 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_834 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Bill, who was first in line.", "Clumsily, Adam stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_835 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_836 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_837 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_838 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_839 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_841 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_842 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_843 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_844 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_845 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_846 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_847 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_848 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_849 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_850 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_851 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_852 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_853 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_854 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_856 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_857 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_858 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_859 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia was enraged and said, 'Excuse me?!", "Bill was enraged and said, 'Excuse me?!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_860 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_861 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_862 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_863 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_864 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_865 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_866 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_867 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_868 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_869 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_870 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_871 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Silvia's foot.", "Olivia cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_872 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_873 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_874 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_875 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_877 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_878 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_879 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_880 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_881 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_882 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_884 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_885 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Silvia's foot.", "Adam cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_886 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_887 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_888 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_889 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_890 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_891 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_893 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_894 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_895 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_896 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_898 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_899 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Silvia's foot.", "Adam cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_900 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_902 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_903 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_904 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_905 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_906 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_907 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_908 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_909 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_910 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_911 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_912 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_913 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_914 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Bill's foot.", "Adam cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_915 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_916 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_917 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_918 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_919 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_920 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_921 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_922 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_923 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_924 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_925 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_926 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Bill, who was first in line.", "Clumsily, Adam stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_927 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_928 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_929 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_930 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_931 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_932 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_933 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_934 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_935 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_936 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_937 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_938 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_939 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_940 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_941 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_942 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_943 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Silvia pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_944 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_945 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_946 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_947 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_949 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_950 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_951 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Silvia's foot.", "Olivia cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_952 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_953 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia was enraged and said, 'Excuse me?!", "Bill was enraged and said, 'Excuse me?!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_954 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_955 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_956 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_957 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Olivia's eyes.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_958 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_959 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_960 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_961 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_962 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_963 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_964 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_966 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_968 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_969 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_970 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_971 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_973 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_974 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_975 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_976 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_978 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_979 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_980 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_981 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_982 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_983 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_984 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_985 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_986 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_987 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_988 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_989 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_990 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_991 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Bill's foot.", "Adam cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_992 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_993 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_994 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_995 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_997 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_998 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1000 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1001 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1002 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1003 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1004 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1005 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "In retaliation, Bill pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1006 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1007 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1009 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1010 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1011 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1012 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1013 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1014 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1015 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1016 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1017 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1019 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1020 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1021 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1022 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1023 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1024 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1025 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1026 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1027 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1029 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1033 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1034 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1035 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1036 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1037 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1038 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1039 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1040 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1042 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1043 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1044 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1045 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1046 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1047 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1048 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1049 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1050 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1051 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1052 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia was enraged and said, 'Excuse me?!", "Bill was enraged and said, 'Excuse me?!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1053 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1054 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1055 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1056 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1057 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1058 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1059 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1060 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1062 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1063 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1064 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Silvia, who was first in line.", "Clumsily, Adam stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1065 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1066 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Adam.", "Bill hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1067 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1068 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1069 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1070 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1071 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1072 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1073 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1074 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1075 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1076 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1077 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1078 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1079 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1080 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1081 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1082 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1083 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1084 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1085 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1086 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1087 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1088 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1089 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1090 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1091 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy.", "The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1092 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1093 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1094 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1095 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1096 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1097 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1098 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1099 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1100 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1101 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1102 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1103 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1104 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1106 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1107 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1108 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Silvia's foot.", "Adam cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1109 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1110 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1111 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1112 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1113 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1114 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1115 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1116 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1117 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1119 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1120 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1121 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1122 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1123 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, who was first in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1124 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1125 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1126 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1127 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1128 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1129 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1130 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1131 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1133 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1134 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Silvia's foot.", "Adam cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1136 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1137 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1138 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1139 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1140 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1142 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1143 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1144 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1145 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1146 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1147 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1148 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1150 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1151 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1152 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1153 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1154 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1155 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1156 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1157 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1158 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Bill, who was first in line.", "Clumsily, Olivia stepped on Bill's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1159 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1160 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1161 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1163 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1164 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1165 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1166 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1167 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1168 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1169 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1170 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1171 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1173 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Olivia.", "Silvia hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1174 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1175 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1176 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1177 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1178 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1179 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1181 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1182 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1183 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1184 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1185 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1186 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1187 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Olivia stepped on Silvia's foot.", "Olivia cut Silvia, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1188 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1189 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1190 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1191 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1192 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1193 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1194 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1195 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1196 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1197 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1198 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1199 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1200 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Adam.", "Bill hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1201 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1202 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1203 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1204 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1205 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1206 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1207 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1208 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1209 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1210 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1211 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1212 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1213 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1214 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1215 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1216 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1217 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1218 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1219 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1220 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1221 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1222 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1223 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1224 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1225 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1226 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1227 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1228 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1229 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1230 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1231 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1232 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1233 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1234 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1235 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1236 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1238 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1239 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Clumsily, Adam stepped on Bill's foot.", "Adam cut Bill, who was first in line."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1240 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1241 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1242 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1243 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1244 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1245 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1246 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1247 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1248 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1249 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1250 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1251 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1252 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1253 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1254 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1255 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1256 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1257 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1258 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1259 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1260 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "HATECOFFEE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1261 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_99 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1262 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1263 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam cut Silvia, who was first in line.", "Clumsily, Adam stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1264 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1265 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1266 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1267 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "In retaliation, Silvia pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1268 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1269 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1270 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1271 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1272 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1273 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,s_3,q_4,s_5,q_6,s_7,s_8,s_9,q_10,s_11,s_12,betweenstory_1,s_13,s_14,s_15,q_16,s_17,q_18,s_19,s_20,s_21,q_22,s_23,s_24,betweenstory_2,s_25,q_26,s_27,s_28,q_29,s_30,s_31,q_32,s_33,q_34,s_35,q_36,s_37,q_38,s_39,betweenstory_3,s_40,s_41,s_42,q_43,s_44,q_45,s_46,q_47,s_48,q_49,s_50,q_51,s_52,s_53,betweenstory_4,s_54,q_55,s_56,q_57,s_58,q_59,s_60,q_61,s_62,s_63,s_64,s_65,s_66,betweenstory_5,s_67,s_68,s_69,q_70,s_71,s_72,s_73,q_74,s_75,s_76,s_77,betweenstory_6,s_78,s_79,s_80,q_81,s_82,s_83,s_84,q_85,s_86,s_87,s_88,betweenstory_7,s_89,q_90,s_91,q_92,s_93,q_94,s_95,s_96,q_97,s_98,s_99,s_100,s_101,betweenstory_8,s_102,s_103,s_104,q_105,s_106,s_107,s_108,q_109,s_110,q_111,s_112,s_113,betweenstory_9,s_114,s_115,q_116,s_117,q_118,s_119,q_120,s_121,q_122,s_123,s_124,s_125,s_126,betweenstory_10,s_127,s_128,q_129,s_130,q_131,s_132,s_133,s_134,q_135,s_136,q_137,s_138,s_139,betweenstory_11,s_140,s_141,q_142,s_143,s_144,s_145,q_146,s_147,s_148,s_149,q_150,s_151,betweenstory_12,s_152,s_153,s_154,s_155,q_156,s_157,s_158,q_159,s_160,s_161,s_162,betweenstory_13,s_163,s_164,s_165,q_166,s_167,q_168,s_169,q_170,s_171,q_172,s_173,q_174,s_175,s_176,betweenstory_14,s_177,s_178,s_179,q_180,s_181,q_182,s_183,q_184,s_185,s_186,s_187,s_188,betweenstory_15,s_189,s_190,s_191,s_192,q_193,s_194,q_195,s_196,q_197,s_198,q_199,s_200,s_201,betweenstory_16,s_202,q_203,s_204,s_205,s_206,q_207,s_208,q_209,s_210,q_211,s_212,q_213,s_214,s_215,betweenstory_17,s_216,s_217,s_218,q_219,s_220,q_221,s_222,q_223,s_224,q_225,s_226,s_227,q_228,s_229,betweenstory_18,s_230,s_231,s_232,q_233,s_234,q_235,s_236,q_237,s_238,q_239,s_240,q_241,s_242,s_243,betweenstory_19,s_244,q_245,s_246,s_247,q_248,s_249,q_250,s_251,q_252,s_253,q_254,s_255,s_256,s_257,betweenstory_20,s_258,s_259,s_260,s_261,s_262,s_263,q_264,s_265,s_266,q_267,s_268,betweenstory_21,s_269,s_270,s_271,q_272,s_273,s_274,q_275,s_276,s_277,q_278,s_279,s_280,betweenstory_22,s_281,s_282,s_283,s_284,s_285,q_286,s_287,q_288,s_289,s_290,s_291,betweenstory_23,s_292,s_293,s_294,q_295,s_296,s_297,s_298,q_299,s_300,q_301,s_302,s_303,betweenstory_24,s_304,s_305,s_306,q_307,s_308,q_309,s_310,s_311,q_312,s_313,s_314,q_315,s_316,betweenstory_25,s_317,q_318,s_319,s_320,q_321,s_322,q_323,s_324,q_325,s_326,q_327,s_328,s_329,s_330,betweenstory_26,s_331,s_332,s_333,q_334,s_335,q_336,s_337,q_338,s_339,q_340,s_341,s_342,s_343,betweenstory_27,s_344,q_345,s_346,s_347,s_348,q_349,s_350,q_351,s_352,s_353,q_354,s_355,s_356,betweenstory_28,s_357,s_358,s_359,q_360,s_361,q_362,s_363,q_364,s_365,q_366,s_367,s_368,s_369,betweenstory_29,s_370,s_371,s_372,q_373,s_374,q_375,s_376,q_377,s_378,s_379,q_380,s_381,s_382,betweenstory_30,s_383,q_384,s_385,s_386,s_387,q_388,s_389,q_390,s_391,s_392,q_393,s_394,s_395,betweenstory_31,s_396,s_397,s_398,q_399,s_400,s_401,s_402,q_403,s_404,q_405,s_406,s_407,betweenstory_32,s_408,q_409,s_410,s_411,s_412,q_413,s_414,q_415,s_416,s_417,q_418,s_419,q_420,s_421,betweenstory_33,s_422,q_423,s_424,s_425,s_426,q_427,s_428,s_429,s_430,q_431,s_432,s_433,betweenstory_34,s_434,s_435,s_436,s_437,s_438,s_439,q_440,s_441,q_442,s_443,s_444,betweenstory_35,s_445,q_446,s_447,s_448,s_449,s_450,q_451,s_452,s_453,q_454,s_455,q_456,s_457,betweenstory_36,s_458,s_459,s_460,s_461,s_462,s_463,q_464,s_465,s_466,s_467,betweenstory_37,s_468,q_469,s_470,s_471,q_472,s_473,q_474,s_475,q_476,s_477,s_478,s_479,s_480,betweenstory_38,s_481,s_482,s_483,s_484,s_485,s_486,q_487,s_488,s_489,s_490,betweenstory_39,s_491,s_492,s_493,s_494,q_495,s_496,q_497,s_498,q_499,s_500,s_501,s_502,betweenstory_40,s_503,q_504,s_505,s_506,s_507,q_508,s_509,q_510,s_511,q_512,s_513,q_514,s_515,s_516,betweenstory_41,s_517,s_518,s_519,s_520,q_521,s_522,s_523,s_524,s_525,s_526,betweenstory_42,s_527,s_528,s_529,s_530,s_531,q_532,s_533,s_534,s_535,s_536,betweenstory_43,s_537,s_538,s_539,s_540,s_541,q_542,s_543,s_544,q_545,s_546,s_547,betweenstory_44,s_548,q_549,s_550,s_551,q_552,s_553,q_554,s_555,q_556,s_557,s_558,s_559,s_560,betweenstory_45,s_561,s_562,s_563,q_564,s_565,s_566,s_567,s_568,q_569,s_570,q_571,s_572,betweenstory_46,s_573,s_574,q_575,s_576,s_577,q_578,s_579,s_580,q_581,s_582,s_583,q_584,s_585,betweenstory_47,s_586,q_587,s_588,s_589,s_590,q_591,s_592,q_593,s_594,q_595,s_596,s_597,s_598,betweenstory_48,s_599,q_600,s_601,s_602,s_603,q_604,s_605,s_606,q_607,s_608,s_609,s_610,betweenstory_49,s_611,s_612,s_613,s_614,q_615,s_616,q_617,s_618,q_619,s_620,q_621,s_622,s_623,betweenstory_50,s_624,q_625,s_626,s_627,s_628,q_629,s_630,q_631,s_632,s_633,q_634,s_635,s_636,betweenstory_51,s_637,q_638,s_639,s_640,s_641,s_642,q_643,s_644,q_645,s_646,q_647,s_648,s_649,betweenstory_52,s_650,q_651,s_652,s_653,q_654,s_655,q_656,s_657,s_658,s_659,q_660,s_661,s_662,betweenstory_53,s_663,q_664,s_665,s_666,q_667,s_668,s_669,q_670,s_671,q_672,s_673,q_674,s_675,s_676,betweenstory_54,s_677,q_678,s_679,s_680,q_681,s_682,q_683,s_684,q_685,s_686,q_687,s_688,q_689,s_690,s_691,betweenstory_55,s_692,s_693,s_694,s_695,s_696,q_697,s_698,q_699,s_700,q_701,s_702,s_703,betweenstory_56,s_704,q_705,s_706,s_707,q_708,s_709,s_710,q_711,s_712,s_713,q_714,s_715,s_716,betweenstory_57,s_717,q_718,s_719,q_720,s_721,q_722,s_723,q_724,s_725,s_726,q_727,s_728,s_729,s_730,betweenstory_58,s_731,q_732,s_733,s_734,q_735,s_736,q_737,s_738,q_739,s_740,q_741,s_742,q_743,s_744,s_745,betweenstory_59,s_746,q_747,s_748,s_749,q_750,s_751,q_752,s_753,s_754,q_755,s_756,q_757,s_758,s_759,betweenstory_60,s_760,q_761,s_762,q_763,s_764,s_765,s_766,s_767,s_768,s_769,s_770,betweenstory_61,s_771,s_772,q_773,s_774,q_775,s_776,q_777,s_778,q_779,s_780,q_781,s_782,s_783,s_784,betweenstory_62,s_785,q_786,s_787,s_788,q_789,s_790,q_791,s_792,q_793,s_794,s_795,q_796,s_797,s_798,betweenstory_63,s_799,s_800,s_801,q_802,s_803,s_804,s_805,s_806,s_807,s_808,betweenstory_64,s_809,s_810,s_811,q_812,s_813,s_814,q_815,s_816,q_817,s_818,s_819,s_820,betweenstory_65,s_821,s_822,s_823,q_824,s_825,s_826,s_827,s_828,q_829,s_830,q_831,s_832,betweenstory_66,s_833,q_834,s_835,s_836,q_837,s_838,s_839,s_840,s_841,q_842,s_843,s_844,betweenstory_67,s_845,q_846,s_847,s_848,q_849,s_850,s_851,q_852,s_853,s_854,s_855,s_856,betweenstory_68,s_857,s_858,q_859,s_860,s_861,q_862,s_863,q_864,s_865,q_866,s_867,s_868,s_869,betweenstory_69,s_870,q_871,s_872,s_873,q_874,s_875,s_876,q_877,s_878,q_879,s_880,q_881,s_882,s_883,betweenstory_70,s_884,q_885,s_886,s_887,q_888,s_889,q_890,s_891,s_892,q_893,s_894,q_895,s_896,s_897,betweenstory_71,s_898,q_899,s_900,s_901,q_902,s_903,q_904,s_905,q_906,s_907,q_908,s_909,q_910,s_911,s_912,betweenstory_72,s_913,q_914,s_915,s_916,s_917,s_918,s_919,q_920,s_921,q_922,s_923,s_924,betweenstory_73,s_925,q_926,s_927,s_928,s_929,s_930,q_931,s_932,q_933,s_934,q_935,s_936,s_937,betweenstory_74,s_938,s_939,s_940,q_941,s_942,q_943,s_944,q_945,s_946,s_947,s_948,s_949,betweenstory_75,s_950,q_951,s_952,q_953,s_954,q_955,s_956,q_957,s_958,q_959,s_960,q_961,s_962,q_963,s_964,s_965,betweenstory_76,s_966,s_967,s_968,s_969,q_970,s_971,s_972,q_973,s_974,q_975,s_976,s_977,betweenstory_77,s_978,s_979,s_980,q_981,s_982,s_983,s_984,q_985,s_986,q_987,s_988,s_989,betweenstory_78,s_990,q_991,s_992,s_993,s_994,s_995,s_996,q_997,s_998,s_999,s_1000,betweenstory_79,s_1001,s_1002,s_1003,s_1004,q_1005,s_1006,q_1007,s_1008,q_1009,s_1010,q_1011,s_1012,s_1013,betweenstory_80,s_1014,s_1015,s_1016,q_1017,s_1018,s_1019,q_1020,s_1021,q_1022,s_1023,q_1024,s_1025,s_1026,betweenstory_81,s_1027,s_1028,s_1029,s_1030,s_1031,s_1032,q_1033,s_1034,s_1035,s_1036,betweenstory_82,s_1037,q_1038,s_1039,s_1040,s_1041,q_1042,s_1043,q_1044,s_1045,s_1046,q_1047,s_1048,s_1049,betweenstory_83,s_1050,s_1051,q_1052,s_1053,q_1054,s_1055,s_1056,q_1057,s_1058,q_1059,s_1060,s_1061,s_1062,betweenstory_84,s_1063,q_1064,s_1065,q_1066,s_1067,q_1068,s_1069,q_1070,s_1071,q_1072,s_1073,q_1074,s_1075,q_1076,s_1077,s_1078,betweenstory_85,s_1079,q_1080,s_1081,s_1082,q_1083,s_1084,s_1085,q_1086,s_1087,s_1088,q_1089,s_1090,q_1091,s_1092,betweenstory_86,s_1093,q_1094,s_1095,s_1096,q_1097,s_1098,q_1099,s_1100,s_1101,q_1102,s_1103,q_1104,s_1105,s_1106,betweenstory_87,s_1107,q_1108,s_1109,s_1110,q_1111,s_1112,q_1113,s_1114,q_1115,s_1116,q_1117,s_1118,q_1119,s_1120,s_1121,betweenstory_88,s_1122,q_1123,s_1124,s_1125,s_1126,s_1127,s_1128,s_1129,q_1130,s_1131,s_1132,betweenstory_89,s_1133,q_1134,s_1135,s_1136,s_1137,q_1138,s_1139,s_1140,s_1141,s_1142,s_1143,betweenstory_90,s_1144,s_1145,s_1146,q_1147,s_1148,s_1149,q_1150,s_1151,q_1152,s_1153,q_1154,s_1155,s_1156,betweenstory_91,s_1157,q_1158,s_1159,s_1160,q_1161,s_1162,s_1163,q_1164,s_1165,s_1166,q_1167,s_1168,q_1169,s_1170,betweenstory_92,s_1171,s_1172,q_1173,s_1174,q_1175,s_1176,q_1177,s_1178,q_1179,s_1180,q_1181,s_1182,q_1183,s_1184,s_1185,betweenstory_93,s_1186,q_1187,s_1188,s_1189,s_1190,q_1191,s_1192,s_1193,s_1194,q_1195,s_1196,s_1197,betweenstory_94,s_1198,s_1199,q_1200,s_1201,q_1202,s_1203,q_1204,s_1205,q_1206,s_1207,q_1208,s_1209,s_1210,q_1211,s_1212,betweenstory_95,s_1213,s_1214,s_1215,q_1216,s_1217,q_1218,s_1219,q_1220,s_1221,q_1222,s_1223,q_1224,s_1225,s_1226,betweenstory_96,s_1227,s_1228,s_1229,s_1230,q_1231,s_1232,q_1233,s_1234,s_1235,s_1236,s_1237,betweenstory_97,s_1238,q_1239,s_1240,s_1241,q_1242,s_1243,q_1244,s_1245,s_1246,s_1247,s_1248,s_1249,betweenstory_98,s_1250,s_1251,s_1252,s_1253,s_1254,s_1255,q_1256,s_1257,q_1258,s_1259,q_1260,s_1261,betweenstory_99,s_1262,q_1263,s_1264,s_1265,s_1266,q_1267,s_1268,s_1269,s_1270,q_1271,s_1272,s_1273,betweenstory_100,],

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