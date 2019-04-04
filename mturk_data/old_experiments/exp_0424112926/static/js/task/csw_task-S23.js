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
		var q_2 = {
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
	var s_3 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_5 = {
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
	var s_6 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_7 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Olivia.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_8 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_9 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_10 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_12 = {
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
	var s_13 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_14 = {
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

	var s_15 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_16 = {
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
	var s_17 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_18 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_19 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_20 = {
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
	var s_21 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_22 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Adam.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_23 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_24 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Silvia's face.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_25 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_28 = {
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

	var s_29 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_32 = {
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
	var s_33 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_36 = {
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
	var s_37 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
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
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_41 = {
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
	var s_42 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_43 = {
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
	var s_44 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_46 = {
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
	var s_47 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_49 = {
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
	var s_50 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_51 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_52 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_4 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_54 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_56 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_57 = {
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
	var s_58 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_59 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_61 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_62 = {
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
	var s_63 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_65 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_66 = {
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
	var s_67 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_69 = {
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
	var s_70 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_71 = {
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
	var s_75 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_77 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_78 = {
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
	var s_85 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_86 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_87 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_88 = {
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
	var s_89 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_90 = {
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
	var s_91 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_92 = {
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
	var s_93 = {
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

	var s_94 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_95 = {
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
	var s_96 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_97 = {
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
	var s_98 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_99 = {
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
	var s_100 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_101 = {
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
	var s_102 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_103 = {
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
	var s_104 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_105 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_106 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_107 = {
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
	var s_108 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_109 = {
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

	var s_110 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_111 = {
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
	var s_112 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_114 = {
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
	var s_115 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_116 = {
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
	var s_117 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_119 = {
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
	var s_120 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_121 = {
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
	var s_122 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_9 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_124 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_125 = {
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
	var s_126 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_128 = {
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
	var s_129 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_131 = {
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
	var s_132 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_134 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_135 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_10 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_137 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_138 = {
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
	var s_139 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_141 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_142 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_144 = {
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
	var s_145 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_147 = {
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
	var s_148 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_149 = {
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

	var s_150 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_151 = {
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
	var s_152 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_154 = {
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
	var s_155 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_156 = {
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
	var s_157 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_161 = {
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

	var s_162 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_165 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Bill and gave a very mean look.", "Olivia turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_166 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_167 = {
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
	var s_168 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_169 = {
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
	var s_170 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_173 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_174 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_177 = {
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
	var s_178 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_179 = {
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
	var s_180 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_181 = {
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
	var s_182 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_184 = {
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
	var s_185 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_14 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_187 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_189 = {
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
	var s_190 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_192 = {
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
	var s_193 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_195 = {
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
	var s_196 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_197 = {
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
	var s_198 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_199 = {
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
	var s_200 = {
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

	var s_201 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_202 = {
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
	var s_203 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_205 = {
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
	var s_206 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_209 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Adam to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_210 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_211 = {
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
	var s_212 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_214 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_218 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_219 = {
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
	var s_220 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_221 = {
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
	var s_222 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_223 = {
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
	var s_224 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_225 = {
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
	var s_226 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_17 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_227 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_228 = {
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
	var s_229 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_231 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_232 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_234 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_235 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_236 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_237 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_238 = {
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
	var s_239 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_18 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_241 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_245 = {
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
	var s_246 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_247 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_248 = {
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
	var s_249 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_251 = {
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
	var s_252 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_19 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_253 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_256 = {
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
	var s_257 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_260 = {
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
	var s_261 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_264 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_266 = {
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
	var s_267 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_269 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_270 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_271 = {
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
	var s_272 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_274 = {
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
	var s_275 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_276 = {
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

	var s_277 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_278 = {
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
	var s_279 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_281 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_282 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_283 = {
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
	var s_284 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_285 = {
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
	var s_286 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_287 = {
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
	var s_288 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_289 = {
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
	var s_290 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_291 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_22 = {
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
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_296 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
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
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_299 = {
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
	var s_300 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_301 = {
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

	var betweenstory_23 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_304 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_305 = {
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
	var s_306 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_307 = {
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
	var s_308 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_309 = {
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
	var s_310 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_311 = {
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
	var s_312 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_313 = {
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
	var s_314 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_315 = {
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
	var s_316 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_319 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_322 = {
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
	var s_323 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_325 = {
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
	var s_326 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_327 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_328 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_329 = {
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
	var s_330 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_332 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_333 = {
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
	var s_334 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_336 = {
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
	var s_337 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_340 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_341 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_342 = {
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
	var s_343 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_344 = {
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
	var s_345 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_346 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_347 = {
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
	var s_348 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_349 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_350 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_351 = {
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
	var s_352 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_355 = {
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
	var s_356 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_358 = {
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

	var s_359 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_360 = {
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
	var s_361 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_363 = {
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
	var s_364 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_365 = {
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
	var s_366 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_367 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_368 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_370 = {
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
	var s_371 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_373 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_375 = {
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
	var s_376 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_377 = {
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
	var s_378 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_380 = {
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
	var s_381 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_383 = {
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
	var s_384 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_385 = {
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

	var s_386 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_391 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_392 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_393 = {
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
	var s_394 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_30 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_397 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_403 = {
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
	var s_404 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_405 = {
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
	var s_406 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_31 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_408 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_412 = {
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
	var s_413 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_414 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_416 = {
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
	var s_417 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_419 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_421 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_422 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_423 = {
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
	var s_424 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_426 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_427 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_428 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_429 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_430 = {
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
	var s_431 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_432 = {
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

	var s_433 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_436 = {
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
	var s_437 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_438 = {
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
	var s_439 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_440 = {
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
	var s_441 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_442 = {
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
	var s_443 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_444 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_445 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_447 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_448 = {
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
	var s_449 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_453 = {
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
	var s_454 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_455 = {
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
	var s_456 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_457 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_458 = {
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

	var s_459 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_460 = {
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
	var s_461 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_462 = {
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
	var s_463 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_464 = {
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
	var s_465 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_469 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_470 = {
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
	var s_471 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_36 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_472 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_476 = {
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
	var s_477 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_479 = {
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
	var s_480 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_481 = {
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
	var s_482 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_484 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_485 = {
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
	var s_486 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_488 = {
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
	var s_489 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_490 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_491 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_492 = {
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
	var s_493 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_494 = {
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
	var s_495 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_498 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_501 = {
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
	var s_502 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_503 = {
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
	var s_504 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_505 = {
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
	var s_506 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_508 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_509 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_510 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_511 = {
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

	var s_512 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_515 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Olivia proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
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
		var q_519 = {
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
	var s_520 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
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
	var s_523 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_40 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_524 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_528 = {
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
	var s_529 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_533 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_534 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_41 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_535 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_536 = {
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
	var s_537 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_539 = {
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
	var s_540 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_541 = {
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
	var s_542 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_545 = {
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
	var s_546 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_547 = {
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
	var s_548 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_549 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_551 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Olivia.", "Bill hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_552 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_554 = {
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
	var s_555 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_556 = {
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
	var s_557 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_559 = {
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
	var s_560 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_562 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_563 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_565 = {
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
	var s_566 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_567 = {
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
	var s_568 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_570 = {
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
	var s_571 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_574 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_577 = {
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
	var s_578 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_579 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Olivia's eyes.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_580 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_581 = {
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
	var s_582 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_584 = {
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
	var s_585 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_586 = {
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

	var s_587 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_588 = {
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
	var s_589 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_592 = {
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
	var s_593 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_594 = {
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
	var s_595 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_596 = {
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
	var s_597 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_598 = {
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
	var s_599 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_600 = {
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
	var s_601 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_46 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_602 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_603 = {
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
	var s_608 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_609 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_610 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_611 = {
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
	var s_612 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_613 = {
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
	var s_614 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_615 = {
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

	var s_616 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_621 = {
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
	var s_622 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_623 = {
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

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_629 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_630 = {
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
	var s_631 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_634 = {
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
	var s_635 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_638 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_639 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_640 = {
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

	var s_641 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_644 = {
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
	var s_645 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_646 = {
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
	var s_647 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_651 = {
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

	var s_652 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_653 = {
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
	var s_654 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_656 = {
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
	var s_657 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_660 = {
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
	var s_661 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_662 = {
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
	var s_663 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_665 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_666 = {
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
	var s_667 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_670 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_671 = {
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
	var s_672 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_674 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_675 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_676 = {
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

	var s_677 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_681 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_682 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_683 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_684 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_685 = {
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
	var s_686 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_687 = {
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
	var s_688 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_689 = {
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
	var s_690 = {
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

	var s_691 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_692 = {
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
	var s_693 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_695 = {
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
	var s_696 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_697 = {
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
	var s_698 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_702 = {
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

	var s_703 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_704 = {
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
	var s_705 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_706 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_707 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_708 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_709 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_710 = {
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
	var s_711 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_712 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_713 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_714 = {
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
	var s_715 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_716 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_717 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_55 = {
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
	var s_722 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_723 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_724 = {
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
	var s_725 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_726 = {
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
	var s_727 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_728 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_729 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_730 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_56 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_731 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_732 = {
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
	var s_733 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_736 = {
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
	var s_737 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_738 = {
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
	var s_739 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_740 = {
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
	var s_741 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_742 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_743 = {
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

	var s_744 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_745 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_746 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_747 = {
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
	var s_748 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_749 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_750 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_751 = {
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
	var s_752 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_753 = {
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
	var s_754 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_755 = {
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
	var s_756 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_757 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_758 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_760 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_761 = {
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
	var s_762 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_763 = {
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
	var s_764 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_765 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_767 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_768 = {
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

	var s_769 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_770 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_771 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_772 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_773 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_776 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_777 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_778 = {
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
	var s_779 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_780 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_781 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_783 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_784 = {
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
	var s_785 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_786 = {
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
	var s_787 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_788 = {
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
	var s_789 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_790 = {
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
	var s_791 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_792 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_61 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_793 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_795 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_796 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_797 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_798 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_799 = {
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
	var s_800 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_801 = {
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
	var s_802 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_803 = {
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

	var s_804 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_805 = {
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
	var s_806 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_808 = {
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
	var s_809 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_810 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_811 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_812 = {
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
	var s_813 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_814 = {
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
	var s_815 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_816 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_817 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_818 = {
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

	var s_819 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_820 = {
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
	var s_821 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_823 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_824 = {
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
	var s_825 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_826 = {
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
	var s_827 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
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
	var s_830 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_831 = {
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
	var s_832 = {
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

	var s_833 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_834 = {
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
	var s_835 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_836 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_838 = {
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
	var s_839 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_840 = {
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
	var s_841 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_842 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_843 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_844 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_845 = {
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

	var s_846 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_847 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_848 = {
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
	var s_849 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_850 = {
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
	var s_851 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_852 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_853 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_854 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_855 = {
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
	var s_856 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_857 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_858 = {
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

	var s_859 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_860 = {
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
	var s_861 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_862 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_863 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_864 = {
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
	var s_865 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_866 = {
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
	var s_867 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_868 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_869 = {
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
	var s_870 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_871 = {
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

	var s_872 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_873 = {
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
	var s_874 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_875 = {
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
	var s_876 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_877 = {
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
	var s_878 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_879 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_880 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_881 = {
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
	var s_882 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_883 = {
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
	var s_884 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_885 = {
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
	var s_886 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_887 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_889 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_890 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_893 = {
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
	var s_894 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_895 = {
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
	var s_896 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_898 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_899 = {
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
	var s_900 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_902 = {
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
	var s_903 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_904 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_905 = {
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
	var s_906 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_907 = {
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
	var s_908 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_909 = {
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
	var s_910 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_911 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_912 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_913 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_914 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_915 = {
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
	var s_916 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_917 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_918 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_919 = {
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
	var s_920 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_921 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_922 = {
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

	var s_923 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_924 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_925 = {
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
	var s_926 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_927 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_928 = {
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
	var s_929 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_930 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_931 = {
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
	var s_932 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_933 = {
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
	var s_934 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_935 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_936 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_937 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_938 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_939 = {
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
	var s_940 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_941 = {
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
	var s_942 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_943 = {
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
	var s_944 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_945 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_946 = {
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
	var s_947 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_948 = {
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
	var s_949 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_73 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_950 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_951 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_952 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_954 = {
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
	var s_955 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_956 = {
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
	var s_957 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_958 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_959 = {
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
	var s_960 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_961 = {
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

	var s_962 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_963 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_964 = {
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
	var s_965 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_966 = {
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
	var s_967 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_968 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_969 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_970 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_971 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_972 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_973 = {
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
	var s_974 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_975 = {
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
	var s_976 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_75 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_977 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_978 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_979 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_980 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_981 = {
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
	var s_982 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_983 = {
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
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_986 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_987 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_988 = {
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

	var s_989 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_990 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_991 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_992 = {
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
	var s_993 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_994 = {
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
	var s_995 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_997 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_998 = {
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
	var s_999 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1000 = {
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

	var s_1001 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1002 = {
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
	var s_1003 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1004 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1005 = {
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
	var s_1006 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1007 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Silvia stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1009 = {
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
	var s_1010 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1011 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1012 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1013 = {
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

	var s_1014 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1015 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1016 = {
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
	var s_1017 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1019 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1020 = {
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
	var s_1021 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1022 = {
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
	var s_1023 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1024 = {
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
	var s_1025 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1026 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_79 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1027 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1028 = {
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
	var s_1029 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1030 = {
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
	var s_1031 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1033 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1034 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1035 = {
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
	var s_1036 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1037 = {
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
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1038 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1039 = {
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

	var s_1040 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1042 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1043 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Bill.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1044 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1045 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1046 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1047 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1048 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1049 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1051 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1052 = {
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

	var s_1053 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1055 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1056 = {
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
	var s_1057 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1058 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1059 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1060 = {
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
	var s_1061 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1062 = {
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
	var s_1063 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1064 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1065 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1067 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Olivia.", "Bill hurried back in front of Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1068 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1069 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1071 = {
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
	var s_1072 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1073 = {
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
	var s_1074 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1076 = {
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
	var s_1077 = {
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

	var s_1078 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1079 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1080 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1081 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1082 = {
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
	var s_1083 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1084 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1085 = {
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
	var s_1086 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1087 = {
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
	var s_1088 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1089 = {
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

	var s_1090 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1091 = {
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
	var s_1092 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1094 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Bill and gave a very mean look.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1095 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1096 = {
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
	var s_1097 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1098 = {
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
	var s_1099 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1100 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1101 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1102 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1103 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1104 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1106 = {
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
	var s_1107 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1108 = {
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
	var s_1109 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1110 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1111 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1112 = {
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
	var s_1113 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1114 = {
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

	var s_1115 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1116 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1117 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1118 = {
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
	var s_1119 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1120 = {
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
	var s_1121 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1122 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1123 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1124 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1125 = {
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

	var s_1126 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1127 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1128 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1129 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1130 = {
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
	var s_1131 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1133 = {
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
	var s_1134 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1135 = {
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
	var s_1136 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1137 = {
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
	var s_1138 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1139 = {
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

	var s_1140 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1142 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1143 = {
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
	var s_1144 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1145 = {
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
	var s_1146 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1147 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1148 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1149 = {
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
	var s_1150 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1151 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1152 = {
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

	var s_1153 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1154 = {
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
	var s_1155 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1156 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1157 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1159 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1160 = {
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
	var s_1161 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1162 = {
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
	var s_1163 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1164 = {
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
	var s_1165 = {
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

	var s_1166 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1167 = {
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
	var s_1168 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1169 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1170 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1171 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1173 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1174 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1175 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1176 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1177 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1178 = {
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
	var s_1179 = {
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

	var s_1180 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1181 = {
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
	var s_1182 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1183 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1184 = {
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
	var s_1185 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1186 = {
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
	var s_1187 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1188 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1189 = {
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
	var s_1190 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1191 = {
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
	var s_1192 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1193 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1194 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1195 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1196 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1197 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1198 = {
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
	var s_1199 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1200 = {
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
	var s_1201 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1202 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1203 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam ran out yelling 'Juice is better, anyway!'", "Adam stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1204 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1205 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1206 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1207 = {
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
	var s_1208 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1209 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1210 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1211 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1212 = {
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
	var s_1213 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1214 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1215 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1216 = {
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
	var s_1217 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1218 = {
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
	var s_1219 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1220 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_94 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1221 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1222 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1223 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1224 = {
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
	var s_1225 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1226 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1227 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1228 = {
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
	var s_1229 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1230 = {
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
	var s_1231 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1232 = {
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

	var s_1233 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1234 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1235 = {
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
	var s_1236 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1238 = {
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
	var s_1239 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1240 = {
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
	var s_1241 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1242 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1243 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1244 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_96 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1245 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1246 = {
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
	var s_1247 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1248 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Adam.", "Silvia hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1249 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1250 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1251 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1252 = {
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
	var s_1253 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1254 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1255 = {
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
	var s_1256 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1257 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_97 = {
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
		var q_1259 = {
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
	var s_1260 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1261 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1262 = {
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
	var s_1263 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1264 = {
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
	var s_1265 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1266 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1267 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1268 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1269 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1270 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1271 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1272 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1273 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1274 = {
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
	var s_1275 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1276 = {
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
	var s_1277 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1278 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1279 = {
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
	var s_1280 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1281 = {
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
	var s_1282 = {
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

	var s_1283 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1284 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1285 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1286 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1287 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1288 = {
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
	var s_1289 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1290 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1291 = {
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
	var s_1292 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1293 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,s_4,q_5,s_6,q_7,s_8,q_9,s_10,s_11,q_12,s_13,s_14,betweenstory_1,s_15,q_16,s_17,q_18,s_19,q_20,s_21,q_22,s_23,q_24,s_25,s_26,s_27,s_28,betweenstory_2,s_29,s_30,s_31,q_32,s_33,s_34,s_35,q_36,s_37,s_38,s_39,betweenstory_3,s_40,q_41,s_42,q_43,s_44,s_45,q_46,s_47,s_48,q_49,s_50,q_51,s_52,s_53,betweenstory_4,s_54,s_55,s_56,q_57,s_58,s_59,s_60,s_61,q_62,s_63,s_64,betweenstory_5,s_65,q_66,s_67,s_68,q_69,s_70,q_71,s_72,s_73,q_74,s_75,s_76,q_77,s_78,betweenstory_6,s_79,s_80,s_81,q_82,s_83,q_84,s_85,q_86,s_87,q_88,s_89,q_90,s_91,q_92,s_93,betweenstory_7,s_94,q_95,s_96,q_97,s_98,q_99,s_100,q_101,s_102,q_103,s_104,q_105,s_106,q_107,s_108,s_109,betweenstory_8,s_110,q_111,s_112,s_113,q_114,s_115,q_116,s_117,s_118,q_119,s_120,q_121,s_122,s_123,betweenstory_9,s_124,q_125,s_126,s_127,q_128,s_129,s_130,q_131,s_132,s_133,q_134,s_135,s_136,betweenstory_10,s_137,q_138,s_139,s_140,q_141,s_142,s_143,q_144,s_145,s_146,q_147,s_148,s_149,betweenstory_11,s_150,q_151,s_152,s_153,q_154,s_155,q_156,s_157,s_158,s_159,s_160,s_161,betweenstory_12,s_162,s_163,s_164,q_165,s_166,q_167,s_168,q_169,s_170,s_171,s_172,s_173,betweenstory_13,s_174,s_175,s_176,q_177,s_178,q_179,s_180,q_181,s_182,s_183,q_184,s_185,s_186,betweenstory_14,s_187,s_188,q_189,s_190,s_191,q_192,s_193,s_194,q_195,s_196,q_197,s_198,q_199,s_200,betweenstory_15,s_201,q_202,s_203,s_204,q_205,s_206,s_207,s_208,q_209,s_210,q_211,s_212,s_213,betweenstory_16,s_214,s_215,s_216,s_217,s_218,q_219,s_220,q_221,s_222,q_223,s_224,q_225,s_226,betweenstory_17,s_227,q_228,s_229,s_230,q_231,s_232,s_233,q_234,s_235,q_236,s_237,q_238,s_239,s_240,betweenstory_18,s_241,s_242,s_243,s_244,q_245,s_246,s_247,q_248,s_249,s_250,q_251,s_252,betweenstory_19,s_253,s_254,s_255,q_256,s_257,s_258,s_259,q_260,s_261,s_262,s_263,betweenstory_20,s_264,s_265,q_266,s_267,s_268,q_269,s_270,q_271,s_272,s_273,q_274,s_275,s_276,betweenstory_21,s_277,q_278,s_279,s_280,q_281,s_282,q_283,s_284,q_285,s_286,q_287,s_288,q_289,s_290,s_291,betweenstory_22,s_292,s_293,s_294,q_295,s_296,s_297,s_298,q_299,s_300,q_301,s_302,s_303,betweenstory_23,s_304,q_305,s_306,q_307,s_308,q_309,s_310,q_311,s_312,q_313,s_314,q_315,s_316,s_317,s_318,betweenstory_24,s_319,s_320,s_321,q_322,s_323,s_324,q_325,s_326,q_327,s_328,q_329,s_330,s_331,betweenstory_25,s_332,q_333,s_334,s_335,q_336,s_337,s_338,s_339,q_340,s_341,q_342,s_343,q_344,s_345,betweenstory_26,s_346,q_347,s_348,q_349,s_350,q_351,s_352,s_353,s_354,q_355,s_356,s_357,s_358,betweenstory_27,s_359,q_360,s_361,s_362,q_363,s_364,q_365,s_366,q_367,s_368,s_369,q_370,s_371,s_372,betweenstory_28,s_373,s_374,q_375,s_376,q_377,s_378,s_379,q_380,s_381,s_382,q_383,s_384,s_385,betweenstory_29,s_386,s_387,s_388,s_389,s_390,q_391,s_392,q_393,s_394,s_395,s_396,betweenstory_30,s_397,s_398,s_399,s_400,s_401,s_402,q_403,s_404,q_405,s_406,s_407,betweenstory_31,s_408,s_409,s_410,s_411,q_412,s_413,s_414,s_415,q_416,s_417,s_418,betweenstory_32,s_419,s_420,q_421,s_422,q_423,s_424,s_425,q_426,s_427,q_428,s_429,q_430,s_431,s_432,betweenstory_33,s_433,s_434,s_435,q_436,s_437,q_438,s_439,q_440,s_441,q_442,s_443,q_444,s_445,s_446,betweenstory_34,s_447,q_448,s_449,s_450,s_451,s_452,q_453,s_454,q_455,s_456,s_457,s_458,betweenstory_35,s_459,q_460,s_461,q_462,s_463,q_464,s_465,s_466,s_467,s_468,s_469,q_470,s_471,betweenstory_36,s_472,s_473,s_474,s_475,q_476,s_477,s_478,q_479,s_480,q_481,s_482,s_483,betweenstory_37,s_484,q_485,s_486,s_487,q_488,s_489,q_490,s_491,q_492,s_493,q_494,s_495,s_496,s_497,betweenstory_38,s_498,s_499,s_500,q_501,s_502,q_503,s_504,q_505,s_506,q_507,s_508,q_509,s_510,s_511,betweenstory_39,s_512,s_513,s_514,q_515,s_516,q_517,s_518,q_519,s_520,s_521,s_522,s_523,betweenstory_40,s_524,s_525,s_526,s_527,q_528,s_529,s_530,s_531,s_532,q_533,s_534,betweenstory_41,s_535,q_536,s_537,s_538,q_539,s_540,q_541,s_542,s_543,s_544,q_545,s_546,q_547,s_548,betweenstory_42,s_549,s_550,q_551,s_552,s_553,q_554,s_555,q_556,s_557,s_558,q_559,s_560,s_561,betweenstory_43,s_562,s_563,s_564,q_565,s_566,q_567,s_568,s_569,q_570,s_571,s_572,s_573,betweenstory_44,s_574,s_575,s_576,q_577,s_578,q_579,s_580,q_581,s_582,s_583,q_584,s_585,s_586,betweenstory_45,s_587,q_588,s_589,s_590,s_591,q_592,s_593,q_594,s_595,q_596,s_597,q_598,s_599,q_600,s_601,betweenstory_46,s_602,q_603,s_604,s_605,q_606,s_607,s_608,q_609,s_610,q_611,s_612,q_613,s_614,s_615,betweenstory_47,s_616,s_617,s_618,s_619,s_620,q_621,s_622,q_623,s_624,q_625,s_626,q_627,s_628,betweenstory_48,s_629,q_630,s_631,s_632,s_633,q_634,s_635,s_636,s_637,q_638,s_639,s_640,betweenstory_49,s_641,s_642,s_643,q_644,s_645,q_646,s_647,s_648,s_649,s_650,s_651,betweenstory_50,s_652,q_653,s_654,s_655,q_656,s_657,s_658,s_659,q_660,s_661,q_662,s_663,s_664,betweenstory_51,s_665,q_666,s_667,s_668,s_669,s_670,q_671,s_672,s_673,q_674,s_675,s_676,betweenstory_52,s_677,s_678,s_679,s_680,q_681,s_682,q_683,s_684,q_685,s_686,q_687,s_688,q_689,s_690,betweenstory_53,s_691,q_692,s_693,s_694,q_695,s_696,q_697,s_698,s_699,s_700,s_701,s_702,betweenstory_54,s_703,q_704,s_705,s_706,q_707,s_708,s_709,q_710,s_711,q_712,s_713,q_714,s_715,q_716,s_717,betweenstory_55,s_718,s_719,s_720,q_721,s_722,s_723,q_724,s_725,q_726,s_727,q_728,s_729,s_730,betweenstory_56,s_731,q_732,s_733,s_734,s_735,q_736,s_737,q_738,s_739,q_740,s_741,s_742,s_743,betweenstory_57,s_744,s_745,s_746,q_747,s_748,s_749,s_750,q_751,s_752,q_753,s_754,q_755,s_756,betweenstory_58,s_757,s_758,s_759,s_760,q_761,s_762,q_763,s_764,s_765,s_766,q_767,s_768,betweenstory_59,s_769,s_770,q_771,s_772,s_773,s_774,s_775,s_776,s_777,q_778,s_779,betweenstory_60,s_780,s_781,s_782,s_783,q_784,s_785,q_786,s_787,q_788,s_789,q_790,s_791,s_792,betweenstory_61,s_793,s_794,s_795,s_796,s_797,s_798,q_799,s_800,q_801,s_802,s_803,betweenstory_62,s_804,q_805,s_806,s_807,q_808,s_809,q_810,s_811,q_812,s_813,q_814,s_815,q_816,s_817,s_818,betweenstory_63,s_819,q_820,s_821,s_822,s_823,q_824,s_825,q_826,s_827,s_828,q_829,s_830,q_831,s_832,betweenstory_64,s_833,q_834,s_835,s_836,s_837,q_838,s_839,q_840,s_841,s_842,q_843,s_844,s_845,betweenstory_65,s_846,s_847,q_848,s_849,q_850,s_851,s_852,q_853,s_854,q_855,s_856,s_857,s_858,betweenstory_66,s_859,q_860,s_861,s_862,s_863,q_864,s_865,q_866,s_867,s_868,q_869,s_870,s_871,betweenstory_67,s_872,q_873,s_874,q_875,s_876,q_877,s_878,s_879,s_880,q_881,s_882,q_883,s_884,q_885,s_886,betweenstory_68,s_887,s_888,s_889,s_890,s_891,s_892,q_893,s_894,q_895,s_896,s_897,betweenstory_69,s_898,q_899,s_900,s_901,q_902,s_903,s_904,q_905,s_906,q_907,s_908,q_909,s_910,s_911,betweenstory_70,s_912,s_913,s_914,q_915,s_916,s_917,s_918,q_919,s_920,s_921,s_922,betweenstory_71,s_923,s_924,q_925,s_926,s_927,q_928,s_929,s_930,q_931,s_932,q_933,s_934,s_935,betweenstory_72,s_936,s_937,s_938,q_939,s_940,q_941,s_942,q_943,s_944,s_945,q_946,s_947,q_948,s_949,betweenstory_73,s_950,s_951,s_952,s_953,q_954,s_955,q_956,s_957,s_958,q_959,s_960,s_961,betweenstory_74,s_962,s_963,q_964,s_965,q_966,s_967,q_968,s_969,s_970,q_971,s_972,q_973,s_974,q_975,s_976,betweenstory_75,s_977,s_978,s_979,s_980,q_981,s_982,q_983,s_984,q_985,s_986,s_987,s_988,betweenstory_76,s_989,s_990,s_991,q_992,s_993,q_994,s_995,s_996,s_997,q_998,s_999,s_1000,betweenstory_77,s_1001,q_1002,s_1003,s_1004,q_1005,s_1006,q_1007,s_1008,q_1009,s_1010,s_1011,s_1012,s_1013,betweenstory_78,s_1014,s_1015,q_1016,s_1017,s_1018,s_1019,q_1020,s_1021,q_1022,s_1023,q_1024,s_1025,s_1026,betweenstory_79,s_1027,q_1028,s_1029,q_1030,s_1031,s_1032,s_1033,s_1034,q_1035,s_1036,q_1037,s_1038,s_1039,betweenstory_80,s_1040,s_1041,s_1042,q_1043,s_1044,q_1045,s_1046,s_1047,q_1048,s_1049,s_1050,q_1051,s_1052,betweenstory_81,s_1053,s_1054,s_1055,q_1056,s_1057,s_1058,s_1059,q_1060,s_1061,q_1062,s_1063,s_1064,betweenstory_82,s_1065,s_1066,q_1067,s_1068,s_1069,s_1070,q_1071,s_1072,q_1073,s_1074,s_1075,q_1076,s_1077,betweenstory_83,s_1078,s_1079,s_1080,s_1081,q_1082,s_1083,s_1084,q_1085,s_1086,q_1087,s_1088,s_1089,betweenstory_84,s_1090,q_1091,s_1092,s_1093,q_1094,s_1095,q_1096,s_1097,q_1098,s_1099,s_1100,s_1101,s_1102,betweenstory_85,s_1103,s_1104,s_1105,q_1106,s_1107,q_1108,s_1109,s_1110,s_1111,q_1112,s_1113,s_1114,betweenstory_86,s_1115,s_1116,s_1117,q_1118,s_1119,q_1120,s_1121,s_1122,s_1123,s_1124,s_1125,betweenstory_87,s_1126,s_1127,q_1128,s_1129,q_1130,s_1131,s_1132,q_1133,s_1134,q_1135,s_1136,q_1137,s_1138,s_1139,betweenstory_88,s_1140,s_1141,s_1142,q_1143,s_1144,q_1145,s_1146,q_1147,s_1148,q_1149,s_1150,s_1151,s_1152,betweenstory_89,s_1153,q_1154,s_1155,s_1156,s_1157,s_1158,s_1159,q_1160,s_1161,q_1162,s_1163,q_1164,s_1165,betweenstory_90,s_1166,q_1167,s_1168,q_1169,s_1170,s_1171,s_1172,q_1173,s_1174,s_1175,q_1176,s_1177,q_1178,s_1179,betweenstory_91,s_1180,q_1181,s_1182,s_1183,q_1184,s_1185,q_1186,s_1187,s_1188,q_1189,s_1190,q_1191,s_1192,s_1193,betweenstory_92,s_1194,s_1195,s_1196,s_1197,q_1198,s_1199,q_1200,s_1201,s_1202,q_1203,s_1204,s_1205,betweenstory_93,s_1206,q_1207,s_1208,s_1209,q_1210,s_1211,q_1212,s_1213,q_1214,s_1215,q_1216,s_1217,q_1218,s_1219,s_1220,betweenstory_94,s_1221,s_1222,s_1223,q_1224,s_1225,s_1226,s_1227,q_1228,s_1229,q_1230,s_1231,s_1232,betweenstory_95,s_1233,s_1234,q_1235,s_1236,s_1237,q_1238,s_1239,q_1240,s_1241,s_1242,s_1243,s_1244,betweenstory_96,s_1245,q_1246,s_1247,q_1248,s_1249,s_1250,s_1251,q_1252,s_1253,s_1254,q_1255,s_1256,s_1257,betweenstory_97,s_1258,q_1259,s_1260,s_1261,q_1262,s_1263,q_1264,s_1265,s_1266,s_1267,s_1268,s_1269,betweenstory_98,s_1270,s_1271,s_1272,s_1273,q_1274,s_1275,q_1276,s_1277,s_1278,q_1279,s_1280,q_1281,s_1282,betweenstory_99,s_1283,s_1284,s_1285,s_1286,s_1287,q_1288,s_1289,s_1290,q_1291,s_1292,s_1293,betweenstory_100,],

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