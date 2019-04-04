// load psiturk
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

var intro1 = {
  type: 'instructions',
  pages: ['** After reading this sentence, press spacebar. ** ']
  }
var intro2 = {
  type: 'instructions',
  pages: ['In this experiment you will read stories and answer questions.']
  } 
var intro3 = {
  type: 'instructions',
  pages: ['The stories will be presented a sentence at a time.']
  }
var intro4 = {
  type: 'instructions',
  pages: ['While reading, you will be periodically interrupted and asked to predict what happens next in the story.']
  } 
var intro5 = {
  type: 'instructions',
  pages: ['The questions will ask you to predict which one of two given options is more likely to happen next.']
  } 
var intro6 = {
  type: 'instructions',
  pages: ['When a question comes up, select an option with the right or left arrow keys on your keyboard.']
  } 
var intro7 = {
  type: 'instructions',
  pages: [' ** once ready, press spacebar to begin the first story ** ']
  } 

// CODE BODY START

	var s_1 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_2 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_3 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_4 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_5 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_6 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_7 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_9 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_10 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_11 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_12 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_13 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_14 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_15 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_16 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_17 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_18 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_19 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_21 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_22 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_23 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_24 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_25 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_26 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_30 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_31 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_32 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_33 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_34 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_35 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_36 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_37 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_38 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_41 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_43 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_44 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_45 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_46 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_47 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_48 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_49 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_50 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_51 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_52 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_54 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_55 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_56 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_58 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_59 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_61 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_62 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_63 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_64 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_65 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_66 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_69 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_70 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_72 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_76 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_77 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_79 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_80 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_81 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_83 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_87 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_89 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_90 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_91 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_93 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_94 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_96 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_97 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_100 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_101 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_102 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_104 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_107 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_110 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_114 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_116 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_119 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_120 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_123 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_124 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_126 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_127 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_128 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_130 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_131 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_132 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_133 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_134 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_135 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_137 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_141 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_142 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_144 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_145 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_146 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_148 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_153 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_154 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_155 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_156 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_157 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_160 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_161 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_162 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_163 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_164 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_165 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_167 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_169 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_170 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_171 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_173 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_174 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_175 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_176 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_177 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_178 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_179 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_180 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_181 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_184 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_185 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_186 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_190 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_191 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_192 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_195 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_196 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_198 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_199 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_200 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_202 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_203 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_205 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_206 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_207 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_208 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_209 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_210 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_211 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_212 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_216 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_219 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_221 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_222 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_223 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_226 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_227 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_229 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_230 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_231 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_232 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_234 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_237 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_238 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_242 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_244 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_246 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_247 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_249 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_250 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_252 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_254 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_257 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_258 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_259 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_261 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_262 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_264 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_265 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_266 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_267 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_268 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_269 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_275 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_276 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_277 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_278 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_279 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_280 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_281 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_285 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_286 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_287 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_288 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_291 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_292 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_293 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_297 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_304 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_306 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_308 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_309 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_310 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_312 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_314 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_315 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_316 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_317 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_318 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_319 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_322 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_323 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_325 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_326 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_328 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_329 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_330 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_331 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_332 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_333 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_335 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_336 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_337 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_339 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_341 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_343 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_344 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_345 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_348 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_349 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_350 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_352 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_353 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_354 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_355 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_356 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_358 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_359 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_360 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_361 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_362 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_364 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_367 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_368 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_369 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_371 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_372 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_375 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_377 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_379 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_381 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_384 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_385 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_387 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_389 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_390 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_391 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_392 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_393 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_394 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_395 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_396 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_397 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_398 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_399 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_402 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_404 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_405 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_406 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_408 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_410 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_413 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_414 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_416 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_417 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_418 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_419 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_420 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_421 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_422 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_423 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_424 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_425 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_427 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_428 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_429 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_430 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_433 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_434 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_435 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_436 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_437 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_438 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_439 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_441 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_445 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_451 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_453 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_455 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_457 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_459 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_463 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_465 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_466 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_467 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_468 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_469 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_471 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_472 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_474 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_476 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_477 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_481 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_482 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_483 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_484 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_489 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_494 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_495 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_497 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_498 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_499 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_500 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_502 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_505 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_506 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_509 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_511 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_512 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_513 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_514 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_516 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_517 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_518 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_519 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_522 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_523 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_524 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_527 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_529 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_531 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_534 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_535 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_536 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_537 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_538 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_539 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_540 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_542 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_543 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_544 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_545 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_546 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_549 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_551 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_552 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_553 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_554 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_556 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_557 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_560 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_563 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_566 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_568 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_570 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_571 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_573 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_574 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_576 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_577 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_578 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_579 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_580 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_581 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_582 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_584 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_585 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_586 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_587 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_590 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_592 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_593 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_594 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_595 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_598 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_600 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_601 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_602 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_604 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_605 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_606 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_607 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_611 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_612 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_613 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_616 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_617 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_618 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_619 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_620 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_623 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_624 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_626 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_627 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_629 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_631 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_632 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_633 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_635 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_636 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_637 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_639 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_640 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_641 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_642 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_643 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_644 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_645 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_646 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_647 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_648 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_650 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_656 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_659 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_660 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_661 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_662 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_663 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_664 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_666 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_668 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_670 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_672 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_674 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_675 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_676 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_677 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_678 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_679 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_680 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_685 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_686 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_687 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_688 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_689 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_690 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_691 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_693 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_695 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_696 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_697 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_701 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_702 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_703 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_704 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_705 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_706 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_707 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_708 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_709 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_710 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_711 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_712 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_713 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_715 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_719 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_721 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_722 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_723 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_724 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_725 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_726 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_728 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_729 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_730 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_731 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_732 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_733 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_734 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_735 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_739 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_741 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_742 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_743 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_744 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_745 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_746 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_747 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_748 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_749 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_750 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_751 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_752 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_753 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_755 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_756 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_757 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_758 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_760 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_761 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_762 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_763 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_764 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_765 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_767 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_768 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_769 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_770 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_771 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_772 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_773 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_775 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_776 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_777 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_778 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_779 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_781 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_783 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_784 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_785 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_786 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_787 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_788 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_789 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_790 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_791 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_792 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_793 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_795 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_796 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_797 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_798 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_799 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_800 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_801 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_802 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_803 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_804 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_805 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_806 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_808 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_809 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_810 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_811 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_812 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_813 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_814 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_815 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_816 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_817 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_818 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_819 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_820 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_821 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_823 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_824 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_825 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_826 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_827 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_828 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_829 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_830 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_831 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_832 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_833 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_834 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_835 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_836 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_838 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_839 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_840 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_841 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_842 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_843 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_844 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_845 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_846 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_847 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_848 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_849 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_850 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_851 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_852 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_853 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_854 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_855 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_856 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_857 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_858 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_859 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_860 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_861 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_862 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_864 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_865 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_866 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_867 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_868 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_869 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_870 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_871 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_872 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_873 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_874 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_875 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_877 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_878 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_879 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_880 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_881 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_884 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_885 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_886 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_887 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_888 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_889 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_890 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_893 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_894 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Silvia.", "Bill stepped back in front of Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_895 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_896 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_898 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_899 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_900 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_902 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_903 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_904 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_905 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_906 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_907 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_908 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_909 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_910 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_911 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_912 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_913 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_914 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_915 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_916 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_917 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_918 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_919 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_921 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_922 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_923 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_924 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_925 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_926 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_927 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_928 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_929 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_930 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_931 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_932 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_933 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_934 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_935 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_936 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_937 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_938 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_939 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_940 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_941 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_942 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_943 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_945 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_946 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_947 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_949 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_950 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_951 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_952 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_954 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_955 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_956 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_957 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_958 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_959 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_960 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_961 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_962 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_963 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_964 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_965 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_966 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_968 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_969 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_970 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_971 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_972 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_973 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_974 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_975 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_976 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_978 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_979 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_980 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_981 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_982 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_983 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_984 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_985 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_986 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_987 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_988 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_989 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_990 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_991 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_993 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_994 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_995 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_996 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_997 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_998 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1000 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1001 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1002 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1003 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1004 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1005 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1006 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1007 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1008 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1009 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1010 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1011 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1012 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1013 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1014 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1015 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1016 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1017 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1019 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1020 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1021 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1022 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1023 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1024 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1025 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1026 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1027 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1028 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1029 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1030 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1031 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1033 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1034 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1035 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1036 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1037 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1038 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1039 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1040 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1042 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1043 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1044 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1046 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1047 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1048 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1049 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1051 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1052 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1053 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1054 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1055 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1056 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1057 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1058 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1059 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1060 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1061 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1062 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1063 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1064 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Olivia stepped on Bill's foot.", "Olivia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1065 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1067 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1068 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1069 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1071 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1072 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1073 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1074 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1077 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1078 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1079 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1080 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1081 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1082 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1083 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1084 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1085 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1086 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1087 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1088 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1089 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1090 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1091 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1092 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1093 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1094 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1095 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1096 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1097 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1098 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1099 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1100 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1101 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1102 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1103 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia cut Bill, the first person in line.", "Clumsily, Silvia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1104 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1106 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1107 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1108 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1109 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1110 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1111 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1112 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1113 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1114 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1115 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1116 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1117 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1119 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1120 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1121 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1122 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1123 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1124 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1125 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1126 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1127 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1128 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1129 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1130 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1131 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1133 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1134 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1136 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1137 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1138 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1139 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1140 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1142 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Olivia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1143 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1144 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1145 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Olivia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1146 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1147 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1148 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1150 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1151 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1152 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1153 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1154 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1155 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1156 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1157 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1159 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1160 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1161 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1163 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1164 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1165 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1166 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1167 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1168 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1169 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1170 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1171 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1173 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1174 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1175 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1176 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1177 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1178 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1179 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSTARE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1181 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1182 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1183 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1184 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1185 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1186 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1188 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1189 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1190 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1191 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1192 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1193 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1194 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1195 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1196 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1197 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1198 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1199 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia cut Bill, the first person in line.", "Clumsily, Olivia stepped on Bill's foot."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "STEPFOOT",
						"false_tonode": "CUTLINE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1201 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1202 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1203 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1204 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1205 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia crumbled a muffin above Bill's head.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1206 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1207 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1208 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1209 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1210 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1211 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1212 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1213 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1214 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1215 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1216 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1217 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1218 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1219 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1220 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1221 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1222 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1223 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1224 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1225 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1226 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stepped back in front of Olivia.", "Bill stepped back in front of Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "CUTLINE",
						"true_tonode": "CUTBACK",
						"false_tonode": "CUTBACK",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1227 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1228 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia proceeded to shove Bill.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1229 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1230 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1231 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1232 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1233 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1234 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1235 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1236 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1238 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1239 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Clumsily, Silvia stepped on Bill's foot.", "Silvia cut Bill, the first person in line."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BEGIN",
						"true_tonode": "CUTLINE",
						"false_tonode": "STEPFOOT",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1240 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1241 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1242 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1243 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSTARE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1244 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1245 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1246 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1247 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1248 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1249 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1250 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1251 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1252 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1253 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1254 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1255 = {
		type: 'instructions',
		pages: ["Bill stared with rage into Silvia's eyes."],
		data: { "state": "XSTARE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1256 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1257 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1258 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia ran out yelling 'Juice is better, anyway!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1259 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1260 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,s_2,s_3,q_4,s_5,s_6,q_7,s_8,q_9,s_10,q_11,s_12,s_13,s_14,s_15,s_16,q_17,s_18,q_19,s_20,s_21,q_22,s_23,q_24,s_25,s_26,s_27,s_28,s_29,q_30,s_31,s_32,s_33,s_34,s_35,s_36,s_37,s_38,s_39,s_40,q_41,s_42,q_43,s_44,s_45,q_46,s_47,s_48,s_49,s_50,s_51,q_52,s_53,q_54,s_55,q_56,s_57,s_58,q_59,s_60,s_61,s_62,s_63,s_64,s_65,q_66,s_67,s_68,s_69,q_70,s_71,s_72,s_73,q_74,s_75,s_76,q_77,s_78,s_79,s_80,q_81,s_82,q_83,s_84,s_85,s_86,q_87,s_88,s_89,s_90,q_91,s_92,s_93,s_94,s_95,s_96,s_97,s_98,s_99,q_100,s_101,q_102,s_103,q_104,s_105,q_106,s_107,q_108,s_109,s_110,s_111,s_112,s_113,q_114,s_115,q_116,s_117,s_118,s_119,q_120,s_121,s_122,s_123,q_124,s_125,q_126,s_127,q_128,s_129,q_130,s_131,q_132,s_133,s_134,q_135,s_136,s_137,s_138,s_139,s_140,s_141,q_142,s_143,q_144,s_145,q_146,s_147,q_148,s_149,s_150,s_151,q_152,s_153,s_154,q_155,s_156,q_157,s_158,s_159,q_160,s_161,s_162,s_163,s_164,s_165,s_166,q_167,s_168,s_169,q_170,s_171,s_172,q_173,s_174,s_175,s_176,s_177,s_178,q_179,s_180,q_181,s_182,s_183,q_184,s_185,q_186,s_187,s_188,s_189,s_190,s_191,q_192,s_193,q_194,s_195,q_196,s_197,q_198,s_199,s_200,s_201,s_202,s_203,s_204,s_205,s_206,s_207,s_208,s_209,s_210,s_211,q_212,s_213,s_214,s_215,q_216,s_217,q_218,s_219,s_220,q_221,s_222,s_223,s_224,s_225,s_226,q_227,s_228,q_229,s_230,s_231,q_232,s_233,q_234,s_235,s_236,s_237,q_238,s_239,s_240,s_241,q_242,s_243,q_244,s_245,s_246,q_247,s_248,s_249,s_250,s_251,q_252,s_253,s_254,s_255,s_256,q_257,s_258,q_259,s_260,s_261,s_262,s_263,q_264,s_265,s_266,s_267,s_268,q_269,s_270,s_271,s_272,s_273,s_274,s_275,q_276,s_277,s_278,s_279,s_280,q_281,s_282,s_283,s_284,s_285,s_286,s_287,q_288,s_289,s_290,q_291,s_292,q_293,s_294,s_295,s_296,s_297,s_298,s_299,q_300,s_301,q_302,s_303,q_304,s_305,q_306,s_307,s_308,s_309,q_310,s_311,s_312,s_313,q_314,s_315,s_316,q_317,s_318,s_319,s_320,s_321,q_322,s_323,s_324,q_325,s_326,s_327,s_328,s_329,s_330,s_331,s_332,q_333,s_334,q_335,s_336,q_337,s_338,q_339,s_340,q_341,s_342,s_343,q_344,s_345,s_346,s_347,q_348,s_349,s_350,s_351,s_352,q_353,s_354,q_355,s_356,s_357,s_358,s_359,s_360,s_361,q_362,s_363,q_364,s_365,s_366,q_367,s_368,s_369,s_370,s_371,s_372,s_373,s_374,q_375,s_376,s_377,s_378,s_379,s_380,s_381,s_382,s_383,q_384,s_385,s_386,q_387,s_388,q_389,s_390,q_391,s_392,s_393,s_394,q_395,s_396,s_397,s_398,q_399,s_400,s_401,q_402,s_403,q_404,s_405,s_406,s_407,s_408,s_409,q_410,s_411,s_412,s_413,q_414,s_415,q_416,s_417,s_418,s_419,s_420,s_421,s_422,q_423,s_424,q_425,s_426,q_427,s_428,q_429,s_430,s_431,s_432,s_433,s_434,s_435,q_436,s_437,s_438,q_439,s_440,q_441,s_442,s_443,s_444,q_445,s_446,s_447,s_448,s_449,s_450,q_451,s_452,q_453,s_454,s_455,s_456,q_457,s_458,s_459,s_460,s_461,s_462,q_463,s_464,q_465,s_466,s_467,s_468,q_469,s_470,s_471,q_472,s_473,q_474,s_475,s_476,s_477,s_478,s_479,s_480,q_481,s_482,s_483,q_484,s_485,s_486,s_487,s_488,q_489,s_490,s_491,s_492,s_493,s_494,q_495,s_496,q_497,s_498,s_499,q_500,s_501,q_502,s_503,s_504,s_505,q_506,s_507,s_508,q_509,s_510,s_511,q_512,s_513,q_514,s_515,q_516,s_517,s_518,s_519,s_520,s_521,q_522,s_523,q_524,s_525,s_526,s_527,s_528,s_529,s_530,q_531,s_532,s_533,q_534,s_535,q_536,s_537,q_538,s_539,q_540,s_541,q_542,s_543,s_544,s_545,q_546,s_547,s_548,q_549,s_550,s_551,q_552,s_553,q_554,s_555,q_556,s_557,s_558,s_559,q_560,s_561,s_562,q_563,s_564,s_565,q_566,s_567,q_568,s_569,q_570,s_571,s_572,s_573,s_574,s_575,q_576,s_577,s_578,s_579,q_580,s_581,q_582,s_583,s_584,s_585,q_586,s_587,s_588,s_589,s_590,s_591,s_592,q_593,s_594,s_595,s_596,s_597,q_598,s_599,q_600,s_601,q_602,s_603,q_604,s_605,s_606,q_607,s_608,s_609,s_610,q_611,s_612,s_613,q_614,s_615,q_616,s_617,s_618,s_619,q_620,s_621,s_622,s_623,q_624,s_625,s_626,q_627,s_628,q_629,s_630,q_631,s_632,q_633,s_634,q_635,s_636,s_637,s_638,q_639,s_640,q_641,s_642,q_643,s_644,s_645,q_646,s_647,q_648,s_649,q_650,s_651,s_652,s_653,s_654,s_655,q_656,s_657,s_658,q_659,s_660,q_661,s_662,q_663,s_664,s_665,s_666,s_667,s_668,s_669,q_670,s_671,q_672,s_673,s_674,s_675,s_676,s_677,s_678,s_679,q_680,s_681,q_682,s_683,s_684,s_685,s_686,s_687,s_688,s_689,s_690,q_691,s_692,s_693,s_694,q_695,s_696,q_697,s_698,s_699,s_700,s_701,s_702,q_703,s_704,q_705,s_706,q_707,s_708,s_709,q_710,s_711,s_712,s_713,s_714,s_715,s_716,s_717,s_718,q_719,s_720,q_721,s_722,s_723,s_724,q_725,s_726,s_727,q_728,s_729,q_730,s_731,q_732,s_733,q_734,s_735,s_736,s_737,s_738,s_739,s_740,q_741,s_742,s_743,q_744,s_745,q_746,s_747,q_748,s_749,s_750,s_751,q_752,s_753,s_754,s_755,q_756,s_757,q_758,s_759,q_760,s_761,q_762,s_763,s_764,s_765,s_766,s_767,q_768,s_769,q_770,s_771,q_772,s_773,s_774,q_775,s_776,s_777,s_778,s_779,s_780,q_781,s_782,s_783,s_784,q_785,s_786,q_787,s_788,s_789,s_790,s_791,s_792,q_793,s_794,q_795,s_796,q_797,s_798,s_799,q_800,s_801,s_802,s_803,q_804,s_805,q_806,s_807,q_808,s_809,q_810,s_811,q_812,s_813,q_814,s_815,q_816,s_817,s_818,s_819,q_820,s_821,s_822,s_823,s_824,q_825,s_826,q_827,s_828,s_829,s_830,s_831,q_832,s_833,q_834,s_835,q_836,s_837,s_838,s_839,q_840,s_841,q_842,s_843,s_844,s_845,s_846,s_847,s_848,q_849,s_850,q_851,s_852,q_853,s_854,s_855,s_856,s_857,s_858,s_859,s_860,q_861,s_862,q_863,s_864,s_865,s_866,s_867,s_868,s_869,s_870,q_871,s_872,q_873,s_874,s_875,s_876,q_877,s_878,s_879,s_880,q_881,s_882,s_883,q_884,s_885,q_886,s_887,s_888,s_889,s_890,s_891,s_892,s_893,q_894,s_895,q_896,s_897,q_898,s_899,q_900,s_901,q_902,s_903,q_904,s_905,s_906,s_907,q_908,s_909,s_910,q_911,s_912,q_913,s_914,q_915,s_916,q_917,s_918,q_919,s_920,s_921,s_922,q_923,s_924,s_925,s_926,q_927,s_928,q_929,s_930,s_931,s_932,s_933,s_934,q_935,s_936,s_937,q_938,s_939,q_940,s_941,s_942,q_943,s_944,s_945,s_946,s_947,s_948,s_949,q_950,s_951,q_952,s_953,q_954,s_955,s_956,q_957,s_958,s_959,s_960,q_961,s_962,s_963,s_964,s_965,q_966,s_967,q_968,s_969,q_970,s_971,s_972,s_973,q_974,s_975,s_976,s_977,q_978,s_979,q_980,s_981,q_982,s_983,q_984,s_985,s_986,s_987,s_988,s_989,q_990,s_991,s_992,s_993,q_994,s_995,s_996,s_997,s_998,s_999,s_1000,q_1001,s_1002,q_1003,s_1004,s_1005,s_1006,q_1007,s_1008,s_1009,s_1010,s_1011,s_1012,q_1013,s_1014,q_1015,s_1016,q_1017,s_1018,q_1019,s_1020,q_1021,s_1022,s_1023,s_1024,q_1025,s_1026,s_1027,q_1028,s_1029,s_1030,q_1031,s_1032,s_1033,q_1034,s_1035,s_1036,s_1037,s_1038,s_1039,q_1040,s_1041,q_1042,s_1043,q_1044,s_1045,s_1046,q_1047,s_1048,s_1049,s_1050,q_1051,s_1052,s_1053,q_1054,s_1055,q_1056,s_1057,q_1058,s_1059,s_1060,s_1061,s_1062,s_1063,q_1064,s_1065,s_1066,q_1067,s_1068,q_1069,s_1070,q_1071,s_1072,s_1073,q_1074,s_1075,s_1076,s_1077,q_1078,s_1079,s_1080,s_1081,q_1082,s_1083,q_1084,s_1085,q_1086,s_1087,s_1088,s_1089,s_1090,s_1091,s_1092,q_1093,s_1094,q_1095,s_1096,s_1097,q_1098,s_1099,s_1100,s_1101,s_1102,q_1103,s_1104,s_1105,q_1106,s_1107,q_1108,s_1109,q_1110,s_1111,s_1112,q_1113,s_1114,s_1115,s_1116,s_1117,s_1118,s_1119,q_1120,s_1121,s_1122,q_1123,s_1124,s_1125,s_1126,s_1127,q_1128,s_1129,s_1130,q_1131,s_1132,q_1133,s_1134,s_1135,s_1136,s_1137,s_1138,s_1139,s_1140,s_1141,q_1142,s_1143,s_1144,q_1145,s_1146,s_1147,q_1148,s_1149,s_1150,s_1151,s_1152,s_1153,q_1154,s_1155,s_1156,q_1157,s_1158,s_1159,s_1160,s_1161,s_1162,s_1163,s_1164,s_1165,s_1166,s_1167,s_1168,q_1169,s_1170,s_1171,s_1172,s_1173,s_1174,q_1175,s_1176,q_1177,s_1178,q_1179,s_1180,q_1181,s_1182,q_1183,s_1184,s_1185,s_1186,s_1187,s_1188,q_1189,s_1190,s_1191,q_1192,s_1193,q_1194,s_1195,s_1196,s_1197,s_1198,q_1199,s_1200,s_1201,s_1202,q_1203,s_1204,q_1205,s_1206,s_1207,q_1208,s_1209,s_1210,s_1211,s_1212,s_1213,q_1214,s_1215,q_1216,s_1217,q_1218,s_1219,s_1220,q_1221,s_1222,s_1223,s_1224,s_1225,q_1226,s_1227,q_1228,s_1229,q_1230,s_1231,s_1232,q_1233,s_1234,q_1235,s_1236,s_1237,s_1238,q_1239,s_1240,s_1241,s_1242,q_1243,s_1244,s_1245,q_1246,s_1247,q_1248,s_1249,s_1250,s_1251,s_1252,s_1253,s_1254,s_1255,s_1256,s_1257,q_1258,s_1259,s_1260,],

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