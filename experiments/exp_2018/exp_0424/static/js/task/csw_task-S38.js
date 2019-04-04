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
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_2 = {
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
	var s_3 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_4 = {
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
	var s_5 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_6 = {
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
	var s_7 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_9 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_10 = {
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
	var s_11 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_13 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_14 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_1 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_15 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_17 = {
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
	var s_18 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_19 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_20 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_21 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_22 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_24 = {
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
	var s_25 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_2 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_27 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_30 = {
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
	var s_31 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_34 = {
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
	var s_35 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_3 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_38 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_42 = {
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
	var s_43 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_44 = {
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
	var s_45 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_46 = {
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
	var s_47 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_48 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_49 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_51 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_52 = {
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
	var s_53 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_55 = {
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
	var s_56 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_58 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_59 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_60 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_61 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_62 = {
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
	var s_63 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_65 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_66 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_68 = {
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
	var s_69 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_70 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_71 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_72 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_73 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_74 = {
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
	var s_75 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_76 = {
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
	var s_77 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_79 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_82 = {
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
	var s_83 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_84 = {
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
	var s_85 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_87 = {
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
	var s_88 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_89 = {
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
	var s_90 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_92 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_95 = {
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
	var s_96 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_98 = {
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
	var s_99 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_100 = {
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
	var s_101 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_102 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_103 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_105 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_108 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_109 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_110 = {
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
	var s_111 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_112 = {
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
	var s_113 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_114 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_115 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_117 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "LOVEJUICE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_118 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_119 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_120 = {
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
	var s_121 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_123 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_124 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_126 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_127 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_128 = {
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
	var s_129 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_130 = {
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
	var s_131 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_132 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_133 = {
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

	var s_134 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_135 = {
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
	var s_136 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_138 = {
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
	var s_139 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_141 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_142 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_144 = {
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
	var s_145 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_11 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_147 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_148 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_150 = {
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
	var s_151 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_152 = {
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
	var s_153 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_155 = {
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
	var s_156 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_157 = {
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
	var s_158 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_160 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_161 = {
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
	var s_162 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_164 = {
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
	var s_165 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_170 = {
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

	var s_171 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_176 = {
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
	var s_177 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_178 = {
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
	var s_179 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_180 = {
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
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_181 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_183 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_186 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_187 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_188 = {
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
	var s_189 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_190 = {
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
	var s_191 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_192 = {
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
	var s_193 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_195 = {
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

	var s_196 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_197 = {
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
	var s_198 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_200 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_201 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_202 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_203 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_204 = {
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
	var s_205 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_206 = {
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
	var s_207 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_208 = {
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
	var s_209 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_210 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_211 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_212 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_218 = {
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
	var s_219 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_221 = {
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

	var s_222 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_225 = {
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
	var s_226 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_227 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_229 = {
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
	var s_230 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_232 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_233 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_236 = {
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
	var s_237 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_238 = {
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
	var s_239 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_242 = {
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
	var s_243 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_244 = {
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

	var s_245 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
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
	var s_248 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_250 = {
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
	var s_251 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_253 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_254 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_255 = {
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

	var s_256 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_257 = {
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
	var s_258 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_260 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_261 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_262 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Adam.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_263 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_264 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_265 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_267 = {
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
	var s_268 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_270 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_271 = {
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
	var s_272 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_274 = {
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
	var s_275 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_276 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_277 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_278 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_279 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_280 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_281 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_22 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_284 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_285 = {
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
	var s_286 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_294 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_295 = {
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
	var s_296 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_298 = {
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
	var s_299 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_301 = {
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
	var s_302 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_303 = {
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
	var s_304 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_305 = {
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
	var s_306 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_308 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_311 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_312 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_314 = {
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
	var s_315 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_316 = {
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
	var s_317 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_319 = {
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

	var s_320 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_321 = {
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
	var s_322 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_325 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_326 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_328 = {
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
	var s_329 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_331 = {
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

	var s_332 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_333 = {
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
	var s_334 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_337 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_338 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_341 = {
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
	var s_342 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_343 = {
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
	var s_344 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_345 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
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
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_350 = {
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
	var s_351 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_352 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
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
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_355 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
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
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_358 = {
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
	var s_359 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_361 = {
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
	var s_362 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_363 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_364 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_365 = {
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
	var s_366 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_368 = {
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
	var s_369 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_371 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_375 = {
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
	var s_376 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_377 = {
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
	var s_378 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_379 = {
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
	var s_380 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_382 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "LOVEJUICE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_383 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_384 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_385 = {
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
	var s_386 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
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
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
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
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_393 = {
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
	var s_394 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
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
		var q_398 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Olivia.", "Silvia hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_399 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_401 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_402 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_403 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_404 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_405 = {
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
	var s_406 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_408 = {
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

	var s_409 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_411 = {
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
	var s_412 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_413 = {
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
	var s_414 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_415 = {
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
	var s_416 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_417 = {
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
	var s_418 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_420 = {
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
	var s_421 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_423 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_424 = {
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
	var s_425 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_427 = {
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
	var s_428 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_429 = {
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
	var s_430 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_431 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_432 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_433 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_434 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_436 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_437 = {
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

	var s_438 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_442 = {
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
	var s_443 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_445 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_446 = {
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
	var s_447 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_449 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_450 = {
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
	var s_451 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_453 = {
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
	var s_454 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_456 = {
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
	var s_457 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_458 = {
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
	var s_459 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_462 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_465 = {
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
	var s_466 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_467 = {
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
	var s_468 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_471 = {
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
	var s_472 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_474 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_475 = {
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
	var s_476 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_479 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_480 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_484 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_485 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_486 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_487 = {
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
	var s_488 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_490 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_491 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_495 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_496 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_39 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_498 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_499 = {
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
	var s_500 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_503 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_504 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_505 = {
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
	var s_506 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_507 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_508 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_509 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_510 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_512 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_515 = {
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
	var s_516 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_517 = {
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
	var s_518 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_520 = {
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
	var s_521 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_522 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_523 = {
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
	var s_524 = {
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

	var s_525 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_526 = {
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
	var s_527 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_530 = {
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
	var s_531 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_532 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_533 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_534 = {
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
	var s_535 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_536 = {
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
	var s_537 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_539 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_540 = {
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
	var s_541 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_542 = {
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
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_543 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_545 = {
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
	var s_546 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_547 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_548 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_549 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_550 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_553 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_554 = {
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
	var s_555 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_556 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_557 = {
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
	var s_558 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_559 = {
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
	var s_560 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_565 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_568 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_569 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_570 = {
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
	var s_571 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_572 = {
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
	var s_573 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_574 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_575 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_578 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_580 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_582 = {
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
	var s_583 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_584 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_585 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_586 = {
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
	var s_587 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_588 = {
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
	var s_589 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_591 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_594 = {
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
	var s_595 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_598 = {
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
	var s_599 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_600 = {
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
	var s_601 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_602 = {
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

	var s_603 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_606 = {
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
	var s_607 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_608 = {
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
	var s_609 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_612 = {
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
	var s_613 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_614 = {
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

	var s_615 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_618 = {
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
	var s_619 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_620 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_621 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_622 = {
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
	var s_623 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_625 = {
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
	var s_626 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_627 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "LOVEJUICE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_628 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_629 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_630 = {
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
	var s_631 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_632 = {
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
	var s_633 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_635 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_636 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_639 = {
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
	var s_640 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_642 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_645 = {
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
	var s_646 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_647 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_648 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_650 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_651 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_653 = {
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

	var s_654 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_655 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Silvia, who was first in line.", "Clumsily, Olivia stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_656 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_660 = {
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
	var s_661 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_662 = {
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
	var s_663 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_52 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_666 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_667 = {
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
	var s_668 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_671 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_672 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_674 = {
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
	var s_675 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_676 = {
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
	var s_677 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_679 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_680 = {
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
	var s_681 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_682 = {
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
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_683 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_684 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_685 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_686 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_688 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_689 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_690 = {
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
	var s_691 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_692 = {
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

	var s_693 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_694 = {
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
	var s_695 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_697 = {
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
	var s_698 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_699 = {
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
	var s_700 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_703 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_704 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_705 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_706 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_707 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_708 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_709 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_710 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_711 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_712 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_713 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_715 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_716 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_718 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_719 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_721 = {
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
	var s_722 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_723 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_724 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_725 = {
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
	var s_726 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_727 = {
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
	var s_728 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_729 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_730 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_731 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_732 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_733 = {
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
	var s_734 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
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
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_740 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_741 = {
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
	var s_742 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_744 = {
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

	var s_745 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_746 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_747 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_748 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_749 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_750 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_751 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_752 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_753 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_755 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_59 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_756 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_757 = {
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
	var s_758 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_759 = {
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
	var s_760 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_761 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_762 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_763 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_764 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_765 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_768 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_769 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_770 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_771 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_772 = {
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
	var s_773 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_774 = {
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
	var s_775 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_776 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_777 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_778 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_779 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_781 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_783 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_784 = {
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
	var s_785 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_786 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_787 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_788 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_789 = {
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
	var s_790 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_791 = {
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
	var s_792 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_793 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_794 = {
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
	var s_795 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_796 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_797 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_798 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_799 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Adam.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_800 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_801 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_802 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_803 = {
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
	var s_804 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_805 = {
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
	var s_806 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_808 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_809 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_810 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_811 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_812 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_813 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_814 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_815 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_816 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_817 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_818 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_819 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_821 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_823 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_824 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_825 = {
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
	var s_826 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_827 = {
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
	var s_828 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_829 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_830 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_831 = {
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

	var s_832 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_833 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_834 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_835 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_836 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_838 = {
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
	var s_839 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_840 = {
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
	var s_841 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_842 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_843 = {
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
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_844 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_66 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_845 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_846 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_847 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_848 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_849 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "In retaliation, Silvia pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_850 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_851 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_852 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_853 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_854 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_855 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_856 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_67 = {
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
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_859 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Olivia.", "Silvia hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_860 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_861 = {
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
	var s_862 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_863 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_864 = {
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
	var s_865 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_866 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_867 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_868 = {
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

	var s_869 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_870 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_871 = {
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
	var s_872 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_873 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_874 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_875 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_876 = {
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
	var s_877 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_878 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_879 = {
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
	var s_880 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_881 = {
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

	var s_882 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_884 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_885 = {
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
	var s_886 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_887 = {
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
	var s_888 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_889 = {
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
	var s_890 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_893 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_894 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_895 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia cut Silvia, who was first in line.", "Clumsily, Olivia stepped on Silvia's foot."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_896 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_897 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Olivia.", "Silvia hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_898 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_899 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_900 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_902 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_903 = {
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
	var s_904 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_905 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_906 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_907 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_71 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_908 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_909 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_910 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_911 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_912 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_913 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_914 = {
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
	var s_915 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_916 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_917 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_918 = {
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

	var s_919 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_921 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_922 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_923 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_924 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_925 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_926 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_927 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_928 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_929 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_930 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_931 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_932 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_933 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_934 = {
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
	var s_935 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_936 = {
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
	var s_937 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_938 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_939 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_940 = {
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
	var s_941 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_942 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_943 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_944 = {
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
	var s_945 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_946 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_947 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_948 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_949 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_950 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_951 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_952 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_954 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_955 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_956 = {
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
	var s_957 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_958 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_959 = {
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
	var s_960 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_961 = {
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
	var s_962 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_963 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_964 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_965 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_966 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_968 = {
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

	var s_969 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_970 = {
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
	var s_971 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_973 = {
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
	var s_974 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_975 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_976 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_977 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_978 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_979 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_980 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_981 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy.", "The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "LOVEJUICE",
						"true_tonode": "END",
						"false_tonode": "END",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_982 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_983 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_984 = {
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
	var s_985 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_986 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_987 = {
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
	var s_988 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_989 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_990 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_991 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_993 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_994 = {
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

	var s_995 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_997 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_998 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1000 = {
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
	var s_1001 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1002 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1003 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1004 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1005 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1006 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1007 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1009 = {
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
	var s_1010 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1011 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Adam.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1012 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1013 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1014 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1015 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1016 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1017 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1018 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1019 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1020 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1021 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1022 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1023 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1024 = {
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
	var s_1025 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1026 = {
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
	var s_1027 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1029 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_81 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1032 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1033 = {
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
	var s_1034 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1035 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1036 = {
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
	var s_1037 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1038 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1039 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1040 = {
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
	var s_1041 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1042 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1043 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1044 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1045 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1046 = {
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
	var s_1047 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1049 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1050 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1051 = {
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
	var s_1052 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1053 = {
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
	var s_1054 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1055 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1056 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1057 = {
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
	var s_1058 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1059 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1060 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1062 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Adam turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1063 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1064 = {
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
	var s_1065 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1067 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1068 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1069 = {
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
	var s_1070 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1071 = {
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

	var s_1072 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1073 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1074 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Adam.", "Bill hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1077 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1078 = {
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
	var s_1079 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1080 = {
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
	var s_1081 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1082 = {
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
	var s_1083 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1084 = {
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
	var s_1085 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1086 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1087 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1088 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1089 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1090 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1091 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "In retaliation, Bill pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1092 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1093 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1094 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1095 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1096 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1097 = {
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
	var s_1098 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1099 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1100 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1101 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1102 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1103 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1104 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1106 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1107 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1108 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1109 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1110 = {
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

	var s_1111 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1112 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1113 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1114 = {
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
	var s_1115 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1116 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1117 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1118 = {
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
	var s_1119 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1120 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1121 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1122 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_88 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1123 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1124 = {
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
	var s_1125 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1126 = {
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
	var s_1127 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1128 = {
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
	var s_1129 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1130 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1131 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1133 = {
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
	var s_1134 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1136 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1137 = {
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

	var s_1138 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1139 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1140 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill was enraged and said, 'Excuse me?!", "Silvia was enraged and said, 'Excuse me?!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "STEPFOOT",
						"true_tonode": "EXCUSEME",
						"false_tonode": "EXCUSEME",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1142 = {
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
	var s_1143 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1144 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Adam.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1145 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1146 = {
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
	var s_1147 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1148 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1150 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_90 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1151 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1152 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1153 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1154 = {
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
	var s_1155 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1156 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1157 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1159 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1160 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1161 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1162 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1163 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1164 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1165 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1166 = {
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
	var s_1167 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1168 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1169 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1170 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1171 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1172 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1173 = {
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
	var s_1174 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1175 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1176 = {
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

	var s_1177 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1178 = {
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
	var s_1179 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1181 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1182 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1183 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1184 = {
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
	var s_1185 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1186 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1188 = {
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

	var s_1189 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1190 = {
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
	var s_1191 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1192 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Adam.", "Bill hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1193 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1194 = {
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
	var s_1195 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1196 = {
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
	var s_1197 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1198 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1199 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1201 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1202 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1203 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1204 = {
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
	var s_1205 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1206 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1207 = {
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
	var s_1208 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1209 = {
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
	var s_1210 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1211 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1212 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1213 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1214 = {
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
	var s_1215 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1216 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1217 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1218 = {
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
	var s_1219 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1220 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1221 = {
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
	var s_1222 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1223 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1224 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1225 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1226 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1227 = {
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
	var s_1228 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1229 = {
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
	var s_1230 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1231 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1232 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1233 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1234 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1235 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1236 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1238 = {
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
	var s_1239 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1240 = {
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
	var s_1241 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1242 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1243 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1244 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1245 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1246 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Adam.", "Bill hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1247 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1248 = {
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
	var s_1249 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1250 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1251 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1252 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1253 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1254 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1255 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1256 = {
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
	var s_1257 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1258 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1259 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1260 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1261 = {
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
	var s_1262 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1263 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1264 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1265 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1266 = {
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
	var s_1267 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1268 = {
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

	var s_1269 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1270 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1271 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1272 = {
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
	var s_1273 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1274 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1275 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1276 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1277 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1278 = {
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
	var s_1279 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1280 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1281 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1282 = {
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
	var s_1283 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,q_4,s_5,q_6,s_7,s_8,s_9,q_10,s_11,s_12,q_13,s_14,betweenstory_1,s_15,s_16,q_17,s_18,s_19,q_20,s_21,s_22,s_23,q_24,s_25,s_26,betweenstory_2,s_27,s_28,s_29,q_30,s_31,s_32,s_33,q_34,s_35,s_36,s_37,betweenstory_3,s_38,s_39,s_40,s_41,q_42,s_43,q_44,s_45,q_46,s_47,q_48,s_49,s_50,betweenstory_4,s_51,q_52,s_53,s_54,q_55,s_56,s_57,q_58,s_59,q_60,s_61,q_62,s_63,s_64,betweenstory_5,s_65,s_66,s_67,q_68,s_69,q_70,s_71,q_72,s_73,q_74,s_75,q_76,s_77,s_78,betweenstory_6,s_79,s_80,s_81,q_82,s_83,q_84,s_85,s_86,q_87,s_88,q_89,s_90,s_91,betweenstory_7,s_92,s_93,s_94,q_95,s_96,s_97,q_98,s_99,q_100,s_101,q_102,s_103,s_104,betweenstory_8,s_105,s_106,s_107,q_108,s_109,q_110,s_111,q_112,s_113,q_114,s_115,s_116,q_117,s_118,betweenstory_9,s_119,q_120,s_121,s_122,q_123,s_124,s_125,q_126,s_127,q_128,s_129,q_130,s_131,q_132,s_133,betweenstory_10,s_134,q_135,s_136,s_137,q_138,s_139,s_140,q_141,s_142,s_143,q_144,s_145,s_146,betweenstory_11,s_147,s_148,s_149,q_150,s_151,q_152,s_153,s_154,q_155,s_156,q_157,s_158,s_159,betweenstory_12,s_160,q_161,s_162,s_163,q_164,s_165,s_166,s_167,s_168,s_169,s_170,betweenstory_13,s_171,s_172,s_173,s_174,s_175,q_176,s_177,q_178,s_179,q_180,s_181,s_182,betweenstory_14,s_183,s_184,s_185,q_186,s_187,q_188,s_189,q_190,s_191,q_192,s_193,s_194,s_195,betweenstory_15,s_196,q_197,s_198,s_199,q_200,s_201,q_202,s_203,q_204,s_205,q_206,s_207,q_208,s_209,q_210,s_211,betweenstory_16,s_212,s_213,s_214,s_215,s_216,s_217,q_218,s_219,s_220,s_221,betweenstory_17,s_222,s_223,s_224,q_225,s_226,s_227,s_228,q_229,s_230,s_231,s_232,betweenstory_18,s_233,s_234,s_235,q_236,s_237,q_238,s_239,s_240,s_241,q_242,s_243,s_244,betweenstory_19,s_245,s_246,s_247,s_248,s_249,q_250,s_251,s_252,q_253,s_254,s_255,betweenstory_20,s_256,q_257,s_258,s_259,q_260,s_261,q_262,s_263,q_264,s_265,s_266,q_267,s_268,s_269,betweenstory_21,s_270,q_271,s_272,s_273,q_274,s_275,q_276,s_277,q_278,s_279,q_280,s_281,s_282,s_283,betweenstory_22,s_284,q_285,s_286,s_287,s_288,s_289,s_290,s_291,s_292,s_293,betweenstory_23,s_294,q_295,s_296,s_297,q_298,s_299,s_300,q_301,s_302,q_303,s_304,q_305,s_306,s_307,betweenstory_24,s_308,s_309,s_310,q_311,s_312,s_313,q_314,s_315,q_316,s_317,s_318,s_319,betweenstory_25,s_320,q_321,s_322,s_323,s_324,q_325,s_326,s_327,q_328,s_329,s_330,s_331,betweenstory_26,s_332,q_333,s_334,s_335,s_336,q_337,s_338,s_339,s_340,q_341,s_342,q_343,s_344,betweenstory_27,s_345,s_346,s_347,s_348,s_349,q_350,s_351,q_352,s_353,q_354,s_355,s_356,betweenstory_28,s_357,q_358,s_359,s_360,q_361,s_362,q_363,s_364,q_365,s_366,s_367,q_368,s_369,s_370,betweenstory_29,s_371,s_372,s_373,s_374,q_375,s_376,q_377,s_378,q_379,s_380,s_381,q_382,s_383,betweenstory_30,s_384,q_385,s_386,s_387,s_388,s_389,q_390,s_391,s_392,q_393,s_394,s_395,betweenstory_31,s_396,s_397,q_398,s_399,s_400,q_401,s_402,q_403,s_404,q_405,s_406,s_407,s_408,betweenstory_32,s_409,s_410,q_411,s_412,q_413,s_414,q_415,s_416,q_417,s_418,s_419,q_420,s_421,s_422,betweenstory_33,s_423,q_424,s_425,s_426,q_427,s_428,q_429,s_430,q_431,s_432,q_433,s_434,s_435,q_436,s_437,betweenstory_34,s_438,s_439,s_440,s_441,q_442,s_443,s_444,s_445,q_446,s_447,s_448,betweenstory_35,s_449,q_450,s_451,s_452,q_453,s_454,s_455,q_456,s_457,q_458,s_459,s_460,s_461,betweenstory_36,s_462,s_463,s_464,q_465,s_466,q_467,s_468,s_469,s_470,q_471,s_472,s_473,betweenstory_37,s_474,q_475,s_476,s_477,s_478,q_479,s_480,s_481,s_482,s_483,q_484,s_485,betweenstory_38,s_486,q_487,s_488,s_489,q_490,s_491,s_492,s_493,s_494,q_495,s_496,s_497,betweenstory_39,s_498,q_499,s_500,s_501,s_502,q_503,s_504,q_505,s_506,q_507,s_508,q_509,s_510,s_511,betweenstory_40,s_512,s_513,s_514,q_515,s_516,q_517,s_518,s_519,q_520,s_521,s_522,q_523,s_524,betweenstory_41,s_525,q_526,s_527,s_528,s_529,q_530,s_531,q_532,s_533,q_534,s_535,q_536,s_537,s_538,betweenstory_42,s_539,q_540,s_541,q_542,s_543,s_544,q_545,s_546,q_547,s_548,q_549,s_550,s_551,s_552,betweenstory_43,s_553,q_554,s_555,s_556,q_557,s_558,q_559,s_560,s_561,s_562,s_563,s_564,betweenstory_44,s_565,s_566,s_567,q_568,s_569,q_570,s_571,q_572,s_573,q_574,s_575,s_576,s_577,betweenstory_45,s_578,s_579,s_580,s_581,q_582,s_583,q_584,s_585,q_586,s_587,q_588,s_589,s_590,betweenstory_46,s_591,s_592,s_593,q_594,s_595,s_596,s_597,q_598,s_599,q_600,s_601,s_602,betweenstory_47,s_603,s_604,s_605,q_606,s_607,q_608,s_609,s_610,s_611,q_612,s_613,s_614,betweenstory_48,s_615,s_616,s_617,q_618,s_619,q_620,s_621,q_622,s_623,s_624,q_625,s_626,q_627,s_628,betweenstory_49,s_629,q_630,s_631,q_632,s_633,s_634,q_635,s_636,s_637,s_638,q_639,s_640,s_641,betweenstory_50,s_642,s_643,s_644,q_645,s_646,q_647,s_648,s_649,q_650,s_651,s_652,s_653,betweenstory_51,s_654,q_655,s_656,s_657,s_658,s_659,q_660,s_661,q_662,s_663,s_664,s_665,betweenstory_52,s_666,q_667,s_668,s_669,s_670,q_671,s_672,s_673,q_674,s_675,q_676,s_677,s_678,betweenstory_53,s_679,q_680,s_681,q_682,s_683,q_684,s_685,s_686,s_687,q_688,s_689,q_690,s_691,s_692,betweenstory_54,s_693,q_694,s_695,s_696,q_697,s_698,q_699,s_700,s_701,s_702,q_703,s_704,s_705,betweenstory_55,s_706,s_707,s_708,s_709,q_710,s_711,q_712,s_713,s_714,q_715,s_716,s_717,betweenstory_56,s_718,s_719,s_720,q_721,s_722,q_723,s_724,q_725,s_726,q_727,s_728,q_729,s_730,s_731,betweenstory_57,s_732,q_733,s_734,s_735,s_736,q_737,s_738,q_739,s_740,q_741,s_742,s_743,s_744,betweenstory_58,s_745,s_746,s_747,q_748,s_749,s_750,s_751,q_752,s_753,s_754,s_755,betweenstory_59,s_756,q_757,s_758,q_759,s_760,q_761,s_762,q_763,s_764,s_765,s_766,s_767,s_768,betweenstory_60,s_769,s_770,s_771,q_772,s_773,q_774,s_775,s_776,q_777,s_778,s_779,s_780,betweenstory_61,s_781,s_782,s_783,q_784,s_785,s_786,s_787,s_788,q_789,s_790,q_791,s_792,betweenstory_62,s_793,q_794,s_795,s_796,q_797,s_798,q_799,s_800,q_801,s_802,q_803,s_804,q_805,s_806,s_807,betweenstory_63,s_808,s_809,s_810,s_811,q_812,s_813,s_814,s_815,q_816,s_817,s_818,betweenstory_64,s_819,s_820,s_821,s_822,q_823,s_824,q_825,s_826,q_827,s_828,q_829,s_830,s_831,betweenstory_65,s_832,s_833,s_834,q_835,s_836,s_837,q_838,s_839,q_840,s_841,s_842,q_843,s_844,betweenstory_66,s_845,s_846,s_847,s_848,q_849,s_850,s_851,q_852,s_853,q_854,s_855,s_856,betweenstory_67,s_857,s_858,q_859,s_860,q_861,s_862,s_863,q_864,s_865,s_866,s_867,s_868,betweenstory_68,s_869,s_870,q_871,s_872,s_873,q_874,s_875,q_876,s_877,s_878,q_879,s_880,s_881,betweenstory_69,s_882,s_883,s_884,q_885,s_886,q_887,s_888,q_889,s_890,s_891,s_892,s_893,betweenstory_70,s_894,q_895,s_896,q_897,s_898,q_899,s_900,s_901,s_902,q_903,s_904,q_905,s_906,s_907,betweenstory_71,s_908,s_909,s_910,s_911,s_912,s_913,q_914,s_915,q_916,s_917,s_918,betweenstory_72,s_919,s_920,s_921,q_922,s_923,s_924,q_925,s_926,s_927,s_928,s_929,betweenstory_73,s_930,s_931,s_932,s_933,q_934,s_935,q_936,s_937,q_938,s_939,q_940,s_941,s_942,betweenstory_74,s_943,q_944,s_945,s_946,q_947,s_948,q_949,s_950,s_951,s_952,s_953,s_954,betweenstory_75,s_955,q_956,s_957,s_958,q_959,s_960,q_961,s_962,q_963,s_964,q_965,s_966,s_967,s_968,betweenstory_76,s_969,q_970,s_971,s_972,q_973,s_974,s_975,q_976,s_977,s_978,q_979,s_980,q_981,s_982,betweenstory_77,s_983,q_984,s_985,s_986,q_987,s_988,q_989,s_990,s_991,s_992,s_993,s_994,betweenstory_78,s_995,s_996,s_997,s_998,s_999,q_1000,s_1001,q_1002,s_1003,s_1004,s_1005,betweenstory_79,s_1006,s_1007,s_1008,q_1009,s_1010,q_1011,s_1012,q_1013,s_1014,q_1015,s_1016,s_1017,q_1018,s_1019,betweenstory_80,s_1020,s_1021,s_1022,s_1023,q_1024,s_1025,q_1026,s_1027,s_1028,q_1029,s_1030,s_1031,betweenstory_81,s_1032,q_1033,s_1034,s_1035,q_1036,s_1037,q_1038,s_1039,q_1040,s_1041,s_1042,s_1043,s_1044,betweenstory_82,s_1045,q_1046,s_1047,s_1048,q_1049,s_1050,q_1051,s_1052,q_1053,s_1054,s_1055,s_1056,q_1057,s_1058,betweenstory_83,s_1059,s_1060,s_1061,q_1062,s_1063,q_1064,s_1065,s_1066,q_1067,s_1068,q_1069,s_1070,s_1071,betweenstory_84,s_1072,s_1073,q_1074,s_1075,s_1076,s_1077,q_1078,s_1079,q_1080,s_1081,q_1082,s_1083,q_1084,s_1085,betweenstory_85,s_1086,s_1087,s_1088,q_1089,s_1090,q_1091,s_1092,q_1093,s_1094,q_1095,s_1096,q_1097,s_1098,s_1099,betweenstory_86,s_1100,s_1101,s_1102,q_1103,s_1104,s_1105,s_1106,s_1107,q_1108,s_1109,s_1110,betweenstory_87,s_1111,s_1112,s_1113,q_1114,s_1115,q_1116,s_1117,q_1118,s_1119,s_1120,s_1121,s_1122,betweenstory_88,s_1123,q_1124,s_1125,q_1126,s_1127,q_1128,s_1129,q_1130,s_1131,s_1132,q_1133,s_1134,s_1135,q_1136,s_1137,betweenstory_89,s_1138,s_1139,q_1140,s_1141,q_1142,s_1143,q_1144,s_1145,q_1146,s_1147,s_1148,s_1149,s_1150,betweenstory_90,s_1151,s_1152,s_1153,q_1154,s_1155,s_1156,s_1157,s_1158,q_1159,s_1160,q_1161,s_1162,betweenstory_91,s_1163,s_1164,s_1165,q_1166,s_1167,q_1168,s_1169,s_1170,q_1171,s_1172,q_1173,s_1174,q_1175,s_1176,betweenstory_92,s_1177,q_1178,s_1179,s_1180,q_1181,s_1182,s_1183,q_1184,s_1185,s_1186,s_1187,s_1188,betweenstory_93,s_1189,q_1190,s_1191,q_1192,s_1193,q_1194,s_1195,q_1196,s_1197,s_1198,s_1199,s_1200,q_1201,s_1202,betweenstory_94,s_1203,q_1204,s_1205,s_1206,q_1207,s_1208,q_1209,s_1210,q_1211,s_1212,s_1213,q_1214,s_1215,s_1216,betweenstory_95,s_1217,q_1218,s_1219,s_1220,q_1221,s_1222,q_1223,s_1224,q_1225,s_1226,q_1227,s_1228,q_1229,s_1230,s_1231,betweenstory_96,s_1232,s_1233,s_1234,q_1235,s_1236,s_1237,q_1238,s_1239,q_1240,s_1241,s_1242,s_1243,betweenstory_97,s_1244,s_1245,q_1246,s_1247,q_1248,s_1249,q_1250,s_1251,s_1252,q_1253,s_1254,s_1255,q_1256,s_1257,betweenstory_98,s_1258,s_1259,s_1260,q_1261,s_1262,s_1263,s_1264,s_1265,q_1266,s_1267,s_1268,betweenstory_99,s_1269,s_1270,s_1271,q_1272,s_1273,q_1274,s_1275,q_1276,s_1277,q_1278,s_1279,q_1280,s_1281,q_1282,s_1283,betweenstory_100,],

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