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
	var s_3 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_4 = {
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
	var s_5 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_6 = {
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
	var s_7 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_9 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_11 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_12 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_13 = {
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

	var s_14 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_15 = {
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
	var s_16 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_19 = {
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
	var s_20 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_22 = {
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
	var s_23 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_24 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_25 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_26 = {
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

	var s_27 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_28 = {
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
	var s_29 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_32 = {
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
	var s_33 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_37 = {
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

	var s_38 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_41 = {
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
	var s_42 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_45 = {
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
	var s_46 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_47 = {
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
	var s_48 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_49 = {
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

	var s_50 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_51 = {
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
	var s_52 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_56 = {
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
	var s_57 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_58 = {
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
	var s_59 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_60 = {
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
	var s_61 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_5 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_63 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_66 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_67 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_70 = {
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
	var s_71 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_72 = {
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
	var s_73 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_74 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_6 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_75 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_78 = {
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
	var s_79 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_80 = {
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
	var s_81 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_82 = {
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
	var s_83 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_85 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_86 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_88 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_89 = {
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
	var s_90 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_91 = {
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
	var s_92 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_94 = {
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
	var s_95 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_96 = {
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
	var s_97 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_98 = {
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
	var s_99 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_102 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_103 = {
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
	var s_104 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_108 = {
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
	var s_109 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_110 = {
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
	var s_111 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
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
		var q_115 = {
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
	var s_116 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
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
	var s_121 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_123 = {
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
	var s_124 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
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
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_128 = {
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
	var s_129 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_130 = {
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
	var s_131 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_134 = {
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
	var s_135 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_137 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia ran out yelling 'Juice is better, anyway!'", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_138 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
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
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_141 = {
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
	var s_142 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_144 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_145 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_147 = {
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
	var s_148 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_149 = {
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
	var s_150 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_151 = {
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
	var s_152 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_12 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_154 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_155 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_158 = {
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
	var s_159 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_160 = {
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
	var s_161 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_163 = {
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
	var s_164 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_13 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_166 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_167 = {
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
	var s_168 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_171 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_172 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_173 = {
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
	var s_174 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_175 = {
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
	var s_176 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_178 = {
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

	var s_179 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_182 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_183 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_184 = {
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
	var s_185 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_189 = {
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
	var s_190 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_15 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_191 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_193 = {
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
	var s_194 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_196 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_197 = {
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
	var s_198 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_199 = {
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
	var s_200 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_201 = {
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
	var s_202 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_203 = {
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

	var s_204 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_208 = {
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
	var s_209 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_210 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_211 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
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
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_217 = {
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
	var s_218 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_219 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Adam.", "Bill hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_220 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_225 = {
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
	var s_226 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_227 = {
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

	var s_228 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_229 = {
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
	var s_230 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_232 = {
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
	var s_233 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_234 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_235 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_237 = {
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
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_238 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_240 = {
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
		var q_244 = {
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
	var s_245 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_246 = {
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
	var s_247 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_248 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_249 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_250 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_251 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_252 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_253 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_254 = {
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

	var s_255 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_256 = {
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
	var s_257 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_260 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_261 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_262 = {
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
	var s_263 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_264 = {
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
	var s_265 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_266 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_267 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_268 = {
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

	var s_269 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_270 = {
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
	var s_271 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_273 = {
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
	var s_274 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_275 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_276 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_277 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_278 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_279 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_280 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_282 = {
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

	var s_283 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_287 = {
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
	var s_288 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_291 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_292 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_293 = {
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
	var s_294 = {
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

	var s_295 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_299 = {
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
	var s_300 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_303 = {
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
	var s_304 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_305 = {
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

	var s_306 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_307 = {
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
	var s_308 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_310 = {
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
	var s_311 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_312 = {
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
	var s_313 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_315 = {
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
	var s_316 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_317 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_318 = {
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

	var s_319 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_320 = {
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
	var s_321 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_322 = {
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
	var s_323 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_324 = {
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
	var s_325 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_326 = {
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
	var s_327 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_329 = {
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
	var s_330 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_331 = {
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
	var s_332 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_333 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_26 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_334 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_336 = {
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
	var s_337 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_338 = {
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
	var s_339 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_340 = {
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
	var s_341 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_342 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_343 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_345 = {
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
	var s_346 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_27 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_348 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_353 = {
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
	var s_354 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_356 = {
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
	var s_357 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_358 = {
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
	var s_359 = {
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

	var s_360 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_361 = {
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
	var s_362 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_364 = {
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
	var s_365 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_29 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_371 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_372 = {
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
	var s_373 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_375 = {
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
	var s_376 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_377 = {
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
	var s_378 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_379 = {
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
	var s_380 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_381 = {
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
	var s_382 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_384 = {
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

	var s_385 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_389 = {
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
	var s_390 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_391 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_392 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_394 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Olivia stormed out yelling 'I hate coffee!"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_395 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_31 = {
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
		var q_401 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_402 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_403 = {
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
	var s_404 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_406 = {
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
	var s_407 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_408 = {
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

	var s_409 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_410 = {
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
	var s_411 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
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
	var s_414 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_415 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
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
	var s_418 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_419 = {
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
	var s_420 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_421 = {
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
	var s_422 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_423 = {
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

	var s_424 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_427 = {
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
	var s_428 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_429 = {
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
	var s_430 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_431 = {
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
	var s_432 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_434 = {
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
	var s_435 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_436 = {
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
	var s_437 = {
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

	var s_438 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_439 = {
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
	var s_440 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_444 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_445 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_446 = {
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
	var s_447 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_448 = {
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
	var s_449 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_35 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_451 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_452 = {
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
	var s_453 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_456 = {
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
	var s_457 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_458 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_459 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_460 = {
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
	var s_461 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_462 = {
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
	var s_463 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_464 = {
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

	var s_465 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_467 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Adam.", "Silvia hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_468 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_469 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_470 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_471 = {
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
	var s_472 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_475 = {
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
	var s_476 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_37 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_478 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_479 = {
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
	var s_480 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_483 = {
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
	var s_484 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_486 = {
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
	var s_487 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_38 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_490 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_494 = {
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
	var s_495 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_496 = {
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
	var s_497 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_500 = {
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

	var s_501 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_507 = {
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
	var s_508 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_510 = {
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

	var s_511 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_512 = {
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
	var s_513 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_514 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_515 = {
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
	var s_516 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_517 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "In retaliation, Silvia pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_518 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_519 = {
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
	var s_520 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_521 = {
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
	var s_522 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_523 = {
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
	var s_524 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_525 = {
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
	var s_526 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_41 = {
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
		var q_528 = {
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
	var s_529 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_530 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_531 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_534 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Silvia's face.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_535 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_536 = {
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
	var s_537 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_538 = {
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
	var s_539 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_540 = {
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
	var s_541 = {
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

	var s_542 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_545 = {
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
	var s_546 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_547 = {
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
	var s_548 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_549 = {
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
	var s_550 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_551 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_552 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_554 = {
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

	var s_555 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_556 = {
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
	var s_557 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_560 = {
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
	var s_561 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_563 = {
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
	var s_564 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_565 = {
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
	var s_566 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_567 = {
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

	var s_568 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_570 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_571 = {
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
	var s_572 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_574 = {
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
	var s_575 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_577 = {
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
	var s_578 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_579 = {
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

	var s_580 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_581 = {
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
	var s_582 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_584 = {
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
	var s_585 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_586 = {
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
	var s_587 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_588 = {
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
	var s_589 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_590 = {
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
	var s_591 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_593 = {
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

	var s_594 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_598 = {
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
	var s_599 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_602 = {
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
	var s_603 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_604 = {
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

	var s_605 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_606 = {
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
	var s_607 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_612 = {
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
	var s_613 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_614 = {
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
	var s_615 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_48 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_617 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_618 = {
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
	var s_619 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_620 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_621 = {
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
	var s_622 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_623 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_624 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_626 = {
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
	var s_627 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_629 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_630 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_631 = {
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
	var s_632 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_633 = {
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
	var s_634 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_638 = {
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
	var s_639 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_50 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_642 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_643 = {
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
	var s_644 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_646 = {
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
	var s_647 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_651 = {
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
	var s_652 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_653 = {
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

	var s_654 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_659 = {
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
	var s_660 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
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

	var betweenstory_52 = {
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
		var q_669 = {
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
	var s_670 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_673 = {
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
	var s_674 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_675 = {
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
	var s_676 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_678 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_680 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_682 = {
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
	var s_683 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_684 = {
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
	var s_685 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_686 = {
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
	var s_687 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_689 = {
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

	var s_690 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_691 = {
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
	var s_692 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_693 = {
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
	var s_694 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_697 = {
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
	var s_698 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_699 = {
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
	var s_700 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_702 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_703 = {
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
	var s_711 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_712 = {
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
	var s_713 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_715 = {
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

	var s_716 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_719 = {
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
	var s_720 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_721 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_722 = {
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
	var s_723 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_724 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_725 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_726 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_727 = {
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

	var s_728 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_729 = {
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
	var s_730 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_731 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_732 = {
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
	var s_733 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_734 = {
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
	var s_735 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_736 = {
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
	var s_737 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_738 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_739 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_741 = {
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

	var s_742 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_744 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_745 = {
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
	var s_746 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_747 = {
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
	var s_748 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_749 = {
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
	var s_750 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_751 = {
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
	var s_752 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_753 = {
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
	var s_754 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_755 = {
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

	var s_756 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_757 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_758 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_759 = {
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
	var s_760 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_761 = {
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
	var s_762 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_763 = {
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
	var s_764 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_765 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_766 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_767 = {
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
	var s_768 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_769 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_60 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_770 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_771 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_772 = {
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
	var s_773 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_775 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_776 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_777 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_778 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_779 = {
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
	var s_780 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_781 = {
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
	var s_782 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_783 = {
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

	var s_784 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_785 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_786 = {
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
	var s_787 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_788 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_789 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_790 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Silvia pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_791 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_792 = {
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
	var s_793 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_795 = {
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
	var s_796 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_797 = {
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
	var s_798 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_62 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_799 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_800 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_801 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_802 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Adam proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_803 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_804 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_805 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_806 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_807 = {
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
	var s_808 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_809 = {
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

	var s_810 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_811 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_812 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_813 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_814 = {
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
	var s_815 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_816 = {
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
	var s_817 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_818 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_819 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_820 = {
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

	var s_821 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_823 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_824 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_828 = {
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
	var s_829 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_830 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_65 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_831 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_832 = {
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
	var s_833 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_834 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_835 = {
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
	var s_836 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_838 = {
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
	var s_839 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_841 = {
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
	var s_842 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_843 = {
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

	var s_844 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_845 = {
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
	var s_846 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_847 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_848 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_849 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_850 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_851 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_852 = {
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
	var s_853 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_854 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_67 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_856 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_857 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_858 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_859 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_860 = {
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
	var s_861 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_862 = {
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
	var s_863 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_864 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_865 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_866 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_68 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_867 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_868 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_869 = {
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
	var s_870 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_871 = {
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
	var s_872 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_873 = {
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
	var s_874 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_875 = {
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
	var s_876 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_877 = {
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
	var s_878 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_879 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_880 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_69 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_881 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_884 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_885 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_886 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_887 = {
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
	var s_888 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_889 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_890 = {
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
	var s_891 = {
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

	var s_892 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_893 = {
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
	var s_894 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_895 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_896 = {
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
	var s_897 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_898 = {
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
	var s_899 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_900 = {
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
	var s_901 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_902 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_903 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia stormed out yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_904 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_905 = {
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

	var s_906 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_907 = {
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
	var s_908 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_909 = {
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
	var s_910 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_911 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_912 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_913 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_914 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_915 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_916 = {
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
	var s_917 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_918 = {
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
	var s_919 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_72 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_920 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_921 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_922 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_923 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_924 = {
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
	var s_925 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_926 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_927 = {
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
	var s_928 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_929 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_930 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_931 = {
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

	var s_932 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_933 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_934 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_935 = {
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
	var s_936 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_937 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_938 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_939 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_940 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_941 = {
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
	var s_942 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_943 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_74 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_944 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_945 = {
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
	var s_946 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_947 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_949 = {
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
	var s_950 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_951 = {
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
	var s_952 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_953 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_954 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_955 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_956 = {
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
	var s_957 = {
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

	var s_958 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_959 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_960 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_961 = {
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
	var s_962 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_963 = {
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
	var s_964 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_966 = {
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
	var s_967 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_968 = {
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
	var s_969 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_970 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_76 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_971 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_972 = {
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
	var s_973 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_974 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_975 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_976 = {
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
	var s_977 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_978 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia splashed a coffee into Bill's face.", "Adam splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_979 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_980 = {
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
	var s_981 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_982 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_983 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_77 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_984 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_985 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_986 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_987 = {
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
	var s_988 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_989 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_990 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_991 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_992 = {
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
	var s_993 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_994 = {
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
	var s_995 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_997 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_998 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_999 = {
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
	var s_1000 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1001 = {
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
	var s_1002 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1003 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "Silvia stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1004 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1005 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1006 = {
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
	var s_1007 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1009 = {
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

	var s_1010 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1011 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1012 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1013 = {
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
	var s_1014 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1015 = {
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
	var s_1016 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1017 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Olivia splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1019 = {
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
	var s_1020 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1021 = {
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
	var s_1022 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1023 = {
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
	var s_1024 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_80 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1025 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1026 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1027 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1029 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1030 = {
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
	var s_1031 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1032 = {
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
	var s_1033 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1034 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1035 = {
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

	var s_1036 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1037 = {
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
	var s_1038 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1039 = {
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
	var s_1040 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1041 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia proceeded to shove Silvia.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1042 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1043 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1044 = {
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
	var s_1045 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1046 = {
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
	var s_1047 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1048 = {
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
	var s_1049 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1050 = {
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

	var s_1051 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1052 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1053 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1054 = {
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
	var s_1058 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1059 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1060 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1061 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_83 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1062 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1063 = {
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
	var s_1064 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1065 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1067 = {
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
	var s_1068 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1069 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1070 = {
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
	var s_1071 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1072 = {
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
	var s_1073 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1074 = {
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
	var s_1075 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_84 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1077 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1078 = {
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
	var s_1079 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1080 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1081 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1082 = {
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
	var s_1083 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1084 = {
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
	var s_1085 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1086 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1087 = {
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
	var s_1088 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1089 = {
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

	var s_1090 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1091 = {
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
	var s_1092 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1094 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1095 = {
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
	var s_1096 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1097 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1098 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1099 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1100 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1101 = {
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
	var s_1102 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1103 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_86 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1104 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1106 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1107 = {
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
	var s_1108 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1109 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1110 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1111 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Silvia's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1112 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1113 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1114 = {
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
	var s_1115 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1116 = {
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

	var s_1117 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1119 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1120 = {
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
	var s_1121 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1122 = {
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
	var s_1123 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1124 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1125 = {
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
	var s_1126 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1127 = {
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
	var s_1128 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1129 = {
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

	var s_1130 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1131 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1133 = {
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
	var s_1134 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1136 = {
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
	var s_1137 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1138 = {
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
	var s_1139 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1140 = {
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
	var s_1141 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1142 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1143 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1144 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1145 = {
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
	var s_1146 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1147 = {
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
	var s_1148 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1150 = {
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
	var s_1151 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1152 = {
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
	var s_1153 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1154 = {
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
	var s_1155 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1156 = {
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
	var s_1157 = {
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

	var s_1158 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1159 = {
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
	var s_1160 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1161 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1163 = {
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
	var s_1164 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1165 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1166 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1167 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1168 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1169 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1170 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1171 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1173 = {
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
	var s_1174 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1175 = {
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
	var s_1176 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1177 = {
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
	var s_1178 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1179 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1180 = {
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
	var s_1181 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1182 = {
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

	var s_1183 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1184 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1185 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1186 = {
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
	var s_1187 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1188 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1189 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1190 = {
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
	var s_1191 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1192 = {
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
	var s_1193 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1194 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1195 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_93 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1196 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1197 = {
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
	var s_1198 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1199 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1201 = {
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
	var s_1202 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1203 = {
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
	var s_1204 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1205 = {
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
	var s_1206 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1207 = {
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1208 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1209 = {
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
	var s_1210 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1211 = {
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

	var s_1212 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1213 = {
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
	var s_1214 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1215 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1216 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Silvia.", "Olivia proceeded to shove Bill."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1217 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1218 = {
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
	var s_1219 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1220 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1221 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1222 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1223 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_95 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1224 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1225 = {
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
	var s_1226 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1227 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1228 = {
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
	var s_1229 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1230 = {
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
	var s_1231 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1232 = {
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
	var s_1233 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1234 = {
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
	var s_1235 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1236 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1237 = {
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

	var s_1238 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1239 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1240 = {
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
	var s_1241 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1242 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1243 = {
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
	var s_1244 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1245 = {
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
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
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

	var betweenstory_97 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1250 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1251 = {
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
	var s_1252 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1253 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1254 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1255 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1256 = {
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
	var s_1257 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1258 = {
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
	var s_1259 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1260 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1261 = {
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

	var s_1262 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1263 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1264 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1265 = {
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
	var s_1266 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1267 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1268 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1269 = {
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
	var s_1270 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1271 = {
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
	var s_1272 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1273 = {
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

	var s_1274 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1275 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1276 = {
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
	var s_1277 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1278 = {
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
	var s_1279 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1280 = {
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
	var s_1281 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1282 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1283 = {
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
	var s_1284 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1285 = {
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
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1286 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1287 = {
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,q_4,s_5,q_6,s_7,s_8,s_9,s_10,q_11,s_12,s_13,betweenstory_1,s_14,q_15,s_16,s_17,s_18,q_19,s_20,s_21,q_22,s_23,q_24,s_25,s_26,betweenstory_2,s_27,q_28,s_29,s_30,s_31,q_32,s_33,s_34,s_35,s_36,s_37,betweenstory_3,s_38,s_39,s_40,q_41,s_42,s_43,s_44,q_45,s_46,q_47,s_48,s_49,betweenstory_4,s_50,q_51,s_52,s_53,s_54,s_55,q_56,s_57,q_58,s_59,q_60,s_61,s_62,betweenstory_5,s_63,s_64,s_65,q_66,s_67,s_68,s_69,q_70,s_71,q_72,s_73,s_74,betweenstory_6,s_75,s_76,s_77,q_78,s_79,q_80,s_81,q_82,s_83,s_84,q_85,s_86,s_87,betweenstory_7,s_88,q_89,s_90,q_91,s_92,s_93,q_94,s_95,q_96,s_97,q_98,s_99,s_100,s_101,betweenstory_8,s_102,q_103,s_104,s_105,s_106,s_107,q_108,s_109,q_110,s_111,s_112,s_113,betweenstory_9,s_114,q_115,s_116,s_117,q_118,s_119,q_120,s_121,s_122,q_123,s_124,s_125,s_126,betweenstory_10,s_127,q_128,s_129,q_130,s_131,s_132,s_133,q_134,s_135,s_136,q_137,s_138,s_139,betweenstory_11,s_140,q_141,s_142,s_143,q_144,s_145,s_146,q_147,s_148,q_149,s_150,q_151,s_152,s_153,betweenstory_12,s_154,s_155,s_156,s_157,q_158,s_159,q_160,s_161,s_162,q_163,s_164,s_165,betweenstory_13,s_166,q_167,s_168,s_169,s_170,q_171,s_172,q_173,s_174,q_175,s_176,s_177,s_178,betweenstory_14,s_179,s_180,s_181,q_182,s_183,q_184,s_185,s_186,s_187,s_188,q_189,s_190,betweenstory_15,s_191,s_192,q_193,s_194,s_195,s_196,q_197,s_198,q_199,s_200,q_201,s_202,s_203,betweenstory_16,s_204,s_205,s_206,s_207,q_208,s_209,q_210,s_211,s_212,q_213,s_214,s_215,betweenstory_17,s_216,q_217,s_218,q_219,s_220,s_221,s_222,s_223,s_224,q_225,s_226,s_227,betweenstory_18,s_228,q_229,s_230,s_231,q_232,s_233,q_234,s_235,s_236,q_237,s_238,s_239,s_240,betweenstory_19,s_241,s_242,s_243,q_244,s_245,q_246,s_247,q_248,s_249,q_250,s_251,q_252,s_253,s_254,betweenstory_20,s_255,q_256,s_257,s_258,s_259,q_260,s_261,q_262,s_263,q_264,s_265,q_266,s_267,s_268,betweenstory_21,s_269,q_270,s_271,s_272,q_273,s_274,q_275,s_276,q_277,s_278,q_279,s_280,s_281,s_282,betweenstory_22,s_283,s_284,s_285,s_286,q_287,s_288,s_289,s_290,q_291,s_292,q_293,s_294,betweenstory_23,s_295,s_296,s_297,s_298,q_299,s_300,s_301,s_302,q_303,s_304,s_305,betweenstory_24,s_306,q_307,s_308,s_309,q_310,s_311,q_312,s_313,s_314,q_315,s_316,s_317,s_318,betweenstory_25,s_319,q_320,s_321,q_322,s_323,q_324,s_325,q_326,s_327,s_328,q_329,s_330,q_331,s_332,s_333,betweenstory_26,s_334,s_335,q_336,s_337,q_338,s_339,q_340,s_341,q_342,s_343,s_344,q_345,s_346,s_347,betweenstory_27,s_348,s_349,s_350,s_351,s_352,q_353,s_354,s_355,q_356,s_357,q_358,s_359,betweenstory_28,s_360,q_361,s_362,s_363,q_364,s_365,s_366,s_367,s_368,s_369,s_370,betweenstory_29,s_371,q_372,s_373,s_374,q_375,s_376,q_377,s_378,q_379,s_380,q_381,s_382,s_383,s_384,betweenstory_30,s_385,s_386,s_387,s_388,q_389,s_390,q_391,s_392,s_393,q_394,s_395,s_396,betweenstory_31,s_397,s_398,s_399,s_400,q_401,s_402,q_403,s_404,s_405,q_406,s_407,s_408,betweenstory_32,s_409,q_410,s_411,s_412,q_413,s_414,q_415,s_416,q_417,s_418,q_419,s_420,q_421,s_422,s_423,betweenstory_33,s_424,s_425,s_426,q_427,s_428,q_429,s_430,q_431,s_432,s_433,q_434,s_435,q_436,s_437,betweenstory_34,s_438,q_439,s_440,s_441,s_442,s_443,q_444,s_445,q_446,s_447,q_448,s_449,s_450,betweenstory_35,s_451,q_452,s_453,s_454,s_455,q_456,s_457,q_458,s_459,q_460,s_461,q_462,s_463,s_464,betweenstory_36,s_465,s_466,q_467,s_468,q_469,s_470,q_471,s_472,s_473,s_474,q_475,s_476,s_477,betweenstory_37,s_478,q_479,s_480,s_481,s_482,q_483,s_484,s_485,q_486,s_487,s_488,s_489,betweenstory_38,s_490,s_491,s_492,s_493,q_494,s_495,q_496,s_497,s_498,s_499,s_500,betweenstory_39,s_501,s_502,s_503,s_504,s_505,s_506,q_507,s_508,s_509,s_510,betweenstory_40,s_511,q_512,s_513,s_514,q_515,s_516,q_517,s_518,q_519,s_520,q_521,s_522,q_523,s_524,q_525,s_526,betweenstory_41,s_527,q_528,s_529,q_530,s_531,s_532,s_533,q_534,s_535,q_536,s_537,q_538,s_539,q_540,s_541,betweenstory_42,s_542,s_543,s_544,q_545,s_546,q_547,s_548,q_549,s_550,q_551,s_552,s_553,s_554,betweenstory_43,s_555,q_556,s_557,s_558,s_559,q_560,s_561,s_562,q_563,s_564,q_565,s_566,s_567,betweenstory_44,s_568,s_569,s_570,q_571,s_572,s_573,q_574,s_575,s_576,q_577,s_578,s_579,betweenstory_45,s_580,q_581,s_582,s_583,q_584,s_585,q_586,s_587,q_588,s_589,q_590,s_591,s_592,s_593,betweenstory_46,s_594,s_595,s_596,s_597,q_598,s_599,s_600,s_601,q_602,s_603,s_604,betweenstory_47,s_605,q_606,s_607,s_608,s_609,s_610,s_611,q_612,s_613,q_614,s_615,s_616,betweenstory_48,s_617,q_618,s_619,s_620,q_621,s_622,q_623,s_624,s_625,q_626,s_627,s_628,s_629,betweenstory_49,s_630,q_631,s_632,q_633,s_634,s_635,s_636,s_637,q_638,s_639,s_640,s_641,betweenstory_50,s_642,q_643,s_644,s_645,q_646,s_647,s_648,s_649,s_650,q_651,s_652,s_653,betweenstory_51,s_654,s_655,s_656,s_657,s_658,q_659,s_660,s_661,q_662,s_663,s_664,betweenstory_52,s_665,q_666,s_667,s_668,q_669,s_670,s_671,s_672,q_673,s_674,q_675,s_676,s_677,betweenstory_53,s_678,s_679,s_680,s_681,q_682,s_683,q_684,s_685,q_686,s_687,s_688,s_689,betweenstory_54,s_690,q_691,s_692,q_693,s_694,s_695,s_696,q_697,s_698,q_699,s_700,s_701,q_702,s_703,betweenstory_55,s_704,q_705,s_706,s_707,q_708,s_709,s_710,s_711,q_712,s_713,s_714,s_715,betweenstory_56,s_716,s_717,s_718,q_719,s_720,s_721,q_722,s_723,q_724,s_725,s_726,s_727,betweenstory_57,s_728,q_729,s_730,s_731,q_732,s_733,q_734,s_735,q_736,s_737,q_738,s_739,s_740,s_741,betweenstory_58,s_742,s_743,s_744,q_745,s_746,q_747,s_748,q_749,s_750,q_751,s_752,q_753,s_754,s_755,betweenstory_59,s_756,s_757,s_758,q_759,s_760,q_761,s_762,q_763,s_764,q_765,s_766,q_767,s_768,s_769,betweenstory_60,s_770,s_771,q_772,s_773,s_774,q_775,s_776,q_777,s_778,q_779,s_780,q_781,s_782,s_783,betweenstory_61,s_784,s_785,q_786,s_787,q_788,s_789,q_790,s_791,q_792,s_793,s_794,q_795,s_796,q_797,s_798,betweenstory_62,s_799,s_800,s_801,q_802,s_803,s_804,s_805,s_806,q_807,s_808,s_809,betweenstory_63,s_810,s_811,s_812,s_813,q_814,s_815,q_816,s_817,s_818,s_819,s_820,betweenstory_64,s_821,s_822,s_823,s_824,s_825,s_826,s_827,q_828,s_829,s_830,betweenstory_65,s_831,q_832,s_833,s_834,q_835,s_836,s_837,q_838,s_839,s_840,q_841,s_842,s_843,betweenstory_66,s_844,q_845,s_846,s_847,s_848,s_849,q_850,s_851,q_852,s_853,s_854,s_855,betweenstory_67,s_856,s_857,s_858,s_859,q_860,s_861,q_862,s_863,s_864,s_865,s_866,betweenstory_68,s_867,s_868,q_869,s_870,q_871,s_872,q_873,s_874,q_875,s_876,q_877,s_878,s_879,s_880,betweenstory_69,s_881,s_882,s_883,s_884,s_885,s_886,q_887,s_888,s_889,q_890,s_891,betweenstory_70,s_892,q_893,s_894,s_895,q_896,s_897,q_898,s_899,q_900,s_901,s_902,q_903,s_904,s_905,betweenstory_71,s_906,q_907,s_908,q_909,s_910,s_911,s_912,s_913,q_914,s_915,q_916,s_917,q_918,s_919,betweenstory_72,s_920,s_921,s_922,s_923,q_924,s_925,s_926,q_927,s_928,s_929,q_930,s_931,betweenstory_73,s_932,s_933,s_934,q_935,s_936,q_937,s_938,s_939,s_940,q_941,s_942,s_943,betweenstory_74,s_944,q_945,s_946,s_947,s_948,q_949,s_950,q_951,s_952,q_953,s_954,s_955,q_956,s_957,betweenstory_75,s_958,s_959,s_960,q_961,s_962,q_963,s_964,s_965,q_966,s_967,q_968,s_969,s_970,betweenstory_76,s_971,q_972,s_973,s_974,s_975,q_976,s_977,q_978,s_979,q_980,s_981,s_982,s_983,betweenstory_77,s_984,s_985,s_986,q_987,s_988,s_989,q_990,s_991,q_992,s_993,q_994,s_995,s_996,betweenstory_78,s_997,s_998,q_999,s_1000,q_1001,s_1002,q_1003,s_1004,s_1005,q_1006,s_1007,s_1008,s_1009,betweenstory_79,s_1010,s_1011,s_1012,q_1013,s_1014,q_1015,s_1016,q_1017,s_1018,q_1019,s_1020,q_1021,s_1022,q_1023,s_1024,betweenstory_80,s_1025,s_1026,s_1027,s_1028,s_1029,q_1030,s_1031,q_1032,s_1033,s_1034,s_1035,betweenstory_81,s_1036,q_1037,s_1038,q_1039,s_1040,q_1041,s_1042,s_1043,q_1044,s_1045,q_1046,s_1047,q_1048,s_1049,s_1050,betweenstory_82,s_1051,s_1052,s_1053,q_1054,s_1055,s_1056,q_1057,s_1058,s_1059,s_1060,s_1061,betweenstory_83,s_1062,q_1063,s_1064,q_1065,s_1066,q_1067,s_1068,s_1069,q_1070,s_1071,q_1072,s_1073,q_1074,s_1075,s_1076,betweenstory_84,s_1077,q_1078,s_1079,s_1080,s_1081,q_1082,s_1083,q_1084,s_1085,s_1086,q_1087,s_1088,s_1089,betweenstory_85,s_1090,q_1091,s_1092,s_1093,s_1094,q_1095,s_1096,q_1097,s_1098,q_1099,s_1100,q_1101,s_1102,s_1103,betweenstory_86,s_1104,s_1105,s_1106,q_1107,s_1108,q_1109,s_1110,q_1111,s_1112,s_1113,q_1114,s_1115,s_1116,betweenstory_87,s_1117,s_1118,s_1119,q_1120,s_1121,q_1122,s_1123,s_1124,q_1125,s_1126,q_1127,s_1128,s_1129,betweenstory_88,s_1130,s_1131,s_1132,q_1133,s_1134,s_1135,q_1136,s_1137,q_1138,s_1139,q_1140,s_1141,s_1142,betweenstory_89,s_1143,s_1144,q_1145,s_1146,q_1147,s_1148,s_1149,q_1150,s_1151,q_1152,s_1153,q_1154,s_1155,q_1156,s_1157,betweenstory_90,s_1158,q_1159,s_1160,s_1161,s_1162,q_1163,s_1164,s_1165,s_1166,q_1167,s_1168,s_1169,betweenstory_91,s_1170,s_1171,s_1172,q_1173,s_1174,q_1175,s_1176,q_1177,s_1178,s_1179,q_1180,s_1181,s_1182,betweenstory_92,s_1183,s_1184,s_1185,q_1186,s_1187,q_1188,s_1189,q_1190,s_1191,q_1192,s_1193,s_1194,s_1195,betweenstory_93,s_1196,q_1197,s_1198,q_1199,s_1200,q_1201,s_1202,q_1203,s_1204,q_1205,s_1206,q_1207,s_1208,q_1209,s_1210,s_1211,betweenstory_94,s_1212,q_1213,s_1214,s_1215,q_1216,s_1217,q_1218,s_1219,s_1220,s_1221,s_1222,s_1223,betweenstory_95,s_1224,q_1225,s_1226,s_1227,q_1228,s_1229,q_1230,s_1231,q_1232,s_1233,q_1234,s_1235,s_1236,s_1237,betweenstory_96,s_1238,s_1239,q_1240,s_1241,s_1242,q_1243,s_1244,q_1245,s_1246,s_1247,s_1248,s_1249,betweenstory_97,s_1250,q_1251,s_1252,s_1253,s_1254,s_1255,q_1256,s_1257,q_1258,s_1259,s_1260,s_1261,betweenstory_98,s_1262,s_1263,s_1264,q_1265,s_1266,s_1267,s_1268,q_1269,s_1270,q_1271,s_1272,s_1273,betweenstory_99,s_1274,s_1275,q_1276,s_1277,q_1278,s_1279,q_1280,s_1281,s_1282,q_1283,s_1284,q_1285,s_1286,s_1287,betweenstory_100,],

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