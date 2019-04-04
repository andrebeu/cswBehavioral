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
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_2 = {
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
	var s_3 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_7 = {
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
	var s_8 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_9 = {
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
	var s_10 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_11 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
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
		var q_14 = {
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
	var s_15 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_17 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_18 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_19 = {
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
	var s_20 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_21 = {
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
	var s_22 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_25 = {
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
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_28 = {
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
	var s_29 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_31 = {
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
	var s_32 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_33 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Bill stared with rage into Adam's eyes."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_34 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
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
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_37 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_38 = {
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
	var s_39 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_40 = {
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

	var s_41 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_46 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_47 = {
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
	var s_48 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_49 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam stormed out yelling 'I hate coffee!", "Adam ran out yelling 'Juice is better, anyway!'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_50 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_51 = {
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

	var s_52 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
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
	var s_56 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_57 = {
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
	var s_58 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_59 = {
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
	var s_60 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_61 = {
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
	var s_62 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_64 = {
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
	var s_65 = {
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

	var s_66 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_68 = {
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
	var s_69 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
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
	var s_72 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_73 = {
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
	var s_74 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_75 = {
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
	var s_76 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_77 = {
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
	var s_78 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_79 = {
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

	var s_80 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_83 = {
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
	var s_84 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_85 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_86 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_87 = {
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
	var s_88 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_89 = {
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
	var s_90 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_7 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_93 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_96 = {
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
	var s_97 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_98 = {
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
	var s_99 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_100 = {
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
	var s_101 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_102 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_103 = {
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
	var s_104 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_8 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_106 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_108 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_109 = {
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
	var s_110 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_113 = {
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
	var s_114 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_116 = {
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

	var s_117 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_120 = {
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
	var s_121 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_124 = {
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
	var s_125 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_126 = {
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
	var s_127 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_128 = {
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

	var s_129 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_130 = {
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
	var s_131 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_132 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_133 = {
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
	var s_134 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_135 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_136 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_137 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_138 = {
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
	var s_139 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_140 = {
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
	var s_141 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_142 = {
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

	var s_143 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_144 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_147 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Adam's eyes.", "In retaliation, Bill pushed Adam."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_148 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_149 = {
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
	var s_150 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_151 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_152 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_154 = {
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

	var s_155 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_157 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_158 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_159 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_161 = {
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
	var s_162 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_164 = {
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
	var s_165 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_166 = {
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

	var s_167 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_168 = {
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
	var s_169 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_170 = {
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
	var s_171 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_172 = {
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
	var s_173 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_174 = {
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
	var s_175 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_176 = {
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
	var s_177 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_178 = {
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
	var s_179 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_180 = {
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
	var s_181 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_182 = {
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

	var s_183 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_184 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_186 = {
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
	var s_187 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_188 = {
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
	var s_189 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_190 = {
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
	var s_191 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_193 = {
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
	var s_194 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_195 = {
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
	var s_196 = {
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

	var s_197 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_199 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia hurried back in front of Olivia.", "Bill hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_200 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_202 = {
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
	var s_203 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_205 = {
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
	var s_206 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_207 = {
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
	var s_208 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_16 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_210 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_211 = {
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
	var s_212 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_213 = {
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
	var s_214 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_215 = {
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
	var s_216 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_218 = {
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
	var s_219 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_222 = {
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

	var s_223 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_227 = {
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
	var s_228 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_229 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_231 = {
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
	var s_232 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_233 = {
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

	var s_234 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_237 = {
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
	var s_238 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_239 = {
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
	var s_240 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_242 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_243 = {
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
	var s_244 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_245 = {
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

	var s_246 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_247 = {
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
	var s_248 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_251 = {
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
	var s_252 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_253 = {
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
	var s_254 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_255 = {
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
	var s_256 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_257 = {
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
	var s_258 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_259 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_20 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_260 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_263 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_264 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_266 = {
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
	var s_267 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_269 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_270 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_21 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_272 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_273 = {
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
	var s_274 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_276 = {
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
	var s_277 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_278 = {
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
	var s_279 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_280 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_281 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_282 = {
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
	var s_283 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_284 = {
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
	var s_285 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_286 = {
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

	var s_287 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_288 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_291 = {
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
	var s_292 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_294 = {
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
	var s_295 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_297 = {
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
	var s_298 = {
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

	var s_299 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_300 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_302 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_303 = {
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
	var s_304 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_305 = {
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
	var s_306 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_307 = {
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
	var s_308 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_310 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_24 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_311 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_314 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_315 = {
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
	var s_316 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_317 = {
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
	var s_318 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_319 = {
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
	var s_320 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_321 = {
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
	var s_322 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_25 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_324 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_325 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_327 = {
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
	var s_328 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_331 = {
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
	var s_332 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_333 = {
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
	var s_334 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_335 = {
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

	var s_336 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_337 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_339 = {
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
	var s_340 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
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
	var s_343 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_344 = {
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
	var s_345 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_346 = {
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
	var s_347 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_348 = {
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

	var s_349 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_351 = {
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
	var s_352 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_353 = {
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
	var s_354 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_355 = {
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
	var s_356 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_357 = {
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
	var s_358 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_359 = {
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
	var s_360 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_362 = {
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
	var s_363 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_28 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_364 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_367 = {
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
	var s_368 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_369 = {
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
	var s_370 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_371 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_372 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_373 = {
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
	var s_374 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_375 = {
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
	var s_376 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_377 = {
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

	var s_378 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_382 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia stared with rage into Adam's eyes.", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_383 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_384 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_385 = {
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
	var s_386 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_387 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_388 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_389 = {
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

	var s_390 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_391 = {
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
	var s_392 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_393 = {
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
	var s_394 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_395 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_396 = {
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
	var s_397 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_398 = {
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
	var s_399 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_400 = {
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
	var s_401 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_403 = {
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

	var s_404 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_407 = {
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
	var s_408 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_409 = {
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
	var s_410 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_412 = {
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
	var s_413 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_414 = {
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
	var s_415 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_32 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_417 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_418 = {
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
	var s_419 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_421 = {
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
	var s_422 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_423 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_426 = {
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
	var s_427 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_33 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_429 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_432 = {
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
	var s_433 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_434 = {
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
	var s_435 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_436 = {
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
	var s_437 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_34 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_441 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_445 = {
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
	var s_446 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_448 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Immediately the bystanding police officer ordered Adam to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_449 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_451 = {
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

	var s_452 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_453 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_455 = {
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
	var s_456 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_457 = {
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
	var s_458 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
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
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_461 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_462 = {
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
	var s_463 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
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
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_468 = {
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
	var s_469 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_470 = {
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
	var s_471 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_472 = {
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
	var s_475 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_476 = {
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

	var s_477 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_478 = {
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
	var s_479 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_481 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_484 = {
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
	var s_485 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_486 = {
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
	var s_487 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_488 = {
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

	var s_489 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_490 = {
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
	var s_491 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_492 = {
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
	var s_493 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_495 = {
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
	var s_496 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_498 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_499 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_500 = {
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
	var s_501 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_39 = {
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
	var s_504 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_506 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_507 = {
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
	var s_508 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_509 = {
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
	var s_510 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_511 = {
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
	var s_512 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_513 = {
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
	var s_514 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_515 = {
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

	var s_516 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_517 = {
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
		var q_520 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia turned to Silvia and gave a very mean look.", "Adam turned to Silvia and gave a very mean look."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_521 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_522 = {
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
	var s_523 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_525 = {
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
	var s_526 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_527 = {
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
	var s_528 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_529 = {
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

	var s_530 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_533 = {
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
	var s_534 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_538 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_42 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_540 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_541 = {
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
	var s_542 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_544 = {
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
	var s_545 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_546 = {
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
	var s_547 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_548 = {
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
	var s_549 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_550 = {
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
	var s_551 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_552 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_553 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_554 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_43 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_555 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_556 = {
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
	var s_557 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_559 = {
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
	var s_560 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_561 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Silvia yelled, 'Hey! Relax.'", "In retaliation, Silvia pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_562 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_563 = {
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
	var s_564 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_565 = {
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
	var s_566 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_567 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_568 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_44 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_570 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_571 = {
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
	var s_572 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_576 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_577 = {
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
	var s_578 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_580 = {
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
	var s_581 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_45 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_582 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_585 = {
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
	var s_586 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_587 = {
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
	var s_588 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_589 = {
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
	var s_590 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_591 = {
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
	var s_592 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_594 = {
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

	var s_595 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_599 = {
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
	var s_600 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_601 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam splashed a coffee into Bill's face.", "Adam splashed a coffee into Silvia's face."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_602 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_604 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_47 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_606 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_607 = {
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
	var s_608 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_610 = {
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
	var s_611 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_612 = {
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
	var s_613 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_614 = {
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
	var s_615 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_616 = {
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
	var s_617 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_619 = {
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

	var s_620 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_624 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_625 = {
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
	var s_626 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_627 = {
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
	var s_628 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_629 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_630 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_631 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_49 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_632 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_633 = {
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
	var s_634 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_635 = {
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
	var s_636 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_639 = {
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
	var s_640 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_641 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_642 = {
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
	var s_643 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_644 = {
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

	var s_645 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_646 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_648 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_649 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_651 = {
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
	var s_652 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_653 = {
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
	var s_654 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_51 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_657 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_659 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_661 = {
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
	var s_662 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_663 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_664 = {
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
	var s_665 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_667 = {
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
	var s_668 = {
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

	var s_669 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_670 = {
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
	var s_671 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_675 = {
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
	var s_676 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_677 = {
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
	var s_678 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_680 = {
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
	var s_681 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_53 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_682 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_683 = {
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
	var s_684 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_686 = {
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
	var s_687 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_688 = {
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
	var s_689 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_690 = {
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
	var s_691 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_54 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_695 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_696 = {
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
	var s_697 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_699 = {
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
	var s_700 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_702 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Olivia crumbled a muffin above Silvia's head.", "Adam crumbled a muffin above Silvia's head."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_703 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_704 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_705 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_706 = {
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
	var s_707 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_708 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_55 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_709 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_711 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_712 = {
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
	var s_713 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_714 = {
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
	var s_715 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_716 = {
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
	var s_717 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_718 = {
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
	var s_719 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_720 = {
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
	var s_721 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_722 = {
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

	var s_723 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_725 = {
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
	var s_726 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_727 = {
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
	var s_728 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_729 = {
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
	var s_730 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_731 = {
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
	var s_732 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_733 = {
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
	var s_734 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_735 = {
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
	var s_736 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_57 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_738 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_739 = {
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
	var s_740 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_741 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_742 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_743 = {
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
	var s_744 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_745 = {
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
	var s_746 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_747 = {
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
	var s_748 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_749 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_750 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_751 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_58 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_752 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_753 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_755 = {
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
	var s_756 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_757 = {
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
	var s_758 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_760 = {
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
	var s_761 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_762 = {
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
	var s_763 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_764 = {
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

	var s_765 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_767 = {
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
	var s_768 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_769 = {
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
	var s_770 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_771 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_772 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_773 = {
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
	var s_774 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_776 = {
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
	var s_777 = {
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

	var s_778 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_779 = {
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
	var s_780 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_781 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_782 = {
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
	var s_785 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_786 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_787 = {
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
	var s_788 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_789 = {
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
	var s_790 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_791 = {
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

	var s_792 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_793 = {
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
	var s_794 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_795 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_796 = {
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
	var s_797 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_798 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["In retaliation, Silvia pushed Adam.", "In retaliation, Bill pushed Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_799 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_800 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_801 = {
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
	var s_802 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_803 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_804 = {
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

	var s_805 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_806 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_808 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_809 = {
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
	var s_810 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_811 = {
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
	var s_812 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_813 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_814 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_815 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_63 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_816 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_817 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_818 = {
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
	var s_819 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_821 = {
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
	var s_822 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_823 = {
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
	var s_824 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_827 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_64 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_828 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_829 = {
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
	var s_830 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_831 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_832 = {
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
	var s_833 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_834 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_835 = {
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
	var s_836 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_837 = {
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
	var s_838 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_839 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_840 = {
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

	var s_841 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_842 = {
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
	var s_843 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_844 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_845 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_846 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_847 = {
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
	var s_848 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_849 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_850 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_851 = {
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

	var s_852 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_853 = {
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
	var s_854 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_856 = {
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
	var s_857 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_858 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_859 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_860 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_861 = {
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
	var s_862 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_863 = {
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

	var s_864 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_865 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_866 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_867 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_868 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill stared with rage into Olivia's eyes.", "Bill yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_869 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_870 = {
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
	var s_871 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_872 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_873 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_874 = {
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

	var s_875 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_876 = {
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
	var s_877 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_878 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_879 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_880 = {
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
	var s_881 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_882 = {
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
	var s_883 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_884 = {
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
	var s_885 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_886 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_887 = {
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
	var s_888 = {
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

	var s_889 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_890 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_893 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_894 = {
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
	var s_895 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_896 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_897 = {
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
	var s_898 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_899 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_70 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_900 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_902 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_903 = {
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
	var s_904 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_905 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill yelled, 'Hey! Relax.'", "Silvia yelled, 'Hey! Relax.'"],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "YELL",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_906 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_907 = {
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
	var s_908 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_909 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Adam to leave."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_910 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_911 = {
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
	var s_912 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_913 = {
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

	var s_914 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_915 = {
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
	var s_916 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_917 = {
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
	var s_918 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_919 = {
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
	var s_920 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_921 = {
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
	var s_922 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_923 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_924 = {
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
	var s_925 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_926 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_927 = {
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

	var s_928 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_929 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_930 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_931 = {
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
	var s_932 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_933 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_934 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_935 = {
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
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_936 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_937 = {
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
	var s_938 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_939 = {
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
	var s_940 = {
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

	var s_941 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_942 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_943 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_945 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_946 = {
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
	var s_947 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_948 = {
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
	var s_949 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_950 = {
		type: 'instructions',
		pages: ["Adam stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_951 = {
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

	var s_952 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_953 = {
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
	var s_954 = {
		type: 'instructions',
		pages: ["Olivia cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_955 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Bill hurried back in front of Olivia.", "Silvia hurried back in front of Olivia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_956 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_957 = {
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
	var s_958 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_959 = {
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
	var s_960 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_961 = {
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
	var s_962 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_963 = {
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
	var s_964 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_966 = {
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

	var s_967 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_968 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_969 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_970 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam proceeded to shove Bill.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_971 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_973 = {
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
	var s_974 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_975 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_976 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_76 = {
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
		var q_979 = {
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
	var s_980 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_981 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_982 = {
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
	var s_983 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_984 = {
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
	var s_985 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_986 = {
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
	var s_987 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_988 = {
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
	var s_989 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_990 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_991 = {
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

	var s_992 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_993 = {
		type: 'instructions',
		pages: ["Adam cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_994 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_995 = {
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
	var s_996 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_997 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_998 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1000 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1001 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_78 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1002 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1003 = {
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
	var s_1004 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1005 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1006 = {
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
	var s_1007 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1008 = {
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
	var s_1009 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1010 = {
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
	var s_1011 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1012 = {
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
	var s_1013 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1014 = {
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
	var s_1015 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1016 = {
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
	var s_1017 = {
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

	var s_1018 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1019 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1020 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1021 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1022 = {
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
	var s_1023 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1024 = {
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
	var s_1025 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1026 = {
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
	var s_1027 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1029 = {
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

	var s_1030 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1032 = {
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
	var s_1033 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1034 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1035 = {
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Bill" }
			} 
	var s_1036 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1037 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1038 = {
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
	var s_1039 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1040 = {
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
	var s_1041 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1042 = {
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
	var s_1043 = {
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

	var s_1044 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1046 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1047 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1048 = {
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
	var s_1049 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1051 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1052 = {
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
	var s_1053 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["The barista handed Bill a napkin and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 

	var betweenstory_82 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1055 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1056 = {
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
	var s_1057 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1058 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1059 = {
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
	var s_1060 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1062 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1063 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1064 = {
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
	var s_1065 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1066 = {
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

	var s_1067 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1068 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1069 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1071 = {
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
	var s_1072 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1073 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1074 = {
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
	var s_1075 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1077 = {
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
		var q_1080 = {
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
	var s_1081 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1082 = {
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
	var s_1083 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1084 = {
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
	var s_1085 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1086 = {
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
	var s_1087 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1088 = {
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
	var s_1089 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1090 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1091 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_85 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1092 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1094 = {
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
	var s_1095 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1096 = {
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
	var s_1097 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1098 = {
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
	var s_1099 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1100 = {
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
	var s_1101 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1102 = {
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
	var s_1103 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
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
						"true_RFC":"subject-Olivia_victim-Silvia",
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1106 = {
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

	var s_1107 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1108 = {
		type: 'instructions',
		pages: ["Clumsily, Adam stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1109 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1110 = {
			type: "html-keyboard-response",
			stimulus: "<p> 'What happens next?' <p>",
			labels: ["Adam turned to Silvia and gave a very mean look.", "Adam proceeded to shove Silvia."],
			choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject-Adam_victim-Silvia",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1111 = {
		type: 'instructions',
		pages: ["Adam turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1112 = {
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
	var s_1113 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1114 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1115 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1116 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1117 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1118 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_87 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1119 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1120 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1121 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1122 = {
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
	var s_1123 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1124 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1125 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
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
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1131 = {
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
	var s_1132 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1133 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1134 = {
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
	var s_1135 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1136 = {
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
	var s_1137 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1138 = {
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
	var s_1139 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1140 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1141 = {
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
	var s_1142 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1143 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_89 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1144 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1145 = {
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
	var s_1146 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1147 = {
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
	var s_1148 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1149 = {
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
	var s_1150 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1151 = {
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
	var s_1152 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1153 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1154 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1155 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1156 = {
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

	var s_1157 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1159 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1160 = {
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
	var s_1161 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1162 = {
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
	var s_1163 = {
		type: 'instructions',
		pages: ["In retaliation, Silvia pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1164 = {
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
	var s_1165 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1166 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1167 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1168 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_91 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1169 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1170 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1171 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1172 = {
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
	var s_1173 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1174 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1175 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1176 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1177 = {
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
						"false_RFC":"subject-Olivia_victim-Silvia" }
			} 
	var s_1178 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1179 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_92 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1180 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1181 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1182 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1183 = {
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
	var s_1184 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1185 = {
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
	var s_1186 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Adam crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1188 = {
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
	var s_1189 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1190 = {
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
	var s_1191 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1192 = {
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

	var s_1193 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1194 = {
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
	var s_1195 = {
		type: 'instructions',
		pages: ["Adam cut Silvia, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1196 = {
		type: 'instructions',
		pages: ["Silvia hurried back in front of Adam."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1197 = {
		type: 'instructions',
		pages: ["Adam proceeded to shove Silvia."],
		data: { "state": "SHOVE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1198 = {
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
	var s_1199 = {
		type: 'instructions',
		pages: ["Silvia stared with rage into Adam's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Silvia's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
		var q_1201 = {
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
	var s_1202 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Adam to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1203 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Silvia",
						"type": "story" }
	} 
	var s_1204 = {
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

	var s_1205 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1206 = {
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
	var s_1207 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1208 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1209 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1210 = {
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
	var s_1211 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1212 = {
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
	var s_1213 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1214 = {
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
	var s_1215 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1216 = {
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
						"true_RFC":"subject-Olivia_victim-Bill",
						"false_RFC":"subject-Adam_victim-Silvia" }
			} 
	var s_1217 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1218 = {
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

	var s_1219 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1220 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, who was first in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1221 = {
		type: 'instructions',
		pages: ["Bill hurried back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1222 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1223 = {
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
	var s_1224 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1225 = {
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
	var s_1226 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1227 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1228 = {
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
	var s_1229 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1230 = {
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

	var s_1231 = {
		type: 'instructions',
		pages: ["One morning, Adam walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1232 = {
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
	var s_1235 = {
		type: 'instructions',
		pages: ["Adam turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1236 = {
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
		data: { "true_on_right": "True",
						"type":"question",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject-Adam_victim-Bill",
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1239 = {
		type: 'instructions',
		pages: ["Adam splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1240 = {
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
	var s_1241 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Adam to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
		var q_1242 = {
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
	var s_1243 = {
		type: 'instructions',
		pages: ["Adam ran out yelling 'Juice is better, anyway!'"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject-Adam_victim-Bill",
						"type": "story" }
	} 
	var s_1244 = {
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

	var s_1245 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1246 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Silvia's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1247 = {
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
	var s_1248 = {
		type: 'instructions',
		pages: ["Silvia was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1249 = {
		type: 'instructions',
		pages: ["Olivia turned to Silvia and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1250 = {
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
	var s_1251 = {
		type: 'instructions',
		pages: ["Silvia yelled, 'Hey! Relax.'"],
		data: { "state": "YELL",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1252 = {
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
	var s_1253 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Silvia's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1254 = {
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
	var s_1255 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
		var q_1256 = {
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
						"false_RFC":"subject-Adam_victim-Bill" }
			} 
	var s_1257 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 
	var s_1258 = {
		type: 'instructions',
		pages: ["The barista handed Silvia a napkin and gave Silvia a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject-Olivia_victim-Silvia",
						"type": "story" }
	} 

	var betweenstory_98 = {
		type: 'instructions',
		pages: [' ** ~ NEW STORY ~ ** '],
		data: {"type": "instruction"}
	} 

	var s_1259 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
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
	var s_1262 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1263 = {
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
	var s_1264 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1265 = {
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
		var q_1268 = {
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
	var s_1269 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1270 = {
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

	var s_1271 = {
		type: 'instructions',
		pages: ["One morning, Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1272 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1273 = {
		type: 'instructions',
		pages: ["Bill was enraged and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1274 = {
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
	var s_1275 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1276 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1277 = {
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
	var s_1278 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1279 = {
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
	var s_1280 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
		var q_1281 = {
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
	var s_1282 = {
		type: 'instructions',
		pages: ["Olivia stormed out yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject-Olivia_victim-Bill",
						"type": "story" }
	} 
	var s_1283 = {
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
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,s_4,s_5,s_6,q_7,s_8,q_9,s_10,s_11,s_12,betweenstory_1,s_13,q_14,s_15,s_16,q_17,s_18,q_19,s_20,q_21,s_22,s_23,s_24,q_25,s_26,betweenstory_2,s_27,q_28,s_29,s_30,q_31,s_32,q_33,s_34,s_35,q_36,s_37,q_38,s_39,s_40,betweenstory_3,s_41,s_42,s_43,s_44,s_45,s_46,q_47,s_48,q_49,s_50,s_51,betweenstory_4,s_52,s_53,s_54,q_55,s_56,q_57,s_58,q_59,s_60,q_61,s_62,s_63,q_64,s_65,betweenstory_5,s_66,s_67,q_68,s_69,s_70,q_71,s_72,q_73,s_74,q_75,s_76,q_77,s_78,s_79,betweenstory_6,s_80,s_81,s_82,q_83,s_84,q_85,s_86,q_87,s_88,q_89,s_90,s_91,s_92,betweenstory_7,s_93,s_94,s_95,q_96,s_97,q_98,s_99,q_100,s_101,s_102,q_103,s_104,s_105,betweenstory_8,s_106,s_107,s_108,q_109,s_110,s_111,s_112,q_113,s_114,s_115,s_116,betweenstory_9,s_117,s_118,s_119,q_120,s_121,s_122,s_123,q_124,s_125,q_126,s_127,s_128,betweenstory_10,s_129,q_130,s_131,s_132,q_133,s_134,s_135,q_136,s_137,q_138,s_139,q_140,s_141,s_142,betweenstory_11,s_143,s_144,s_145,s_146,q_147,s_148,q_149,s_150,q_151,s_152,s_153,s_154,betweenstory_12,s_155,s_156,s_157,q_158,s_159,s_160,q_161,s_162,s_163,q_164,s_165,s_166,betweenstory_13,s_167,q_168,s_169,q_170,s_171,q_172,s_173,q_174,s_175,q_176,s_177,q_178,s_179,q_180,s_181,s_182,betweenstory_14,s_183,s_184,s_185,q_186,s_187,q_188,s_189,q_190,s_191,s_192,q_193,s_194,q_195,s_196,betweenstory_15,s_197,s_198,q_199,s_200,s_201,q_202,s_203,s_204,q_205,s_206,q_207,s_208,s_209,betweenstory_16,s_210,q_211,s_212,q_213,s_214,q_215,s_216,s_217,q_218,s_219,s_220,s_221,s_222,betweenstory_17,s_223,s_224,s_225,s_226,q_227,s_228,s_229,s_230,q_231,s_232,s_233,betweenstory_18,s_234,s_235,s_236,q_237,s_238,q_239,s_240,s_241,s_242,q_243,s_244,s_245,betweenstory_19,s_246,q_247,s_248,s_249,s_250,q_251,s_252,q_253,s_254,q_255,s_256,q_257,s_258,s_259,betweenstory_20,s_260,s_261,s_262,q_263,s_264,s_265,q_266,s_267,s_268,q_269,s_270,s_271,betweenstory_21,s_272,q_273,s_274,s_275,q_276,s_277,q_278,s_279,q_280,s_281,q_282,s_283,q_284,s_285,s_286,betweenstory_22,s_287,s_288,s_289,s_290,q_291,s_292,s_293,q_294,s_295,s_296,q_297,s_298,betweenstory_23,s_299,s_300,s_301,s_302,q_303,s_304,q_305,s_306,q_307,s_308,s_309,s_310,betweenstory_24,s_311,s_312,s_313,s_314,q_315,s_316,q_317,s_318,q_319,s_320,q_321,s_322,s_323,betweenstory_25,s_324,s_325,s_326,q_327,s_328,s_329,s_330,q_331,s_332,q_333,s_334,s_335,betweenstory_26,s_336,s_337,s_338,q_339,s_340,s_341,q_342,s_343,q_344,s_345,q_346,s_347,s_348,betweenstory_27,s_349,s_350,q_351,s_352,q_353,s_354,q_355,s_356,q_357,s_358,q_359,s_360,s_361,q_362,s_363,betweenstory_28,s_364,s_365,s_366,q_367,s_368,q_369,s_370,q_371,s_372,q_373,s_374,q_375,s_376,s_377,betweenstory_29,s_378,s_379,s_380,s_381,q_382,s_383,s_384,q_385,s_386,q_387,s_388,s_389,betweenstory_30,s_390,q_391,s_392,q_393,s_394,s_395,q_396,s_397,q_398,s_399,q_400,s_401,s_402,s_403,betweenstory_31,s_404,s_405,s_406,q_407,s_408,q_409,s_410,s_411,q_412,s_413,q_414,s_415,s_416,betweenstory_32,s_417,q_418,s_419,s_420,q_421,s_422,s_423,s_424,s_425,q_426,s_427,s_428,betweenstory_33,s_429,s_430,s_431,q_432,s_433,q_434,s_435,q_436,s_437,s_438,s_439,s_440,betweenstory_34,s_441,s_442,s_443,s_444,q_445,s_446,s_447,q_448,s_449,s_450,s_451,betweenstory_35,s_452,s_453,s_454,q_455,s_456,q_457,s_458,s_459,q_460,s_461,q_462,s_463,s_464,betweenstory_36,s_465,s_466,s_467,q_468,s_469,q_470,s_471,q_472,s_473,s_474,s_475,s_476,betweenstory_37,s_477,q_478,s_479,s_480,s_481,s_482,s_483,q_484,s_485,q_486,s_487,s_488,betweenstory_38,s_489,q_490,s_491,q_492,s_493,s_494,q_495,s_496,s_497,q_498,s_499,q_500,s_501,s_502,betweenstory_39,s_503,s_504,s_505,s_506,q_507,s_508,q_509,s_510,q_511,s_512,q_513,s_514,s_515,betweenstory_40,s_516,q_517,s_518,s_519,q_520,s_521,q_522,s_523,s_524,q_525,s_526,q_527,s_528,s_529,betweenstory_41,s_530,s_531,s_532,q_533,s_534,s_535,s_536,s_537,s_538,s_539,betweenstory_42,s_540,q_541,s_542,s_543,q_544,s_545,q_546,s_547,q_548,s_549,q_550,s_551,q_552,s_553,s_554,betweenstory_43,s_555,q_556,s_557,s_558,q_559,s_560,q_561,s_562,q_563,s_564,q_565,s_566,q_567,s_568,s_569,betweenstory_44,s_570,q_571,s_572,s_573,s_574,s_575,s_576,q_577,s_578,s_579,q_580,s_581,betweenstory_45,s_582,s_583,s_584,q_585,s_586,q_587,s_588,q_589,s_590,q_591,s_592,s_593,s_594,betweenstory_46,s_595,s_596,s_597,s_598,q_599,s_600,q_601,s_602,s_603,s_604,s_605,betweenstory_47,s_606,q_607,s_608,s_609,q_610,s_611,q_612,s_613,q_614,s_615,q_616,s_617,s_618,s_619,betweenstory_48,s_620,s_621,s_622,s_623,s_624,q_625,s_626,q_627,s_628,q_629,s_630,s_631,betweenstory_49,s_632,q_633,s_634,q_635,s_636,s_637,s_638,q_639,s_640,s_641,q_642,s_643,s_644,betweenstory_50,s_645,s_646,s_647,q_648,s_649,s_650,q_651,s_652,q_653,s_654,s_655,s_656,betweenstory_51,s_657,s_658,s_659,s_660,q_661,s_662,s_663,q_664,s_665,s_666,q_667,s_668,betweenstory_52,s_669,q_670,s_671,s_672,s_673,s_674,q_675,s_676,q_677,s_678,s_679,q_680,s_681,betweenstory_53,s_682,q_683,s_684,s_685,q_686,s_687,q_688,s_689,q_690,s_691,s_692,s_693,s_694,betweenstory_54,s_695,q_696,s_697,s_698,q_699,s_700,s_701,q_702,s_703,q_704,s_705,q_706,s_707,s_708,betweenstory_55,s_709,s_710,s_711,q_712,s_713,q_714,s_715,q_716,s_717,q_718,s_719,q_720,s_721,s_722,betweenstory_56,s_723,s_724,q_725,s_726,q_727,s_728,q_729,s_730,q_731,s_732,q_733,s_734,q_735,s_736,s_737,betweenstory_57,s_738,q_739,s_740,s_741,s_742,q_743,s_744,q_745,s_746,q_747,s_748,q_749,s_750,s_751,betweenstory_58,s_752,s_753,s_754,q_755,s_756,q_757,s_758,s_759,q_760,s_761,q_762,s_763,s_764,betweenstory_59,s_765,s_766,q_767,s_768,q_769,s_770,s_771,s_772,q_773,s_774,s_775,q_776,s_777,betweenstory_60,s_778,q_779,s_780,s_781,q_782,s_783,q_784,s_785,s_786,q_787,s_788,q_789,s_790,s_791,betweenstory_61,s_792,q_793,s_794,s_795,q_796,s_797,q_798,s_799,s_800,q_801,s_802,s_803,s_804,betweenstory_62,s_805,s_806,s_807,s_808,q_809,s_810,q_811,s_812,s_813,s_814,s_815,betweenstory_63,s_816,s_817,q_818,s_819,s_820,q_821,s_822,q_823,s_824,s_825,s_826,s_827,betweenstory_64,s_828,q_829,s_830,s_831,q_832,s_833,s_834,q_835,s_836,q_837,s_838,s_839,s_840,betweenstory_65,s_841,q_842,s_843,s_844,s_845,s_846,q_847,s_848,s_849,s_850,s_851,betweenstory_66,s_852,q_853,s_854,s_855,q_856,s_857,s_858,s_859,s_860,q_861,s_862,s_863,betweenstory_67,s_864,s_865,s_866,s_867,q_868,s_869,q_870,s_871,s_872,s_873,s_874,betweenstory_68,s_875,q_876,s_877,s_878,s_879,q_880,s_881,q_882,s_883,q_884,s_885,s_886,q_887,s_888,betweenstory_69,s_889,s_890,s_891,s_892,s_893,q_894,s_895,s_896,q_897,s_898,s_899,betweenstory_70,s_900,s_901,s_902,q_903,s_904,q_905,s_906,q_907,s_908,q_909,s_910,q_911,s_912,s_913,betweenstory_71,s_914,q_915,s_916,q_917,s_918,q_919,s_920,q_921,s_922,s_923,q_924,s_925,s_926,s_927,betweenstory_72,s_928,s_929,s_930,q_931,s_932,s_933,s_934,q_935,s_936,q_937,s_938,q_939,s_940,betweenstory_73,s_941,s_942,s_943,s_944,s_945,q_946,s_947,q_948,s_949,s_950,s_951,betweenstory_74,s_952,q_953,s_954,q_955,s_956,q_957,s_958,q_959,s_960,q_961,s_962,q_963,s_964,s_965,s_966,betweenstory_75,s_967,s_968,s_969,q_970,s_971,s_972,q_973,s_974,s_975,s_976,s_977,betweenstory_76,s_978,q_979,s_980,s_981,q_982,s_983,q_984,s_985,q_986,s_987,q_988,s_989,s_990,s_991,betweenstory_77,s_992,s_993,s_994,q_995,s_996,s_997,s_998,s_999,s_1000,s_1001,betweenstory_78,s_1002,q_1003,s_1004,s_1005,q_1006,s_1007,q_1008,s_1009,q_1010,s_1011,q_1012,s_1013,q_1014,s_1015,q_1016,s_1017,betweenstory_79,s_1018,s_1019,s_1020,s_1021,q_1022,s_1023,q_1024,s_1025,q_1026,s_1027,s_1028,s_1029,betweenstory_80,s_1030,s_1031,q_1032,s_1033,s_1034,q_1035,s_1036,s_1037,q_1038,s_1039,q_1040,s_1041,q_1042,s_1043,betweenstory_81,s_1044,s_1045,s_1046,s_1047,q_1048,s_1049,s_1050,s_1051,q_1052,s_1053,s_1054,betweenstory_82,s_1055,q_1056,s_1057,s_1058,q_1059,s_1060,s_1061,s_1062,s_1063,q_1064,s_1065,s_1066,betweenstory_83,s_1067,s_1068,s_1069,s_1070,q_1071,s_1072,s_1073,q_1074,s_1075,s_1076,s_1077,betweenstory_84,s_1078,s_1079,q_1080,s_1081,q_1082,s_1083,q_1084,s_1085,q_1086,s_1087,q_1088,s_1089,s_1090,s_1091,betweenstory_85,s_1092,s_1093,q_1094,s_1095,q_1096,s_1097,q_1098,s_1099,q_1100,s_1101,q_1102,s_1103,q_1104,s_1105,s_1106,betweenstory_86,s_1107,s_1108,s_1109,q_1110,s_1111,q_1112,s_1113,s_1114,q_1115,s_1116,s_1117,s_1118,betweenstory_87,s_1119,s_1120,s_1121,q_1122,s_1123,s_1124,s_1125,s_1126,q_1127,s_1128,s_1129,betweenstory_88,s_1130,q_1131,s_1132,s_1133,q_1134,s_1135,q_1136,s_1137,q_1138,s_1139,s_1140,q_1141,s_1142,s_1143,betweenstory_89,s_1144,q_1145,s_1146,q_1147,s_1148,q_1149,s_1150,q_1151,s_1152,s_1153,s_1154,s_1155,s_1156,betweenstory_90,s_1157,s_1158,s_1159,q_1160,s_1161,q_1162,s_1163,q_1164,s_1165,s_1166,s_1167,s_1168,betweenstory_91,s_1169,s_1170,s_1171,q_1172,s_1173,s_1174,s_1175,s_1176,q_1177,s_1178,s_1179,betweenstory_92,s_1180,s_1181,s_1182,q_1183,s_1184,q_1185,s_1186,s_1187,q_1188,s_1189,q_1190,s_1191,s_1192,betweenstory_93,s_1193,q_1194,s_1195,s_1196,s_1197,q_1198,s_1199,s_1200,q_1201,s_1202,s_1203,s_1204,betweenstory_94,s_1205,q_1206,s_1207,s_1208,s_1209,q_1210,s_1211,q_1212,s_1213,q_1214,s_1215,q_1216,s_1217,s_1218,betweenstory_95,s_1219,s_1220,s_1221,s_1222,q_1223,s_1224,q_1225,s_1226,s_1227,q_1228,s_1229,s_1230,betweenstory_96,s_1231,q_1232,s_1233,s_1234,s_1235,q_1236,s_1237,q_1238,s_1239,q_1240,s_1241,q_1242,s_1243,s_1244,betweenstory_97,s_1245,s_1246,q_1247,s_1248,s_1249,q_1250,s_1251,q_1252,s_1253,q_1254,s_1255,q_1256,s_1257,s_1258,betweenstory_98,s_1259,s_1260,s_1261,s_1262,q_1263,s_1264,q_1265,s_1266,s_1267,q_1268,s_1269,s_1270,betweenstory_99,s_1271,s_1272,s_1273,q_1274,s_1275,s_1276,q_1277,s_1278,q_1279,s_1280,q_1281,s_1282,s_1283,betweenstory_100,],

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