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
	var q_2 = {
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
	var s_3 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_4 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_5 = {
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
	var s_6 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_7 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_8 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_9 = {
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
	var s_10 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_11 = {
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
	var s_12 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
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
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_15 = {
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
	var s_16 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_17 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_18 = {
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
	var s_19 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_20 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_21 = {
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
	var s_22 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_23 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_24 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_25 = {
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
	var s_26 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_27 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_28 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_29 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_30 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_31 = {
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
	var s_32 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_33 = {
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
	var s_34 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_35 = {
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
	var s_36 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_37 = {
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
	var s_38 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_39 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_40 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_41 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_42 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_43 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_44 = {
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
	var s_45 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_46 = {
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
	var s_47 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_48 = {
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
	var s_49 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_50 = {
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
	var s_51 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_52 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_53 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_54 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_55 = {
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
	var s_56 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_57 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_58 = {
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
	var s_59 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_60 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_61 = {
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
	var s_62 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_63 = {
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
	var s_64 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_65 = {
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
	var s_66 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_67 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_68 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_69 = {
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
	var s_70 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_71 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_72 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_73 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_74 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_75 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_76 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_77 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_78 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_79 = {
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
	var s_80 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_81 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_82 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_83 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_84 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_85 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_86 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_87 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_88 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_89 = {
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
	var s_90 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_91 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_92 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_93 = {
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
	var s_94 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_95 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_96 = {
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
	var s_97 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_98 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_99 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_100 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_101 = {
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
	var s_102 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_103 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_104 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_105 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_106 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_107 = {
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
	var s_108 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_109 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_110 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_111 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_112 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_113 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_114 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_115 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_116 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_117 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_118 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_119 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_120 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_121 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_122 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_123 = {
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
	var s_124 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_125 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_126 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_127 = {
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
	var s_128 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_129 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_130 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_131 = {
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
	var s_132 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_133 = {
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
	var s_134 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_135 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_136 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_137 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_138 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_139 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_140 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_141 = {
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
	var s_142 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_143 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_144 = {
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
	var s_145 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_146 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_147 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_148 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_149 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_150 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_151 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_152 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
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
		labels: ["Bill stared with rage into Silvia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_158 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_159 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_160 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_161 = {
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
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_166 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_167 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_168 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_169 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_170 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_171 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_172 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_173 = {
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
	var s_179 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_180 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_181 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_182 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_183 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_184 = {
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
	var s_185 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_186 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_187 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_188 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_189 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_190 = {
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
	var s_191 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_192 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_193 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_194 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_195 = {
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
	var s_196 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_197 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_198 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_199 = {
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
	var s_200 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_201 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_202 = {
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
	var s_203 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_204 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_205 = {
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
	var s_206 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_207 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
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
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_212 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_213 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_214 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_215 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_216 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_217 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_218 = {
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
	var s_219 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_220 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_221 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_222 = {
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
	var s_223 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_224 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_225 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_226 = {
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
	var s_227 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_228 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_229 = {
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
	var s_230 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_231 = {
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
	var s_232 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_233 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_234 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_235 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_236 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_237 = {
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
	var s_238 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_239 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_240 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_241 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_242 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_243 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_244 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_245 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_246 = {
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
	var s_247 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_248 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_249 = {
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
	var s_250 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_251 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_252 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_253 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_254 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_255 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_256 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_257 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_258 = {
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
	var s_259 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_260 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_261 = {
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
	var s_262 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_263 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_264 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_265 = {
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
	var s_266 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_267 = {
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
	var s_268 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_269 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_270 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_271 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_272 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_273 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_274 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_275 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_276 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_277 = {
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
	var s_278 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_279 = {
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
	var s_280 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_281 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_282 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_283 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_284 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_285 = {
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
	var s_286 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_287 = {
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
	var s_288 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_289 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_290 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_291 = {
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
	var s_292 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_293 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_294 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_295 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_296 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_297 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_298 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_299 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_300 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_301 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_302 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_303 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_304 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_305 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_306 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_307 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_308 = {
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
	var s_309 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_310 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_311 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_312 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Olivia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_313 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_314 = {
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
	var s_315 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_316 = {
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
	var s_317 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_318 = {
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
	var s_319 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_320 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_321 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_322 = {
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
	var s_323 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_324 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_325 = {
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
	var s_326 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_327 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_328 = {
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
	var s_329 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_330 = {
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
	var s_331 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_332 = {
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
	var s_333 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_334 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_335 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_336 = {
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
	var s_337 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_338 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_339 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_340 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_341 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_342 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_343 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_344 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_345 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_346 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_347 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_348 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_349 = {
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
	var s_350 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_351 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_352 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_353 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_354 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_355 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_356 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_357 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_358 = {
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
	var s_359 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_360 = {
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
	var s_361 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_362 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_363 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_364 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_365 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_366 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_367 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_368 = {
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
	var s_369 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_370 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_371 = {
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
	var s_372 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_373 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_374 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_375 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_376 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_377 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia turned to Bill and gave a very mean look.", "Silvia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_378 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_379 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_380 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_381 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_382 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_383 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_384 = {
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
	var s_385 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_386 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_387 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_388 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_389 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_390 = {
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
	var s_391 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_392 = {
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
	var s_393 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_394 = {
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
	var s_395 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_396 = {
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
	var s_397 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_398 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_399 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_400 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_401 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_402 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_403 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_404 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_405 = {
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
	var s_406 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_407 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_408 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Olivia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_409 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_410 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_411 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_412 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_413 = {
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
	var s_414 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_415 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_416 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_417 = {
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
	var s_418 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_419 = {
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
	var s_420 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_421 = {
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
	var s_422 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_423 = {
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
	var s_424 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_425 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_426 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_427 = {
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
	var s_428 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_429 = {
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
	var s_430 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_431 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_432 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_433 = {
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
	var s_434 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_435 = {
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
	var s_436 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_437 = {
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
	var s_438 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_439 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_440 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_441 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_442 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_443 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_444 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_445 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_446 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_447 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_448 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_449 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_450 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_451 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_452 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_453 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_454 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_455 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_456 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_457 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_458 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_459 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_460 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_461 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_462 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_463 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_464 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_465 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_466 = {
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
	var s_467 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_468 = {
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
	var s_469 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_470 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_471 = {
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
	var s_472 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_473 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_474 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_475 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_476 = {
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
	var s_477 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_478 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_479 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_480 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_481 = {
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
	var s_482 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_483 = {
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
	var s_484 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_485 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_486 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_487 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_488 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_489 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_490 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_491 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_492 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_493 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_494 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_495 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_496 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_497 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_498 = {
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
	var s_499 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_500 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_501 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_502 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_503 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_504 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_505 = {
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
	var s_506 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_507 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_508 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_509 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_510 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_511 = {
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
	var s_512 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_513 = {
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
	var s_514 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_515 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_516 = {
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
	var s_517 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_518 = {
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
	var s_519 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_520 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_521 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_522 = {
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
	var s_523 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_524 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_525 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_526 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_527 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_528 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_529 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_530 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_531 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_532 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_533 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_534 = {
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
	var s_535 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_536 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_537 = {
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
	var s_538 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_539 = {
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
	var s_540 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_541 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_542 = {
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
	var s_543 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_544 = {
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
	var s_545 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_546 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_547 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_548 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_549 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_550 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_551 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "YELL",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_552 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_553 = {
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
	var s_554 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_555 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_556 = {
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
	var s_557 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_558 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_559 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_560 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_561 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_562 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_563 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_564 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_565 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_566 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_567 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_568 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_569 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_570 = {
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
	var s_571 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_572 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_573 = {
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
	var s_574 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_575 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_576 = {
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
	var s_577 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_578 = {
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
	var s_579 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_580 = {
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
	var s_581 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_582 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_583 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_584 = {
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
	var s_585 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_586 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_587 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_588 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_589 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_590 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_591 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_592 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_593 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_594 = {
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
	var s_595 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_596 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_597 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_598 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_599 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_600 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_601 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_602 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_603 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_604 = {
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
	var s_605 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_606 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_607 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_608 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_609 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_610 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_611 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_612 = {
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
	var s_613 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_614 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_615 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_616 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_617 = {
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
	var s_618 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_619 = {
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
	var s_620 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_621 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_622 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_623 = {
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
	var s_624 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_625 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_626 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_627 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_628 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_629 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_630 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_631 = {
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
	var s_632 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_633 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_634 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_635 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_636 = {
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
	var s_637 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_638 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_639 = {
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
	var s_640 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_641 = {
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
	var s_642 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_643 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_644 = {
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
	var s_645 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_646 = {
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
	var s_647 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_648 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_649 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_650 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_651 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_652 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_653 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_654 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_655 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_656 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_657 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_658 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_659 = {
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
	var s_660 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_661 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_662 = {
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
	var s_663 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_664 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_665 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_666 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_667 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_668 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_669 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_670 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_671 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_672 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_673 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_674 = {
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
	var s_675 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_676 = {
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
	var s_677 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_678 = {
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
	var s_679 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_680 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_681 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_682 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_683 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_684 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_685 = {
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
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_689 = {
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
	var s_690 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_691 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_692 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_693 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Silvia.", "In retaliation, Bill pushed Olivia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_694 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_695 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_696 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_697 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_698 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_699 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_700 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_701 = {
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
	var s_702 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_703 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_704 = {
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
	var s_705 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_706 = {
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
	var s_707 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_708 = {
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
	var s_709 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_710 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_711 = {
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
	var s_712 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_713 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_714 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_715 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_716 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_717 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_718 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_719 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_720 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_721 = {
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
	var s_722 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_723 = {
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
	var s_724 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_725 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_726 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_727 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_728 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_729 = {
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
	var s_730 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_731 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Olivia's eyes.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_732 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_733 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_734 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_735 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Olivia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "LOVEJUICE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_736 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_737 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_738 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_739 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_740 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_741 = {
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
	var s_742 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_743 = {
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
	var s_744 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_745 = {
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
	var s_746 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_747 = {
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
	var s_748 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_749 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_750 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_751 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_752 = {
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
	var s_753 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_754 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_755 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_756 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_757 = {
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
	var s_758 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_759 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_760 = {
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
	var s_761 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_762 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_763 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_764 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_765 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_766 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_767 = {
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
	var s_768 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_769 = {
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
	var s_770 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_771 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_772 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_773 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_774 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_775 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_776 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_777 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_778 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_779 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_780 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_781 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["The barista ran out from behind the counter and ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_782 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_783 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_784 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_785 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_786 = {
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
	var s_787 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_788 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_789 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_790 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_791 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_792 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_793 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_794 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_795 = {
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
	var s_796 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_797 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_798 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_799 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_800 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_801 = {
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
	var s_802 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_803 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_804 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_805 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_806 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_807 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_808 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_809 = {
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
	var s_810 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_811 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_812 = {
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
	var s_813 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_814 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_815 = {
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
	var s_816 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_817 = {
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
	var s_818 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_819 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_820 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_821 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_822 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_823 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_824 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_825 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
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
	var s_828 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
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
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_832 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_833 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_834 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_835 = {
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
	var s_836 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_837 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_838 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_839 = {
		type: 'instructions',
		pages: ["Olivia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_840 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_841 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_842 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_843 = {
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
	var s_844 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_845 = {
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
	var s_846 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_847 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_848 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_849 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_850 = {
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
	var s_851 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_852 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_853 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_854 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_855 = {
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
	var s_856 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_857 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_858 = {
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
	var s_859 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_860 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_861 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_862 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_863 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_864 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_865 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_866 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_867 = {
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
	var s_868 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_869 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_870 = {
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
	var s_871 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_872 = {
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
	var s_873 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_874 = {
		type: 'instructions',
		pages: ["Olivia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_875 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "The barista ran out from behind the counter and ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_876 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_877 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_878 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_879 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_880 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_881 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_882 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_883 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_884 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_885 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_886 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_887 = {
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
	var s_888 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_889 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_890 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_891 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_892 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_893 = {
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
	var s_894 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_895 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_896 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_897 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_898 = {
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
	var s_899 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_900 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_901 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_902 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_903 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_904 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_905 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_906 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_907 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_908 = {
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
	var s_909 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_910 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_911 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_912 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_913 = {
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
	var s_914 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_915 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_916 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_917 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "Bill stared with rage into Silvia's eyes."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "YELL",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_918 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_919 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_920 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_921 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Olivia to leave.", "Immediately the bystanding police officer ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_922 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_923 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia ran out yelling 'Juice is better, anyway!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "POLICEORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_924 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_925 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_926 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_927 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_928 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_929 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_930 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_931 = {
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
	var s_932 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_933 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_934 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_935 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_936 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_937 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_938 = {
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
	var s_939 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_940 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_941 = {
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
	var s_942 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_943 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_944 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_945 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_946 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_947 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_948 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_949 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_950 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_951 = {
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
	var s_952 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_953 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_954 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_955 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_956 = {
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
	var s_957 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_958 = {
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
	var s_959 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_960 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_961 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_962 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_963 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_964 = {
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
	var s_965 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_966 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_967 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_968 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_969 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_970 = {
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
	var s_971 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_972 = {
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
	var s_973 = {
		type: 'instructions',
		pages: ["Silvia ran out yelling 'Juice is better, anyway!"],
		data: { "state": "LOVEJUICE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_974 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_975 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_976 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_977 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_978 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_979 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_980 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_981 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_982 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_983 = {
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
	var s_984 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_985 = {
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
	var s_986 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_987 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_988 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_989 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_990 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_991 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_992 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_993 = {
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
	var s_994 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_995 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_996 = {
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
	var s_997 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_998 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_999 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1000 = {
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
	var s_1001 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1002 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1003 = {
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
	var s_1004 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1005 = {
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
	var s_1006 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1007 = {
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
	var s_1008 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1009 = {
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
	var s_1010 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1011 = {
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
	var s_1012 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1013 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1014 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1015 = {
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
	var s_1016 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1017 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1018 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1019 = {
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
	var s_1020 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1021 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1022 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1023 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1024 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1025 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1026 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1027 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1028 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1029 = {
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
	var s_1030 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1031 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1032 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1033 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "Immediately the bystanding police officer ordered Olivia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1034 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1035 = {
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
	var s_1036 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1037 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1038 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1039 = {
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
	var s_1040 = {
		type: 'instructions',
		pages: ["Silvia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1041 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Silvia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1042 = {
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
	var s_1043 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1044 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill yelled, 'Hey! Relax.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1045 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1046 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1047 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1048 = {
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
	var s_1049 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1050 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1051 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1052 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1053 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1054 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1055 = {
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
	var s_1056 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
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
	var s_1059 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1060 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
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
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1064 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1065 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1066 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1067 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SUBJECTSTARES",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1068 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1069 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1070 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1071 = {
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
	var s_1072 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1073 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia ran out yelling 'Juice is better, anyway!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "LOVEJUICE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1074 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1075 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1076 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1077 = {
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
	var s_1078 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1079 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1080 = {
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
	var s_1081 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1082 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1083 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1084 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Olivia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1085 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1086 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "DESERTCRUMBLE",
						"true_tonode": "POLICEORDERS",
						"false_tonode": "BARISTAORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1087 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1088 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
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
	var q_1091 = {
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
	var s_1092 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1093 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1094 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1095 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1096 = {
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
	var s_1097 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1098 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1099 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1100 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1101 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1102 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1103 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1104 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1105 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1106 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1107 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia splashed a coffee into Bill's face.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1108 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1109 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1110 = {
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
	var s_1111 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1112 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1113 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1114 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1115 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1116 = {
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
	var s_1117 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1118 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1119 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1120 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1121 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1122 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1123 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1124 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1125 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1126 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1127 = {
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
	var s_1128 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1129 = {
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
	var s_1130 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1131 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Immediately the bystanding police officer ordered Silvia to leave.", "The barista ran out from behind the counter and ordered Silvia to leave."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "DRINKSPLASH",
						"true_tonode": "BARISTAORDERS",
						"false_tonode": "POLICEORDERS",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1132 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1133 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!", "Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"fillerQ",
						"fromnode": "BARISTAORDERS",
						"true_tonode": "HATECOFFEE",
						"false_tonode": "HATECOFFEE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1134 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1135 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1136 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1137 = {
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
	var s_1138 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1139 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1140 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1141 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1142 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1143 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1144 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1145 = {
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
	var s_1146 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1147 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1148 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1149 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1150 = {
		type: 'instructions',
		pages: ["Olivia cut Bill, the first person in line."],
		data: { "state": "CUTLINE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1151 = {
		type: 'instructions',
		pages: ["Bill stepped back in front of Olivia."],
		data: { "state": "CUTBACK",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1152 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Olivia proceeded to shove Bill.", "Olivia turned to Bill and gave a very mean look."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "CUTBACK",
						"true_tonode": "SHOVE",
						"false_tonode": "SUBJECTSTARES",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1153 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1154 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["In retaliation, Bill pushed Olivia.", "Bill yelled, 'Hey! Relax."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "YELL",
						"true_RFC":"subject.olivia-victim.bill",
						"false_RFC":"subject.olivia-victim.bill" }
	} 
	var s_1155 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1156 = {
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
	var s_1157 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1158 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1159 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1160 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1161 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1162 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1163 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1164 = {
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
	var s_1165 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1166 = {
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
	var s_1167 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1168 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1169 = {
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
	var s_1170 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Olivia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1171 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1172 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1173 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1174 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1175 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1176 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia turned to Bill and gave a very mean look.", "Silvia proceeded to shove Bill."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "EXCUSEME",
						"true_tonode": "SUBJECTSTARES",
						"false_tonode": "SHOVE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1177 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1178 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1179 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1180 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1181 = {
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
	var s_1182 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1183 = {
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
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1187 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1188 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1189 = {
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
	var s_1190 = {
		type: 'instructions',
		pages: ["Olivia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1191 = {
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
	var s_1192 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1193 = {
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
	var s_1194 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1195 = {
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
	var s_1196 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1197 = {
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
	var s_1198 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1199 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1200 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1201 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1202 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1203 = {
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
	var s_1204 = {
		type: 'instructions',
		pages: ["Silvia proceeded to shove Bill."],
		data: { "state": "SHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1205 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Bill stared with rage into Silvia's eyes.", "In retaliation, Bill pushed Silvia."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "True",
						"qtype":"transQ",
						"fromnode": "SHOVE",
						"true_tonode": "XSHOVE",
						"false_tonode": "XSTARE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1206 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Silvia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1207 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia splashed a coffee into Bill's face.", "Silvia crumbled a muffin above Bill's head."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "XSHOVE",
						"true_tonode": "DRINKSPLASH",
						"false_tonode": "DESERTCRUMBLE",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1208 = {
		type: 'instructions',
		pages: ["Silvia splashed a coffee into Bill's face."],
		data: { "state": "DRINKSPLASH",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1209 = {
		type: 'instructions',
		pages: ["Immediately the bystanding police officer ordered Silvia to leave."],
		data: { "state": "POLICEORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1210 = {
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
	var s_1211 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1212 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1213 = {
		type: 'instructions',
		pages: ["Olivia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1214 = {
		type: 'instructions',
		pages: ["Clumsily, Olivia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1215 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1216 = {
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
	var s_1217 = {
		type: 'instructions',
		pages: ["Olivia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1218 = {
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
	var s_1219 = {
		type: 'instructions',
		pages: ["In retaliation, Bill pushed Olivia."],
		data: { "state": "XSHOVE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1220 = {
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
	var s_1221 = {
		type: 'instructions',
		pages: ["Olivia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1222 = {
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
	var s_1223 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Olivia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var q_1224 = {
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
	var s_1225 = {
		type: 'instructions',
		pages: ["Olivia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1226 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.olivia-victim.bill" }
	} 
	var s_1227 = {
		type: 'instructions',
		pages: ["Silvia walked into the coffee shop."],
		data: { "state": "BEGIN",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1228 = {
		type: 'instructions',
		pages: ["Clumsily, Silvia stepped on Bill's foot."],
		data: { "state": "STEPFOOT",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1229 = {
		type: 'instructions',
		pages: ["Bill was really annoyed and said, 'Excuse me?!"],
		data: { "state": "EXCUSEME",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1230 = {
		type: 'instructions',
		pages: ["Silvia turned to Bill and gave a very mean look."],
		data: { "state": "SUBJECTSTARES",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1231 = {
		type: 'instructions',
		pages: ["Bill yelled, 'Hey! Relax."],
		data: { "state": "YELL",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1232 = {
		type: "html-keyboard-response",
		stimulus: "<p> 'What happens next?' <p>",
		labels: ["Silvia crumbled a muffin above Bill's head.", "Silvia splashed a coffee into Bill's face."],
		choices: ["leftarrow", "rightarrow"],
		data: { "true_on_right": "False",
						"qtype":"transQ",
						"fromnode": "YELL",
						"true_tonode": "DESERTCRUMBLE",
						"false_tonode": "DRINKSPLASH",
						"true_RFC":"subject.silvia-victim.bill",
						"false_RFC":"subject.silvia-victim.bill" }
	} 
	var s_1233 = {
		type: 'instructions',
		pages: ["Silvia crumbled a muffin above Bill's head."],
		data: { "state": "DESERTCRUMBLE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var q_1234 = {
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
	var s_1235 = {
		type: 'instructions',
		pages: ["The barista ran out from behind the counter and ordered Silvia to leave."],
		data: { "state": "BARISTAORDERS",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1236 = {
		type: 'instructions',
		pages: ["Silvia stormed out of the coffee shop yelling 'I hate coffee!"],
		data: { "state": "HATECOFFEE",
						"RFC": "subject.silvia-victim.bill" }
	} 
	var s_1237 = {
		type: 'instructions',
		pages: ["The barista handed Bill a bunch of napkins and gave Bill a free drink out of sympathy."],
		data: { "state": "END",
						"RFC": "subject.silvia-victim.bill" }
	} 
// CODE BODY END

jsPsych.init({
  display_element: 'jspsych-target',
  timeline: [intro1,intro2,intro3,intro4,intro5,intro6,intro7,s_1,q_2,s_3,s_4,q_5,s_6,s_7,s_8,q_9,s_10,q_11,s_12,s_13,s_14,q_15,s_16,s_17,q_18,s_19,s_20,q_21,s_22,q_23,s_24,q_25,s_26,s_27,s_28,s_29,s_30,q_31,s_32,q_33,s_34,q_35,s_36,q_37,s_38,s_39,s_40,s_41,s_42,s_43,q_44,s_45,q_46,s_47,q_48,s_49,q_50,s_51,s_52,s_53,s_54,q_55,s_56,s_57,q_58,s_59,s_60,q_61,s_62,q_63,s_64,q_65,s_66,s_67,s_68,q_69,s_70,s_71,q_72,s_73,q_74,s_75,q_76,s_77,s_78,q_79,s_80,s_81,s_82,s_83,s_84,s_85,s_86,s_87,s_88,q_89,s_90,s_91,s_92,q_93,s_94,s_95,q_96,s_97,s_98,s_99,s_100,q_101,s_102,s_103,s_104,s_105,s_106,q_107,s_108,s_109,q_110,s_111,s_112,s_113,s_114,s_115,s_116,s_117,s_118,q_119,s_120,s_121,s_122,q_123,s_124,s_125,s_126,q_127,s_128,s_129,s_130,q_131,s_132,q_133,s_134,q_135,s_136,q_137,s_138,s_139,s_140,q_141,s_142,s_143,q_144,s_145,s_146,s_147,q_148,s_149,s_150,s_151,s_152,s_153,s_154,q_155,s_156,q_157,s_158,s_159,s_160,q_161,s_162,s_163,s_164,s_165,s_166,s_167,s_168,q_169,s_170,q_171,s_172,q_173,s_174,s_175,s_176,s_177,s_178,s_179,q_180,s_181,s_182,s_183,q_184,s_185,s_186,s_187,s_188,s_189,q_190,s_191,s_192,s_193,s_194,q_195,s_196,s_197,s_198,q_199,s_200,s_201,q_202,s_203,s_204,q_205,s_206,q_207,s_208,s_209,s_210,s_211,s_212,s_213,s_214,s_215,s_216,s_217,q_218,s_219,s_220,s_221,q_222,s_223,s_224,s_225,q_226,s_227,s_228,q_229,s_230,q_231,s_232,s_233,s_234,s_235,s_236,q_237,s_238,s_239,s_240,s_241,q_242,s_243,s_244,s_245,q_246,s_247,s_248,q_249,s_250,s_251,s_252,s_253,q_254,s_255,s_256,s_257,q_258,s_259,s_260,q_261,s_262,s_263,s_264,q_265,s_266,q_267,s_268,s_269,s_270,s_271,s_272,s_273,s_274,q_275,s_276,q_277,s_278,q_279,s_280,s_281,s_282,s_283,s_284,q_285,s_286,q_287,s_288,s_289,s_290,q_291,s_292,s_293,s_294,s_295,s_296,q_297,s_298,s_299,q_300,s_301,q_302,s_303,s_304,s_305,s_306,s_307,q_308,s_309,q_310,s_311,q_312,s_313,q_314,s_315,q_316,s_317,q_318,s_319,s_320,s_321,q_322,s_323,s_324,q_325,s_326,s_327,q_328,s_329,q_330,s_331,q_332,s_333,s_334,s_335,q_336,s_337,s_338,s_339,s_340,q_341,s_342,q_343,s_344,q_345,s_346,s_347,s_348,q_349,s_350,s_351,q_352,s_353,q_354,s_355,q_356,s_357,q_358,s_359,q_360,s_361,s_362,s_363,s_364,s_365,s_366,s_367,q_368,s_369,s_370,q_371,s_372,s_373,s_374,s_375,s_376,q_377,s_378,q_379,s_380,q_381,s_382,s_383,q_384,s_385,s_386,s_387,s_388,s_389,q_390,s_391,q_392,s_393,q_394,s_395,q_396,s_397,q_398,s_399,s_400,s_401,s_402,s_403,s_404,q_405,s_406,s_407,q_408,s_409,s_410,s_411,s_412,q_413,s_414,s_415,s_416,q_417,s_418,q_419,s_420,q_421,s_422,q_423,s_424,s_425,s_426,q_427,s_428,q_429,s_430,s_431,s_432,q_433,s_434,q_435,s_436,q_437,s_438,s_439,s_440,s_441,s_442,s_443,s_444,q_445,s_446,s_447,s_448,s_449,s_450,s_451,s_452,q_453,s_454,q_455,s_456,q_457,s_458,q_459,s_460,s_461,s_462,s_463,s_464,s_465,q_466,s_467,q_468,s_469,s_470,q_471,s_472,s_473,s_474,s_475,q_476,s_477,s_478,s_479,s_480,q_481,s_482,q_483,s_484,s_485,s_486,s_487,s_488,s_489,s_490,s_491,s_492,s_493,q_494,s_495,s_496,s_497,q_498,s_499,s_500,s_501,s_502,s_503,s_504,q_505,s_506,s_507,s_508,s_509,s_510,q_511,s_512,q_513,s_514,s_515,q_516,s_517,q_518,s_519,s_520,s_521,q_522,s_523,s_524,s_525,s_526,q_527,s_528,q_529,s_530,s_531,s_532,s_533,q_534,s_535,s_536,q_537,s_538,q_539,s_540,s_541,q_542,s_543,q_544,s_545,s_546,s_547,s_548,s_549,s_550,q_551,s_552,q_553,s_554,s_555,q_556,s_557,s_558,s_559,s_560,s_561,s_562,q_563,s_564,s_565,s_566,s_567,s_568,s_569,q_570,s_571,s_572,q_573,s_574,s_575,q_576,s_577,q_578,s_579,q_580,s_581,s_582,s_583,q_584,s_585,s_586,q_587,s_588,s_589,q_590,s_591,q_592,s_593,q_594,s_595,s_596,s_597,s_598,s_599,s_600,q_601,s_602,s_603,q_604,s_605,q_606,s_607,s_608,s_609,s_610,s_611,q_612,s_613,q_614,s_615,s_616,q_617,s_618,q_619,s_620,s_621,s_622,q_623,s_624,s_625,q_626,s_627,s_628,q_629,s_630,q_631,s_632,s_633,s_634,s_635,q_636,s_637,s_638,q_639,s_640,q_641,s_642,s_643,q_644,s_645,q_646,s_647,s_648,s_649,s_650,s_651,s_652,s_653,s_654,s_655,s_656,s_657,s_658,q_659,s_660,s_661,q_662,s_663,q_664,s_665,q_666,s_667,q_668,s_669,q_670,s_671,s_672,s_673,q_674,s_675,q_676,s_677,q_678,s_679,q_680,s_681,q_682,s_683,s_684,q_685,s_686,s_687,s_688,q_689,s_690,s_691,s_692,q_693,s_694,s_695,q_696,s_697,s_698,s_699,s_700,q_701,s_702,s_703,q_704,s_705,q_706,s_707,q_708,s_709,s_710,q_711,s_712,s_713,s_714,s_715,s_716,s_717,s_718,q_719,s_720,q_721,s_722,q_723,s_724,s_725,s_726,s_727,s_728,q_729,s_730,q_731,s_732,s_733,s_734,q_735,s_736,s_737,s_738,s_739,s_740,q_741,s_742,q_743,s_744,q_745,s_746,q_747,s_748,s_749,s_750,s_751,q_752,s_753,s_754,s_755,s_756,q_757,s_758,s_759,q_760,s_761,s_762,s_763,s_764,s_765,s_766,q_767,s_768,q_769,s_770,q_771,s_772,s_773,s_774,s_775,s_776,s_777,s_778,s_779,s_780,q_781,s_782,s_783,s_784,s_785,q_786,s_787,s_788,q_789,s_790,s_791,s_792,q_793,s_794,q_795,s_796,s_797,s_798,s_799,s_800,q_801,s_802,s_803,s_804,s_805,s_806,s_807,s_808,q_809,s_810,s_811,q_812,s_813,s_814,q_815,s_816,q_817,s_818,s_819,s_820,s_821,s_822,s_823,s_824,s_825,s_826,q_827,s_828,s_829,s_830,s_831,s_832,s_833,s_834,q_835,s_836,s_837,s_838,s_839,s_840,s_841,s_842,q_843,s_844,q_845,s_846,q_847,s_848,s_849,q_850,s_851,s_852,s_853,s_854,q_855,s_856,s_857,q_858,s_859,s_860,s_861,s_862,q_863,s_864,s_865,s_866,q_867,s_868,s_869,q_870,s_871,q_872,s_873,s_874,q_875,s_876,s_877,s_878,s_879,s_880,s_881,s_882,s_883,q_884,s_885,s_886,q_887,s_888,s_889,s_890,s_891,s_892,q_893,s_894,s_895,s_896,s_897,q_898,s_899,s_900,s_901,s_902,s_903,s_904,s_905,q_906,s_907,q_908,s_909,s_910,s_911,s_912,q_913,s_914,s_915,s_916,q_917,s_918,q_919,s_920,q_921,s_922,q_923,s_924,s_925,s_926,s_927,s_928,q_929,s_930,q_931,s_932,s_933,s_934,s_935,s_936,s_937,q_938,s_939,s_940,q_941,s_942,s_943,s_944,s_945,s_946,s_947,s_948,s_949,s_950,q_951,s_952,s_953,q_954,s_955,q_956,s_957,q_958,s_959,s_960,s_961,s_962,s_963,q_964,s_965,q_966,s_967,q_968,s_969,q_970,s_971,q_972,s_973,s_974,s_975,s_976,s_977,q_978,s_979,s_980,q_981,s_982,q_983,s_984,q_985,s_986,s_987,s_988,s_989,s_990,s_991,s_992,q_993,s_994,s_995,q_996,s_997,s_998,s_999,q_1000,s_1001,s_1002,q_1003,s_1004,q_1005,s_1006,q_1007,s_1008,q_1009,s_1010,q_1011,s_1012,s_1013,s_1014,q_1015,s_1016,s_1017,s_1018,q_1019,s_1020,s_1021,s_1022,q_1023,s_1024,s_1025,s_1026,s_1027,s_1028,q_1029,s_1030,s_1031,s_1032,q_1033,s_1034,q_1035,s_1036,s_1037,s_1038,q_1039,s_1040,s_1041,q_1042,s_1043,q_1044,s_1045,q_1046,s_1047,q_1048,s_1049,s_1050,s_1051,s_1052,s_1053,s_1054,q_1055,s_1056,s_1057,q_1058,s_1059,s_1060,s_1061,s_1062,s_1063,s_1064,s_1065,s_1066,q_1067,s_1068,q_1069,s_1070,q_1071,s_1072,q_1073,s_1074,s_1075,s_1076,q_1077,s_1078,s_1079,q_1080,s_1081,q_1082,s_1083,q_1084,s_1085,q_1086,s_1087,s_1088,s_1089,s_1090,q_1091,s_1092,s_1093,s_1094,s_1095,q_1096,s_1097,s_1098,s_1099,s_1100,s_1101,s_1102,s_1103,q_1104,s_1105,s_1106,q_1107,s_1108,s_1109,q_1110,s_1111,s_1112,s_1113,s_1114,s_1115,q_1116,s_1117,s_1118,s_1119,s_1120,s_1121,s_1122,s_1123,s_1124,s_1125,s_1126,q_1127,s_1128,q_1129,s_1130,q_1131,s_1132,q_1133,s_1134,s_1135,s_1136,q_1137,s_1138,s_1139,q_1140,s_1141,s_1142,q_1143,s_1144,q_1145,s_1146,s_1147,s_1148,s_1149,s_1150,s_1151,q_1152,s_1153,q_1154,s_1155,q_1156,s_1157,s_1158,s_1159,s_1160,s_1161,s_1162,s_1163,q_1164,s_1165,q_1166,s_1167,s_1168,q_1169,s_1170,s_1171,s_1172,s_1173,s_1174,s_1175,q_1176,s_1177,s_1178,q_1179,s_1180,q_1181,s_1182,q_1183,s_1184,s_1185,s_1186,s_1187,s_1188,q_1189,s_1190,q_1191,s_1192,q_1193,s_1194,q_1195,s_1196,q_1197,s_1198,s_1199,s_1200,s_1201,s_1202,q_1203,s_1204,q_1205,s_1206,q_1207,s_1208,s_1209,q_1210,s_1211,s_1212,s_1213,s_1214,s_1215,q_1216,s_1217,q_1218,s_1219,q_1220,s_1221,q_1222,s_1223,q_1224,s_1225,s_1226,s_1227,s_1228,s_1229,s_1230,s_1231,q_1232,s_1233,q_1234,s_1235,s_1236,s_1237,],

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